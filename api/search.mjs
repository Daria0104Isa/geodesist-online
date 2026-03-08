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

// Функция для глубокой очистки текста от HTML, JSX и технического мусора
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
  
  // 4. Удаляем технические слова из JSX/React
  const techWords = [
    'style', 'className', 'div', 'span', 'h1', 'h2', 'h3', 'p', 'ul', 'li',
    'thead', 'tbody', 'tr', 'td', 'th', 'table', 'border', 'padding', 'margin',
    'backgroundColor', 'borderRadius', 'fontSize', 'fontWeight', 'color',
    'display', 'flex', 'grid', 'justifyContent', 'alignItems', 'gap',
    'position', 'top', 'left', 'right', 'bottom', 'absolute', 'relative',
    'borderBottom', 'borderTop', 'borderLeft', 'borderRight', 'borderColor',
    'cursor', 'pointer', 'transition', 'boxShadow', 'hover', 'focus'
  ];
  
  techWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    clean = clean.replace(regex, ' ');
  });
  
  // 5. Удаляем остатки JS-синтаксиса
  clean = clean.replace(/[{}[\]()=>]/g, ' ');
  
  // 6. Очищаем от лишних символов
  clean = clean.replace(/\s+/g, ' ').trim();
  clean = clean.replace(/[^\w\sА-Яа-яЁё.,!?-]/g, '');
  clean = clean.replace(/\.{2,}/g, '.');
  
  return clean;
}

// Функция для извлечения короткого описания из текста
function extractDescription(text, maxLength = 120) {
  const clean = cleanText(text);
  
  // Если после очистки текст слишком короткий, берём предложение из исходного
  if (clean.length < 30) {
    const sentences = text.split(/[.!?]+/);
    const firstSentence = sentences[0]?.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() || '';
    return firstSentence.substring(0, maxLength) + (firstSentence.length > maxLength ? '...' : '');
  }
  
  if (clean.length <= maxLength) return clean;
  return clean.substring(0, maxLength) + '...';
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
      match: extractDescription(item.text, 60)
    }));
    
    res.status(200).json({ 
      results: formattedResults
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to get response' });
  }
}