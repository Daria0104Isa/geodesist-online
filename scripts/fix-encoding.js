import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function fixFile(filePath) {
  try {
    // Читаем как бинарные данные
    const content = fs.readFileSync(filePath);
    
    // Пробуем разные кодировки
    const utf8Content = content.toString('utf8');
    const latin1Content = content.toString('latin1');
    
    // Проверяем, есть ли кракозябры (ищем символы > 127)
    const hasUtf8Issues = /[^\x00-\x7Fа-яА-ЯёЁ\s\.,!?-]/.test(utf8Content);
    
    if (hasUtf8Issues && latin1Content.match(/[а-яА-Я]/)) {
      // Если латиница даёт русские буквы, значит кодировка была Latin1
      console.log(`  Исправляю кодировку для ${path.basename(filePath)}`);
      fs.writeFileSync(filePath, latin1Content, 'utf8');
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Ошибка при обработке ${filePath}:`, err.message);
    return false;
  }
}

function main() {
  console.log('🔍 Проверяем файлы метаданных...');
  
  const metaPath = path.join(__dirname, '../data/articles-meta.json');
  const fixed = fixFile(metaPath);
  
  if (fixed) {
    console.log('✅ Метаданные исправлены');
    
    // Перечитываем и показываем результат
    const metaData = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    console.log('\n📄 Первые 3 записи после исправления:');
    metaData.slice(0, 3).forEach(item => {
      console.log(`  - ${item.title} (${item.category})`);
    });
  } else {
    console.log('❌ Не удалось исправить кодировку');
  }
}

main();