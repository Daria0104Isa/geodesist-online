import React, { useState } from 'react';  // ← добавить useState
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SearchModal from '../SearchModal';

export default function Header() {
  const baseUrl = useBaseUrl('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav style={{ 
        padding: '20px 0', 
        background: 'rgba(249, 247, 243, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(167, 196, 160, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Логотип слева */}
            <Link to="/" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              textDecoration: 'none',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              color: '#2D5A27'
            }}>
              <img 
                src={`${baseUrl}img/logo.png`}
                alt="Геодезист.Онлайн"
                style={{
                  width: '56px',
                  height: '56px',
                  objectFit: 'cover',
                }}
              />
              Геодезист.Онлайн
            </Link>
            
            {/* Навигация справа */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <Link to="/knowledge" style={{ color: '#2D5A27', textDecoration: 'none', fontWeight: 500 }}>
                База знаний
              </Link>
              <Link to="/calculators" style={{ color: '#2D5A27', textDecoration: 'none', fontWeight: 500 }}>
                Калькуляторы
              </Link>
              <Link to="/equipment" style={{ color: '#2D5A27', textDecoration: 'none', fontWeight: 500 }}>
                Оборудование
              </Link>
              <Link to="/standards" style={{ color: '#2D5A27', textDecoration: 'none', fontWeight: 500 }}>
                Стандарты
              </Link>
              <Link to="/community" style={{ color: '#2D5A27', textDecoration: 'none', fontWeight: 500 }}>
                Сообщество
              </Link>
              <Link to="https://t.me/GeodezistOnlineBot" style={{ 
                color: '#2D5A27', 
                textDecoration: 'none', 
                fontWeight: 600,
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(167, 196, 160, 0.2)'
              }}>
                Открыть бота
              </Link>
              
              {/* Кнопка поиска */}
              <button
                onClick={() => setIsSearchOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  marginLeft: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#2D5A27'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                  <path d="M16 16L21 21" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: '15px' }}>Поиск</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Модальное окно поиска */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}