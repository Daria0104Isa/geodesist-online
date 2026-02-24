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
    accuracy: '0.5"',
    range: '>3500 м',
    weight: '5.6 кг',
    protection: 'IP65',
    description: 'Роботизированный тахеометр премиум-класса',
  },
  {
    id: 'sokkia-ix1001',
    name: 'Sokkia ix1001',
    category: 'tacheometers',
    categoryName: 'Тахеометры',
    brand: 'Sokkia',
    accuracy: '1"',
    range: '3500 м',
    weight: '5.2 кг',
    protection: 'IP66',
    description: 'Роботизированный тахеометр с автофокусом',
  },
  {
    id: 'trimble-s7',
    name: 'Trimble S7',
    category: 'tacheometers',
    categoryName: 'Тахеометры',
    brand: 'Trimble',
    accuracy: '1"',
    range: '2500 м',
    weight: '5.4 кг',
    protection: 'IP65',
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
    description: 'Цифровой нивелир с памятью 10 000 точек',
  },
];

export default function EquipmentPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const baseUrl = useBaseUrl('');

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
          marginBottom: '40px',
          marginTop: '0px',
          marginBottom: '20px'
        }}>
          <div style={{ position: 'relative', width: '600px' }}>  {/* чуть шире */}
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

        {/* 🏷️ КАТЕГОРИИ — СЛЕВА (КАК СЕЙЧАС) */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap', 
          marginBottom: '40px',
          marginLeft: '100px'
          // без justifyContent — будут прижаты влево
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
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(45, 90, 39, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                
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
                    e.target.parentNode.innerHTML += `
                      <div style="width:100%; height:180px; background:#F0F4EF; display:flex; align-items:center; justify-content:center; color:#2D5A27; border-radius:12px; margin-bottom:16px;">
                        📷 ${item.name}
                      </div>
                    `;
                  }}
                />

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