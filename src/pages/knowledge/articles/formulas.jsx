import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function FormulasArticle() {
  const content = (
    <>
      <p>
        Сборник основных геодезических формул для решения типовых задач: 
        прямая и обратная геодезическая задачи, уравнивание, пересчет координат, 
        оценка точности. Формулы представлены в удобном виде с пояснениями.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📐 <strong>Как пользоваться сборником:</strong> Формулы сгруппированы 
          по разделам. Для быстрого поиска используйте навигацию или Ctrl+F.
        </p>
      </div>

      {/* Навигация по разделам */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'center',
        margin: '24px 0',
        padding: '16px',
        background: 'white',
        borderRadius: '12px',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        {[
          { id: 'geodetic-tasks', label: 'Геодезические задачи' },
          { id: 'triangulation', label: 'Триангуляция' },
          { id: 'traverse', label: 'Теодолитные ходы' },
          { id: 'accuracy', label: 'Оценка точности' },
          { id: 'coordinate-transformation', label: 'Пересчет координат' },
          { id: 'trigonometry', label: 'Тригонометрия' }
        ].map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#F0F4EF',
              color: '#2D5A27',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            {section.label}
          </a>
        ))}
      </div>

      {/* Раздел 1: Геодезические задачи */}
      <h2 id="geodetic-tasks" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>
        📐 Прямая и обратная геодезические задачи
      </h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Прямая геодезическая задача</h3>
        <p>Дано: координаты точки А (X<sub>A</sub>, Y<sub>A</sub>), дирекционный угол α, расстояние d.</p>
        <p>Найти: координаты точки B (X<sub>B</sub>, Y<sub>B</sub>).</p>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '18px'
        }}>
          <p style={{ margin: '8px 0' }}>X<sub>B</sub> = X<sub>A</sub> + d · cos α</p>
          <p style={{ margin: '8px 0' }}>Y<sub>B</sub> = Y<sub>A</sub> + d · sin α</p>
        </div>
        <p style={{ color: '#6B776D', fontSize: '14px' }}>
          где α — дирекционный угол (от 0° до 360°), d — горизонтальное проложение.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Обратная геодезическая задача</h3>
        <p>Дано: координаты точек А (X<sub>A</sub>, Y<sub>A</sub>) и B (X<sub>B</sub>, Y<sub>B</sub>).</p>
        <p>Найти: дирекционный угол α и расстояние d.</p>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '18px'
        }}>
          <p style={{ margin: '8px 0' }}>ΔX = X<sub>B</sub> - X<sub>A</sub></p>
          <p style={{ margin: '8px 0' }}>ΔY = Y<sub>B</sub> - Y<sub>A</sub></p>
          <p style={{ margin: '8px 0' }}>d = √(ΔX² + ΔY²)</p>
          <p style={{ margin: '8px 0' }}>r = arctg(|ΔY / ΔX|)  (румб в четверти)</p>
          <p style={{ margin: '8px 0' }}>α = f(r, знаки ΔX, ΔY)</p>
        </div>
        
        <div style={{
          background: '#F9F7F3',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px'
        }}>
          <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Таблица перехода от румба к дирекционному углу:</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F0F4EF' }}>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Четверть</th>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Знаки ΔX, ΔY</th>
                <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Дирекционный угол</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>I (СВ)</td><td>+ , +</td><td>α = r</td></tr>
              <tr><td>II (ЮВ)</td><td>- , +</td><td>α = 180° - r</td></tr>
              <tr><td>III (ЮЗ)</td><td>- , -</td><td>α = 180° + r</td></tr>
              <tr><td>IV (СЗ)</td><td>+ , -</td><td>α = 360° - r</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Раздел 2: Триангуляция */}
      <h2 id="triangulation" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>
        🔺 Триангуляция
      </h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Решение треугольника по стороне и двум углам</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>b = a · sin B / sin A</p>
          <p style={{ margin: '8px 0' }}>c = a · sin C / sin A</p>
        </div>
        <p>где A, B, C — углы треугольника, a — сторона против угла A, b — против B, c — против C.</p>
      </div>

      {/* Раздел 3: Теодолитные ходы */}
      <h2 id="traverse" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>
        📏 Теодолитные ходы
      </h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Уравнивание углов</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>f<sub>β</sub> = Σβ<sub>изм</sub> - Σβ<sub>теор</sub></p>
          <p style={{ margin: '8px 0' }}>Σβ<sub>теор</sub> = 180° · (n - 2)  (для замкнутого хода)</p>
          <p style={{ margin: '8px 0' }}>Σβ<sub>теор</sub> = α<sub>нач</sub> - α<sub>кон</sub> + 180° · n  (для разомкнутого хода)</p>
          <p style={{ margin: '8px 0' }}>f<sub>β доп</sub> = 1' · √n</p>
        </div>
        
        <p>Поправки в углы: δβ = -f<sub>β</sub> / n (распределяются поровну).</p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Вычисление приращений и невязок</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>ΔX = d · cos α</p>
          <p style={{ margin: '8px 0' }}>ΔY = d · sin α</p>
          <p style={{ margin: '16px 0 8px' }}>f<sub>x</sub> = ΣΔX - (X<sub>кон</sub> - X<sub>нач</sub>)</p>
          <p style={{ margin: '8px 0' }}>f<sub>y</sub> = ΣΔY - (Y<sub>кон</sub> - Y<sub>нач</sub>)</p>
          <p style={{ margin: '16px 0 8px' }}>f<sub>абс</sub> = √(f<sub>x</sub>² + f<sub>y</sub>²)</p>
          <p style={{ margin: '8px 0' }}>f<sub>отн</sub> = f<sub>абс</sub> / P (P = Σd)</p>
        </div>
        
        <p>Допустимая относительная невязка для теодолитных ходов 1:2000.</p>
      </div>

      {/* Раздел 4: Оценка точности */}
      <h2 id="accuracy" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>
        📊 Оценка точности измерений
      </h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Средняя квадратическая погрешность (СКП)</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>По Гауссу: m = √(Σδ² / n), где δ = l<sub>i</sub> - X (истинная погрешность)</p>
          <p style={{ margin: '16px 0 8px' }}>По Бесселю: m = √(Σν² / (n-1)), где ν = l<sub>i</sub> - x (вероятнейшая погрешность)</p>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>СКП функций измеренных величин</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>F = k · x  →  m<sub>F</sub> = |k| · m<sub>x</sub></p>
          <p style={{ margin: '8px 0' }}>F = x ± y  →  m<sub>F</sub> = √(m<sub>x</sub>² + m<sub>y</sub>²)</p>
          <p style={{ margin: '8px 0' }}>F = k<sub>1</sub>x ± k<sub>2</sub>y  →  m<sub>F</sub> = √(k<sub>1</sub>²m<sub>x</sub>² + k<sub>2</sub>²m<sub>y</sub>²)</p>
          <p style={{ margin: '8px 0' }}>F = x · y  →  m<sub>F</sub>/F = √( (m<sub>x</sub>/x)² + (m<sub>y</sub>/y)² )</p>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>СКП положения точки в теодолитном ходе</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>M<sub>t</sub> = √(f<sub>x</sub>² + f<sub>y</sub>²) / 2</p>
          <p style={{ margin: '8px 0' }}>M<sub>пред</sub> = √( [ΔS²] · (m<sub>β</sub>/ρ)² + (m<sub>d</sub>/d)² · [D²] )</p>
        </div>
      </div>

      {/* Раздел 5: Пересчет координат */}
      <h2 id="coordinate-transformation" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>
        🔄 Пересчет координат
      </h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Переход от географических координат к плоским (проекция Гаусса-Крюгера)</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          <p style={{ margin: '8px 0' }}>x = X + N·sinB·cosB·l²/2 · (1 + l²·cos²B·(5 - t² + 9η² + 4η⁴)/12 + ...)</p>
          <p style={{ margin: '8px 0' }}>y = N·cosB·l · (1 + l²·cos²B·(1 - t² + η²)/6 + ...)</p>
        </div>
        <p style={{ fontSize: '14px', color: '#6B776D' }}>
          где B, L — широта и долгота, l = L - L<sub>0</sub> (разность долгот), 
          N — радиус кривизны первого вертикала, t = tg B, η = e'·cos B.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Определение номера зоны и осевого меридиана</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '18px'
        }}>
          <p style={{ margin: '8px 0' }}>n = целая часть(L / 6) + 1 (для 6-градусных зон)</p>
          <p style={{ margin: '8px 0' }}>n = целая часть((L + 1.5) / 3) (для 3-градусных зон)</p>
          <p style={{ margin: '8px 0' }}>L<sub>0</sub> = n·6 - 3 (для 6-градусных зон)</p>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Преобразование Гельмерта (7 параметров)</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          <p style={{ margin: '8px 0' }}>X₂ = ΔX + (1 + m)·(X₁ - Rz·Y₁ + Ry·Z₁)</p>
          <p style={{ margin: '8px 0' }}>Y₂ = ΔY + (1 + m)·(Rz·X₁ + Y₁ - Rx·Z₁)</p>
          <p style={{ margin: '8px 0' }}>Z₂ = ΔZ + (1 + m)·(-Ry·X₁ + Rx·Y₁ + Z₁)</p>
        </div>
      </div>

      {/* Раздел 6: Тригонометрические формулы */}
      <h2 id="trigonometry" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>
        📐 Тригонометрические формулы
      </h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Основные соотношения</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>sin²α + cos²α = 1</p>
          <p style={{ margin: '8px 0' }}>tg α = sin α / cos α</p>
          <p style={{ margin: '8px 0' }}>ctg α = cos α / sin α</p>
          <p style={{ margin: '16px 0 8px' }}>sin(90° - α) = cos α</p>
          <p style={{ margin: '8px 0' }}>cos(90° - α) = sin α</p>
          <p style={{ margin: '8px 0' }}>tg(90° - α) = ctg α</p>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Теорема синусов</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '18px'
        }}>
          <p style={{ margin: '8px 0' }}>a / sin A = b / sin B = c / sin C = 2R</p>
        </div>
        <p>где R — радиус описанной окружности.</p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Теорема косинусов</h3>
        
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '18px'
        }}>
          <p style={{ margin: '8px 0' }}>a² = b² + c² - 2bc · cos A</p>
        </div>
      </div>

      {/* Раздел 7: Перевод угловых величин */}
      <h2 style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>
        🔄 Перевод угловых величин
      </h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          margin: '16px 0',
          fontFamily: 'monospace',
          fontSize: '16px'
        }}>
          <p style={{ margin: '8px 0' }}>1° = 60' = 3600"</p>
          <p style={{ margin: '8px 0' }}>1 рад = 180°/π ≈ 57.29578° ≈ 57°17'45"</p>
          <p style={{ margin: '8px 0' }}>1° = π/180 рад ≈ 0.0174533 рад</p>
          <p style={{ margin: '16px 0 8px' }}>ρ° = 180°/π ≈ 57.3° (число градусов в радиане)</p>
          <p style={{ margin: '8px 0' }}>ρ' = 57.3° · 60 ≈ 3438'</p>
          <p style={{ margin: '8px 0' }}>ρ" = 57.3° · 3600 ≈ 206265"</p>
        </div>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '40px 0 24px'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькуляторы</h3>
        <p>
          Для автоматического выполнения расчётов по этим формулам используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            геодезические калькуляторы
          </a>.
        </p>
        <p style={{ marginTop: '12px' }}>
          Доступны: прямая/обратная геодезическая задача, пересчет зон, 
          уравнивание ходов, оценка точности и многое другое.
        </p>
      </div>

      <blockquote>
        "Формулы — это язык геодезии. Понимание того, как они выводятся и 
        применяются, отличает профессионала от оператора прибора. Держите этот 
        сборник под рукой, и любая задача станет решаемой."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Глоссарий геодезических терминов',
      category: 'СПРАВОЧНИК',
      description: 'Основные понятия и определения в геодезии.',
      readTime: 25,
      link: '/knowledge/articles/glossary'
    },
    {
      title: 'Калькуляторы онлайн',
      category: 'ИНСТРУМЕНТЫ',
      description: 'Геодезические калькуляторы для быстрых расчётов.',
      readTime: 5,
      link: '/calculators'
    },
    {
      title: 'Уравнивание теодолитного хода',
      category: 'ОБРАБОТКА ДАННЫХ',
      description: 'Пошаговое руководство по распределению невязок.',
      readTime: 12,
      link: '/knowledge/articles/adjustment'
    }
  ];

  return (
    <Layout 
      title="Сборник геодезических формул" 
      description="Основные формулы для решения прямых и обратных геодезических задач, уравнивания, пересчета координат."
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
            { name: 'Справочник', link: '/knowledge/spravochnik' }, 
            { name: 'Сборник формул', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Справочник"
        title="Сборник формул для геодезических расчетов"
        author={{ 
          name: 'Редакция', 
          role: 'Геодезист.Онлайн'
        }}
        date="5 марта 2026"
        readTime={20}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}