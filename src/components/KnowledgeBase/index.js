import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function KnowledgeBase() {
  const baseUrl = useBaseUrl('');

  const categories = [
    {
      title: 'Теория и основы',
      description: 'Базовые принципы геодезии, системы координат, картография и математическая обработка измерений.',
      icon: 'book-open',
      count: 42,
      color: '#2D5A27',
      link: '/knowledge/teoriya'
    },
    {
      title: 'Полевые методы',
      description: 'Практические руководства по выполнению съемок, разбивочных работ и созданию съемочного обоснования.',
      icon: 'compass',
      count: 38,
      color: '#A7C4A0',
      link: '/docs/category/полевые-методы'
    },
    {
      title: 'Основы оборудования',
      description: 'Принципы работы тахеометров, нивелиров и GNSS-приемников. Поверки и юстировки приборов.',
      icon: 'crosshair',
      count: 25,
      color: '#E6B422',
      link: '/knowledge/oborudovanie'
    },
    {
      title: 'Обработка данных',
      description: 'Камеральные работы, уравнивание сетей, работа в специализированном ПО.',
      icon: 'laptop',
      count: 31,
      color: '#5D7559',
      link: '/docs/category/обработка'
    },
    {
      title: 'Справочник',
      description: 'Глоссарий терминов, сборник формул, допуски и выдержки из нормативной документации.',
      icon: 'library',
      count: 54,
      color: '#2D5A27',
      link: '/docs/category/справочник'
    },
    {
      title: 'Не нашли ответ?',
      description: 'Задайте вопрос в нашем сообществе или предложите свою статью для базы знаний.',
      icon: 'help-circle',
      isSpecial: true,
      link: '/community'
    }
  ];

  const popularArticles = [
    {
      title: 'Установка и центрирование тахеометра',
      category: 'Полевые методы',
      readTime: 5,
      link: '/docs/pribory/tacheometry'
    },
    {
      title: 'Основы работы с GNSS-приемниками в RTK',
      category: 'Основы оборудования',
      readTime: 8,
      link: '/docs/pribory/gnss-priemnik'
    },
    {
      title: 'Построение геодезических сетей сгущения',
      category: 'Теория и основы',
      readTime: 12,
      link: '/docs/metodiki/geodezicheskie-seti'
    },
    {
      title: 'Уравнивание теодолитного хода',
      category: 'Обработка данных',
      readTime: 15,
      link: '/docs/obrabotka/uravnivanie'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f9f7f3' }}>
      {/* HERO — как в Banani.co с увеличенными отступами */}
      <header style={{
        padding: '120px 0 140px',
        minHeight: '300px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(167, 196, 160, 0.3)',
        background: 'linear-gradient(180deg, rgba(167,196,160,0.1) 0%, rgba(249,247,243,0) 100%)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.1,
          backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2606&auto=format&fit=crop")',
          backgroundSize: 'cover',
          filter: 'grayscale(100%) sepia(20%) hue-rotate(60deg) saturate(30%) brightness(1.1)',
          mixBlendMode: 'multiply'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{
              fontSize: '48px',
              marginBottom: '24px',
              color: '#2D5A27',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              База знаний
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#6B776D',
              marginBottom: '48px',
              lineHeight: '1.6'
            }}>
              Библиотека теоретических и практических материалов по геодезии.
              Изучайте основы, осваивайте полевые методы и находите ответы на
              профессиональные вопросы.
            </p>

            <div style={{
              position: 'relative',
              maxWidth: '640px',
              margin: '0 auto',
              boxShadow: '0 12px 24px rgba(45, 90, 39, 0.08)',
              borderRadius: '24px'
            }}>
              <input
                type="text"
                placeholder="Поиск статей, терминов или инструкций..."
                style={{
                  width: '100%',
                  padding: '20px 60px 20px 24px',
                  borderRadius: '24px',
                  border: '2px solid #A7C4A0',
                  background: 'white',
                  fontSize: '16px',
                  color: '#2D5A27',
                  outline: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#2D5A27'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                  <path d="M16 16L21 21" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CATEGORIES — как в Banani.co */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: cat.isSpecial ? '#2D5A27' : 'white',
                border: '1px solid #D4DCCD',
                borderRadius: '12px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
              }}>
                {!cat.isSpecial && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: cat.color,
                    opacity: 0.8
                  }} />
                )}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: cat.isSpecial ? 'rgba(255,255,255,0.15)' : 'rgba(167, 196, 160, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={cat.isSpecial ? 'white' : '#2D5A27'}>
                      {cat.icon === 'book-open' && <><path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2"/><path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2"/></>}
                      {cat.icon === 'compass' && <><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/><path d="M16 8L12 12" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></>}
                      {cat.icon === 'crosshair' && <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 4V2M12 22V20M20 12H22M2 12H4" stroke="currentColor" strokeWidth="2"/></>}
                      {cat.icon === 'laptop' && <><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2"/></>}
                      {cat.icon === 'library' && <><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 8H16M8 12H13" stroke="currentColor" strokeWidth="2"/></>}
                      {cat.icon === 'help-circle' && <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.92594 12.4272 7.05971C13.1255 7.19348 13.7538 7.57536 14.1885 8.1275C14.6232 8.67964 14.8321 9.36157 14.77 10.045C14.708 10.7285 14.3795 11.3596 13.9 11.8C13.4205 12.2404 13 13 13 14" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/></>}
                    </svg>
                  </div>
                  {!cat.isSpecial && (
                    <span style={{
                      background: '#F0F4EF',
                      color: '#6B776D',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 500
                    }}>
                      {cat.count} статей
                    </span>
                  )}
                </div>
                <h3 style={{
                  color: cat.isSpecial ? 'white' : '#2D5A27',
                  fontSize: '20px',
                  marginBottom: '16px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600
                }}>
                  {cat.title}
                </h3>
                <p style={{
                  color: cat.isSpecial ? 'rgba(255,255,255,0.8)' : '#6B776D',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {cat.description}
                </p>
                {cat.isSpecial && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '24px',
                    color: '#E6B422',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                    Перейти в чат
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E6B422">
                      <path d="M5 12H19" strokeWidth="2"/>
                      <path d="M12 5L19 12L12 19" strokeWidth="2"/>
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* POPULAR ARTICLES — как в Banani.co */}
        <div style={{ marginTop: '60px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <h2 style={{
              fontSize: '28px',
              color: '#2D5A27',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Популярные материалы
            </h2>
            <div style={{
              flex: 1,
              height: '1px',
              background: '#A7C4A0',
              opacity: 0.5,
              marginBottom: '16px'
            }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }}>
            {popularArticles.map((article, idx) => (
              <Link key={idx} to={article.link} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #D4DCCD'
                }}>
                  <div style={{
                    background: 'rgba(167, 196, 160, 0.15)',
                    padding: '12px',
                    borderRadius: '10px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A27">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" strokeWidth="2"/>
                      <path d="M14 2V8H20" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      color: '#2D5A27',
                      fontSize: '16px',
                      marginBottom: '6px',
                      fontWeight: 600
                    }}>
                      {article.title}
                    </h4>
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      fontSize: '13px',
                      color: '#6B776D'
                    }}>
                      <span>{article.category}</span>
                      <span style={{ color: '#D4DCCD' }}>•</span>
                      <span>{article.readTime} мин чтения</span>
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B776D">
                    <path d="M9 18L15 12L9 6" strokeWidth="2"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* QUICK LINKS — как в Banani.co */}
        <div style={{ textAlign: 'center', padding: '60px 0 20px' }}>
          <p style={{
            fontSize: '16px',
            color: '#6B776D',
            marginBottom: '24px'
          }}>
            Также на Геодезист.Онлайн:
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            {[
              { to: '/equipment', icon: 'camera', label: 'Оборудование' },
              { to: '/standards', icon: 'scroll-text', label: 'Стандарты и ГОСТы' },
              { to: '/calculators', icon: 'calculator', label: 'Калькуляторы' },
              { to: '/community', icon: 'users', label: 'Сообщество' }
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: 'white',
                  border: '1px solid #D4DCCD',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  color: '#2D5A27',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D5A27">
                  {link.icon === 'camera' && <><path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" strokeWidth="2"/><circle cx="12" cy="13" r="4" strokeWidth="2"/></>}
                  {link.icon === 'scroll-text' && <><path d="M8 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V16M8 12H16M8 8H12" strokeWidth="2"/><path d="M3 16H8" strokeWidth="2"/></>}
                  {link.icon === 'calculator' && <><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2"/><path d="M8 6H16M8 10H16M8 14H13M8 18H13" strokeWidth="2"/></>}
                  {link.icon === 'users' && <><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" strokeWidth="2"/><circle cx="18" cy="7" r="4" strokeWidth="2"/></>}
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA секция — как в Banani.co */}
      <div style={{
        background: '#2D5A27',
        color: 'white',
        padding: '100px 0 60px',
        borderRadius: '16px 16px 0 0',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '60px'
      }}>
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
            fontSize: '36px',
            marginBottom: '24px',
            color: 'white',
            fontFamily: 'Space Grotesk, sans-serif'
          }}>
            База знаний всегда под рукой
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '32px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Получайте доступ к статьям, справочникам и инструкциям прямо в поле
            с помощью нашего Telegram-бота.
          </p>
          <Link
            to="https://t.me/GeodezistOnlineBot"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '30px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '16px',
              background: 'white',
              color: '#2D5A27',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D5A27">
              <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            Открыть Telegram‑бота
          </Link>
        </div>
      </div>
    </div>
  );
}