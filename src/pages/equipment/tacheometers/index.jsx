import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

const tacheometersData = [
  {
    id: 'leica-ts60',
    name: 'Leica TS60',
    description: 'Роботизированный тахеометр с точностью 0.5"',
    accuracy: '0.5"',
    range: '>3500 м',
    weight: '5.6 кг',
    protection: 'IP65',
    image: '/img/equipment/leica-ts60.jpg',
    link: '/equipment/tacheometers/leica-ts60'
  },
  {
    id: 'sokkia-ix1001',
    name: 'Sokkia iX-1001',
    description: 'Роботизированный тахеометр с системой автофокуса',
    accuracy: '1"',
    range: '3500 м',
    weight: '5.2 кг',
    protection: 'IP66',
    image: '/img/equipment/sokkia-ix1001.jpg',
    link: '/equipment/tacheometers/sokkia-ix1001'
  },
  {
    id: 'trimble-s7',
    name: 'Trimble S7',
    description: 'Механический тахеометр с технологией MagDrive',
    accuracy: '1"',
    range: '2500 м',
    weight: '5.4 кг',
    protection: 'IP65',
    image: '/img/equipment/trimble-s7.jpg',
    link: '/equipment/tacheometers/trimble-s7'
  }
];

export default function TacheometersPage() {
  return (
    <Layout title="Тахеометры" description="Роботизированные и механические тахеометры">
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Тахеометры', isCurrent: true }
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
          Тахеометры
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B776D', 
          marginBottom: '48px'
        }}>
          Роботизированные и механические тахеометры для геодезических работ
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {tacheometersData.map(item => (
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
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  borderTop: '1px solid #EDF3EA',
                  paddingTop: '16px'
                }}>
                  <div style={{ fontSize: '13px' }}>
                    <span style={{ color: '#6B776D' }}>Точность: </span>
                    <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item.accuracy}</span>
                  </div>
                  <div style={{ fontSize: '13px' }}>
                    <span style={{ color: '#6B776D' }}>Дальность: </span>
                    <span style={{ color: '#2D5A27', fontWeight: 500 }}>{item.range}</span>
                  </div>
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