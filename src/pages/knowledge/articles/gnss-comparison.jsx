import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function GnssComparisonArticle() {
  const content = (
    <>
      <p>
        Выбор GNSS-оборудования — ответственная задача, от которой зависит точность, 
        производительность и бюджет ваших работ. На рынке представлены десятки моделей 
        от разных производителей, но основные игроки — Leica, Trimble и Sokkia. 
        В этой статье мы сравним популярные модели и поможем сделать правильный выбор.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🎯 <strong>Ключевые критерии выбора:</strong> тип задач (топосъёмка, разбивка, мониторинг), 
          требуемая точность, условия работы (открытая местность / город / лес), бюджет и 
          совместимость с имеющимся оборудованием.
        </p>
      </div>

      <h2>📊 Сравнение популярных моделей</h2>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Модель</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Тип</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Каналы</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Точность статика</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Точность RTK</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Особенности</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Leica GS18</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ровер</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>485</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3 мм + 0.5 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>8 мм + 1 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>RTK без базы, безкабельная калибровка</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>$$$$</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Leica GS16</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ровер</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>240</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3 мм + 0.5 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10 мм + 1 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Проверенное решение, надёжность</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>$$$</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Trimble R12i</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ровер</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>672</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3 мм + 0.5 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>8 мм + 1 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ProPoint, наклонная съёмка</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>$$$$</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Trimble R8s</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ровер</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>440</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3 мм + 0.5 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10 мм + 1 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Бюджетный вариант, надёжный</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>$$$</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Sokkia GCX3</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ровер/База</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>555</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3 мм + 0.5 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10 мм + 1 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Универсальность, встроенный модем</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>$$</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Sokkia GSR2700</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ровер</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>270</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3 мм + 0.5 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10 мм + 1 ppm</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Надёжный, проверенный годами</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>$$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🏢 Сравнение производителей</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          boxShadow: '0 4px 12px rgba(45, 90, 39, 0.04)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px', fontSize: '20px' }}>🇨🇭 Leica</h3>
          <p style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '8px' }}>Плюсы:</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Высочайшее качество оптики и электроники</li>
            <li>Интуитивное ПО Captivate</li>
            <li>SmartLink — работа без базы</li>
            <li>Отличная поддержка</li>
          </ul>
          <p style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '8px' }}>Минусы:</p>
          <ul>
            <li>Высокая цена</li>
            <li>Дорогой ремонт</li>
            <li>Закрытая экосистема</li>
          </ul>
        </div>

        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          boxShadow: '0 4px 12px rgba(45, 90, 39, 0.04)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px', fontSize: '20px' }}>🇺🇸 Trimble</h3>
          <p style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '8px' }}>Плюсы:</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Технология ProPoint (отличная работа под деревьями)</li>
            <li>Широкий выбор моделей</li>
            <li>Мощное ПО Access</li>
            <li>Наклонная съёмка</li>
          </ul>
          <p style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '8px' }}>Минусы:</p>
          <ul>
            <li>Высокая цена</li>
            <li>Сложный интерфейс для новичков</li>
            <li>Дорогие лицензии</li>
          </ul>
        </div>

        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          boxShadow: '0 4px 12px rgba(45, 90, 39, 0.04)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px', fontSize: '20px' }}>🇯🇵 Sokkia</h3>
          <p style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '8px' }}>Плюсы:</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Лучшее соотношение цена/качество</li>
            <li>Простой и понятный интерфейс</li>
            <li>Надёжность</li>
            <li>Универсальность (ровер/база)</li>
          </ul>
          <p style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '8px' }}>Минусы:</p>
          <ul>
            <li>Меньше "умных" функций</li>
            <li>Слабее работа в сложных условиях</li>
            <li>Меньше сервисных центров</li>
          </ul>
        </div>
      </div>

      <h2>📋 Рекомендации по выбору</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>🎯 Для топографической съёмки</h3>
        <p>Если вы занимаетесь в основном топосъёмкой открытых территорий:</p>
        <ul>
          <li><strong>Бюджетный вариант:</strong> Sokkia GCX3 — отличное соотношение цена/качество</li>
          <li><strong>Оптимальный вариант:</strong> Trimble R12i — быстрая инициализация, наклонная съёмка</li>
          <li><strong>Премиум:</strong> Leica GS18 — максимальная производительность, RTK без базы</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 16px' }}>🏗️ Для строительства и разбивки</h3>
        <ul>
          <li><strong>Sokkia GCX3</strong> — можно использовать и как ровер, и как базу</li>
          <li><strong>Trimble R12i</strong> — наклонная съёмка ускоряет разбивку</li>
          <li><strong>Leica GS16</strong> — надёжное проверенное решение</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 16px' }}>🌲 Для работы в сложных условиях (лес, город)</h3>
        <ul>
          <li><strong>Trimble R12i</strong> — технология ProPoint лучшая для работы под деревьями</li>
          <li><strong>Leica GS18</strong> — большое количество каналов помогает в городских каньонах</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 16px' }}>💰 Для начинающих или ограниченного бюджета</h3>
        <ul>
          <li><strong>Sokkia GCX3</strong> — лучший выбор по соотношению цена/качество</li>
          <li><strong>Trimble R8s</strong> — можно найти на вторичном рынке</li>
        </ul>
      </div>

      <h2>📊 Сравнение по характеристикам</h2>

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
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>📡</div>
          <strong>Количество каналов</strong>
          <p>Trimble R12i (672) > Leica GS18 (485) > Sokkia GCX3 (555)</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>🎯</div>
          <strong>Точность RTK</strong>
          <p>Leica GS18 (6 ч), Trimble R12i (8 ч), Sokkia GCX3 (до 10 ч с внешним питанием)</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>🔋</div>
          <strong>Время работы</strong>
          <p>Leica GS18 (6 ч), Trimble R12i (8 ч), Sokkia GCX3 (до 10 ч с внешним питанием)</p>
        </div>
      </div>

      <h2>💡 Дополнительные факторы</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Программное обеспечение</h3>
        <ul>
          <li><strong>Leica Captivate</strong> — интуитивное, мультисенсорное, поддержка тахеометров и GNSS</li>
          <li><strong>Trimble Access</strong> — мощное, много функций, сложное для освоения</li>
          <li><strong>Sokkia MAGNET Field</strong> — простое, понятное, быстрый старт</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>Сервис и поддержка</h3>
        <ul>
          <li><strong>Leica</strong> — широкая сеть сервисных центров, дорогой ремонт</li>
          <li><strong>Trimble</strong> — отличная поддержка, оперативный ремонт</li>
          <li><strong>Sokkia</strong> — сервис есть, но меньше центров</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>Совместимость</h3>
        <p>Все три производителя поддерживают стандартные форматы данных (RINEX), но для полной функциональности лучше использовать "родное" ПО и контроллеры.</p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid #E6B422',
        borderLeft: '4px solid #E6B422'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор окупаемости</h3>
        <p>
          Чтобы рассчитать, какая модель окупится быстрее при ваших объёмах работ, 
          воспользуйтесь нашим 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятором окупаемости оборудования
          </a>.
        </p>
      </div>

      <blockquote>
        "Не существует идеального GNSS-приёмника — есть идеально подходящий под ваши 
        задачи. Проанализируйте, где и как вы будете работать, и выбирайте оборудование, 
        которое лучше всего справится с этими задачами в рамках вашего бюджета."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Настройка GNSS-оборудования',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Выбор режима съёмки, параметры настройки, подключение к RTK.',
      readTime: 15,
      link: '/knowledge/articles/gnss-setup'
    },
    {
      title: 'Основы работы с GNSS-приемниками в режиме RTK',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Настройка базы и ровера, получение фиксированного решения.',
      readTime: 14,
      link: '/knowledge/articles/gnss-rtk'
    },
    {
      title: 'Калибровка RTK на строительной площадке',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Пошаговое руководство по локализации и созданию локальной сетки.',
      readTime: 15,
      link: '/knowledge/articles/rtk-calibration'
    }
  ];

  return (
    <Layout 
      title="Выбор GNSS-оборудования: сравнение моделей" 
      description="Leica, Trimble, Sokkia — что выбрать для разных задач и бюджетов? Подробное сравнение характеристик и рекомендации."
    >
      <Header />
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '16px 24px 0',
        width: '100%'
      }}>
        <Breadcrumbs 
          paths={[ 
            { name: 'Главная', link: '/' }, 
            { name: 'База знаний', link: '/knowledge' }, 
            { name: 'Основы оборудования', link: '/knowledge/oborudovanie' }, 
            { name: 'Выбор GNSS-оборудования', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Основы оборудования"
        title="Выбор GNSS-оборудования: сравнение моделей"
        author={{ 
          name: 'Петр Васильев', 
          role: 'Технический директор',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        }}
        date="1 марта 2026"
        readTime={14}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}