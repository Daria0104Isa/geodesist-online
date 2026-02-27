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
  // Конвертируем заголовок в URL-дружественный формат
  const slug = title
    .toLowerCase()
    .replace(/[^a-zа-я0-9\s-]/g, '') // удаляем спецсимволы
    .replace(/\s+/g, '-')             // пробелы в дефисы
    .replace(/-+/g, '-');              // убираем лишние дефисы
  
  return `/knowledge/articles/${slug}`;
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
      .slice(0, 5); // берём 5 самых релевантных фрагментов
    
    // Группируем по заголовкам (чтобы одна статья не дублировалась)
    const seenTitles = new Set();
    const uniqueResults = [];
    
    for (const item of results) {
      if (!seenTitles.has(item.title)) {
        seenTitles.add(item.title);
        uniqueResults.push(item);
      }
      if (uniqueResults.length >= 3) break; // оставляем не больше 3 статей
    }
    
    // Формируем ответ в виде списка ссылок
    let answer = '';
    if (uniqueResults.length > 0) {
      answer = '🔍 **Похожие темы найдены в этих статьях:**\n\n';
      uniqueResults.forEach(item => {
        const articlePath = getArticlePath(item.title);
        answer += `- [${item.title}](${articlePath})\n`;
      });
    } else {
      answer = '😕 По вашему запросу ничего не найдено. Попробуйте переформулировать вопрос.';
    }
    
    res.status(200).json({ 
      answer,
      results: uniqueResults.map(r => ({ 
        title: r.title, 
        path: getArticlePath(r.title) 
      }))
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to get response' });
  }
}