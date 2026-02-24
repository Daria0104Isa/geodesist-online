import React from 'react';
import Link from '@docusaurus/Link';

export default function CTABlock({ 
  title = "База знаний всегда под рукой",
  description = "Получайте доступ к статьям, справочникам и инструкциям прямо в поле с помощью нашего Telegram-бота.",
  buttonText = "Открыть Telegram‑бота",
  buttonLink = "https://t.me/GeodezistOnlineBot",
  compact = false  // для меньших отступов на некоторых страницах
}) {
  return (
    <div style={{
      background: '#2D5A27',
      color: 'white',
      padding: compact ? '60px 0 40px' : '100px 0 60px',
      borderRadius: '16px 16px 0 0',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '60px'
    }}>
      {/* Декоративный фон */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)'
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: compact ? '28px' : '36px',
          marginBottom: '16px',
          color: 'white',
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          {title}
        </h2>
        
        <p style={{
          fontSize: compact ? '16px' : '18px',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: compact ? '24px' : '32px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
        
        <Link
          to={buttonLink}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: compact ? '12px 28px' : '14px 32px',
            borderRadius: '30px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: compact ? '15px' : '16px',
            background: 'white',
            color: '#2D5A27',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D5A27">
            <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}