import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function CoordinateSystemsArticle() {
  const content = (
    <>
      <p>
        Переход между системами координат — одна из самых частых задач в геодезии. 
        Спутниковые измерения дают координаты в глобальной системе WGS-84, а работать 
        нужно в местной системе координат (МСК) или СК-42/СК-95. В этой статье мы 
        разберём основные методы трансформации и параметры, которые для этого нужны.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🌍 <strong>Важно понимать:</strong> Пересчёт координат — это не просто 
          математическая операция, а процесс, требующий знания параметров перехода 
          между эллипсоидами и учёта локальных искажений.
        </p>
      </div>

      <h2>📐 Основные системы координат в геодезии</h2>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px'
        }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Система</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Эллипсоид</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Применение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>WGS-84</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>WGS-84</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Глобальная система GPS/ГЛОНАСС</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>ПЗ-90.11</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ПЗ-90</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Российская геоцентрическая система (ГЛОНАСС)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>СК-42</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Красовского</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Старая общегосударственная система</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>СК-95</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Красовского</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Уточнённая версия СК-42</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>МСК</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Красовского / GSK-2011</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Местная система координат региона</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🔄 Методы трансформации координат</h2>

      <h3>1. Преобразование Гельмерта (7 параметров)</h3>
      <p>
        Самый точный метод перехода между геоцентрическими системами. Использует 
        7 параметров:
      </p>
      
      <ul>
        <li><strong>ΔX, ΔY, ΔZ</strong> — сдвиг начала координат (метры)</li>
        <li><strong>Rx, Ry, Rz</strong> — углы поворота осей (угловые секунды)</li>
        <li><strong>m</strong> — масштабный коэффициент (ppm)</li>
      </ul>

      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #D4DCCD',
        margin: '20px 0',
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
        <p style={{ margin: '4px 0' }}>[ X ]   [ ΔX ]   [ 1    -Rz   Ry ] [ X ]</p>
        <p style={{ margin: '4px 0' }}>[ Y ] = [ ΔY ] + [ Rz   1    -Rx ]·[ Y ] · (1 + m·10⁻⁶)</p>
        <p style={{ margin: '4px 0' }}>[ Z ]   [ ΔZ ]   [ -Ry  Rx    1  ] [ Z ]</p>
      </div>

      <h3>2. Преобразование Молоденского (3 параметра)</h3>
      <p>
        Упрощённый метод для перехода между эллипсоидами. Учитывает только сдвиг 
        начала координат (ΔX, ΔY, ΔZ). Используется, когда нет точных данных о 
        поворотах и масштабе.
      </p>

      <h3>3. Локализация (калибровка) на местности</h3>
      <p>
        Для перехода в МСК часто используют метод локализации — определение 
        параметров трансформации по точкам с известными координатами в обеих 
        системах. Минимально требуется 2 точки, оптимально — 4-5 равномерно 
        распределённых по участку.
      </p>

      <div style={{
        background: '#FFF3E0',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0',
        borderLeft: '4px solid #E6B422'
      }}>
        <h3 style={{ color: '#B85C1F', marginBottom: '8px' }}>📌 Формулы для локализации (аффинное преобразование)</h3>
        <p style={{ margin: '8px 0' }}><code>X = a·x + b·y + c</code></p>
        <p style={{ margin: '8px 0' }}><code>Y = d·x + e·y + f</code></p>
        <p style={{ margin: '8px 0', fontSize: '14px', color: '#666' }}>
          где a, b, c, d, e, f — параметры, определяемые по контрольным точкам.
        </p>
      </div>

      <h2>📋 Параметры трансформации для России</h2>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Из системы</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>В систему</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ΔX, м</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ΔY, м</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ΔZ, м</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Rx, "</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ry, "</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Rz, "</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>m, ppm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ПЗ-90.11</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>WGS-84</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-0.36</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>+0.08</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>+0.18</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>СК-42</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>WGS-84</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>+25</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-141</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-80</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-0.35</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-0.66</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💻 Реализация в программном обеспечении</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        margin: '24px 0'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📱</div>
          <strong>Полевые контроллеры</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>Leica, Trimble, Sokkia</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>💻</div>
          <strong>Камеральное ПО</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>CREDO, AutoCAD Civil, MapInfo</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🌐</div>
          <strong>Онлайн-калькуляторы</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>Geoder, Proj4, EPSG.io</p>
        </div>
      </div>

      <h2>📌 Практические рекомендации</h2>
      
      <ul>
        <li><strong>Всегда используйте контрольные точки</strong> — не менее 2-3 точек с известными координатами для проверки точности трансформации.</li>
        <li><strong>Учитывайте зону проекции</strong> — при работе в проекции Гаусса-Крюгера важно правильно указать номер зоны и осевой меридиан.</li>
        <li><strong>Высота геоида</strong> — для перевода эллипсоидальных высот в нормальные используйте модель геоида (EGM, СГК-2011).</li>
        <li><strong>Документируйте параметры</strong> — всегда сохраняйте использованные параметры трансформации в отчёте.</li>
      </ul>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Онлайн-калькулятор</h3>
        <p>
          Для быстрого пересчёта координат используйте наш 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор систем координат
          </a>. Поддерживаются основные системы: WGS-84, СК-42, СК-95, МСК.
        </p>
      </div>

      <blockquote>
        "Трансформация координат — это не просто кнопка в программе. Понимание 
        параметров и методов позволяет контролировать точность и избегать грубых 
        ошибок, которые могут стоить тысяч рублей на стройплощадке."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Базовые принципы геодезии и системы координат',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Форма Земли, геоид, эллипсоид, системы координат и проекции.',
      readTime: 8,
      link: '/knowledge/articles/basic-principles'
    },
    {
      title: 'Переход между системами координат (МСК и WGS-84)',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Разбор параметров трансформации и методов локализации.',
      readTime: 10,
      link: '/knowledge/articles/coordinate-transformation'
    },
    {
      title: 'Калибровка RTK на строительной площадке',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Пошаговое руководство по локализации и созданию локальной сетки.',
      readTime: 12,
      link: '/knowledge/articles/rtk-calibration'
    }
  ];

  return (
    <Layout 
      title="Переход между системами координат (МСК и WGS-84)" 
      description="Разбор параметров трансформации и методов локализации (калибровки) на строительной площадке."
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
            { name: 'Теория и основы', link: '/knowledge/teoriya' }, 
            { name: 'Переход между системами координат', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Теория и основы"
        title="Переход между системами координат (МСК и WGS-84)"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="28 февраля 2026"
        readTime={12}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}