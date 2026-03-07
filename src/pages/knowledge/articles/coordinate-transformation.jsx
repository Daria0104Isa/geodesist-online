import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function CoordinateTransformationArticle() {
  const content = (
    <>
      <p>
        Трансформация координат — это процесс пересчёта координат из одной системы 
        в другую. В отличие от простого перехода между эллипсоидами, трансформация 
        учитывает локальные искажения и позволяет создавать единое координатное 
        пространство для всего объекта. В этой статье мы подробно разберём методы 
        трансформации и локализации.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🔄 <strong>Ключевое различие:</strong> Преобразование Гельмерта работает 
          для всей территории глобально, а локализация (калибровка) учитывает 
          местные искажения и привязана к конкретному участку.
        </p>
      </div>

      <h2>📐 Методы трансформации</h2>

      <h3>1. Гельмерта (Helmert) — 7 параметров</h3>
      <p>
        Самый точный метод для перехода между геоцентрическими системами. Используется 
        для трансформации WGS-84 → СК-42, ПЗ-90 → WGS-84 и других глобальных переходов.
      </p>

      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        border: '1px solid rgba(167, 196, 160, 0.3)',
        margin: '20px 0'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>Параметры Гельмерта:</h4>
        <ul>
          <li><strong>ΔX, ΔY, ΔZ</strong> — сдвиг начала координат (метры)</li>
          <li><strong>Rx, Ry, Rz</strong> — углы поворота вокруг осей (радианы или секунды)</li>
          <li><strong>Δm</strong> — масштабный коэффициент (ppm или безразмерный)</li>
        </ul>
        
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '14px',
          marginTop: '16px'
        }}>
          <p style={{ margin: '4px 0' }}>X₂ = ΔX + (1 + Δm)·(X₁ - Rz·Y₁ + Ry·Z₁)</p>
          <p style={{ margin: '4px 0' }}>Y₂ = ΔY + (1 + Δm)·(Rz·X₁ + Y₁ - Rx·Z₁)</p>
          <p style={{ margin: '4px 0' }}>Z₂ = ΔZ + (1 + Δm)·(-Ry·X₁ + Rx·Y₁ + Z₁)</p>
        </div>
      </div>

      <h3>2. Молоденского (Molodensky) — 3 или 5 параметров</h3>
      <p>
        Упрощённый метод, который учитывает только сдвиг (3 параметра) или сдвиг 
        плюс поправки на эллипсоид (5 параметров). Используется, когда нет точных 
        данных о поворотах.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        margin: '20px 0'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px'
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>Стандартная (3 парам.)</h4>
          <code>B₂ = B₁ + ΔB</code><br />
          <code>L₂ = L₁ + ΔL</code><br />
          <code>H₂ = H₁ + ΔH</code>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px'
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>Абрикоса (5 парам.)</h4>
          <p style={{ fontSize: '14px' }}>
            Учитывает различия в параметрах эллипсоидов (a, f) и сдвиг начала.
          </p>
        </div>
      </div>

      <h2>📍 Локализация (калибровка) на местности</h2>
      
      <p>
        Локализация — это определение параметров перехода между глобальной системой 
        (WGS-84) и местной системой координат (МСК) по точкам с известными координатами 
        в обеих системах.
      </p>

      <h3>Этапы локализации:</h3>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <ol style={{ margin: 0, paddingLeft: '20px' }}>
          <li><strong>Выбор и закрепление пунктов</strong> — минимум 2 точки, оптимально 4-5 равномерно по участку</li>
          <li><strong>Измерение координат в WGS-84</strong> (RTK или статика)</li>
          <li><strong>Ввод известных координат в МСК</strong> из каталога или проекта</li>
          <li><strong>Вычисление параметров трансформации</strong> (аффинное преобразование)</li>
          <li><strong>Контроль на независимых точках</strong> — невязки не должны превышать допуск</li>
        </ol>
      </div>

      <h3>Математическая модель локализации</h3>
      
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        border: '1px solid rgba(167, 196, 160, 0.3)',
        margin: '20px 0'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>Аффинное преобразование (6 параметров):</h4>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          <p style={{ margin: '4px 0' }}>X = a·x + b·y + c</p>
          <p style={{ margin: '4px 0' }}>Y = d·x + e·y + f</p>
        </div>
        <p style={{ marginTop: '12px', fontSize: '14px' }}>
          где x, y — координаты в WGS-84 (проекция), X, Y — в МСК, 
          a, b, c, d, e, f — параметры трансформации.
        </p>
        
        <h4 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>Конформное преобразование (4 параметра):</h4>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          <p style={{ margin: '4px 0' }}>X = a·x - b·y + c</p>
          <p style={{ margin: '4px 0' }}>Y = b·x + a·y + d</p>
        </div>
        <p style={{ marginTop: '12px', fontSize: '14px' }}>
          Сохраняет углы (равноугольное), используется чаще всего.
        </p>
      </div>

      <h2>📊 Оценка точности трансформации</h2>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px'
        }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Параметр</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Допустимое значение</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Примечание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>СКО по точкам локализации</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>≤ 2-3 см</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Для RTK-съёмки</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Максимальная невязка на контроле</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>≤ 5 см</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Для ответственных работ</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Относительная невязка</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1:10 000 – 1:50 000</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>В зависимости от масштаба</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🚨 Типичные ошибки при трансформации</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Неправильный выбор метода</h3>
          <p>Для глобальных переходов используйте Гельмерта, для локальных — конформное преобразование.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Мало точек локализации</h3>
          <p>2 точки дают только сдвиг, 3 — сдвиг + поворот, 4 и более — полный учёт искажений.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Плохая геометрия точек</h3>
          <p>Точки должны равномерно покрывать весь участок, а не быть сгруппированы в одном месте.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Игнорирование высоты геоида</h3>
          <p>При переходе от эллипсоидальных высот к нормальным используйте модель геоида (EGM, СГК-2011).</p>
        </div>
      </div>

      <h2>📋 Практический пример локализации</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Исходные данные:</h3>
        <p>Участок строительства 500×500 м. Имеется 4 пункта с известными координатами в МСК-50 и измеренными в WGS-84.</p>
        
        <div style={{ overflowX: 'auto', margin: '16px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#F0F4EF' }}>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Пункт</th>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>X (МСК)</th>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Y (МСК)</th>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>x (WGS-84)</th>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>y (WGS-84)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ПТ1</td><td>1000.00</td><td>2000.00</td><td>10.123</td><td>20.456</td></tr>
              <tr><td>ПТ2</td><td>1500.00</td><td>2000.00</td><td>15.234</td><td>20.567</td></tr>
              <tr><td>ПТ3</td><td>1000.00</td><td>2500.00</td><td>10.345</td><td>25.678</td></tr>
              <tr><td>ПТ4</td><td>1500.00</td><td>2500.00</td><td>15.456</td><td>25.789</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>Результат трансформации:</h3>
        <p>Параметры конформного преобразования:</p>
        <ul>
          <li>a = 0.9999987 (масштаб)</li>
          <li>b = 0.0000123 (поворот)</li>
          <li>c = -10.12 (сдвиг по X)</li>
          <li>d = -20.23 (сдвиг по Y)</li>
        </ul>
        <p>СКО на точках локализации: 1.2 см — отличный результат.</p>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор трансформации</h3>
        <p>
          Для расчёта параметров трансформации по вашим точкам используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            онлайн-калькулятор локализации
          </a>.
        </p>
      </div>

      <blockquote>
        "Качество трансформации определяется не только математикой, но и правильным 
        выбором исходных пунктов. Точки локализации — это фундамент всей последующей 
        съёмки, поэтому к их выбору и закреплению нужно подходить максимально ответственно."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Переход между системами координат (МСК и WGS-84)',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Разбор параметров трансформации и методов локализации.',
      readTime: 10,
      link: '/knowledge/articles/coordinate-systems'
    },
    {
      title: 'Калибровка RTK на строительной площадке',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Пошаговое руководство по локализации и созданию локальной сетки.',
      readTime: 12,
      link: '/knowledge/articles/rtk-calibration'
    },
    {
      title: 'Базовые принципы геодезии',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Форма Земли, геоид, эллипсоид, системы координат.',
      readTime: 8,
      link: '/knowledge/articles/basic-principles'
    }
  ];

  return (
    <Layout 
      title="Трансформация координат и локализация" 
      description="Параметры Гельмерта, методы трансформации и практические примеры локализации на местности."
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
            { name: 'Трансформация координат и локализация', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Теория и основы"
        title="Трансформация координат и локализация"
        author={{ 
          name: 'Сергей Смирнов', 
          role: 'Инженер-геодезист',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        }}
        date="28 февраля 2026"
        readTime={14}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}