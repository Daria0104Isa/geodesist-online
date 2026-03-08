import React from 'react';
import './SearchResults.css';
import Link from '@docusaurus/Link';

export default function SearchResults({ results }) {
  console.log('SearchResults получил:', results);
  console.log('Тип данных:', typeof results);
  console.log('Длина:', results?.length);
  
  if (!results || results.length === 0) {
    return <div style={{ background: 'yellow', padding: '20px' }}>Нет результатов (отладка)</div>;
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: '20px',
      border: '1px solid rgba(167, 196, 160, 0.3)',
      boxShadow: '0 18px 40px rgba(45, 90, 39, 0.08)',
      maxWidth: '720px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      maxHeight: '500px',
      overflow: 'hidden'
    }}>
      {/* Заголовок и счётчик */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#EDF3EA',
          color: '#2D5A27',
          padding: '7px 11px',
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: 600,
          whiteSpace: 'nowrap'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="7" strokeWidth="2"/>
            <path d="M16 16L21 21" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Результаты поиска
        </div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(230, 180, 34, 0.16)',
          color: '#2D5A27',
          padding: '7px 11px',
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: 600,
          whiteSpace: 'nowrap'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2v4M12 22v-4M4 12H2M8 12H6M18 12h-2M22 12h-2M19.07 4.93l-2.83 2.83M4.93 19.07l2.83-2.83M19.07 19.07l-2.83-2.83M4.93 4.93l2.83 2.83" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
          </svg>
          {results.length} совпадения
        </div>
      </div>

      {/* Список результатов */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        overflow: 'hidden',
        height: '100%'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          overflowY: 'auto',
          paddingRight: '4px'
        }}>
          {results.map((result, index) => (
            <Link
              key={index}
              to={result.link}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                display: 'block',
                background: 'white',
                border: '1px solid rgba(167, 196, 160, 0.34)',
                borderRadius: '16px',
                padding: '14px 16px 13px',
                boxShadow: '0 8px 18px rgba(45, 90, 39, 0.04)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(45, 90, 39, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(45, 90, 39, 0.04)';
              }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {/* Верхняя строка с категорией и временем */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '5px 9px',
                      borderRadius: '999px',
                      background: 'rgba(167, 196, 160, 0.2)',
                      color: getTagColor(result.category),
                      fontSize: '11px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>
                      {result.category}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#6B776D',
                      whiteSpace: 'nowrap'
                    }}>
                      {result.readTime} мин чтения
                    </span>
                  </div>

                  {/* Заголовок */}
                  <h3 style={{
                    fontSize: '18px',
                    lineHeight: '1.35',
                    margin: 0,
                    color: '#2D5A27',
                    fontWeight: 600
                  }}>
                    {result.title}
                  </h3>

                  {/* Описание (2 строки) */}
                  <p style={{
                    fontSize: '13px',
                    lineHeight: '1.5',
                    margin: 0,
                    color: '#6B776D',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {result.description}
                  </p>

                  {/* Нижняя строка с совпадениями и стрелкой */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      color: '#2D5A27',
                      opacity: 0.82,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      🔍 Совпадение: {result.match || result.category}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" style={{ flexShrink: 0 }}>
                      <path d="M5 12H19" strokeWidth="2"/>
                      <path d="M12 5L19 12L12 19" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}