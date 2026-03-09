import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import BackToTop from '../../components/BackToTop';

const equipmentData = [
  // ТАХЕОМЕТРЫ
  {
    id: 'leica-ts60',
    name: 'Leica TS60',
    categoryName: 'Тахеометры',
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

  const selectedItems = equipmentData.filter(item => ids.includes(item.id));

  // Все возможные характеристики для сравнения
  const specs = [
    { key: 'accuracy', label: 'Точность' },
    { key: 'range', label: 'Дальность' },
    { key: 'weight', label: 'Вес' },
    { key: 'protection', label: 'Защита' },
    { key: 'battery', label: 'Время работы' },
    { key: 'software', label: 'ПО' },
  ];

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
            marginBottom: '24px',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1A3C17'}
          onMouseLeave={(e) => e.target.style.color = '#2D5A27'}
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
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F0F4EF' }}>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #D4DCCD' }}>
                    Характеристика
                  </th>
                  {selectedItems.map(item => (
                    <th key={item.id} style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #D4DCCD' }}>
                      <div style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '4px' }}>{item.name}</div>
                      <div style={{ fontSize: '13px', color: '#6B776D' }}>{item.categoryName}</div>
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
        )}
      </div>
      <BackToTop />
    </Layout>
  );
}