import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function LevellingBasics() {
  const content = (
    <>
      <div style={{
        background: '#F0F4EF',
        padding: '24px',
        borderRadius: '16px',
        marginBottom: '32px',
        borderLeft: '4px solid #E6B422'
      }}>
        <p style={{ fontSize: '18px', margin: 0, color: '#2D5A27' }}>
          📏 <strong>Исчерпывающее руководство по нивелированию:</strong> от теории высот и методов до детального устройства, классификации и принципа работы современных приборов.
        </p>
      </div>

      <h2>📊 Что такое нивелирование и какие бывают высоты?</h2>
      <p>
        <strong>Нивелирование</strong> — это определение высот точек земной поверхности или разностей высот между ними (превышений).
      </p>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px'
        }}>
          <thead>
            <tr style={{ background: 'rgba(167, 196, 160, 0.1)' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Тип высоты</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Отсчёт от</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Применение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Абсолютная (H)</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Среднего уровня <strong>Балтийского моря</strong> (ноль Кронштадтского футштока)</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Государственные сети, топографические планы</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Условная</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Произвольно выбранной поверхности</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Строительство, монтаж оборудования</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '18px', margin: 0 }}>
          <strong>Ключевая формула:</strong> <code style={{ background: '#F0F4EF', padding: '4px 8px', borderRadius: '4px' }}>h = H<sub>B</sub> - H<sub>A</sub></code>
        </p>
        <p style={{ fontSize: '14px', color: '#6B776D', marginTop: '8px' }}>
          где h — превышение (знак «+» — точка B выше A, «-» — ниже), H<sub>B</sub> и H<sub>A</sub> — высоты точек.
        </p>
      </div>

      <h2>🔧 Классификация нивелиров по точности и конструкции</h2>
      <p>Нивелиры классифицируют по двум ключевым признакам: <strong>точности</strong> и <strong>способу установки визирного луча в горизонтальное положение</strong>.</p>

      <h3>1. Классификация по точности (ГОСТ 10528-90)</h3>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ background: 'rgba(167, 196, 160, 0.1)' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Группа</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Примеры марок</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>СКП на 1 км хода</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Макс. плечо</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Увеличение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Высокоточные</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Н-05, Н-1, Н-2</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>0.5 мм (с уровнем)<br/>0.3 мм (с компенсатором)</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>до 50 м</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>40x</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Точные</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Н-3, 2Н-3Л, НС-3</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>3.0 мм (с уровнем)<br/>2.0 мм (с компенсатором)</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>75-100 м</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>30x</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Технические</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>НТ, НТС, Н-10</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>10.0 мм</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>100-150 м</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>20x</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2. Классификация по способу горизонтирования</h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>🎯 Уровенные</h4>
          <p>Горизонтальное положение визирной оси трубы обеспечивается вручную с помощью <strong>цилиндрического уровня</strong> и элевационного винта.</p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>⚡ С компенсатором</h4>
          <p>Современные приборы, в которых <strong>автоматический компенсатор</strong> мгновенно возвращает визирный луч в горизонтальное положение при небольших наклонах.</p>
        </div>
      </div>

      <h2>🛠️ Устройство оптического нивелира (на примере 2Н-3Л)</h2>
      
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <p>Нивелир <strong>2Н-3Л</strong> — точный нивелир с уровнем, лимбом для измерения горизонтальных углов и трубой прямого изображения. Его основные узлы:</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginTop: '16px'
        }}>
          <ul style={{ margin: 0 }}>
            <li>Окуляр</li>
            <li>Диоптрийное кольцо</li>
            <li>Круглый уровень</li>
            <li>Кремальера</li>
            <li>Зрительная труба</li>
            <li>Подъёмные винты</li>
            <li>Цилиндрический уровень</li>
          </ul>
          <ul style={{ margin: 0 }}>
            <li>Элевационный винт</li>
            <li>Исправительные винты уровня</li>
            <li>Лимб и нониус</li>
            <li>Наводящий винт трубы</li>
            <li>Объектив</li>
            <li>Трегер</li>
          </ul>
        </div>
      </div>

      <h2>⚙️ Принцип работы компенсатора</h2>
      
      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <p><strong>Суть проблемы:</strong> При наклоне зрительной трубы на малый угол γ горизонтальный луч смещается относительно средней нити сетки.</p>
        <p><strong>Принцип компенсации:</strong> Устройство (подвешенная призма, зеркало или линза) автоматически изменяет ход луча так, что изображение правильного отсчёта всегда проецируется на среднюю нить сетки.</p>
        
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '12px',
          margin: '16px 0',
          textAlign: 'center'
        }}>
          <code style={{ fontSize: '16px' }}>f ⋅ sin γ = S ⋅ sin β</code>
        </div>
        
        <p>где f — фокусное расстояние объектива, S — расстояние до точки подвеса компенсатора, β — угол отклонения луча компенсатором.</p>
      </div>

      <h2>✨ Современные технологии: лазерные и цифровые нивелиры</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🔴 Лазерные нивелиры</h3>
          <p>Создают видимую <strong>лазерную плоскость или линию</strong> в пространстве, что идеально для внутренней отделки, монтажа и разметки.</p>
          <p><strong>Принцип:</strong> Вертикальный лазерный луч направляется на вращающуюся пентапризму, которая отклоняет его на 90°.</p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📱 Цифровые нивелиры</h3>
          <p>Автоматически считывают и записывают отсчёты по <strong>специальной штрихкодовой рейке</strong>, исключая ошибку оператора и ускоряя камеральную обработку.</p>
        </div>
      </div>

      <h2>🗺️ Геометрическое нивелирование: суть и способы</h2>
      <p>Это <strong>основной высокоточный метод</strong>, требующий горизонтального луча визирования (создаваемого нивелиром) и отсчётной шкалы (рейки).</p>

      <h3>Основные способы:</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        margin: '20px 0'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>📐 «Из середины» (основной)</h4>
          <p>Нивелир ставится между точками A и B.</p>
          <code>h = a - b</code><br/>
          <code>H<sub>B</sub> = H<sub>A</sub> + h</code>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>➡️ «Вперёд»</h4>
          <p>Нивелир над точкой A, измеряется высота инструмента i.</p>
          <code>h = i - b</code><br/>
          <code>H<sub>B</sub> = H<sub>A</sub> + h</code>
        </div>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <p><strong>Горизонт инструмента (ГИ):</strong> <code>ГИ = H<sub>A</sub> + a</code>, тогда <code>H<sub>промеж</sub> = ГИ - c</code></p>
      </div>

      <h2>🔩 Организация работ и закрепление точек</h2>
      
      <ul>
        <li><strong>Простое нивелирование:</strong> Одна установка прибора</li>
        <li><strong>Сложное нивелирование (нивелирный ход):</strong> Последовательность станций для удалённых точек</li>
        <li><strong>Точки хода:</strong> <strong>Связующие</strong> (нивелируются с двух сторон рейки), <strong>промежуточные</strong> (только по чёрной стороне)</li>
        <li><strong>Закрепление:</strong> <strong>Постоянное</strong> (реперы грунтовые, стенные) и <strong>временное</strong> (колья, «башмаки»)</li>
      </ul>

      <blockquote>
        "Статья основана на учебных материалах (ГОСТ 10528-90, ГОСТ 11158-83) и практике. Служит теоретической основой для выполнения полевых работ."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Продольное нивелирование трассы',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Практическое руководство по высотной съёмке линейных сооружений.',
      readTime: 12,
      link: '/knowledge/articles/longitudinal-levelling'
    },
    {
      title: 'Организация инженерно-геодезических работ',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Этапы работ, документальное сопровождение и согласования.',
      readTime: 12,
      link: '/knowledge/articles/survey-stages'
    },
    {
      title: 'Leica LS10',
      category: 'ОБОРУДОВАНИЕ',
      description: 'Цифровой нивелир Leica LS10 — точность 0.3 мм/км',
      readTime: 5,
      link: '/equipment/levels/leica-ls10'
    }
  ];

  return (
    <Layout 
      title="Нивелирование: от основ до современных приборов" 
      description="Исчерпывающее руководство по нивелированию: теория высот, методы, классификация и принцип работы современных приборов"
    >
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'База знаний', link: '/knowledge' },
            { name: 'Основы оборудования', link: '/knowledge/oborudovanie' },
            { name: 'Нивелирование', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <ArticlePage
        category="Основы оборудования"
        title="Нивелирование: от основ до современных приборов"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="10 декабря 2023"
        readTime={16}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}