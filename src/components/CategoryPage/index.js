import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../Header';  // или '../Header.jsx' — зависит от структуры
import Breadcrumbs from '../Breadcrumbs';

export default function CategoryPage({ categoryName, articles, breadcrumbs }) {
  const baseUrl = useBaseUrl('');

  return (
    <div style={{ backgroundColor: '#f9f7f3', minHeight: '100vh' }}>
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 24px' }}>
        
        {/* Хлебные крошки */}
        {breadcrumbs && (
          <div style={{ marginBottom: '16px' }}>
            <Breadcrumbs 
              paths={breadcrumbs} 
              containerStyle={{ padding: 0, margin: 0 }} 
            />
          </div>
        )}

        {/* Кнопка "Назад к категориям" */}
        <div style={{ marginBottom: '32px' }}>
          <Link 
            to="/knowledge" 
            style={{ 
              color: '#2D5A27', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: 500
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M19 12H5" strokeWidth="2"/>
              <path d="M12 19L5 12L12 5" strokeWidth="2"/>
            </svg>
            ← Назад к категориям
          </Link>
        </div>

        {/* Заголовок */}
        <h1 style={{
          fontSize: '48px',
          color: '#2D5A27',
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '16px'
        }}>
          {categoryName}
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#6B776D',
          marginBottom: '48px'
        }}>
          {articles.length} статей в этом разделе
        </p>

        {/* Список статей */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {articles.map((article, idx) => (
            <Link
              key={idx}
              to={article.link}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(167, 196, 160, 0.3)',
                transition: 'transform 0.2s',
                height: '100%'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    background: 'rgba(167, 196, 160, 0.2)',
                    color: '#2D5A27',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 600
                  }}>
                    {article.readTime} мин
                  </span>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  color: '#2D5A27',
                  marginBottom: '12px',
                  fontWeight: 600
                }}>
                  {article.title}
                </h3>
                <p style={{
                  color: '#6B776D',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {article.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #EDF3EA',
                  paddingTop: '16px'
                }}>
                  <span style={{ fontSize: '14px', color: '#6B776D' }}>
                    {article.author}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A27">
                    <path d="M5 12H19" strokeWidth="2"/>
                    <path d="M12 5L19 12L12 19" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}