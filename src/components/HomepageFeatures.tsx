import React, { useState } from 'react';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchResult('');

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка запроса');
      }

      setSearchResult(data.answer);
    } catch (err) {
      console.error('Ошибка:', err);
      setSearchResult('❌ Произошла ошибка при поиске');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f9f7f3', minHeight: '100vh' }}>
      {/* Hero секция */}
      <header style={{ 
        padding: '80px 0 100px', 
        position: 'relative', 
        overflow: 'hidden',
        background: '#f9f7f3'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          opacity: 0.15,
          backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2606&auto=format&fit=crop")',
          backgroundSize: 'cover',
          filter: 'grayscale(100%) sepia(20%) hue-rotate(60deg) saturate(30%) brightness(1.1)',
          mixBlendMode: 'multiply'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '56px', 
              lineHeight: '1.1', 
              color: '#2D5A27', 
              marginBottom: '16px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Координаты знаний
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: '#6B776D', 
              marginBottom: '40px',
              lineHeight: '1.5'
            }}>
              База знаний и Telegram‑бот для быстрых ответов.
            </p>
            
           {/* Поисковая форма */}
           <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
             <form onSubmit={handleSearch}>
               <input 
                 type="text" 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 placeholder="Поиск стандартов, оборудования или расчётов..."
                 disabled={isSearching}
                 style={{
                   width: '100%',
                   padding: '20px 60px 20px 24px',
                   borderRadius: '12px',
                   border: '2px solid transparent',
                   background: 'white',
                   fontSize: '16px',
                   color: '#2D5A27',
                   outline: 'none',
                   boxShadow: '0 12px 24px rgba(45, 90, 39, 0.08)'
                 }}
               />
               <button
                 type="submit"
                 disabled={isSearching}
                 style={{
                   position: 'absolute',
                   right: '20px',
                   top: '50%',
                  transform: 'translateY(-50%)',
                   background: 'none',
                  border: 'none',
                   cursor: isSearching ? 'default' : 'pointer',
                   opacity: isSearching ? 0.5 : 1
                 }}
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                   <circle cx="11" cy="11" r="7" stroke="#2D5A27" strokeWidth="2"/>
                   <path d="M16 16L21 21" stroke="#2D5A27" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
               </button>
             </form>
           </div>

            {/* Результат поиска */}
            {searchResult && (
              <div style={{
                marginTop: '30px',
                padding: '24px',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #A7C4A0',
                textAlign: 'left',
                boxShadow: '0 4px 12px rgba(45, 90, 39, 0.1)'
              }}>
                <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📌 Ответ:</h3>
                <p style={{ lineHeight: '1.6', color: '#1A2A1A', margin: 0 }}>
                  {searchResult}
                </p>
              </div>
            )}

            <div style={{ 
              marginTop: '24px', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '12px', 
              fontSize: '14px', 
              color: '#6B776D' 
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M2 8L12 2L22 8V18L12 22L2 18V8Z" stroke="#6B776D" strokeWidth="1.5"/>
                  <path d="M12 12V16" stroke="#6B776D" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="9" r="1" fill="#6B776D"/>
                </svg>
                Популярное:
              </span>
              <Link to="/knowledge/articles/gnss-setup" style={{ color: '#2D5A27', textDecoration: 'none' }}>Настройка GNSS</Link>
              <span style={{ color: '#D4DCCD' }}>•</span>
              <Link to="/docs/coordinates" style={{ color: '#2D5A27', textDecoration: 'none' }}>Системы координат</Link>
              <span style={{ color: '#D4DCCD' }}>•</span>
              <Link to="/docs/iso-17123" style={{ color: '#2D5A27', textDecoration: 'none' }}>ISO 17123</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features секция — 3 карточки */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px' 
          }}>
            {/* Полевой помощник — кликабельная карточка */}
            <Link 
              to="https://t.me/GeodezistOnlineBot" 
              style={{ 
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <div style={{ 
                background: 'white', 
                borderRadius: '12px', 
                padding: '32px',
                border: '1px solid rgba(167, 196, 160, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(45, 90, 39, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #2D5A27, #A7C4A0)'
                }} />
                <img 
                  src="img/features/field-assistant.jpg" 
                  alt="Полевой помощник"
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '24px'
                  }}
                />
                <h3 style={{ 
                  fontSize: '20px', 
                  color: '#2D5A27', 
                  marginBottom: '8px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600 
                }}>
                  Полевой помощник
                </h3>
                <p style={{ 
                  color: '#6B776D', 
                  lineHeight: '1.6', 
                  fontSize: '15px', 
                  margin: 0 
                }}>
                  Просто напиши — бот найдёт ответ в базе знаний.
                </p>
              </div>
            </Link>

            {/* База знаний — кликабельная карточка */}
            <Link 
              to="/knowledge" 
              style={{ 
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <div style={{ 
                background: 'white', 
                borderRadius: '12px', 
                padding: '32px',
                border: '1px solid rgba(167, 196, 160, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(45, 90, 39, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #2D5A27, #A7C4A0)'
                }} />
                <img 
                  src="img/features/living-library.jpg" 
                  alt="База знаний"
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '24px'
                  }}
                />
                <h3 style={{ 
                  fontSize: '20px', 
                  color: '#2D5A27', 
                  marginBottom: '8px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600 
                }}>
                  База знаний
                </h3>
                <p style={{ 
                  color: '#6B776D', 
                  lineHeight: '1.6', 
                  fontSize: '15px', 
                  margin: 0 
                }}>
                  Постоянно пополняемая база знаний — от основ геодезии до современных технологий.
                </p>
              </div>
            </Link>

            {/* Сообщество знаний — кликабельная карточка */}
            <Link 
              to="/community" 
              style={{ 
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <div style={{ 
                background: 'white', 
                borderRadius: '12px', 
                padding: '32px',
                border: '1px solid rgba(167, 196, 160, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(45, 90, 39, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #2D5A27, #A7C4A0)'
                }} />
                <img 
                  src="img/features/community-update.jpg" 
                  alt="Сообщество знаний"
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '24px'
                  }}
                />
                <h3 style={{ 
                  fontSize: '20px', 
                  color: '#2D5A27', 
                  marginBottom: '8px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600 
                }}>
                  Сообщество знаний
                </h3>
                <p style={{ 
                  color: '#6B776D', 
                  lineHeight: '1.6', 
                  fontSize: '15px', 
                  margin: 0 
                }}>
                  Вы можете поделиться своим опытом, задать вопрос или заглянуть на доску объявлений.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* База знаний — 3 категории */}
      <section style={{ padding: '60px 0 100px', background: '#f9f7f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Заголовок секции */}
          <div style={{ 
            marginBottom: '48px', 
            display: 'flex', 
            alignItems: 'flex-end', 
            gap: '16px' 
          }}>
            <h2 style={{ 
              fontSize: '32px', 
              color: '#2D5A27', 
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              margin: 0
            }}>
              База знаний
            </h2>
            <div style={{ 
              flex: 1, 
              height: '1px', 
              background: '#A7C4A0', 
              opacity: 0.5,
              marginBottom: '8px'
            }} />
          </div>

          {/* Сетка категорий — 3 колонки */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px' 
          }}>
            {/* Калькуляторы */}
            <Link to="/calculators" style={{
              background: 'white', 
              border: '1px solid #D4DCCD',
              borderRadius: '12px',
              padding: '24px',
              textDecoration: 'none',
              display: 'block',
              transition: 'all 0.2s'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ color: '#2D5A27' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ 
                  fontSize: '13px', 
                  color: '#6B776D', 
                  background: '#F0F4EF',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontWeight: 500
                }}>
                </span>
              </div>
              <h4 style={{ 
                fontSize: '18px', 
                color: '#2D5A27', 
                marginBottom: '8px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600
              }}>
                Калькуляторы
              </h4>
              <p style={{ 
                fontSize: '14px', 
                color: '#6B776D', 
                margin: 0,
                lineHeight: '1.5'
              }}>
                Геодезические формулы, преобразования и оценка погрешностей.
              </p>
            </Link>

            {/* Оборудование */}
            <Link to="/equipment" style={{ 
              background: 'white', 
              border: '1px solid #D4DCCD',
              borderRadius: '12px',
              padding: '24px',
              textDecoration: 'none',
              display: 'block',
              transition: 'all 0.2s'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ color: '#2D5A27' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 19L9 15" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M19 19L15 15" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span style={{ 
                  fontSize: '13px', 
                  color: '#6B776D', 
                  background: '#F0F4EF',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontWeight: 500
                }}>
                </span>
              </div>
              <h4 style={{ 
                fontSize: '18px', 
                color: '#2D5A27', 
                marginBottom: '8px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600
              }}>
                Оборудование
              </h4>
              <p style={{ 
                fontSize: '14px', 
                color: '#6B776D', 
                margin: 0,
                lineHeight: '1.5'
              }}>
                Руководства и краткие инструкции по типовым приборам.
              </p>
            </Link>

            {/* Стандарты */}
            <Link to="/standards" style={{ 
              background: 'white', 
              border: '1px solid #D4DCCD',
              borderRadius: '12px',
              padding: '24px',
              textDecoration: 'none',
              display: 'block',
              transition: 'all 0.2s'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ color: '#2D5A27' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ 
                  fontSize: '13px', 
                  color: '#6B776D', 
                  background: '#F0F4EF',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontWeight: 500
                }}>
                  19 статей
                </span>
              </div>
              <h4 style={{ 
                fontSize: '18px', 
                color: '#2D5A27', 
                marginBottom: '8px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600
              }}>
                Стандарты
              </h4>
              <p style={{ 
                fontSize: '14px', 
                color: '#6B776D', 
                margin: 0,
                lineHeight: '1.5'
              }}>
                ISO‑нормы, правовые требования и протоколы безопасности.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}