import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../Header';
import BackToTop from '../BackToTop';

export default function StandardSpecs({ 
  hideHeader = false,  // ← добавить пропс
  fullTitle, year, status, description, content, pdfLink 
}) {
  const baseUrl = useBaseUrl('');
  const pdfUrl = useBaseUrl(pdfLink);

  const getStatusColor = (status) => {
    return status === 'действует' ? '#2D5A27' : '#B85C1F';
  };

  return (
    <div style={{ backgroundColor: '#f9f7f3', minHeight: '100vh' }}>
      {!hideHeader && <Header />}  {/* ← показывать шапку только если hideHeader=false */}
      
      <div className="standard-specs" style={{ 
        backgroundColor: '#f9f7f3', 
        minHeight: '100vh'
      }}>
        <article style={{ padding: '40px 24px' }}>
        
          {/* Кнопка назад */}
          <Link to="/standards" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#2D5A27',
            textDecoration: 'none',
            fontSize: '16px',
            marginBottom: '32px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19 12H5" strokeWidth="2"/>
              <path d="M12 19L5 12L12 5" strokeWidth="2"/>
            </svg>
            Назад в нормативную базу
          </Link>

          {/* Центрирующий контейнер (как в оборудовании) */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Белый блок */}
            <div style={{
              background: '#F9F7F3',
              borderRadius: '24px',
              padding: '40px',
              marginBottom: '32px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              
              {/* Заголовок */}
              <h1 style={{
                fontSize: '40px',
                color: '#2D5A27',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '16px',
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
                gap: '24px',
                marginBottom: '32px',
                fontSize: '16px'
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
                  padding: '24px',
                  marginBottom: '32px',
                  border: '1px solid #E0E8E0'
                }}>
                  <p style={{ color: '#1A2A1A', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                    {description}
                  </p>
                </div>
              )}

              {/* Основное содержимое */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid #E0E8E0'
              }}>
                <div 
                  dangerouslySetInnerHTML={{ __html: content }}
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#1A2A1A'
                  }}
                />

                {/* Кнопка скачивания */}
                {pdfLink && (
                  <div style={{ marginTop: '32px', textAlign: 'center' }}>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 32px',
                        backgroundColor: '#2D5A27',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '30px',
                        fontWeight: 500,
                        fontSize: '16px',
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
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
          </div>
        </article>
        <BackToTop />
      </div>
    </div>
  );
}