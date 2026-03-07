import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function AdjustmentArticle() {
  const content = (
    <>
      <p>
        Уравнивание теодолитного хода — это обязательный этап камеральной обработки 
        полевых измерений. От того, насколько правильно распределены невязки, зависит 
        точность координат всех точек хода. В этой статье мы разберём пошаговый алгоритм 
        уравнивания на примере разомкнутого теодолитного хода.
      </p>

      <h2>📐 Что такое теодолитный ход?</h2>
      <p>
        <strong>Теодолитный ход</strong> — это система ломаных линий, в которой измеряются 
        горизонтальные углы и длины сторон между точками. Различают замкнутые (полигоны) 
        и разомкнутые (диагональные) ходы.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📌 <strong>Исходные данные для примера:</strong> разомкнутый ход между пунктами 
          А и В с тремя точками поворота. Измерены все углы и стороны.
        </p>
      </div>

      <h2>📊 Последовательность уравнивания</h2>

      <h3>1. Вычисление дирекционных углов</h3>
      <p>
        Начальный дирекционный угол α<sub>н</sub> известен из привязки к пунктам ГГС. 
        Последующие углы вычисляются по формуле:
      </p>
      
      <div style={{
        background: 'white',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #D4DCCD',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        <code style={{ fontSize: '18px' }}>
          α<sub>i+1</sub> = α<sub>i</sub> + 180° - β<sub>прав</sub>
        </code>
      </div>
      
      <p>где β<sub>прав</sub> — правый по ходу горизонтальный угол.</p>

      <h3>2. Уравнивание углов</h3>
      <p>
        Теоретическая сумма углов для разомкнутого хода:
      </p>
      
      <div style={{
        background: 'white',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #D4DCCD',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        <code style={{ fontSize: '18px' }}>
          ∑β<sub>теор</sub> = α<sub>кон</sub> - α<sub>нач</sub> + 180°·n
        </code>
      </div>
      
      <p>
        Угловая невязка: <strong>f<sub>β</sub> = ∑β<sub>изм</sub> - ∑β<sub>теор</sub></strong>
      </p>
      
      <div style={{
        background: '#FFF3E0',
        padding: '16px',
        borderRadius: '8px',
        margin: '20px 0',
        borderLeft: '4px solid #E6B422'
      }}>
        <p style={{ margin: 0, fontWeight: 500 }}>
          ⚠️ <strong>Допустимая угловая невязка:</strong> f<sub>β доп</sub> = 1'√n, 
          где n — количество углов. Если невязка больше — нужно искать ошибку в полевых измерениях.
        </p>
      </div>

      <h3>3. Вычисление приращений координат</h3>
      <p>
        По исправленным дирекционным углам и длинам сторон вычисляем приращения:
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        margin: '20px 0'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <code style={{ fontSize: '18px' }}>ΔX = d · cos α</code>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <code style={{ fontSize: '18px' }}>ΔY = d · sin α</code>
        </div>
      </div>

      <h3>4. Невязки в приращениях</h3>
      <p>
        Для разомкнутого хода теоретические суммы приращений известны:
      </p>
      
      <div style={{
        background: 'white',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #D4DCCD',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        <code style={{ fontSize: '18px' }}>
          f<sub>x</sub> = ∑ΔX<sub>изм</sub> - (X<sub>кон</sub> - X<sub>нач</sub>)
        </code>
        <br />
        <code style={{ fontSize: '18px' }}>
          f<sub>y</sub> = ∑ΔY<sub>изм</sub> - (Y<sub>кон</sub> - Y<sub>нач</sub>)
        </code>
      </div>
      
      <p>
        Абсолютная невязка хода: <strong>f<sub>абс</sub> = √(f<sub>x</sub>² + f<sub>y</sub>²)</strong>
      </p>
      
      <p>
        Относительная невязка: <strong>f<sub>отн</sub> = f<sub>абс</sub> / P</strong>, 
        где P — периметр хода (сумма длин сторон). Допустимая относительная невязка 
        для теодолитных ходов 1:2000.
      </p>

      <h3>5. Распределение невязок</h3>
      <p>
        Невязки f<sub>x</sub> и f<sub>y</sub> распределяются пропорционально длинам сторон 
        с обратным знаком:
      </p>
      
      <div style={{
        background: 'white',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #D4DCCD',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        <code style={{ fontSize: '16px' }}>
          δX<sub>i</sub> = - (f<sub>x</sub> / P) · d<sub>i</sub>
        </code>
        <br />
        <code style={{ fontSize: '16px' }}>
          δY<sub>i</sub> = - (f<sub>y</sub> / P) · d<sub>i</sub>
        </code>
      </div>

      <h3>6. Вычисление окончательных координат</h3>
      <p>
        Исправленные приращения: 
        <strong> ΔX<sub>испр</sub> = ΔX<sub>изм</sub> + δX<sub>i</sub></strong>
      </p>
      <p>
        Координаты точек хода:
      </p>
      
      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '20px 0'
      }}>
        <code style={{ fontSize: '16px' }}>
          X<sub>i+1</sub> = X<sub>i</sub> + ΔX<sub>испр</sub>
        </code>
        <br />
        <code style={{ fontSize: '16px' }}>
          Y<sub>i+1</sub> = Y<sub>i</sub> + ΔY<sub>испр</sub>
        </code>
      </div>

      <h2>📋 Пример в табличной форме</h2>
      
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Точка</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>d, м</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>α</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ΔX</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>ΔY</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>X</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Y</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>A</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1000.00</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>500.00</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>125.30</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>45°30'</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>+87.80</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>+89.30</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1087.80</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>589.30</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>2</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>98.45</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>120°15'</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>-49.30</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>+85.20</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1038.50</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>674.50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote>
        "Уравнивание теодолитного хода — это не просто математическая процедура, 
        а способ контроля качества полевых измерений. Относительная невязка 1:2000 
        означает, что на каждый километр хода мы допускаем ошибку не более 0.5 метра."
      </blockquote>

      <h2>📌 Важные замечания</h2>
      
      <ul>
        <li>Все вычисления ведутся в принятой системе координат (обычно МСК)</li>
        <li>Углы измеряются с точностью до 0.1', длины — до 0.01 м</li>
        <li>После распределения невязок обязательно делается контрольный просчёт</li>
        <li>Современные программы (CREDO, AutoCAD Civil) делают уравнивание автоматически, 
            но понимание процесса необходимо для контроля результатов</li>
      </ul>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор невязок</h3>
        <p style={{ marginBottom: '16px' }}>
          Для быстрого расчёта невязок и их распределения используйте наш 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор теодолитного хода
          </a>.
        </p>
      </div>
    </>
  );

  const relatedArticles = [
    {
      title: 'Тахеометрическая съемка: пошаговое руководство',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Методика полевых работ, обработка данных, создание топографического плана.',
      readTime: 16,
      link: '/knowledge/articles/tacheometric-survey'
    },
    {
      title: 'Построение геодезических сетей',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Методы триангуляции, полигонометрии, спутниковые технологии.',
      readTime: 14,
      link: '/knowledge/articles/geodetic-networks'
    },
    {
      title: 'Обработка GNSS-измерений',
      category: 'ОБРАБОТКА ДАННЫХ',
      description: 'Работа с базовыми станциями, решение векторов, уравнивание сетей.',
      readTime: 18,
      link: '/knowledge/articles/gnss-postprocessing'
    }
  ];

  return (
    <Layout title="Уравнивание теодолитного хода: пошаговое руководство">
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
            { name: 'Обработка данных', link: '/knowledge/obrabotka' }, 
            { name: 'Уравнивание теодолитного хода', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Обработка данных"
        title="Уравнивание теодолитного хода: пошаговое руководство"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="27 февраля 2026"
        readTime={12}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}