import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BackToTop from '../BackToTop';
import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';  // ← добавить импорт

export default function EquipmentSpecs({ 
  hideHeader = false,
  breadcrumbs,  // ← новый пропс
  brand, model, type, accuracy, range, weight, protection, battery, memory, display, software,
  description, documentation, issues, compatibility, similarModels, image
}) {
  const baseUrl = useBaseUrl('');

  // Формируем массив характеристик из пропсов
  const specs = [
    { label: 'Точность', value: accuracy },
    { label: 'Дальность', value: range },
    { label: 'Вес', value: weight },
    { label: 'Защита', value: protection },
    { label: 'Время работы', value: battery },
    { label: 'Память', value: memory },
    { label: 'Дисплей', value: display },
    { label: 'ПО', value: software },
  ].filter(spec => spec.value);

  const name = `${brand || ''} ${model || ''}`.trim() || 'Прибор';

  return (
    <div style={{ backgroundColor: '#f9f7f3', minHeight: '100vh' }}>
      {!hideHeader && <Header />}
      
      <div className="equipment-specs" style={{ 
        backgroundColor: '#f9f7f3', 
        minHeight: '100vh'
      }}>
        <article style={{ padding: '40px 24px' }}>
          
          {/* Хлебные крошки — теперь ПОД шапкой, НАД контентом */}
          {breadcrumbs && (
            <div style={{ maxWidth: '1200px', margin: '0 auto 32px', width: '100%' }}>
              <Breadcrumbs 
                paths={breadcrumbs} 
                containerStyle={{ padding: 0, margin: 0 }} 
              />
            </div>
          )}
        
          {/* Кнопка назад */}
          <Link to="/equipment" style={{
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
            Назад в каталог
          </Link>

          {/* Заголовок и фото + характеристики */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            marginBottom: '48px'
          }}>
            
            {/* Левая колонка — фото */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(167, 196, 160, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={useBaseUrl(`/img/equipment/${brand?.toLowerCase()}-${model?.toLowerCase()}.jpg`)}
                alt={name}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.src = `${baseUrl}/img/equipment/placeholder.jpg`;
                }}
              />
            </div>

            {/* Правая колонка — характеристики */}
            <div>
              <h1 style={{
                fontSize: '40px',
                color: '#2D5A27',
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: '8px'
              }}>
                {name}
              </h1>
              <p style={{
                fontSize: '18px',
                color: '#6B776D',
                marginBottom: '24px'
              }}>
                {type || 'Геодезический прибор'}
              </p>

              {specs.length > 0 && (
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(167, 196, 160, 0.3)'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    color: '#2D5A27',
                    marginBottom: '20px',
                    fontWeight: 600
                  }}>
                    Технические характеристики
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px'
                  }}>
                    {specs.map((spec, idx) => (
                      <div key={idx} style={{
                        background: '#F9F7F3',
                        borderRadius: '8px',
                        padding: '12px'
                      }}>
                        <div style={{ color: '#6B776D', fontSize: '13px', marginBottom: '4px' }}>
                          {spec.label}
                        </div>
                        <div style={{ color: '#2D5A27', fontWeight: 600, fontSize: '16px' }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Описание */}
          {description && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '0px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              <h2 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '16px' }}>
                📋 Описание
              </h2>
              <div style={{ color: '#1A2A1A', lineHeight: '1.7', fontSize: '16px' }}>
                {description}
              </div>
            </div>
          )}

          {/* Документация */}
          {documentation && documentation.length > 0 && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '0px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              <h2 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '16px' }}>
                📥 Документация
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {documentation.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#2D5A27',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      background: '#F9F7F3',
                      borderRadius: '8px',
                      width: 'fit-content'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" strokeWidth="2"/>
                      <path d="M12 3V15M12 15L9 12M12 15L15 12" strokeWidth="2"/>
                    </svg>
                    {doc.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Таблица неисправностей */}
          {issues && issues.length > 0 && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '0px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              <h2 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '16px' }}>
                🔧 Типовые неисправности
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '15px'
                }}>
                  <thead>
                    <tr style={{ background: '#F0F4EF' }}>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #D4DCCD' }}>Проблема</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #D4DCCD' }}>Причина</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #D4DCCD' }}>Решение</th>
                    </tr>
                  </thead>
                  <tbody>
                    {issues.map((issue, idx) => (
                      <tr key={idx}>
                        <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{issue.problem}</td>
                        <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{issue.cause}</td>
                        <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{issue.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Совместимость */}
          {compatibility && compatibility.length > 0 && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '0px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              <h2 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '16px' }}>
                📱 Совместимость
              </h2>
              <div style={{ color: '#1A2A1A', lineHeight: '1.7' }}>
                {compatibility.map((section, idx) => (
                  <div key={idx} style={{ marginBottom: '16px' }}>
                    <strong>{section.title}:</strong> {section.items.join(', ')}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Похожие модели */}
          {similarModels && similarModels.length > 0 && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              <h2 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '16px' }}>
                🎯 Похожие модели
              </h2>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {similarModels.map((model, idx) => (
                  <Link
                    key={idx}
                    to={model.link}
                    style={{
                      padding: '8px 16px',
                      background: '#F9F7F3',
                      borderRadius: '8px',
                      color: '#2D5A27',
                      textDecoration: 'none'
                    }}
                  >
                    {model.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
        <BackToTop />
      </div>
    </div>
  );
}