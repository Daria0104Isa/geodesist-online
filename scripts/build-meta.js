import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function extractFirstSentence(text) {
  if (!text) return '';
  
  let clean = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const match = clean.match(/[^.!?]*[.!?]/);
  return match ? match[0].trim() : clean.substring(0, 150) + '...';
}

function generateId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-zа-я0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

function main() {
  console.log('📚 Собираем метаданные статей...');
  
  const articlesDir = path.join(__dirname, '../src/pages/knowledge/articles');
  const files = fs.readdirSync(articlesDir)
    .filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
  
  console.log(`📁 Найдено файлов: ${files.length}`);
  
  const metaData = [];
  
  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Извлекаем title
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : file.replace('.jsx', '').replace('.js', '');
    
    // Извлекаем описание
    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    const description = descMatch ? descMatch[1] : '';
    
    // Извлекаем первый абзац
    let firstParagraph = '';
    const contentMatch = content.match(/content\s*=\s*\(\s*<>\s*([\s\S]*?)<\/>\s*\);/);
    if (contentMatch) {
      const text = contentMatch[1]
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      firstParagraph = text.substring(0, 150) + (text.length > 150 ? '...' : '');
    }
    
    metaData.push({
      id: generateId(title),
      title,
      description,
      firstParagraph,
      fileName: file
    });
    
    console.log(`  ✅ ${title}`);
  });
  
  // Сохраняем
  const outputPath = path.join(__dirname, '../data/articles-meta.json');
  fs.writeFileSync(outputPath, JSON.stringify(metaData, null, 2), 'utf-8');
  
  console.log(`\n✅ Готово! Сохранено ${metaData.length} записей`);
}

main();