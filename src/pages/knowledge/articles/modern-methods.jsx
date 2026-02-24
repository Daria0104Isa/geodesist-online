import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import BackToTop from '../../../components/BackToTop';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ModernMethods() {
  const content = (
    <>
      <div style={{
        background: '#F0F4EF',
        padding: '24px',
        borderRadius: '16px',
        marginBottom: '32px'
      }}>
        <p style={{ fontSize: '16px', margin: 0, color: '#2D5A27' }}>
          Сравнительный обзор методов съёмки: тахеометрической, ГНСС, аэрофотосъёмки и лазерного сканирования. 
          Выбор метода зависит от задач, масштаба, условий местности и экономической целесообразности.
        </p>
      </div>

      <h2>📊 Сравнительная таблица методов</h2>

      <div style={{ overflowX: 'auto', margin: '32px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{
              background: 'rgba(167, 196, 160, 0.1)',
              color: '#2D5A27'
            }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Метод</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Принцип</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Результат</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Преимущество</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Ограничение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Тахеометрия</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Углы и расстояния</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Координаты точек</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Независимость от погоды</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Трудоёмкость на больших площадях</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>ГНСС</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Спутниковые сигналы</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Координаты в глобальной системе</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Высокая производительность</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Требует видимости спутников</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Аэрофотосъёмка</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Фотограмметрия</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Ортофотоплан, ЦММ</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Огромные площади быстро</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Требует опорных точек</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Лазерное сканирование</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Лидар</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Облако точек</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Максимальная детализация</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Высокая стоимость</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🎯 Краткое описание методов</h2>

      <h3>1. Тахеометрическая съёмка</h3>
      <p>
        <strong>Базовый, классический метод</strong>, выполняемый электронным тахеометром. 
        Основой являются теодолитно-нивелирные ходы.
      </p>
      <p><strong>Применение:</strong> небольшие участки, застроенные территории, досъёмка.</p>

      <h3>2. ГНСС-съёмка</h3>
      <p>
        Метод, использующий системы глобального спутникового позиционирования. 
        Работа ведётся в паре <strong>«базовая станция – ровер»</strong>.
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        margin: '24px 0',
        flexWrap: 'wrap'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          flex: 1
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Статика</h4>
          <p>Точность 5-10 мм — для опорных сетей</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          flex: 1
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>RTK</h4>
          <p>Точность 1-3 см в реальном времени</p>
        </div>
      </div>

      <h3>3. Аэрофотосъёмка (БПЛА)</h3>
      <p>
        Съёмка с беспилотников с последующей фотограмметрической обработкой.
      </p>
      
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Основные продукты:</h4>
        <ul>
          <li><strong>Ортофотоплан</strong> — точная карта контуров</li>
          <li><strong>Цифровая модель поверхности</strong> — 3D с объектами</li>
        </ul>
      </div>

      <h3>4. Лазерное сканирование</h3>
      <p>
        Технология получения плотного трёхмерного <strong>«облака точек»</strong>.
      </p>

      <ul>
        <li><strong>Наземное (НЛС):</strong> для съёмки сооружений, фасадов</li>
        <li><strong>Воздушное (ВЛС):</strong> для рельефа под растительностью</li>
        <li><strong>Мобильное (МЛС):</strong> для дорог и линейных объектов</li>
      </ul>

      <h2>🤝 Комплексное применение</h2>
      
      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Типичные связки:</h3>
        <ul>
          <li><strong>ГНСС + Тахеометр:</strong> ГНСС для обоснования и открытых участков, тахеометр — для "глухих" мест</li>
          <li><strong>ВЛС + Наземные методы:</strong> воздушная съёмка для общего покрытия, наземная — для детализации</li>
          <li><strong>Архивные данные + Полевая проверка:</strong> анализ с выборочным обновлением</li>
        </ul>
      </div>

      <h2>🔍 Заключение</h2>
      <p>
        Выбор метода определяется техническим заданием, характеристиками объекта, 
        требуемой точностью и экономическими факторами. Современный подход — это 
        <strong>гибкое комбинирование технологий</strong> для достижения оптимального 
        результата по критериям «точность-скорость-стоимость».
      </p>
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
      title: 'Настройка GNSS-оборудования',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Практическое руководство по работе со спутниковым оборудованием.',
      readTime: 15,
      link: '/knowledge/articles/gnss-setup'
    },
    {
      title: 'Продольное нивелирование',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Руководство по высотной съёмке трасс.',
      readTime: 12,
      link: '/knowledge/articles/longitudinal-levelling'
    }
  ];

  return (
    <Layout title="Современные методы геодезической съёмки">
      <Header />
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '16px 24px 0', 
        width: '100%' }}> 
        <Breadcrumbs paths={[ 
          { name: 'Главная', link: '/' }, 
          { name: 'База знаний', link: '/knowledge' }, 
          { name: 'Полевые методы', link: '/knowledge/polevye-metody' }, 
          { name: 'Современные методы съёмки', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
          /> 
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Современные методы и технологии в инженерно-геодезических изысканиях"
        author={{ 
          name: 'Петр Васильев', 
          role: 'Технический директор',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        }}
        date="22 ноября 2023"
        readTime={10}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}