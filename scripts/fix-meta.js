import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Правильные названия для каждого файла
const correctTitles = {
  'adjustment.jsx': 'Уравнивание теодолитного хода: пошаговое руководство',
  'basic-principles.js': 'Базовые принципы геодезии и системы координат',
  'coordinate-systems.jsx': 'Переход между системами координат (МСК и WGS-84)',
  'coordinate-transformation.jsx': 'Трансформация координат и локализация',
  'deformation-monitoring.jsx': 'Геодезический мониторинг деформаций',
  'facade-survey.jsx': 'Высотная съемка фасадов зданий',
  'formulas.jsx': 'Сборник формул для геодезических расчетов',
  'geodetic-networks.jsx': 'Построение геодезических сетей',
  'glossary.jsx': 'Глоссарий геодезических терминов',
  'gnss-comparison.jsx': 'Выбор GNSS-оборудования: сравнение моделей',
  'gnss-postprocessing.jsx': 'Обработка GNSS-измерений в постобработке',
  'gnss-receiver.jsx': 'Работа с GNSS-приёмником: быстрый старт',
  'gnss-rtk.jsx': 'Основы работы с GNSS-приемниками в режиме RTK',
  'gnss-setup.jsx': 'Настройка GNSS-оборудования',
  'iso-17123.jsx': 'ISO 17123: Полевые испытания оборудования',
  'levelling-basics.jsx': 'Нивелирование: от основ до приборов',
  'longitudinal-levelling.jsx': 'Продольное нивелирование трассы',
  'modern-methods.jsx': 'Современные методы съёмки',
  'plan-height-survey.jsx': 'Планово-высотная съемка',
  'rtk-calibration.jsx': 'Калибровка RTK на строительной площадке',
  'staking-out.jsx': 'Разбивочные работы: вынос осей в натуру',
  'survey-stages.jsx': 'Организация инженерно-геодезических работ',
  'tacheometer-calibration.jsx': 'Калибровка и поверка тахеометров',
  'tacheometric-survey.jsx': 'Тахеометрическая съемка: пошаговое руководство',
  'tacheometry-basics.jsx': 'Работа с тахеометром: быстрый старт',
  'underground-utilities.jsx': 'Съемка подземных коммуникаций'
};

function extractFirstParagraph(content) {
  const contentMatch = content.match(/content\s*=\s*\(\s*<>\s*([\s\S]*?)<\/>\s*\);/);
  if (contentMatch) {
    const text = contentMatch[1]
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return text.substring(0, 150) + (text.length > 150 ? '...' : '');
  }
  return '';
}

function main() {
  console.log('📚 Создаём метаданные с правильными названиями...');
  
  const articlesDir = path.join(__dirname, '../src/pages/knowledge/articles');
  const files = fs.readdirSync(articlesDir)
    .filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
  
  console.log(`📁 Найдено файлов: ${files.length}`);
  
  const metaData = [];
  
  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const title = correctTitles[file];
    if (!title) {
      console.log(`⚠️  Не найдено название для ${file}`);
      return;
    }
    
    // Извлекаем описание из файла
    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    const description = descMatch ? descMatch[1] : '';
    
    const firstParagraph = extractFirstParagraph(content);
    
    metaData.push({
      id: file.replace('.jsx', '').replace('.js', ''),
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