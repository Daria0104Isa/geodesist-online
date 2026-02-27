import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Принудительно указываем путь к .env.local
import { config } from 'dotenv';
config({ path: path.resolve(process.cwd(), '.env.local') });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Конфигурация
// ВРЕМЕННО: вставляем ключ напрямую (потом уберём)
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY

// === ВРЕМЕННАЯ ОТЛАДКА ===
console.log('🔍 ЗАГРУЖЕННЫЙ КЛЮЧ:');
console.log('Длина ключа:', MISTRAL_API_KEY ? MISTRAL_API_KEY.length : 'ключ не найден');
console.log('Первые 5 символов:', MISTRAL_API_KEY ? MISTRAL_API_KEY.substring(0, 5) : 'нет');
console.log('Последние 5 символов:', MISTRAL_API_KEY ? MISTRAL_API_KEY.slice(-5) : 'нет');

const CHUNK_SIZE = 500;
const CHUNK_OVERLAP = 50;


// Функция для получения эмбеддинга через прямой fetch
async function getEmbedding(text) {
  try {
    const response = await fetch('https://api.mistral.ai/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-embed',
        input: [text]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mistral API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
  } catch (error) {
    console.error('Mistral API error:', error.message);
    throw error;
  }
}

function splitIntoChunks(text, title) {
  const chunks = [];
  for (let i = 0; i < text.length; i += CHUNK_SIZE - CHUNK_OVERLAP) {
    const chunk = text.substring(i, i + CHUNK_SIZE);
    if (chunk.length < 50) continue;
    chunks.push({
      title,
      text: chunk,
      start: i,
      end: i + chunk.length
    });
  }
  return chunks;
}

async function main() {
  console.log('🔍 Начинаем индексацию статей...');

  const articlesDir = path.join(__dirname, '../src/pages/knowledge/articles');
  const files = fs.readdirSync(articlesDir)
    .filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

  console.log(`📚 Найдено ${files.length} статей`);

  const allChunks = [];

  for (const file of files) {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : file.replace('.jsx', '');

    const textLines = content.split('\n')
      .filter(line => !line.includes('import ') && !line.includes('export '))
      .join(' ')
      .replace(/\s+/g, ' ')
      .substring(0, 5000);

    const chunks = splitIntoChunks(textLines, title);
    console.log(`  ${file}: ${chunks.length} фрагментов`);
    allChunks.push(...chunks);
  }

  console.log(`\n🧩 Всего фрагментов: ${allChunks.length}`);
  console.log('⚡ Получаем эмбеддинги через Mistral...');

  const results = [];
  for (let i = 0; i < allChunks.length; i++) {
    const chunk = allChunks[i];
    try {
      const embedding = await getEmbedding(chunk.text);
      results.push({
        id: i,
        title: chunk.title,
        text: chunk.text,
        embedding
      });

      if (i % 5 === 0) {
        console.log(`  Прогресс: ${i}/${allChunks.length}`);
      }

      // Небольшая задержка, чтобы не превысить лимиты
      await new Promise(r => setTimeout(r, 200));
    } catch (err) {
      console.error(`Ошибка для фрагмента ${i}:`, err.message);
    }
  }

  const outputPath = path.join(__dirname, '../data/embeddings.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\n✅ Готово! Сохранено ${results.length} векторов в data/embeddings.json`);
}

main().catch(console.error);