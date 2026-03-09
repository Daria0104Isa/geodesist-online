import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function getEmbedding(text, retryCount = 0) {
  try {
    const response = await fetch('https://lamhieu-lightweight-embeddings.hf.space/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'bge-m3',
        input: [text]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      
      // Если ошибка 429 (rate limit), ждём и повторяем
      if (response.status === 429 && retryCount < 3) {
        console.log(`  ⏳ Лимит исчерпан, ждём 60 секунд... (попытка ${retryCount + 1}/3)`);
        await new Promise(r => setTimeout(r, 60000)); // ждём 60 секунд
        return getEmbedding(text, retryCount + 1);
      }
      
      throw new Error(`Embedding API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
  } catch (error) {
    if (retryCount < 3) {
      console.log(`  ⏳ Ошибка, пробуем снова через 5 сек... (попытка ${retryCount + 1}/3)`);
      await new Promise(r => setTimeout(r, 5000));
      return getEmbedding(text, retryCount + 1);
    }
    throw error;
  }
}

function findContent(fileContent) {
  // Паттерн 1: const content = ( <> ... </> );
  const pattern1 = /const\s+content\s*=\s*\(\s*\)\s*=>\s*\(\s*<>\s*([\s\S]*?)<\/>\s*\);/;
  const match1 = fileContent.match(pattern1);
  if (match1) return match1[1];
  
  // Паттерн 2: const content = ( <> ... </> ) (без стрелочной функции)
  const pattern2 = /const\s+content\s*=\s*\(\s*<>\s*([\s\S]*?)<\/>\s*\);/;
  const match2 = fileContent.match(pattern2);
  if (match2) return match2[1];
  
  // Паттерн 3: const content = ( ... ) (без JSX обёртки)
  const pattern3 = /const\s+content\s*=\s*\(\s*([\s\S]*?)\s*\);/;
  const match3 = fileContent.match(pattern3);
  if (match3) return match3[1];
  
  return null;
}

function extractTextFromJSX(jsx) {
  let text = jsx
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{\{[^}]*\}\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text;
}

async function main() {
  console.log('🔍 Начинаем индексацию статей...');
  
  const metaPath = path.join(__dirname, '../data/articles-meta.json');
  const metaData = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  
  console.log(`📚 Найдено ${metaData.length} статей в метаданных`);
  
  const uniqueByFile = {};
  metaData.forEach(item => {
    uniqueByFile[item.fileName] = item;
  });
  
  const uniqueMeta = Object.values(uniqueByFile);
  console.log(`📚 Уникальных статей: ${uniqueMeta.length}`);
  
  // Загружаем уже существующие эмбеддинги, если есть
  let embeddings = [];
  const embeddingsPath = path.join(__dirname, '../data/embeddings.json');
  if (fs.existsSync(embeddingsPath)) {
    embeddings = JSON.parse(fs.readFileSync(embeddingsPath, 'utf-8'));
    console.log(`📦 Загружено ${embeddings.length} существующих векторов`);
  }
  
  // Множество уже обработанных ID
  const processedIds = new Set(embeddings.map(e => e.id));
  
  for (let i = 0; i < uniqueMeta.length; i++) {
    const article = uniqueMeta[i];
    
    // Пропускаем уже обработанные
    if (processedIds.has(article.id)) {
      console.log(`\n⏭️ [${i+1}/${uniqueMeta.length}] ${article.title} — уже обработано`);
      continue;
    }
    
    console.log(`\n📄 [${i+1}/${uniqueMeta.length}] ${article.title}`);
    
    const filePath = path.join(__dirname, '../src/pages/knowledge/articles', article.fileName);
    
    if (!fs.existsSync(filePath)) {
      console.log(`  ❌ Файл не найден: ${filePath}`);
      continue;
    }
    
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    const jsxContent = findContent(fileContent);
    
    if (!jsxContent) {
      console.log(`  ❌ Не найден блок content`);
      continue;
    }
    
    const cleanText = extractTextFromJSX(jsxContent);
    console.log(`  📏 Длина текста: ${cleanText.length} символов`);
    
    if (cleanText.length < 100) {
      console.log(`  ❌ Текст слишком короткий`);
      continue;
    }
    
    try {
      console.log(`  ⚡ Получаем эмбеддинг...`);
      const embedding = await getEmbedding(cleanText.substring(0, 3000));
      
      embeddings.push({
        id: article.id,
        embedding
      });
      
      console.log(`  ✅ Вектор получен (${embedding.length} измерений)`);
      
      // Сохраняем после каждого успешного запроса
      fs.writeFileSync(embeddingsPath, JSON.stringify(embeddings, null, 2));
      
      // Небольшая задержка между запросами
      await new Promise(r => setTimeout(r, 1000));
      
    } catch (err) {
      console.error(`  ❌ Ошибка: ${err.message}`);
      // Сохраняем то, что уже получили
      fs.writeFileSync(embeddingsPath, JSON.stringify(embeddings, null, 2));
    }
  }
  
  console.log(`\n✅ Готово! Всего векторов: ${embeddings.length}`);
}

main().catch(console.error);