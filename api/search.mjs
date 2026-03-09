import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Загружаем эмбеддинги при старте
let embeddings = [];
try {
  const dataPath = path.join(__dirname, '../data/embeddings.json');
  embeddings = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`✅ Загружено ${embeddings.length} векторов`);
} catch (err) {
  console.error('❌ Не удалось загрузить embeddings.json');
}

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

async function getQueryEmbedding(query) {
  const response = await fetch('https://api.mistral.ai/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${MISTRAL_API_KEY}`
    },
    body: JSON.stringify({
      model: 'mistral-embed',
      input: [query]
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Mistral API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.data[0].embedding;
}

function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0, normA = 0, normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Функция для генерации пути к статье из заголовка
function getArticlePath(title) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-zа-я0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  
  return `/knowledge/articles/${slug}`;
}

// Функция для определения категории по заголовку
function getCategoryFromTitle(title) {
  const title_lower = title.toLowerCase();
  if (title_lower.includes('gnss') || title_lower.includes('тахеометр') || title_lower.includes('нивелир')) {
    return 'Основы оборудования';
  } else if (title_lower.includes('координат') || title_lower.includes('трансформац')) {
    return 'Теория и основы';
  } else if (title_lower.includes('съемк') || title_lower.includes('нивелирова')) {
    return 'Полевые методы';
  } else if (title_lower.includes('формул') || title_lower.includes('расчет')) {
    return 'Расчёты';
  } else if (title_lower.includes('стандарт') || title_lower.includes('гост')) {
    return 'Стандарты';
  }
  return 'База знаний';
}

// Функция для глубокой очистки текста
function cleanText(text) {
  if (!text) return '';
  
  let clean = text;
  
  // 1. Удаляем все HTML-теги
  clean = clean.replace(/<[^>]*>/g, ' ');
  
  // 2. Удаляем JSX-конструкции ({{...}} и {...})
  clean = clean.replace(/\{\{[^}]*\}\}/g, ' ');
  clean = clean.replace(/\{[^}]*\}/g, ' ');
  
  // 3. Удаляем CSS-свойства
  clean = clean.replace(/\b[a-zA-Z-]+:\s*[^;}]+\s*[;}]/g, ' ');
  
  // 4. Удаляем React-импорты и экспорты
  clean = clean.replace(/import\s+.*?from\s+['"].*?['"];?/g, ' ');
  clean = clean.replace(/export\s+(default\s+)?(function|const|let|var)\s+\w+/g, ' ');
  
  // 5. Удаляем технические слова
  const techWords = [
    'const', 'let', 'var', 'function', 'return', 'import', 'export', 'default',
    'style', 'className', 'div', 'span', 'h1', 'h2', 'h3', 'p', 'ul', 'li',
    'thead', 'tbody', 'tr', 'td', 'th', 'table',
    'backgroundColor', 'borderRadius', 'fontSize', 'fontWeight',
    'display', 'flex', 'grid', 'justifyContent', 'alignItems', 'gap',
    'position', 'absolute', 'relative', 'margin', 'padding', 'border'
  ];
  
  techWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    clean = clean.replace(regex, ' ');
  });
  
  // 6. Удаляем остатки JS-синтаксиса
  clean = clean.replace(/[{}[\]()=>]/g, ' ');
  clean = clean.replace(/['"`]/g, ' ');
  
  // 7. Удаляем множественные пробелы
  clean = clean.replace(/\s+/g, ' ').trim();
  
  // 8. Удаляем одиночные буквы и цифры
  clean = clean.replace(/\b[a-zA-Z0-9]{1,2}\b/g, ' ');
  
  // 9. Удаляем слова, начинающиеся с < или содержащие = и :
  clean = clean.split(' ')
    .filter(word => !word.startsWith('<') && !word.includes('=') && !word.includes(':'))
    .join(' ');
  
  // 10. Финальная очистка
  clean = clean.replace(/\s+/g, ' ').trim();
  
  return clean;
}

// Функция для извлечения короткого описания
function extractDescription(text, maxLength = 120) {
  const clean = cleanText(text);
  
  // Удаляем явный мусор в начале
  let clean2 = clean.replace(/^[^а-яА-Яa-zA-Z]+/, ''); // удаляем символы в начале
  
  // Если после очистки текст слишком короткий или пустой
  if (clean2.length < 20) {
    // Пробуем найти первое осмысленное предложение на русском
    const sentences = text.split(/[.!?]+/);
    for (const sentence of sentences) {
      // Ищем предложение, которое начинается с русской буквы
      const match = sentence.match(/[А-Яа-я][^<>]+/);
      if (match) {
        let cleaned = match[0]
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        if (cleaned.length > 20) {
          return cleaned.substring(0, maxLength) + (cleaned.length > maxLength ? '...' : '');
        }
      }
    }
    return 'Практическое руководство по геодезическим работам';
  }
  
  // Убираем обрывки в начале
  clean2 = clean2.replace(/^(ты|это|которые|const|let|var|function|return)\s+/i, '');
  clean2 = clean2.replace(/^[^а-яА-Яa-zA-Z]+/, '');
  
  if (clean2.length <= maxLength) return clean2;
  return clean2.substring(0, maxLength) + '...';
}

// Функция для извлечения совпадения
function extractMatch(text, maxLength = 60) {
  const clean = cleanText(text);
  
  // Убираем мусор в начале
  let clean2 = clean.replace(/^[^а-яА-Яa-zA-Z]+/, '');
  clean2 = clean2.replace(/^(ты|это|const|let|var)\s+/i, '');
  
  // Берём первую часть текста
  const match = clean2.substring(0, maxLength);
  
  // Ищем конец слова
  const lastSpace = match.lastIndexOf(' ');
  if (lastSpace > maxLength * 0.7) {
    return match.substring(0, lastSpace) + '...';
  }
  
  return match + (clean2.length > maxLength ? '...' : '');
}

// Функция для извлечения совпадения
function extractMatch(text, maxLength = 60) {
  const clean = cleanText(text);
  
  // Берём первую часть текста
  const match = clean.substring(0, maxLength * 2);
  
  // Находим конец предложения
  const sentenceMatch = match.match(/^.*?[.!?]/);
  if (sentenceMatch) {
    let sentence = sentenceMatch[0];
    if (sentence.length > maxLength) {
      sentence = sentence.substring(0, maxLength) + '...';
    }
    return sentence;
  }
  
  return clean.substring(0, maxLength) + (clean.length > maxLength ? '...' : '');
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;
  
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  if (!MISTRAL_API_KEY) {
    return res.status(500).json({ error: 'Mistral API key not configured' });
  }

  try {
    const queryEmbedding = await getQueryEmbedding(query);
    
    const results = embeddings
      .map(item => ({
        ...item,
        similarity: cosineSimilarity(queryEmbedding, item.embedding)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);
    
    const seenTitles = new Set();
    const uniqueResults = [];
    
    for (const item of results) {
      if (!seenTitles.has(item.title)) {
        seenTitles.add(item.title);
        uniqueResults.push(item);
      }
      if (uniqueResults.length >= 3) break;
    }
    
    // Формируем структурированные данные для карточек
    const formattedResults = uniqueResults.map(item => ({
      title: item.title,
      category: getCategoryFromTitle(item.title),
      description: extractDescription(item.text),
      readTime: Math.floor(item.text.length / 1000) + 5,
     link: getArticlePath(item.title),
      match: extractMatch(item.text, 60)
    }));
    
    res.status(200).json({ 
      results: formattedResults
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to get response' });
  }
}