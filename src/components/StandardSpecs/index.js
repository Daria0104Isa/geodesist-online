import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../Header';
import BackToTop from '../BackToTop';

export default function StandardSpecs({ 
  hideHeader = false,
  fullTitle, year, status, description, content, pdfLink 
}) {
  const baseUrl = useBaseUrl('');
  const pdfUrl = useBaseUrl(pdfLink);

  const getStatusColor = (status) => {
    return status === 'действует' ? '#2D5A27' : '#B85C1F';
  };

  return (
    <div style={{ backgroundColor: '#f9f7f3', minHeight: '100vh' }}>
      {!hideHeader && <Header />}
      
      <div className="standard-specs" style={{ 
        backgroundColor: '#f9f7f3', 
        minHeight: '100vh'
      }}>
        <article className="standard-content" style={{ 
          padding: '60px 40px',
          maxWidth: '1400px',   // ← ДОБАВИТЬ
          margin: '0 auto',      // ← ДОБАВИТЬ
          width: '100%'          // ← ДОБАВИТЬ
        }}>
        
          {/* Кнопка назад */}
          <Link to="/standards" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#2D5A27',
            textDecoration: 'none',
            fontSize: '16px',
            marginBottom: '40px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19 12H5" strokeWidth="2"/>
              <path d="M12 19L5 12L12 5" strokeWidth="2"/>
            </svg>
            Назад в нормативную базу
          </Link>

          {/* УБИРАЕМ ЛИШНИЙ КОНТЕЙНЕР — теперь всё на всю ширину */}
          
          {/* Белый блок на всю ширину */}
          <div style={{
            background: '#F9F7F3',
            borderRadius: '24px',
            padding: '48px',
            marginBottom: '40px',
            border: '1px solid rgba(167, 196, 160, 0.3)',
            width: '100%',
            maxWidth: '1600px',  // ← ДОБАВИТЬ
            margin: '0 auto'
          }}>
            
            {/* Заголовок */}
            <h1 style={{
              fontSize: '44px',
              color: '#2D5A27',
              fontFamily: 'Space Grotesk, sans-serif',
              marginBottom: '24px',
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: '1.2'
            }}>
              {fullTitle}
            </h1>

            {/* Статус и год */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '40px',
              fontSize: '18px'
            }}>
              <span style={{ color: '#6B776D' }}>
                Год: <strong>{year}</strong>
              </span>
              <span style={{
                color: getStatusColor(status),
                fontWeight: 500
              }}>
                {status === 'действует' ? '✅ Действует' : '⚠️ Заменён'}
              </span>
            </div>

            {/* Описание */}
            {description && (
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '40px',
                border: '1px solid #E0E8E0'
              }}>
                <p style={{ color: '#1A2A1A', fontSize: '17px', lineHeight: '1.7', margin: 0 }}>
                  {description}
                </p>
              </div>
            )}

            {/* Основное содержимое */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #E0E8E0',
              maxWidth: '100%',  // ← УВЕЛИЧЬТЕ ЭТО ЗНАЧЕНИЕ
              margin: '0 auto'
            }}>
              <div 
                dangerouslySetInnerHTML={{ __html: content }}
                style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#1A2A1A'
                }}
              />

              {/* Кнопка скачивания */}
              {pdfLink && (
                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '14px 40px',
                      backgroundColor: '#2D5A27',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '40px',
                      fontWeight: 600,
                      fontSize: '17px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1A3C17';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#2D5A27';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2"/>
                      <polyline points="7 10 12 15 17 10" strokeWidth="2"/>
                      <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2"/>
                    </svg>
                    Скачать {fullTitle.split(' ').slice(0,2).join(' ')} (PDF)
                  </a>
                </div>
              )}
            </div>
          </div>
        </article>
        <BackToTop />
      </div>
    </div>
  );
}