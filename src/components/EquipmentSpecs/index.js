import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BackToTop from '../BackToTop';
import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';  // ← добавить импорт

export default function EquipmentSpecs({ 
  hideHeader = false,
  breadcrumbs,
  brand, model, type, 
  angularAccuracy, rangePrism, rangeNonPrism, accuracyPrism, accuracyNonPrism,
  measurementTimePrecise, measurementTimeFast,
  centeringType, centeringAccuracy, sightIndicator, targetIndicator,
  compensatorType, compensatorRange,
  magnification, minFocusingDistance,
  battery, chargingTime,
  keyboard, display,
  memory, interfaces,
  weight, protection, tempRange,
  software, dataFormats, country, warranty,
  description, manual, documentation
}) {
  const baseUrl = useBaseUrl('');

  // Формируем массив характеристик
  const specs = [
    // Основное (самое важное)
    { label: 'Точность угловых измерений', value: angularAccuracy },
    { label: 'Дальность на призму', value: rangePrism },
    { label: 'Дальность без отражателя', value: rangeNonPrism },
    { label: 'Точность на призму', value: accuracyPrism },
    { label: 'Точность без отражателя', value: accuracyNonPrism },
  
    // Режимы работы
    { label: 'Точный режим', value: measurementTimePrecise },
    { label: 'Быстрый режим', value: measurementTimeFast },
  
    // Компенсатор и указатели
    { label: 'Компенсатор', value: compensatorType ? `${compensatorType} (${compensatorRange})` : null },
    { label: 'Створоуказатель', value: sightIndicator },
    { label: 'Целеуказатель', value: targetIndicator },
  
    // Оптика
    { label: 'Увеличение трубы', value: magnification },
    { label: 'Мин. фокусировка', value: minFocusingDistance },
  
    // Питание и вес
    { label: 'Время работы', value: battery },
    { label: 'Вес', value: weight },
    { label: 'Защита', value: protection },
  
    // Управление и память
    { label: 'Дисплей', value: display },
    { label: 'Память', value: memory },
    { label: 'Интерфейсы', value: interfaces },
  
    // ПО и гарантия
    { label: 'ПО', value: software },
    { label: 'Страна производства', value: country },
    { label: 'Гарантия', value: warranty },
  ].filter(spec => spec.value);

  const name = `${brand || ''} ${model || ''}`.trim() || 'Прибор';

  return (
    <div style={{ backgroundColor: '#f9f7f3', minHeight: '100vh' }}>
      {!hideHeader && <Header />}
      
      <div className="equipment-specs" style={{ 
        backgroundColor: '#f9f7f3', 
        minHeight: '100vh'
      }}>
        <article style={{ padding: '40px 24px', maxWidth: '2200px', margin: '0 auto'  }}>
          
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
            gridTemplateColumns: '1fr 2.5fr',
            gap: '40px',
            marginBottom: '48px',
            alignItems: 'center'
          }}>
            
            {/* Левая колонка — фото */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '1px',
              border: '1px solid rgba(167, 196, 160, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px'
            }}>
              <img 
                src={useBaseUrl(`/img/equipment/${brand?.toLowerCase()}-${model?.toLowerCase()}.jpg`)}
                alt={name}
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  height: 'auto',
                  maxHeight: '380px',
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
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px'
                  }}>
                    {specs.map((spec, idx) => (
                      <div key={idx} style={{
                        background: '#F9F7F3',
                        borderRadius: '8px',
                        padding: '10px'
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
              border: '1px solid rgba(167, 196, 160, 0.3)',
              width: '100%'
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
          {(manual || (documentation && documentation.length > 0)) && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '40px',
              border: '1px solid rgba(167, 196, 160, 0.3)'
            }}>
              <h2 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px' }}>
                📖 Руководство пользователя
              </h2>
    
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                {/* Если передан manual (один файл) */}
                {manual && (
                  <a
                    href={manual}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 24px',
                      backgroundColor: '#2D5A27',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '40px',
                      fontWeight: 600,
                      fontSize: '16px',
                      width: 'fit-content',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3C17'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#2D5A27'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2"/>
                      <polyline points="7 10 12 15 17 10" strokeWidth="2"/>
                      <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2"/>
                    </svg>
                    Скачать руководство (PDF)
                  </a>
                )}
                
                {/* Если передан documentation (массив файлов) */}
                {documentation && documentation.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 24px',
                      backgroundColor: '#2D5A27',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '40px',
                      fontWeight: 600,
                      fontSize: '16px',
                      width: 'fit-content',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3C17'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#2D5A27'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2"/>
                      <polyline points="7 10 12 15 17 10" strokeWidth="2"/>
                      <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2"/>
                    </svg>
                    {doc.label}
                  </a>
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