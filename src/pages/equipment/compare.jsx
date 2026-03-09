import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../components/Header';        // два уровня вверх
import Breadcrumbs from '../../components/Breadcrumbs';
import BackToTop from '../../components/BackToTop';
import CTABlock from '../../components/CTABlock';

const equipmentData = [
  // ТАХЕОМЕТРЫ
  {
    id: 'leica-ts60',
    name: 'Leica TS60',
    categoryName: 'Тахеометры',
    category: 'tacheometers',
    brand: 'Leica',
    type: 'Роботизированный',
    accuracy: '0.5"',
    range: '>3500 м',
    weight: '5.6 кг',
    protection: 'IP65',
    battery: 'До 8 часов',
    software: 'Leica Captivate',
    description: 'Роботизированный тахеометр премиум-класса',
  },
  {
    id: 'sokkia-ix1001',
    name: 'Sokkia iX-1001',
    categoryName: 'Тахеометры',
    category: 'tacheometers',
    brand: 'Sokkia',
    type: 'Роботизированный',
    accuracy: '1"',
    range: '3500 м',
    weight: '5.2 кг',
    protection: 'IP66',
    battery: 'До 7 часов',
    software: 'MAGNET Field',
    description: 'Роботизированный тахеометр с автофокусом',
  },
  {
    id: 'trimble-s7',
    name: 'Trimble S7',
    categoryName: 'Тахеометры',
    category: 'tacheometers',
    brand: 'Trimble',
    type: 'Механический',
    accuracy: '1"',
    range: '2500 м',
    weight: '5.4 кг',
    protection: 'IP65',
    battery: 'До 6 часов',
    software: 'Trimble Access',
    description: 'Механический тахеометр с MagDrive',
  },
  // GNSS
  {
    id: 'leica-gs18',
    name: 'Leica GS18',
    categoryName: 'GNSS-приёмники',
    category: 'gnss',
    brand: 'Leica',
    accuracy: '8 мм + 1 ppm',
    weight: '1.2 кг',
    protection: 'IP68',
    battery: 'До 6 часов',
    software: 'Leica Captivate',
    description: 'SmartLink, RTX, безкабельная калибровка',
  },
  {
    id: 'sokkia-gcx3',
    name: 'Sokkia GCX3',
    categoryName: 'GNSS-приёмники',
    category: 'gnss',
    brand: 'Sokkia',
    accuracy: '10 мм + 1 ppm',
    weight: '1.3 кг',
    protection: 'IP67',
    battery: 'До 7 часов',
    software: 'MAGNET Field',
    description: '555 каналов, встроенный модем',
  },
  // НИВЕЛИРЫ - обновленные данные
  {
    id: 'leica-ls10',
    name: 'Leica LS10',
    category: 'levels',
    categoryName: 'Нивелиры',
    brand: 'Leica',
  
    // Основная точность
    accuracy: '0.3 мм/км',
    accuracyElectronic: '0.3 мм/км',
    accuracyStandard: '1.0 мм/км',
    accuracyOptical: '2.0 мм/км',
    accuracyInvarn: '0.3 мм/км', 
    accuracyFiberglass: '1.0 мм/км', 
  
    // Оптика
    magnification: '32x',
    objectiveDiameter: '36 мм',
    range: '1.8 - 110 м',
    minFocusingDistance: '0.6 м',
    imageType: 'Прямое',
    fieldOfView: '3.5 м на 100 м',
    angularAperture: '2°',
    stadiaConstant: '100',
    autofocus: 'Нет',
  
    // Компенсатор
    compensationType: 'Маятниковый с магнитным демпфером',
    compensationRange: '±9\'',
    compensationAccuracy: '0.3"',
    electronicLevel: 'Да',

    // Режимы
    measurementModes: 'Single, Repeat, Average', // ← добавить
    measurementTime: '2.5 сек',
  
    // Память и интерфейсы
    memory: '30 000 измерений',
    memoryExpansion: 'USB до 32 ГБ',
    interfaces: 'USB, USB хост, Bluetooth',
    display: '3.6", QVGA (320×240), цветной сенсорный',
    keyboard: '28 клавиш с подсветкой',
  
    // Рейки
    rodTypes: 'Инварные, стандартные (фибергласс), Leica GSL',
    
    // Режимы работы
    measurementModes: 'Электронные, оптические',
    measurementTime: '2.5 сек',
    autoCorrection: 'Коллимация, кривизна Земли',
  
    // Физические характеристики
    weight: '3.7 кг',
    dimensions: '276×222×206 мм',
    protection: 'IP55',
    humidity: 'до 95%',
    tempRange: '-20°C до +50°C',
    storageTemp: '-40°C до +70°C',
    
    // Питание
    battery: '10-12 ч',
    batteryType: 'Li-ion 11.1 В, 2.8 А•ч (GEB331)',
    powerConsumption: '2 Вт (рабочее), 3 Вт (автофокус)',
    
    // Дополнительно
    circularLevel: '8\'/2 мм',
    magneticSensitivity: '≤1"',
    
    software: 'Leica Geo Office',
    
    description: 'Leica LS10 — цифровой нивелир с электронным отсчётом, памятью 30 000 измерений и высокой точностью 0.3 мм/км.',
  },
  {
    id: 'sokkia-sdl30',
    name: 'Sokkia SDL30',
    category: 'levels',
    categoryName: 'Нивелиры',
    brand: 'Sokkia',
  
    // Оптика
    magnification: '32x',
    objectiveDiameter: '45 мм',
    minFocusingDistance: '1.5 м',
    imageType: 'Прямое',
    fieldOfView: '1°20′',
    resolution: '3″',
    autofocus: 'Нет',
  
    // Точность
    accuracy: '0.4 мм/км',  // основная точность
    accuracyOptical: '1.0 мм/км',
    accuracyFiberglass: '±1 мм',
    accuracyInvarn: '±0.6 мм',
    accuracyFiberglass: '1.0 мм/км',        // ← добавить
    accuracyAluminum: '1.2 мм/км', 
    
    // Компенсатор
    compensation: '±15\'',  // добавили
    compensationType: 'Магнитный',
    compensationRange: "±15'",
    compensationAccuracy: '±0.3"',

    // Режимы
    measurementModes: 'Single, Repeat, Average, Tracking, Wave-and-Read',  // ← добавить
    measurementTime: 'Single: 2.5 сек, Tracking: 1 сек',
  
    // Дальность
    range: '1.6 - 100 м',
  
    // Физические параметры
    weight: '2.4 кг',
    dimensions: '158×257×182 мм',
    protection: 'IPX4',
    tempRange: '-20°C до +50°C',
    storageTemp: '-40°C до +70°C',
  
    // Питание
    battery: '>16 ч',
    batteryType: 'Li-ion 7.2 В, 1.3 Ач',
  
    // Память и интерфейсы
    memory: '2 000 точек',
    memoryExpansion: 'Нет',
    interfaces: 'RS-232',
    autoPowerOff: 'Да (30 мин)',

    // Рейки
    rodTypes: 'Инварные (BIS20/30), стекловолокно (BGS40/50), алюминиевые (BAS55)',
  
    // Дисплей и управление
    display: '128×32 пикс, монохромный с подсветкой',
    keyboard: '7 клавиш',
  
    // Режимы и программы
    standardPrograms: 'вынос в натуру отметок и расстояний, вычисление отметок, проложение нивелирного хода',
    traverseAdjustment: 'Нет',
  
    // Дополнительно
    camera: 'Нет',
    software: 'MAGNET Field',
  
    description: 'Цифровой нивелир с памятью 2 000 точек',
  }
];

