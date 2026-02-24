import React from 'react';
import Link from '@docusaurus/Link';

const standardsData = [
  // ГОСТЫ
  {
    id: 'gost-22268-76',
    title: 'ГОСТ 22268-76',
    name: 'Геодезия. Термины и определения',
    category: 'gost',
    categoryName: 'ГОСТ',
    year: '1976',
    status: 'действует',
    description: 'Устанавливает термины и определения основных понятий в области геодезии.',
  },
  {
    id: 'gost-r-51872-2002',
    title: 'ГОСТ Р 51872-2002',
    name: 'Документация исполнительная геодезическая. Правила выполнения',
    category: 'gost',
    categoryName: 'ГОСТ',
    year: '2002',
    status: 'действует',
    description: 'Правила оформления исполнительной геодезической документации.',
  },
  {
    id: 'gost-26433-85',
    title: 'ГОСТ 26433.0-85',
    name: 'Система обеспечения точности геометрических параметров в строительстве',
    category: 'gost',
    categoryName: 'ГОСТ',
    year: '1985',
    status: 'действует',
    description: 'Правила выполнения измерений и контроля точности.',
  },

  // СНиПы
  {
    id: 'snip-3-01-03-84',
    title: 'СНиП 3.01.03-84',
    name: 'Геодезические работы в строительстве',
    category: 'snip',
    categoryName: 'СНиП',
    year: '1984',
    status: 'заменён',
    description: 'Правила производства геодезических работ при строительстве.',
  },
  {
    id: 'snip-11-02-96',
    title: 'СНиП 11-02-96',
    name: 'Инженерные изыскания для строительства. Основные положения',
    category: 'snip',
    categoryName: 'СНиП',
    year: '1996',
    status: 'заменён',
    description: 'Общие требования к организации и проведению инженерных изысканий.',
  },

  // СП
  {
    id: 'sp-47-13330-2016',
    title: 'СП 47.13330.2016',
    name: 'Инженерные изыскания для строительства. Основные положения',
    category: 'sp',
    categoryName: 'СП',
    year: '2016',
    status: 'действует',
    description: 'Актуализированная версия СНиП 11-02-96.',
  },
  {
    id: 'sp-11-104-97',
    title: 'СП 11-104-97',
    name: 'Инженерно-геодезические изыскания для строительства',
    category: 'sp',
    categoryName: 'СП',
    year: '1997',
    status: 'действует',
    description: 'Правила выполнения инженерно-геодезических изысканий.',
  },
];

export default function StandardsGrid({ filter, search }) {
  
  // Внутренние состояния и categories больше не нужны

  const filteredStandards = standardsData
  .filter(item => filter === 'all' || item.category === filter)
  .filter(item => 
    (item.title?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (item.name?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (item.description?.toLowerCase() || '').includes(search.toLowerCase())
  );


  const getStatusColor = (status) => {
    return status === 'действует' ? '#2D5A27' : '#B85C1F';
  };
console.log('filter:', filter);
console.log('первый элемент:', standardsData[0]);
  return (
    <div style={{ marginTop: '32px' }}>
      {/* Сетка карточек */}
      <div className="standards-grid">
        {filteredStandards.map(item => (
          <Link
            key={item.id}
            to={`/standards/${item.category}/${item.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(167, 196, 160, 0.3)',
              transition: 'transform 0.2s, boxShadow 0.2s',
              cursor: 'pointer',
              height: '100%',
              width: '100%',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(45, 90, 39, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '20px', color: '#2D5A27', margin: 0, fontWeight: 600 }}>
                  {item.title}
                </h3>
                <span style={{
                  background: '#A7C4A0',
                  color: '#1A3C17',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 500
                }}>
                  {item.categoryName}
                </span>
              </div>

              <h4 style={{ fontSize: '16px', color: '#4A5A4A', marginBottom: '12px', fontWeight: 500 }}>
                {item.name}
              </h4>

              <p style={{ color: '#6B776D', fontSize: '14px', marginBottom: '16px', lineHeight: '1.5' }}>
                {item.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #EDF3EA',
                paddingTop: '16px',
                fontSize: '14px'
              }}>
                <span style={{ color: '#6B776D' }}>
                  Год: {item.year}
                </span>
                <span style={{
                  color: getStatusColor(item.status),
                  fontWeight: 500
                }}>
                  {item.status === 'действует' ? '✅ Действует' : '⚠️ Заменён'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredStandards.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#F9F7F3',
          borderRadius: '16px',
          color: '#6B776D'
        }}>
          🔍 Ничего не найдено. Попробуйте изменить параметры поиска.
        </div>
      )}
    </div>
  );
}