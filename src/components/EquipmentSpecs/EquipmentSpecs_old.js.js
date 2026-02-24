import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function EquipmentSpecs({ 
name, brand, model, type, accuracy, range, weight, protection, battery, memory, display, software 
}) {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;

  // Собираем характеристики в массив для удобства
  const specs = [
    { label: 'Тип', value: type },
    { label: 'Точность', value: accuracy },
    { label: 'Дальность', value: range },
    { label: 'Вес', value: weight },
    { label: 'Защита', value: protection },
    { label: 'Время работы', value: battery },
    { label: 'Память', value: memory },
    { label: 'Дисплей', value: display },
    { label: 'ПО', value: software },
  ].filter(spec => spec.value); // убираем пустые

        return (
    <>
      {/* КНОПКА НАЗАД — СНАРУЖИ, ПЕРЕД БЕЛЫМ БЛОКОМ */}
      <div style={{ marginBottom: '16px', marginLeft: '-100px' }}>
        <Link
          to="/equipment"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#2D5A27',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: '30px',
            backgroundColor: 'white',
            border: '1px solid #A7C4A0',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F0F7F0';
            e.currentTarget.style.borderColor = '#2D5A27';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.borderColor = '#A7C4A0';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Назад в каталог оборудования
        </Link>
      </div>

      {/* БЕЛЫЙ БЛОК С ХАРАКТЕРИСТИКАМИ И ФОТО */}
      <div style={{
        background: '#F9F7F3',
        borderRadius: '24px',
        padding: '20px',
        marginBottom: '32px',
        border: '1px solid rgba(167, 196, 160, 0.3)',
        overflow: 'visible'
      }}>
        {/* НАЗВАНИЕ ПРИБОРА */}
        <h1 style={{
          fontSize: '32px',
          color: '#1A3C17',
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '8px',
          fontWeight: 600,
          textAlign: 'center'
        }}>
          {name || `${brand} ${model}`}
        </h1>

        {/* ЗАГОЛОВОК ХАРАКТЕРИСТИК */}
        <h4 style={{ 
          color: '#2D5A27', 
          marginBottom: '20px', 
          fontSize: '22px',
          fontWeight: 600
        }}>
          Технические характеристики
        </h4>

        {/* ДВЕ КОЛОНКИ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* ЛЕВАЯ КОЛОНКА — ХАРАКТЕРИСТИКИ */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}>
            {specs.map((spec, index) => (
              <div key={index} style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '14px 16px',
                border: '1px solid #E0E8E0',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{ 
                  color: '#4A5A4A', 
                  fontSize: '12px', 
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 500
                }}>
                  {spec.label}
                </div>
                <div style={{ 
                  color: '#1A2A1A', 
                  fontWeight: 600, 
                  fontSize: '16px',
                  lineHeight: '1.4'
                }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* ПРАВАЯ КОЛОНКА — ФОТО */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(45, 90, 39, 0.04)'
          }}>
            <img 
              src={`${baseUrl}img/equipment/${brand?.toLowerCase()}-${model?.toLowerCase()}.jpg`}
              alt={`${brand} ${model}`}
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                maxHeight: '300px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `
                  <div style="width:100%; padding:40px; background:#EDF3EA; display:flex; align-items:center; justify-content:center; color:#2D5A27; border-radius:12px;">
                    📷 ${brand} ${model}
                  </div>
                `;
              }}
            />
          </div>
        </div>
      </div>
    </> 
  );
}