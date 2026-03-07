import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function Iso17123Article() {
  const content = (
    <>
      <p>
        ISO 17123 — это серия международных стандартов, регламентирующих методики 
        полевых испытаний геодезического оборудования. Эти стандарты позволяют 
        оценить реальную точность приборов в рабочих условиях и сравнить 
        характеристики разных моделей. В этой статье мы разберём основные части 
        ISO 17123 и методики проведения испытаний.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📐 <strong>Зачем нужен ISO 17123?</strong> Производители указывают 
          точность в идеальных лабораторных условиях, а ISO 17123 позволяет 
          оценить, как прибор будет работать в реальных полевых условиях с 
          учётом влияния окружающей среды и оператора.
        </p>
      </div>

      <h2>📋 Структура стандарта ISO 17123</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Основные части:</h3>
        <ul>
          <li><strong>ISO 17123-1</strong> — Общие положения и терминология</li>
          <li><strong>ISO 17123-2</strong> — Нивелиры</li>
          <li><strong>ISO 17123-3</strong> — Теодолиты</li>
          <li><strong>ISO 17123-4</strong> — Электронные дальномеры (однопризменные)</li>
          <li><strong>ISO 17123-5</strong> — Электронные тахеометры</li>
          <li><strong>ISO 17123-6</strong> — Ротационные лазерные нивелиры</li>
          <li><strong>ISO 17123-7</strong> — Оптические отвесы</li>
          <li><strong>ISO 17123-8</strong> — GNSS-приёмники в режиме реального времени (RTK)</li>
        </ul>
      </div>

      <h2>📊 ISO 17123-5: Испытания электронных тахеометров</h2>

      <p>
        Это наиболее часто используемая часть стандарта. Она определяет две 
        процедуры испытаний: упрощённую (для быстрой проверки) и полную (для 
        официальной калибровки).
      </p>

      <h3>Схема испытаний:</h3>
      <ol>
        <li>Выбирается ровный участок длиной около 100-200 м</li>
        <li>Закрепляются 5 точек на одной линии: A, B, C, D, E</li>
        <li>Измеряются все комбинации расстояний между точками</li>
        <li>Выполняется несколько серий измерений (обычно 3-4)</li>
        <li>По результатам вычисляется экспериментальное СКО измерения расстояния</li>
      </ol>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '20px 0',
        fontFamily: 'monospace',
        fontSize: '16px'
      }}>
        <p style={{ margin: '8px 0' }}>s = √( [dd] / (n - 1) )</p>
        <p style={{ margin: '8px 0', fontSize: '14px', color: '#6B776D' }}>
          где s — экспериментальное СКО, d — разности двойных измерений, n — число измерений
        </p>
      </div>

      <h2>📏 ISO 17123-2: Испытания нивелиров</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Порядок испытаний:</h3>
        <ol>
          <li>Выбирается участок с перепадом высот около 5-10 м</li>
          <li>Закрепляются 3-4 репера на разных высотах</li>
          <li>Выполняется нивелирование I классом точности</li>
          <li>Вычисляется СКО превышения на 1 км хода</li>
        </ol>
        
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px'
        }}>
          <p style={{ margin: 0 }}>
            <strong>Нормативы точности:</strong><br />
            • Высокоточные нивелиры: s ≤ 0.5 мм/км<br />
            • Точные нивелиры: s ≤ 1.0 мм/км<br />
            • Технические нивелиры: s ≤ 3.0 мм/км
          </p>
        </div>
      </div>

      <h2>📡 ISO 17123-8: Испытания GNSS-приёмников в режиме RTK</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Методика испытаний:</h3>
        <ol>
          <li>Выбирается 5-10 точек с известными координатами</li>
          <li>Выполняется несколько серий RTK-измерений (обычно 5-10 эпох на точку)</li>
          <li>Вычисляются расхождения с эталонными координатами</li>
          <li>Определяется СКО в плане и по высоте</li>
        </ol>
        
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px'
        }}>
          <p style={{ margin: 0 }}>
            <strong>Типичные результаты для современных GNSS-приёмников:</strong><br />
            • План: 8-15 мм + 1 ppm<br />
            • Высота: 15-30 мм + 1 ppm
          </p>
        </div>
      </div>

      <h2>📊 Сравнение точности по ISO 17123</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Класс прибора</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>СКП измерения угла</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>СКП измерения расстояния</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Высокоточные</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.5" – 1.0"</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.5 мм + 1 ppm</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Точные</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>2" – 5"</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1 мм + 2 ppm</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Технические</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10" – 30"</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>2 мм + 5 ppm</td>
          </tr>
        </tbody>
      </table>

      <h2>📝 Практические рекомендации</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Как использовать ISO 17123:</h3>
        <ul>
          <li><strong>При покупке оборудования</strong> — запрашивайте протоколы испытаний по ISO 17123, а не только заводские спецификации</li>
          <li><strong>Перед началом проекта</strong> — проведите упрощённые испытания, чтобы убедиться, что прибор работает в заявленном классе точности</li>
          <li><strong>При возникновении сомнений</strong> — выполните полную процедуру по соответствующей части стандарта</li>
          <li><strong>Для аттестации оборудования</strong> — используйте аккредитованные лаборатории, выполняющие испытания по ISO 17123</li>
        </ul>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid #E6B422',
        borderLeft: '4px solid #E6B422'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор точности</h3>
        <p>
          Для расчёта экспериментальной точности ваших измерений по методике ISO 17123 
          используйте наш 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор оценки точности
          </a>.
        </p>
      </div>

      <blockquote>
        "ISO 17123 — это не просто стандарт, а язык, на котором геодезисты всего мира 
        могут сравнивать свои приборы. Зная методику испытаний, вы всегда сможете 
        оценить реальную точность своего оборудования и быть уверенным в результатах."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Работа с тахеометром: быстрый старт',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Краткое руководство для начала полевых работ.',
      readTime: 14,
      link: '/knowledge/articles/tacheometry-basics'
    },
    {
      title: 'Нивелирование: от основ до приборов',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Классификация нивелиров, методы, устройство.',
      readTime: 16,
      link: '/knowledge/articles/levelling-basics'
    },
    {
      title: 'Основы работы с GNSS-приемниками в режиме RTK',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Настройка базы и ровера, получение фиксированного решения.',
      readTime: 14,
      link: '/knowledge/articles/gnss-rtk'
    }
  ];

  return (
    <Layout 
      title="ISO 17123: Полевые испытания геодезического оборудования" 
      description="Методики оценки точности тахеометров, нивелиров, GNSS-приёмников по международным стандартам."
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
            { name: 'ISO 17123', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Основы оборудования"
        title="ISO 17123: Полевые испытания геодезического оборудования"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="8 марта 2026"
        readTime={12}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}