export default function ComparePage() {  // ← ЭТОГО НЕТ!
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ids = params.get('ids')?.split(',') || [];
  const baseUrl = useBaseUrl('');
  const imageBaseUrl = baseUrl || '/';

  const selectedItems = equipmentData.filter(item => ids.includes(item.id));

// Определяем, какие категории выбраны
const selectedCategories = [...new Set(selectedItems.map(item => item.category))];
const allLevels = selectedCategories.length === 1 && selectedCategories[0] === 'levels';
const allTacheometers = selectedCategories.length === 1 && selectedCategories[0] === 'tacheometers';
const allGnss = selectedCategories.length === 1 && selectedCategories[0] === 'gnss';

// Динамический массив характеристик
const getSpecs = () => {
  let baseSpecs = [
    { key: 'accuracy', label: 'Точность' },
    { key: 'weight', label: 'Вес' },
    { key: 'protection', label: 'Защита' },
    { key: 'battery', label: 'Время работы' },
    { key: 'software', label: 'ПО' },
  ];

  if (allTacheometers) {
    // Для тахеометров
    return [
      { key: 'type', label: 'Тип' },
      ...baseSpecs,
      { key: 'range', label: 'Дальность' },
    ];
  } else if (allLevels) {
    // Для нивелиров - РАСШИРЕННАЯ ВЕРСИЯ
    return [
      // Основная точность
      { key: 'accuracy', label: 'Точность (кодовая)' },
      { key: 'accuracyOptical', label: 'Точность (оптическая)' },
      { key: 'accuracyInvarn', label: 'Точность (инварная рейка)' },      // ← ДОБАВИТЬ
      { key: 'accuracyFiberglass', label: 'Точность (стеклопластик)' },   // ← ДОБАВИТЬ
      { key: 'accuracyAluminum', label: 'Точность (алюминий)' },          // ← ДОБАВИТЬ
      
      // Оптика
      { key: 'magnification', label: 'Увеличение' },
      { key: 'objectiveDiameter', label: 'Диаметр объектива' }, 
      { key: 'range', label: 'Дальность по рейке' },
      { key: 'minFocusingDistance', label: 'Мин. визирование' },
      { key: 'imageType', label: 'Изображение' },
      { key: 'fieldOfView', label: 'Поле зрения' },                       // ← ДОБАВИТЬ
      { key: 'resolution', label: 'Разрешающая способность' },
      { key: 'autofocus', label: 'Автофокус' },
      
      // Компенсатор
      { key: 'compensationType', label: 'Тип компенсатора' },
      { key: 'compensationRange', label: 'Диапазон компенсации' },
      { key: 'compensationAccuracy', label: 'Точность компенсатора' },
      
      // Память и интерфейсы
      { key: 'memory', label: 'Память' },
      { key: 'interfaces', label: 'Интерфейсы' },
      { key: 'display', label: 'Дисплей' },
      { key: 'keyboard', label: 'Клавиатура' },                           // ← ДОБАВИТЬ
      { key: 'autoPowerOff', label: 'Автоотключение' }, 
      
      // Режимы работы
      { key: 'measurementModes', label: 'Режимы измерений' },             // ← ИСПРАВИТЬ
      { key: 'measurementTime', label: 'Время измерения' }, 
      
      // Рейки
      { key: 'rodTypes', label: 'Типы реек' },   
      
      // Физические характеристики
      { key: 'weight', label: 'Вес' },
      { key: 'dimensions', label: 'Размеры' },
      { key: 'protection', label: 'Защита' },
      { key: 'tempRange', label: 'Рабочая t°' },
      { key: 'storageTemp', label: 'Температура хранения' },
      { key: 'battery', label: 'Время работы' },
      { key: 'batteryType', label: 'Тип аккумулятора' },
    ];
  } else if (allGnss) {
    // Для GNSS
    return [
      ...baseSpecs,
      { key: 'channels', label: 'Каналы' },
      { key: 'rtk', label: 'RTK' },
    ];
  } else {
    return baseSpecs;
  }
};

const specs = getSpecs();

  // Функция для оценки прибора
  const getRecommendation = (item) => {
    let score = 0;
  
    // Базовые критерии для всех
    if (item.protection?.includes('IP6')) score += 1;
    if (item.battery?.includes('8') || item.battery?.includes('10') || item.battery?.includes('12')) score += 1;
  
    // Для тахеометров
    if (item.category === 'tacheometers') {
      if (item.accuracy?.includes('0.5')) score += 2;
      if (item.range?.includes('3500')) score += 1;
    }
  
    // Для нивелиров
    if (item.category === 'levels') {
      if (item.accuracy?.includes('0.3') || item.accuracy?.includes('0.4')) score += 2;
      if (item.memory?.includes('10000') || item.memory?.includes('30000')) score += 1;
      if (item.compensation) score += 1;
      if (item.measurementModes?.includes('Автоматический')) score += 1;
    }
  
    // Для GNSS
    if (item.category === 'gnss') {
      if (item.accuracy?.includes('8 мм') || item.accuracy?.includes('10 мм')) score += 2;
      if (item.channels?.includes('555')) score += 1;
      if (item.rtk?.includes('RTX') || item.rtk?.includes('SmartLink')) score += 1;
    }
  
    return score;
  };

  // Функция для получения сообщения в зависимости от типов приборов
  const getComparisonMessage = () => {
    if (selectedItems.length < 2) return null;
    
    // Проверяем категории выбранных приборов
    const categories = [...new Set(selectedItems.map(item => item.category))];
    const categoryNames = [...new Set(selectedItems.map(item => item.categoryName))];
    
    if (categories.length === 1) {
      // Все приборы одной категории
      if (categories[0] === 'tacheometers') {
        return {
          type: 'info',
          title: '💡 На что обратить внимание при сравнении тахеометров:',
          points: [
            'Точность измерений (угловая и линейная) — ключевой параметр для ваших задач',
            'Дальность безотражательных измерений важна для работы в сложных условиях',
            'Роботизированные или механические модели',
            'Совместимость с вашим текущим ПО и оборудованием',
            'Условия работы: степень защиты IP и время автономной работы'
          ]
        };
      } else if (categories[0] === 'gnss') {
        return {
          type: 'info',
          title: '💡 На что обратить внимание при сравнении GNSS-приёмников:',
          points: [
            'Точность в режимах RTK и постобработки',
            'Количество отслеживаемых спутников и поддерживаемые системы (GPS, ГЛОНАСС, Galileo, BeiDou)',
            'Время инициализации и устойчивость к помехам',
            'Наличие встроенного модема и поддержка поправок (RTX, SmartLink)',
            'Вес и эргономичность для полевых работ'
          ]
        };
      } else if (categories[0] === 'levels') {
          return {
            type: 'info',
            title: '💡 На что обратить внимание при сравнении нивелиров:',
            points: [
              'Точность нивелирования на 1 км двойного хода — основной параметр (0.3-0.6 мм/км — премиум)',
              'Точность с разными типами реек: инварные (макс. точность), стеклопластик, алюминий',
              'Увеличение зрительной трубы (28x-32x) и диаметр объектива для работы в сумерках',
              'Компенсатор: тип (маятниковый/магнитный), диапазон (±9\' до ±15\') и точность',
              'Объём памяти (2 000 - 30 000 точек) и интерфейсы (USB, Bluetooth, RS-232)',
              'Время работы (>16 ч) и защита от пыли/влаги (IP54-IP55)',
              'Доп. функции: режимы измерений (Single, Repeat, Average, Tracking), автоотключение'
            ]
          };
      } else {
        return {
          type: 'info',
          title: '✅ Все приборы из одной категории',
          points: [
            `Вы сравниваете ${categoryNames.join(', ')}.`,
            'Обратите внимание на ключевые характеристики, важные для ваших задач.'
          ]
        };
      }
    } else {
      // Приборы разных категорий
      return {
        type: 'warning',
        title: '⚠️ Приборы относятся к разным группам:',
        points: [
          `Вы сравниваете: ${categoryNames.join(', ')}.`,
          'Тахеометры, GNSS-приёмники и нивелиры имеют разное назначение и принцип работы.',
          'Для корректного выбора сравнивайте приборы только внутри одной категории.',
          'Используйте фильтры в каталоге, чтобы подобрать оборудование одного типа.'
        ]
      };
    }
  };

  // Функция для склонения слова "балл"
  const getWordEnding = (num) => {
   if (num % 10 === 1 && num % 100 !== 11) { 
      return 'балл';
    } else if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100)) {
      return 'балла';
    } else {
      return 'баллов';
    }
  };

  const comparisonMessage = getComparisonMessage();

  return (
    <Layout title="Сравнение оборудования">
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Сравнение', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Кнопка назад */}
        <Link 
          to="/equipment"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#2D5A27',
            textDecoration: 'none',
            fontSize: '16px',
            marginBottom: '24px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 12H5" strokeWidth="2"/>
            <path d="M12 19L5 12L12 5" strokeWidth="2"/>
          </svg>
          Вернуться в каталог
        </Link>

        <h1 style={{ fontSize: '48px', color: '#2D5A27', marginBottom: '16px' }}>
          Сравнение оборудования
        </h1>

        {selectedItems.length < 2 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: '#F9F7F3', borderRadius: '16px' }}>
            <p style={{ fontSize: '18px', color: '#6B776D', marginBottom: '24px' }}>
              Выберите минимум 2 прибора для сравнения
            </p>
            <Link
              to="/equipment"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: '#2D5A27',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '30px'
              }}
            >
              Вернуться в каталог
            </Link>
          </div>
        ) : (
          <>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: `180px repeat(${selectedItems.length}, minmax(140px, 1fr))`,
              gap: '8px',
              width: '100%'
            }}>
              {/* Пустая ячейка для выравнивания сетки (вместо "Фото") */}
              <div></div>
              
              {/* Фото приборов */}
              {selectedItems.map(item => (
                <div key={item.id} style={{ textAlign: 'center' }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '8px',
                    border: '1px solid rgba(167, 196, 160, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '160px'
                  }}>
                    <img 
                      src={`${imageBaseUrl}img/equipment/${item.id}.jpg`}
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '180px',  // фиксированная высота
                        objectFit: 'scale-down',  // ОБРЕЗАЕТ ПО БОКАМ
                        objectPosition: 'center',  // центрирует изображение
                        borderRadius: '8px'
                      }}
                      onError={(e) => {
                        console.log('Failed to load:', e.target.src);
                        e.target.onerror = null;
                        const parentDiv = e.target.parentNode;
                        if (parentDiv) {
                          e.target.style.display = 'none';
                          const textDiv = document.createElement('div');
                          textDiv.style.cssText = 'width:100%; height:150px; background:#F0F4EF; display:flex; align-items:center; justify-content:center; color:#2D5A27; border-radius:8px;';
                          textDiv.innerHTML = `📷 ${item.name}`;
                          parentDiv.appendChild(textDiv);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Пустая ячейка перед названиями приборов */}
              <div></div>
              
              {/* Названия приборов под фото */}
              {selectedItems.map(item => (
                <div key={item.id} style={{ textAlign: 'center', marginTop: '8px' }}>
                  <h3 style={{ color: '#2D5A27', marginBottom: '4px' }}>{item.name}</h3>
                  <p style={{ color: '#6B776D', fontSize: '14px', marginBottom: '8px' }}>{item.categoryName}</p>
                  <div style={{
                    display: 'inline-block',
                    background: '#F0F4EF',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    color: '#2D5A27',
                    fontWeight: 500
                  }}>
                    ⭐ {getRecommendation(item)} {getWordEnding(getRecommendation(item))}
                  </div>
                </div>
              ))}

              {/* Заголовок таблицы */}
              <div style={{ 
                fontWeight: 600, 
                color: '#2D5A27', 
                padding: '10px 16px', // Уменьшен вертикальный отступ (было 16px 20px)
                background: '#F0F4EF',
                borderTopLeftRadius: '16px',
                borderBottom: '1px solid #D4DCCD'
              }}>
                Характеристика
              </div>
              
              {/* Заголовки приборов в таблице */}
              {selectedItems.map(item => (
                <div key={item.id} style={{ 
                  padding: '10px 16px', // Уменьшен вертикальный отступ (было 16px 20px)
                  textAlign: 'center', 
                  background: '#F0F4EF',
                  borderBottom: '1px solid #D4DCCD',
                  fontWeight: 600, 
                  color: '#2D5A27'
                }}>
                  {item.name}
                </div>
              ))}

              {/* Строки таблицы */}
              {specs.map(spec => (
                <React.Fragment key={spec.key}>
                  <div style={{ 
                    padding: '10px 16px', // Уменьшен вертикальный отступ (было 16px 20px)
                    fontWeight: 600, 
                    color: '#2D5A27', 
                    borderBottom: '1px solid #EDF3EA',
                    backgroundColor: '#F9F7F3'
                  }}>
                    {spec.label}
                  </div>
                  {selectedItems.map(item => (
                    <div key={item.id} style={{ 
                      padding: '10px 16px', // Уменьшен вертикальный отступ (было 16px 20px)
                      textAlign: 'center', 
                      color: '#1A2A1A', 
                      borderBottom: '1px solid #EDF3EA'
                    }}>
                      {item[spec.key] || '—'}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            {/* Информационное сообщение под таблицей */}
            {comparisonMessage && (
              <div style={{
                marginTop: '40px',
                padding: '24px',
                background: comparisonMessage.type === 'warning' ? '#FFF3E0' : '#F0F4EF',
                borderRadius: '16px',
                borderLeft: `4px solid ${comparisonMessage.type === 'warning' ? '#E6B422' : '#2D5A27'}`
              }}>
                <h3 style={{ 
                  color: comparisonMessage.type === 'warning' ? '#8B6B1A' : '#2D5A27',
                  marginBottom: '16px',
                  fontSize: '20px',
                  fontWeight: 600
                }}>
                  {comparisonMessage.title}
                </h3>
                <ul style={{ 
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#1A2A1A'
                }}>
                  {comparisonMessage.points.map((point, index) => (
                    <li key={index} style={{ 
                      marginBottom: '8px',
                      lineHeight: '1.6'
                    }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div> {/* Закрывает основной контейнер с maxWidth: '1200px' */}

      {/* CTA-блок на всю ширину - ВНЕ контейнера */}
      <CTABlock 
        title="Нужна помощь с выбором оборудования?"
        description="Задайте вопрос в Telegram-боте — наши эксперты помогут подобрать прибор под ваши задачи"
        buttonText="Спросить в Telegram"
        buttonLink="https://t.me/GeodezistOnlineBot"
      />
      
      <BackToTop />
    </Layout>
  );
}