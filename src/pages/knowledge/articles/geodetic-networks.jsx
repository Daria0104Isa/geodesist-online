import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import BackToTop from '../../../components/BackToTop';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function GeodeticNetworks() {
  const content = (
    <>
      <p>
        Геодезические сети — это основа любого геодезического проекта. Представьте, 
        что вы строите дом: вам нужен прочный фундамент. В геодезии таким фундаментом 
        служат пункты государственной геодезической сети (ГГС), от которых мы "отталкиваемся" 
        при всех измерениях.
      </p>

      <h2>🗺️ Что такое геодезическая сеть?</h2>
      <p>
        <strong>Геодезическая сеть</strong> — это система закрепленных на местности точек 
        (пунктов), положение которых определено в общей системе координат и высот. 
        Эти пункты служат исходными для выполнения топографических съемок, разбивочных 
        работ и решения других инженерных задач.
      </p>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>🎯 Основное назначение:</h3>
        <ul>
          <li>Единая система координат на всей территории работ</li>
          <li>Контроль точности измерений</li>
          <li>Возможность выполнения работ разными исполнителями</li>
          <li>Мониторинг деформаций зданий и сооружений</li>
        </ul>
      </div>

      <h2>📊 Классификация геодезических сетей</h2>

      <h3>По территориальному охвату:</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        margin: '24px 0'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            marginBottom: '8px'
          }}>🌍</div>
          <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Глобальные</h4>
          <p style={{ fontSize: '14px', margin: 0 }}>ITRF, WGS-84</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            marginBottom: '8px'
          }}>🇷🇺</div>
          <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Государственные</h4>
          <p style={{ fontSize: '14px', margin: 0 }}>ГГС (1, 2, 3, 4 классы)</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            marginBottom: '8px'
          }}>🏗️</div>
          <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Специальные</h4>
          <p style={{ fontSize: '14px', margin: 0 }}>Съемочные, строительные</p>
        </div>
      </div>

      <h3>По методу построения:</h3>

      <div style={{ overflowX: 'auto', margin: '32px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px'
        }}>
          <thead>
            <tr style={{
              background: 'rgba(167, 196, 160, 0.1)',
              color: '#2D5A27'
            }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Метод</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Суть</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Точность</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Применение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Триангуляция</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Измерение углов в треугольниках</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Высокая</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Классический метод, открытая местность</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Полигонометрия</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Измерение углов и длин сторон</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Высокая</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Закрытая местность, город</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Трилатерация</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Измерение только длин сторон</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Средняя</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Специальные задачи</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Спутниковые методы (GNSS)</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Определение координат по спутникам</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Очень высокая</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Современный метод для любых условий</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🏛️ Государственная геодезическая сеть (ГГС)</h2>
      
      <p>
        ГГС России подразделяется на:
      </p>

      <div style={{
        background: 'linear-gradient(135deg, #F0F4EF 0%, #ffffff 100%)',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              background: '#2D5A27',
              color: 'white',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>1</span>
            <div>
              <strong>ФАГС</strong> — Фундаментальная астрономо-геодезическая сеть (точность 2-3 см)
            </div>
          </li>
          <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              background: '#2D5A27',
              color: 'white',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>2</span>
            <div>
              <strong>ВГС</strong> — Высокоточная геодезическая сеть (точность 3-5 см)
            </div>
          </li>
          <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              background: '#2D5A27',
              color: 'white',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>3</span>
            <div>
              <strong>СГС-1</strong> — Спутниковая геодезическая сеть 1 класса (точность 5-7 см)
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              background: '#2D5A27',
              color: 'white',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>4</span>
            <div>
              <strong>Сети сгущения</strong> — 2-4 классы, съемочные сети
            </div>
          </li>
        </ul>
      </div>

      <h2>📐 Методы построения сетей сгущения</h2>

      <h3>Теодолитные ходы</h3>
      <p>
        Наиболее распространенный метод для создания съемочного обоснования. 
        Точки хода закрепляются на местности, измеряются углы и длины сторон.
      </p>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        fontFamily: 'monospace'
      }}>
        <p style={{ margin: '4px 0' }}>∑β<sub>теор</sub> = 180°(n - 2) — для замкнутого хода</p>
        <p style={{ margin: '4px 0' }}>∑β<sub>теор</sub> = 180°(n - 1) + (α<sub>н</sub> - α<sub>к</sub>) — для разомкнутого</p>
        <p style={{ margin: '8px 0 4px' }}>f<sub>β доп</sub> = 1'√n — допустимая угловая невязка</p>
      </div>

      <h3>Нивелирные ходы</h3>
      <p>
        Для создания высотного обоснования. Классификация по точности:
      </p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px'
        }}>
          <thead>
            <tr style={{
              background: 'rgba(167, 196, 160, 0.1)',
              color: '#2D5A27'
            }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Класс</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Средняя ошибка на 1 км</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Применение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>I класс</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>±0.5 мм</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Научные задачи</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>II класс</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>±1.0 мм</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>ГГС, наблюдения за осадками</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>III класс</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>±3.0 мм</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Сети сгущения</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>IV класс</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>±5.0 мм</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Съемочное обоснование</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💻 Современные методы создания сетей</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>GNSS-наблюдения</h3>
        <p>
          Спутниковые методы позволяют создавать сети высокой точности без прямой 
          видимости между пунктами. Основные режимы:
        </p>
        <ul>
          <li><strong>Статика:</strong> для создания опорных сетей (наблюдение от 40 мин до нескольких часов)</li>
          <li><strong>Быстрая статика:</strong> для сгущения (15-30 мин наблюдений)</li>
          <li><strong>Кинематика:</strong> для съемочных работ (RTK)</li>
        </ul>
      </div>

      <h2>✅ Закрепление пунктов сетей</h2>
      
      <p>
        Пункты геодезических сетей закрепляются на местности специальными знаками:
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        margin: '24px 0'
      }}>
        <div style={{
          background: '#F9F7F3',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>⛰️</div>
          <strong>Грунтовые реперы</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>Бетонные пилоны в грунте</p>
        </div>
        <div style={{
          background: '#F9F7F3',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏢</div>
          <strong>Стенные реперы</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>В стены зданий</p>
        </div>
        <div style={{
          background: '#F9F7F3',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚓</div>
          <strong>Скальные реперы</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>В скальных породах</p>
        </div>
      </div>

      <h2>📋 Итоговые материалы</h2>
      
      <ul>
        <li>Каталоги координат и высот пунктов</li>
        <li>Схемы сетей</li>
        <li>Акты закладки пунктов</li>
        <li>Описания местоположения (абрисы)</li>
        <li>Отчет об уравнивании и оценке точности</li>
      </ul>

      <blockquote>
        "Качество геодезической сети определяет качество всех последующих измерений. 
        Экономия на создании сети оборачивается многократными затратами при производстве работ."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Планово-высотная съемка',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Фундамент для карты и строительства.',
      readTime: 8,
      link: '/knowledge/articles/plan-height-survey'
    },
    {
      title: 'Продольное нивелирование трассы',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Руководство по высотной съёмке линейных сооружений.',
      readTime: 12,
      link: '/knowledge/articles/longitudinal-levelling'
    },
    {
      title: 'Настройка GNSS-оборудования',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Практическое руководство по работе со спутниковым оборудованием.',
      readTime: 15,
      link: '/knowledge/articles/gnss-setup'
    }
  ];

  return (
    <Layout title="Построение геодезических сетей: методы и классы точности">
      <Header />
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '16px 24px 0',
        width: '100%' 
        }}> 
        <Breadcrumbs paths={[ 
          { name: 'Главная', link: '/' }, 
          { name: 'База знаний', link: '/knowledge' }, 
          { name: 'Теория и основы', link: '/knowledge/teoriya' }, 
          { name: 'Построение геодезических сетей', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
          /> 
          </div>
      <ArticlePage
        category="Теория и основы"
        title="Построение геодезических сетей: от ГГС до съемочного обоснования"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="25 ноября 2023"
        readTime={14}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}