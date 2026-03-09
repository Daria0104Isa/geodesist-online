import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function main() {
  const metaPath = path.join(__dirname, '../data/articles-meta.json');
  const metaData = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  
  console.log('📚 Все заголовки из метаданных:\n');
  
  // Группируем по заголовкам
  const groups = {};
  metaData.forEach(item => {
    if (!groups[item.title]) {
      groups[item.title] = [];
    }
    groups[item.title].push(item.fileName);
  });
  
  // Выводим
  Object.entries(groups).forEach(([title, files]) => {
    console.log(`\n"${title}" — ${files.length} файл(ов):`);
    files.forEach(file => console.log(`  - ${file}`));
  });
}

main();