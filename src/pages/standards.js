import React, { useState } from 'react';
import Layout from '@theme/Layout';
import StandardsGrid from '../components/StandardsGrid';
import Header from '../components/Header';
import CTABlock from '../components/CTABlock';
import BackToTop from '../components/BackToTop';

const categories = [
  { id: 'all', name: 'Все' },
  { id: 'gost', name: 'ГОСТ' },
  { id: 'snip', name: 'СНиП' },
  { id: 'sp', name: 'СП' },
];

export default function StandardsPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  
  return (
    <Layout title="Нормативная база" description="ГОСТы, СНиПы, СП и другие документы">
      <Header />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* 🔍 ПОИСК — ПО ЦЕНТРУ СВЕРХУ */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginBottom: '20px',
          marginTop: '10px'
        }}>
          <div style={{ position: 'relative', width: '600px' }}>
            <input
              type="text"
              placeholder="Поиск по номеру или названию..."
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
          Нормативная база
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B776D', 
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          ГОСТы, СНиПы, СП и другие документы для геодезистов и строителей
        </p>

        {/* Якоря для навигации по категориям */}
        <div style={{ height: 0, overflow: 'hidden', position: 'absolute', top: '-100px' }}>
          <h2 id="gost">ГОСТы</h2>
          <h2 id="snip">СНиПы</h2>
          <h2 id="sp">СП</h2>
        </div>
        {/* КАТЕГОРИИ — СЛЕВА */}
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
              id={cat.id === 'gost' ? 'gost' : cat.id === 'snip' ? 'snip' : cat.id === 'sp' ? 'sp' : null}
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

        {/* СЕТКА СТАНДАРТОВ */}
        <StandardsGrid filter={filter} search={search} />
      </div>
      <CTABlock 
        title="Не нашли нужный документ?"
        description="Отправьте запрос в Telegram-бот — мы добавим его в базу"
        buttonText="Отправить запрос"
        buttonLink="https://t.me/GeodezistOnlineBot"
        compact={true}
      />
      <BackToTop />
    </Layout>
  );
}