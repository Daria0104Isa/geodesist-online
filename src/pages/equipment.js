import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../components/Header';
import CTABlock from '../components/CTABlock'; 
import BackToTop from '../components/BackToTop';

const equipmentData = [
  // ТАХЕОМЕТРЫ
  {
    id: 'leica-ts60',
    name: 'Leica TS60',
    category: 'tacheometers',
    categoryName: 'Тахеометры',
    brand: 'Leica',
    type: 'Роботизированный',
  
    // Основные характеристики
    angularAccuracy: '0.5"',
    rangePrism: '3500 м (10000 м LO режим)',
    rangeNonPrism: '1000+ м',
    accuracyPrism: '0.6 мм + 1 ppm',
    accuracyNonPrism: '2 мм + 2 ppm',
  
    // Временные характеристики
    measurementTimePrecise: '3-6 с',
    measurementTimeFast: '2.4 с',
  
    // Центрирование и указатели
    centeringType: 'Лазерный',
    centeringAccuracy: '1.5 мм на 1.5 м',
    sightIndicator: 'Есть',
    targetIndicator: 'Есть',
  
    // Компенсатор
    compensatorType: 'Двухосевой',
    compensatorRange: '4′',
  
    // Зрительная труба
    magnification: '30x',
    minFocusingDistance: '1.7 м',
  
    // Питание
    battery: '7-9 ч',
    chargingTime: '2.5-3.5 ч',
  
    // Управление
    keyboard: '37 клавиш, подсветка',
    display: '5" WVGA, цветной сенсорный, двусторонний',
    
    // Интерфейсы
    memory: '2 ГБ ОЗУ + SD-карта 1/8 ГБ',
    interfaces: 'USB, RS232, Bluetooth',
    
    // Физические характеристики
    weight: '7.7 кг',
    dimensions: '—',
    protection: 'IP65',
    tempRange: '-20°C до +50°C',
    
    // ПО и форматы
    software: 'Leica Captivate',
    dataFormats: 'ASCII, DXF, XML, GSI',
    country: 'Швейцария',
    warranty: '1 год',
    
    manual: '/files/leica-ts60-manual.pdf',
    
    description: `Роботизированный тахеометр премиум-класса.`,
  },
  {
    id: 'sokkia-ix-1001',
    name: 'Sokkia iX-1001',
    categoryName: 'Тахеометры',
    category: 'tacheometers',
    brand: 'Sokkia',
    type: 'Роботизированный',
  
    // Основные характеристики
    angularAccuracy: '1"',
    rangePrism: '6000 м',
    rangeNonPrism: '800 м',
    rangeFilm: '500 м',
  
    // Точность измерений
    accuracyPrism: '±1.0 мм + 2 ppm',
    accuracyNonPrism: '±2.0 мм + 2 ppm',
    accuracyFilm: '±2.0 мм + 2 ppm',
  
    // Центрирование и указатели
    centeringType: 'Оптический',
    sightIndicator: 'Есть',
    targetIndicator: 'Есть',
  
    // Компенсатор
    compensatorType: 'Двухосевой жидкостный',
    compensatorRange: '6′',
  
    // Зрительная труба
    magnification: '30x',
    reticleIllumination: 'Есть',  // подсветка сетки нитей
  
    // Питание
    battery: '4 ч',
    chargingTime: '5.5 ч',
  
    // Управление
    keyboard: '24 клавиши',
    display: 'Цветной сенсорный VWGA, 4.3"',
  
    // Интерфейсы и память
    memory: '1 ГБ',
    interfaces: 'USB, RS232C, Bluetooth',
    usbHost: 'USB флэш (до 8 ГБ)',
  
    // Физические характеристики
    weight: '5.8 кг',
    protection: 'IP65',
    tempRange: '-20°C до +50°C',
  
    // ПО и форматы
    software: 'MAGNET Field On-Board + Basic',
    dataFormats: 'SOKKIA SDR33, TOPCON, DXF/DWG, ESRI Shape, TDS, LandXML, MOSS GENIO, CSV, Microstation',
    country: 'Япония',
    warranty: '1 год',
  
    // Управление наводкой
    driveSystem: 'Сервопривод',
  
    description: 'Роботизированный тахеометр с автофокусом',
  },
  {
    id: 'trimble-s7',
    name: 'Trimble S7',
    category: 'tacheometers',
    categoryName: 'Тахеометры',
    brand: 'Trimble',
    type: 'Роботизированный / Механический',
  
    // Угловые измерения
    angularAccuracy: '1"',
    compensatorType: 'Двухосевой центрированный',
    compensatorRange: '±5.4′',
    
    // Измерение расстояний (призма)
    rangePrism: '2500 м (5500 м LO режим)',
    accuracyPrism: '2 мм + 2 ppm',
    measurementTimePrism: '1.2 с',
    measurementTimePrismTrack: '0.4 с',
  
    // Безотражательные измерения
    rangeNonPrism: '1200 м (белая карта), 600 м (серая карта)',
    accuracyNonPrism: '2 мм + 2 ppm',
    measurementTimeNonPrism: '1–5 с',
    measurementTimeNonPrismTrack: '0.4 с',
    
    // Дальность и точность на плёнку
    rangeFilm: '1200 м (фольга 60x60 мм)',
    accuracyFilm: '2 мм + 2 ppm',
    
    // Зрительная труба
    magnification: '30x',
    aperture: '40 мм',
    fieldOfView: '2.6 м на 100 м',
    minFocusingDistance: '1.5 м',
    reticleIllumination: 'Переменная (10 уровней)',
    autofocus: 'Стандартная',
    
    // Камера
    cameraResolution: '2048×1536 пикс',
    digitalZoom: '4 уровня (1x, 2x, 4x, 8x)',
    
    // Центрирование и указатели
    centeringType: 'Оптический',
    sightIndicator: 'Есть',
    targetIndicator: 'Есть',
    
    // Питание
    battery: '6.5 ч',
    chargingTime: '?',  // если есть в руководстве
    
    // Сервопривод
    driveSystem: 'MagDrive',
    rotationSpeed: '115 град/с',
    
    // Дисплей, память, интерфейсы
    display: '?',  // если есть данные
    memory: '?',
    interfaces: '2.4 ГГц, USB, RS232, Bluetooth',
    
    // Физические характеристики
    weight: '5.5 кг',
    protection: 'IP65',
    tempRange: '-20°C до +50°C',
    storageTemp: '-40°C до +70°C',
    
    // Robotic/Autolock
    atrRange: '700 м (пассивные призмы)',
    atrAccuracy: '<2 мм на 200 м',
    gpsSearchTime: '15–30 с',
    
    // ПО
    software: 'Trimble Access',
    
    // Страна и гарантия
    country: 'США?',  // если есть в руководстве
    warranty: '1 год',
    
    description: 'Механический тахеометр с MagDrive',
  },
  // GNSS
  {
    id: 'leica-gs18',
    name: 'Leica GS18',
    category: 'gnss',
    categoryName: 'GNSS-приёмники',
    brand: 'Leica',
    accuracy: '8 мм + 1 ppm',
    weight: '1.2 кг',
    protection: 'IP68',
    description: 'SmartLink, RTX, безкабельная калибровка',
  },
  {
    id: 'sokkia-gcx3',
    name: 'Sokkia GCX3',
    category: 'gnss',
    categoryName: 'GNSS-приёмники',
    brand: 'Sokkia',
    accuracy: '10 мм + 1 ppm',
    weight: '1.3 кг',
    protection: 'IP67',
    description: '555 каналов, встроенный модем',
  },
  // НИВЕЛИРЫ
  {
    id: 'leica-ls10',
    name: 'Leica LS10',
    category: 'levels',
    categoryName: 'Нивелиры',
    brand: 'Leica',
    accuracy: '0.3 мм/км',
    weight: '2.8 кг',
    protection: 'IP55',
    battery: 'До 12 часов',
    software: 'Leica Geo Office',
    measurementModes: 'Автоматический',
    memory: '30 000 точек',
    compensation: 'Двухосевой',
    description: 'Цифровой нивелир с электронным отсчётом',
  },
  {
    id: 'sokkia-sdl30',
    name: 'Sokkia SDL30',
    category: 'levels',
    categoryName: 'Нивелиры',
    brand: 'Sokkia',
    accuracy: '0.4 мм/км',
    weight: '2.5 кг',
    protection: 'IP54',
    battery: 'До 10 часов',
    software: 'MAGNET Field',
    measurementModes: 'Автоматический/Ручной',
    memory: '10 000 точек',
    compensation: 'Двухосевой',
    manual: '/files/sokkia-sdl30-manual.pdf',
    description: 'Цифровой нивелир с памятью 10 000 точек',
  },
];

