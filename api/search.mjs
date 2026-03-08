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

// Функция для определения категории по заголовку (улучшить под ваши данные)
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

// Функция для извлечения короткого описания из текста
function extractDescription(text, maxLength = 120) {
  // Берем первые maxLength символов, убираем лишние пробелы
  const clean = text.replace(/\s+/g, ' ').trim();
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
      readTime: Math.floor(item.text.length / 1000) + 5, // грубая оценка времени чтения
      link: getArticlePath(item.title),
      match: item.text.substring(0, 60) + '...' // первые символы как совпадение
    }));
    
    res.status(200).json({ 
      results: formattedResults
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to get response' });
  }
}