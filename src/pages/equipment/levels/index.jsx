import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

const levelsData = [
  {
    id: 'leica-ls10',
    name: 'Leica LS10',
    description: 'Цифровой нивелир с точностью 0.3 мм/км для высокоточного нивелирования',
    accuracy: '0.3 мм/км',
    weight: '2.8 кг',
    protection: 'IP55',
    image: '/img/equipment/leica-ls10.jpg',
    link: '/equipment/levels/leica-ls10'
  },
  {
    id: 'sokkia-sdl30',
    name: 'Sokkia SDL30',
    description: 'Цифровой нивелир с памятью 10 000 точек',
    accuracy: '0.4 мм/км',
    weight: '2.5 кг',
    protection: 'IP54',
    image: '/img/equipment/sokkia-sdl30.jpg',
    link: '/equipment/levels/sokkia-sdl30'
  }
];

export default function LevelsPage() {
  return (
    <Layout title="Нивелиры" description="Цифровые нивелиры для геодезических работ">
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Нивелиры', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          color: '#2D5A27', 
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '16px'
        }}>
          Нивелиры
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B776D', 
          marginBottom: '48px'
        }}>
          Цифровые и оптические нивелиры для инженерно-геодезических работ
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {levelsData.map(item => (
            <Link
              key={item.id}
              to={item.link}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(167, 196, 160, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
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
                  src={item.image}
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
                    e.target.src = '/img/equipment/placeholder.jpg';
                  }}
                />
                
                <h3 style={{
                  fontSize: '20px',
                  color: '#2D5A27',
                  marginBottom: '12px',
                  fontWeight: 600
                }}>
                  {item.name}
                </h3>
                
                <p style={{
                  color: '#6B776D',
                  fontSize: '14px',
                  marginBottom: '16px',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  {item.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #EDF3EA',
                  paddingTop: '16px'
                }}>
                  <div style={{ fontSize: '14px' }}>
                    <span style={{ color: '#6B776D' }}>Точность: </span>
                    <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item.accuracy}</span>
                  </div>
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
      <BackToTop />
    </Layout>
  );
}