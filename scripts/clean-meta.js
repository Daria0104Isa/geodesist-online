import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function main() {
  const metaPath = path.join(__dirname, '../data/articles-meta.json');
  const metaData = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  
  console.log(`📊 Было записей: ${metaData.length}`);
  
  // Группируем по id (это уникальный идентификатор)
  const uniqueById = {};
  metaData.forEach(item => {
    // Если такой id уже есть, пропускаем
    if (!uniqueById[item.id]) {
      uniqueById[item.id] = item;
    } else {
      console.log(`  Дубликат ID: ${item.id} - ${item.title}`);
    }
  });
  
  const uniqueArray = Object.values(uniqueById);
  
  console.log(`\n📊 Стало записей: ${uniqueArray.length}`);
  
  // Сохраняем с правильной кодировкой
  fs.writeFileSync(metaPath, JSON.stringify(uniqueArray, null, 2), 'utf-8');
  
  console.log('✅ Метаданные очищены');
  
  // Покажем уникальные названия
  console.log('\n📚 Уникальные статьи:');
  uniqueArray.forEach((item, i) => {
    console.log(`${i+1}. ${item.title}`);
  });
}

main();