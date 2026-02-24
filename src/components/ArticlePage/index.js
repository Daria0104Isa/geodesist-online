import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ArticlePage({ 
  category, 
  title, 
  author, 
  authorRole, 
  date, 
  readTime, 
  content,
  relatedArticles 
}) {
  return (
    <div style={{ backgroundColor: '#f9f7f3' }}>
      {/* Шапка (можно будет использовать общий Header) */}
      
      <article style={{ maxWidth: '850px', margin: '0 auto', padding: '0 24px' }}>
        <Link to="/knowledge/teoriya" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#6B776D',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '15px',
          margin: '40px 0 24px'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 12H5" strokeWidth="2"/>
            <path d="M12 19L5 12L12 5" strokeWidth="2"/>
          </svg>
           Вернуться к теории
        </Link>

        <header style={{ marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(167, 196, 160, 0.2)',
            color: '#2D5A27',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '16px'
          }}>
            {category}
          </span>
          <h1 style={{
            fontSize: '48px',
            lineHeight: '1.2',
            marginBottom: '24px',
            color: '#2D5A27'
          }}>
            {title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: '#6B776D',
            fontSize: '14px',
            borderTop: '1px solid #D4DCCD',
            borderBottom: '1px solid #D4DCCD',
            padding: '16px 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={author.avatar || 'https://via.placeholder.com/40'}
                alt={author.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div style={{ fontWeight: 600, color: '#2D5A27' }}>{author.name}</div>
                <div style={{ fontSize: '13px' }}>{author.role}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                <path d="M3 10H21" strokeWidth="2"/>
              </svg>
              {date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M12 6V12L16 14" strokeWidth="2"/>
              </svg>
              {readTime} мин чтения
            </div>
          </div>
        </header>

        <div style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#334d30'
        }}>
          {content}
        </div>
      </article>

      {relatedArticles && relatedArticles.length > 0 && (
        <section style={{
          background: 'rgba(167, 196, 160, 0.1)',
          padding: '60px 0',
          marginTop: '60px',
          borderTop: '1px solid #D4DCCD'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{
              fontSize: '28px',
              color: '#2D5A27',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              Читайте также
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {relatedArticles.map((article, idx) => (
                <Link key={idx} to={article.link} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid #D4DCCD',
                    height: '100%'
                  }}>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <span style={{
                          fontSize: '13px',
                          color: '#1A3C17',
                          fontWeight: 600
                        }}>
                          {article.category}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: '20px',
                        color: '#2D5A27',
                        marginBottom: '12px',
                        lineHeight: '1.4'
                      }}>
                        {article.title}
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#6B776D',
                        marginBottom: '24px',
                        flex: 1
                      }}>
                        {article.description}
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid #D4DCCD',
                        paddingTop: '16px'
                      }}>
                        <span style={{ fontSize: '13px', color: '#6B776D' }}>
                          {article.readTime} мин чтения
                        </span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A27">
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
        </section>
      )}
    </div>
  );
}