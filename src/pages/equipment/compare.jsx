import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import BackToTop from '../../components/BackToTop';

const equipmentData = [
  // ТАХЕОМЕТРЫ
  {
    id: 'leica-ts60',
    name: 'Leica TS60',
    categoryName: 'Тахеометры',
    category: 'tacheometers',
    brand: 'Leica',
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
  // НИВЕЛИРЫ
  {
    id: 'leica-ls10',
    name: 'Leica LS10',
    categoryName: 'Нивелиры',
    category: 'levels',
    brand: 'Leica',
    accuracy: '0.3 мм/км',
    weight: '2.8 кг',
    protection: 'IP55',
    battery: 'До 12 часов',
    software: 'Leica Geo Office',
    description: 'Цифровой нивелир с электронным отсчётом',
  },
  {
    id: 'sokkia-sdl30',
    name: 'Sokkia SDL30',
    categoryName: 'Нивелиры',
    category: 'levels',
    brand: 'Sokkia',
    accuracy: '0.4 мм/км',
    weight: '2.5 кг',
    protection: 'IP54',
    battery: 'До 10 часов',
    software: 'MAGNET Field',
    description: 'Цифровой нивелир с памятью 10 000 точек',
  },
];

export default function ComparePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ids = params.get('ids')?.split(',') || [];
  const baseUrl = useBaseUrl('');

  const selectedItems = equipmentData.filter(item => ids.includes(item.id));

  const specs = [
    { key: 'accuracy', label: 'Точность' },
    { key: 'range', label: 'Дальность' },
    { key: 'weight', label: 'Вес' },
    { key: 'protection', label: 'Защита' },
    { key: 'battery', label: 'Время работы' },
    { key: 'software', label: 'ПО' },
  ];

  // Функция для оценки прибора (простой алгоритм)
  const getRecommendation = (item) => {
    let score = 0;
    if (item.accuracy?.includes('0.5') || item.accuracy?.includes('0.3')) score += 2;
    if (item.range?.includes('3500')) score += 1;
    if (item.protection?.includes('IP6')) score += 1;
    if (item.battery?.includes('8')) score += 1;
    return score;
  };

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
            {/* Блок с изображениями и названиями */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${selectedItems.length}, 1fr)`,
              gap: '24px',
              marginBottom: '32px'
            }}>
              {selectedItems.map(item => {
                console.log('baseUrl:', baseUrl);
                console.log('image path:', `${baseUrl}img/equipment/${item.id}.jpg`);
    
                return (
                  <div key={item.id} style={{ textAlign: 'center' }}>
                    <div style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid rgba(167, 196, 160, 0.3)',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '150px'
                    }}>
                      <img 
                        src={`${baseUrl}img/equipment/${item.id}.jpg`}
                        alt={item.name}
                        style={{
                          width: '100%',
                          maxWidth: '200px',
                          height: 'auto',
                          maxHeight: '150px',
                          objectFit: 'contain'
                        }}
                        onError={(e) => {
                          console.log('Failed to load:', e.target.src);
  
                          // Предотвращаем бесконечный цикл
                          e.target.onerror = null;
  
                          const fallbackSrc = `${baseUrl}img/equipment/placeholder.jpg`;
                          const currentSrc = e.target.src;
  
                          // Проверяем, не пробовали ли мы уже заглушку
                          if (currentSrc.includes('placeholder.jpg') || currentSrc === fallbackSrc) {
                            // Показываем текстовую заглушку
                            const parentDiv = e.target.parentNode;
                            if (parentDiv && parentDiv.parentNode) {
                              e.target.style.display = 'none';
      
                              // Проверяем, нет ли уже такой заглушки
                              if (!parentDiv.querySelector('.fallback-text')) {
                                const textDiv = document.createElement('div');
                                textDiv.className = 'fallback-text';
                                textDiv.style.cssText = 'width:100%; height:150px; background:#F0F4EF; display:flex; align-items:center; justify-content:center; color:#2D5A27; border-radius:8px;';
                                textDiv.innerHTML = `📷 ${item.name}`;
                                parentDiv.appendChild(textDiv);
                              }
                            }
                            return;
                          }
  
                          // Пробуем загрузить заглушку
                          e.target.src = fallbackSrc;
                        }}
                      />
                    </div>
                    <h3 style={{ color: '#2D5A27', marginBottom: '4px' }}>{item.name}</h3>
                    <p style={{ color: '#6B776D', fontSize: '14px', marginBottom: '8px' }}>{item.categoryName}</p>
            
                    {/* Бейдж с преимуществом */}
                    <div style={{
                      display: 'inline-block',
                      background: '#F0F4EF',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      color: '#2D5A27',
                      fontWeight: 500
                    }}>
                      ⭐ {getRecommendation(item)} баллов
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Таблица сравнения */}
            <div style={{ overflowX: 'auto', background: 'white', borderRadius: '16px', border: '1px solid rgba(167, 196, 160, 0.3)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F0F4EF' }}>
                    <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #D4DCCD' }}>
                      Характеристика
                    </th>
                    {selectedItems.map(item => (
                      <th key={item.id} style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #D4DCCD' }}>
                        <div style={{ fontWeight: 600, color: '#2D5A27' }}>{item.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.map(spec => (
                    <tr key={spec.key}>
                      <td style={{ padding: '16px', fontWeight: 600, color: '#2D5A27', borderBottom: '1px solid #EDF3EA' }}>
                        {spec.label}
                      </td>
                      {selectedItems.map(item => (
                        <td key={item.id} style={{ padding: '16px', textAlign: 'center', color: '#1A2A1A', borderBottom: '1px solid #EDF3EA' }}>
                          {item[spec.key] || '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Блок с ссылками на подробные страницы */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${selectedItems.length}, 1fr)`,
              gap: '24px',
              marginTop: '32px'
            }}>
              {selectedItems.map(item => (
                <Link
                  key={item.id}
                  to={`/equipment/${item.category || 'tacheometers'}/${item.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    background: '#F0F4EF',
                    color: '#2D5A27',
                    textDecoration: 'none',
                    borderRadius: '30px',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: '0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#A7C4A0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#F0F4EF'}
                >
                  Подробнее о {item.name.split(' ')[1]}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12H19" strokeWidth="2"/>
                    <path d="M12 5L19 12L12 19" strokeWidth="2"/>
                  </svg>
                </Link>
              ))}
            </div>

            {/* Совет по выбору */}
            <div style={{
              marginTop: '40px',
              padding: '24px',
              background: 'linear-gradient(135deg, #F0F4EF 0%, #ffffff 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>💡 Какой прибор выбрать?</h3>
              <p style={{ color: '#1A2A1A', lineHeight: '1.6' }}>
                {selectedItems.length === 2 
                  ? `Для сравнения выбраны ${selectedItems[0].name} и ${selectedItems[1].name}. 
                     ${selectedItems[0].brand} отличается ${selectedItems[0].accuracy} точностью, 
                     а ${selectedItems[1].brand} — ${selectedItems[1].protection} защитой.`
                  : `Для сравнения выбрано ${selectedItems.length} прибора. Обратите внимание на 
                     точность и защиту — это ключевые параметры для полевых работ.`}
              </p>
            </div>
          </>
        )}
      </div>
      <BackToTop />
    </Layout>
  );
}