export default function EquipmentPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const baseUrl = useBaseUrl('');

  const toggleCompare = (itemId) => {
    setSelectedForCompare(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        if (prev.length >= 3) {
          alert('Можно сравнивать не более 3 приборов одновременно');
          return prev;
        }
        return [...prev, itemId];
      }
    });
  };

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'tacheometers', name: 'Тахеометры' },
    { id: 'gnss', name: 'GNSS' },
    { id: 'levels', name: 'Нивелиры' },
  ];

  const filteredEquipment = equipmentData
    .filter(item => filter === 'all' || item.category === filter)
    .filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Layout title="Оборудование" description="Каталог геодезического оборудования">
      <Header />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* 🔍 ПОИСК — ПО ЦЕНТРУ СВЕРХУ */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <div style={{ position: 'relative', width: '600px' }}>
            <input
              type="text"
              placeholder="Поиск по названию или бренду"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: '12px 24px 14px 52px',
                borderRadius: '50px',
                border: '2px solid #A7C4A0',
                fontSize: '17px',
                width: '100%',
                outline: 'none',
                backgroundColor: 'white',
                color: '#2D5A27',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(45, 90, 39, 0.1)'
              }}
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                position: 'absolute',
                left: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: '#A7C4A0'
              }}
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* ЗАГОЛОВОК ПО ЦЕНТРУ */}
        <h1 style={{ 
          fontSize: '48px', 
          color: '#2D5A27', 
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Каталог оборудования
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B776D', 
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          Геодезические приборы — характеристики, инструкции, обзоры
        </p>

        {/* 🏷️ КАТЕГОРИИ — СЛЕВА */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap', 
          marginBottom: '40px',
          marginLeft: '100px'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                background: filter === cat.id ? '#2D5A27' : 'white',
                color: filter === cat.id ? 'white' : '#2D5A27',
                border: '1px solid #2D5A27',
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Сетка карточек */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          width: '100%'
        }}>
          {filteredEquipment.map(item => (
            <Link
              key={item.id}
              to={`/equipment/${item.category}/${item.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(167, 196, 160, 0.3)',
                transition: 'transform 0.2s, boxShadow 0.2s',
                cursor: 'pointer',
                height: '100%',
                width: '100%',
                boxSizing: 'border-box',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(45, 90, 39, 0.06)';
                // Показываем кнопку при наведении (только если не выбрана)
                const btn = e.currentTarget.querySelector('.compare-btn');
                if (btn && !selectedForCompare.includes(item.id)) {
                  btn.style.opacity = '1';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                // Скрываем кнопку при уходе мыши (только если не выбрана)
                const btn = e.currentTarget.querySelector('.compare-btn');
                if (btn && !selectedForCompare.includes(item.id)) {
                  btn.style.opacity = '0';
                }
              }}>

                {/* Метка категории */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: '#F0F4EF',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  color: '#2D5A27',
                  fontWeight: 500,
                  zIndex: 10,
                  opacity: 1,
                  pointerEvents: 'none'
                }}>
                  {item.categoryName}
                </div>

                {/* Кнопка сравнения */}
                <div className="compare-btn" style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  opacity: selectedForCompare.includes(item.id) ? 1 : 0,
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                  pointerEvents: selectedForCompare.includes(item.id) ? 'auto' : 'auto'
                }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleCompare(item.id);
                    }}
                    style={{
                      background: selectedForCompare.includes(item.id) ? '#2D5A27' : 'white',
                      color: selectedForCompare.includes(item.id) ? 'white' : '#2D5A27',
                      border: '1px solid #2D5A27',
                      borderRadius: '20px',
                      padding: '6px 14px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 8px rgba(45, 90, 39, 0.1)',
                      transition: 'background-color 0.2s, transform 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (!selectedForCompare.includes(item.id)) {
                        e.target.style.backgroundColor = '#F0F4EF';
                        e.target.style.transform = 'scale(1.05)';
                      } else {
                        e.target.style.backgroundColor = '#1A3C17';
                        e.target.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedForCompare.includes(item.id)) {
                        e.target.style.backgroundColor = '#2D5A27';
                      } else {
                        e.target.style.backgroundColor = 'white';
                      }
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={{ 
                      fontSize: '16px', 
                      fontWeight: 'bold',
                      color: selectedForCompare.includes(item.id) ? 'white' : '#2D5A27'
                    }}>
                      {selectedForCompare.includes(item.id) ? '✓' : '+'}
                    </span>
                    <span style={{
                      color: selectedForCompare.includes(item.id) ? 'white' : '#2D5A27'  // ← добавить
                    }}>
                      {selectedForCompare.includes(item.id) ? 'Добавлено' : 'Сравнить'}
                    </span>
                  </button>
                </div>
                
                {/* Изображение */}
                <img 
                  src={`${baseUrl}img/equipment/${item.id}.jpg`}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'contain',
                    background: '#F0F4EF',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    padding: '8px'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentNode;
                    const div = document.createElement('div');
                    div.style.cssText = 'width:100%; height:180px; background:#F0F4EF; display:flex; align-items:center; justify-content:center; color:#2D5A27; border-radius:12px; margin-bottom:16px;';
                    div.innerHTML = `📷 ${item.name}`;
                    parent.insertBefore(div, e.target.nextSibling);
                  }}
                />

                {/* Информация о приборе */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '20px', color: '#2D5A27', margin: 0, fontWeight: 600 }}>
                    {item.name}
                  </h3>
                  <span style={{
                    background: '#A7C4A0',
                    color: '#1A3C17',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 500
                  }}>
                    {item.brand}
                  </span>
                </div>

                <p style={{ color: '#6B776D', fontSize: '14px', marginBottom: '16px', lineHeight: '1.5' }}>
                  {item.description}
                </p>

                {/* Характеристики */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  borderTop: '1px solid #EDF3EA',
                  paddingTop: '16px',
                  fontSize: '14px'
                }}>
                  {item.accuracy && (
                    <div>
                      <span style={{ color: '#6B776D' }}>Точность: </span>
                      <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item.accuracy}</span>
                    </div>
                  )}
                  {item.range && (
                    <div>
                      <span style={{ color: '#6B776D' }}>Дальность: </span>
                      <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item.range}</span>
                    </div>
                  )}
                  {item.weight && (
                    <div>
                      <span style={{ color: '#6B776D' }}>Вес: </span>
                      <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item.weight}</span>
                    </div>
                  )}
                  {item.protection && (
                    <div>
                      <span style={{ color: '#6B776D' }}>Защита: </span>
                      <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item.protection}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Плавающая панель сравнения */}
        {selectedForCompare.length > 0 && (
          <div style={{
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'white',
            borderRadius: '50px',
            padding: '12px 24px',
            boxShadow: '0 8px 24px rgba(45, 90, 39, 0.15)',
            border: '1px solid rgba(167, 196, 160, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            zIndex: 1000,
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#2D5A27', fontWeight: 600, fontSize: '14px' }}>
                Выбрано: {selectedForCompare.length}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {selectedForCompare.map(id => {
                  const item = equipmentData.find(i => i.id === id);
                  return (
                    <div key={id} style={{
                      background: '#F0F4EF',
                      borderRadius: '30px',
                      padding: '4px 12px',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item?.name}</span>
                      <button
                        onClick={() => toggleCompare(id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#6B776D',
                          fontSize: '16px',
                          padding: '0 2px'
                        }}
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
    
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  if (selectedForCompare.length >= 2) {
                    window.location.href = `/equipment/compare?ids=${selectedForCompare.join(',')}`;
                  } else {
                    alert('Выберите минимум 2 прибора для сравнения');
                  }
                }}
                style={{
                  background: '#2D5A27',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '8px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3C17'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2D5A27'}
              >
                Сравнить
              </button>
      
              <button
                onClick={() => setSelectedForCompare([])}
                style={{
                  background: 'white',
                  color: '#6B776D',
                  border: '1px solid #D4DCCD',
                  borderRadius: '30px',
                  padding: '8px 20px',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#F9F7F3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                Очистить
              </button>
            </div>
          </div>
        )}
        
        {/* Сообщение, если ничего не найдено */}
        {filteredEquipment.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: '#F9F7F3',
            borderRadius: '16px',
            color: '#6B776D'
          }}>
            🔍 Ничего не найдено. Попробуйте изменить параметры поиска.
          </div>
        )}
      </div>
      
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