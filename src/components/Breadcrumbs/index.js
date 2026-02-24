import React from 'react';
import Link from '@docusaurus/Link';

export default function Breadcrumbs({ paths }) {
  // paths = [
  //   { name: 'Главная', link: '/' },
  //   { name: 'База знаний', link: '/knowledge' },
  //   { name: 'Основы оборудования', link: '/knowledge/oborudovanie' },
  //   { name: 'Настройка GNSS', isCurrent: true }
  // ]

  return (
    <div style={{ 
      display: 'flex', 
      gap: '8px', 
      fontSize: '14px', 
      color: '#6B776D',
    }}>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span style={{ color: '#D4DCCD' }}>/</span>}
          {path.isCurrent ? (
            <span style={{ color: '#2D5A27', fontWeight: 500 }}>{path.name}</span>
          ) : (
            <Link to={path.link} style={{ color: '#2D5A27', textDecoration: 'none' }}>
              {path.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}