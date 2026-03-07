import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function DeformationMonitoringArticle() {
  const content = (
    <>
      <p>
        Геодезический мониторинг деформаций — это система регулярных наблюдений 
        за смещениями и осадками зданий, сооружений и земной поверхности. 
        Мониторинг позволяет своевременно обнаружить опасные деформации и 
        предотвратить аварии. В этой статье мы рассмотрим методы наблюдений, 
        точность измерений и периодичность работ.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📊 <strong>Зачем нужен мониторинг?</strong> Контроль за осадками и 
          смещениями необходим при строительстве вблизи существующих зданий, 
          при возведении высотных сооружений, в зонах оползней и карстовых 
          провалов, а также для наблюдения за уникальными объектами (плотины, 
          мосты, тоннели).
        </p>
      </div>

      <h2>📋 Виды деформаций</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>⬇️ Осадки (вертикальные смещения)</h3>
          <p>Изменение высотного положения точек сооружения. Вызываются уплотнением грунтов, нагрузкой от здания, изменением уровня грунтовых вод.</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B776D' }}>
            Единица измерения: мм
          </p>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>↔️ Сдвиги (горизонтальные смещения)</h3>
          <p>Изменение планового положения точек. Вызываются боковым давлением грунта, неравномерными осадками, тектоническими процессами.</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B776D' }}>
            Единица измерения: мм
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📐 Крены и наклоны</h3>
          <p>Поворот сооружения относительно вертикальной оси. Определяются по разности осадок противоположных точек.</p>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🌀 Кручения</h3>
          <p>Поворот сооружения вокруг вертикальной оси. Встречается у высотных зданий под воздействием ветра.</p>
        </div>
      </div>

      <h2>🎯 Методы геодезического мониторинга</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>1. Геометрическое нивелирование</h3>
        <p>Основной метод определения осадок. Точность до 0.1-0.5 мм.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginTop: '16px'
        }}>
          <div style={{ background: '#F0F4EF', padding: '12px', borderRadius: '8px' }}>
            <strong>I класс</strong> — СКО ≤ 0.5 мм/км, для ответственных объектов
          </div>
          <div style={{ background: '#F0F4EF', padding: '12px', borderRadius: '8px' }}>
            <strong>II класс</strong> — СКО ≤ 1.0 мм/км, для основных наблюдений
          </div>
          <div style={{ background: '#F0F4EF', padding: '12px', borderRadius: '8px' }}>
            <strong>III класс</strong> — СКО ≤ 3.0 мм/км, для второстепенных объектов
          </div>
          <div style={{ background: '#F0F4EF', padding: '12px', borderRadius: '8px' }}>
            <strong>IV класс</strong> — СКО ≤ 5.0 мм/км, для предварительных оценок
          </div>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>2. Тригонометрическое нивелирование</h3>
        <p>Определение превышений по вертикальным углам и расстояниям. Используется для наблюдения за труднодоступными точками (на высотных зданиях, башнях).</p>
        <p style={{ marginTop: '12px' }}>Точность: 1-2 мм при использовании точных тахеометров и тщательной методике.</p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>3. Спутниковые методы (GNSS)</h3>
        <p>Применяются для наблюдения за крупными объектами (плотины, мосты, карьеры) в режиме реального времени.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginTop: '16px'
        }}>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Статика</h4>
            <p>Точность 3-5 мм, наблюдения от 1 до 24 часов. Для высокоточного мониторинга.</p>
          </div>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>RTK</h4>
            <p>Точность 10-20 мм, для оперативного контроля (например, при строительстве).</p>
          </div>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>4. Специальные методы</h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginTop: '16px'
        }}>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>🔬 Гидростатическое нивелирование</h4>
            <p>Точность до 0.01 мм. Для наблюдения за деформациями внутри зданий, в тоннелях.</p>
          </div>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>📏 Щелемеры и трещиномеры</h4>
            <p>Для контроля раскрытия трещин. Точность 0.01-0.1 мм.</p>
          </div>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>⚖️ Наклономеры</h4>
            <p>Для измерения кренов и наклонов. Точность до 1 угловой секунды.</p>
          </div>
        </div>
      </div>

      <h2>📊 Точность измерений при мониторинге</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Тип объекта</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Допустимая погрешность осадок</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Допустимая погрешность сдвигов</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Уникальные объекты (АЭС, плотины)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±0.5-1.0 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±1.0-2.0 мм</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Высотные здания, мосты</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±1.0-2.0 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±2.0-3.0 мм</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Жилые и общественные здания</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±2.0-3.0 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±3.0-5.0 мм</td>
          </tr>
        </tbody>
      </table>

      <h2>📏 Организация мониторинга</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>1. Создание геодезической основы</h3>
        <ul>
          <li><strong>Опорные реперы</strong> — закладываются вне зоны влияния объекта (не менее 2-3 реперов)</li>
          <li><strong>Контрольные марки</strong> — устанавливаются на наблюдаемом объекте (не менее 3-4 на секцию)</li>
          <li><strong>Глубинные реперы</strong> — для исключения влияния сезонных подвижек грунта</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>2. Периодичность наблюдений</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Этап</th>
              <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Периодичность</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Начальный цикл (до начала работ)</td><td>1 раз</td></tr>
            <tr><td>В период строительства</td><td>ежемесячно или после каждого этапа</td></tr>
            <tr><td>После завершения строительства</td><td>раз в квартал, затем раз в год</td></tr>
            <tr><td>При интенсивных деформациях</td><td>ежедневно</td></tr>
          </tbody>
        </table>
      </div>

      <h2>📊 Обработка результатов и критерии безопасности</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Основные показатели:</h3>
        <ul>
          <li><strong>Абсолютная осадка</strong> — разность высот между текущим и начальным циклом</li>
          <li><strong>Скорость осадки</strong> — осадка за единицу времени (мм/мес, мм/год)</li>
          <li><strong>Относительная разность осадок</strong> — ΔS/L (где L — расстояние между марками)</li>
          <li><strong>Крен</strong> — i = ΔS/L</li>
        </ul>

        <div style={{
          background: '#FFF3E0',
          padding: '16px',
          borderRadius: '8px',
          margin: '16px 0'
        }}>
          <p style={{ margin: 0, fontWeight: 500 }}>
            ⚠️ <strong>Предельные значения:</strong> Если скорость осадки превышает 
            2 мм/мес для жилых зданий или 1 мм/мес для уникальных объектов, 
            необходимо усилить наблюдения и уведомить проектировщиков.
          </p>
        </div>
      </div>

      <h2>📝 Отчётная документация</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <ol>
          <li><strong>Ведомости осадок</strong> — по каждой марке за каждый цикл</li>
          <li><strong>Графики осадок во времени</strong> — наглядное представление динамики</li>
          <li><strong>Схемы расположения марок и изолинии осадок</strong></li>
          <li><strong>Заключение</strong> — оценка состояния объекта, рекомендации</li>
        </ol>
      </div>

      <h2>🚨 Типичные ошибки при мониторинге</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Нестабильность опорных реперов</h3>
          <p>Реперы должны быть заложены ниже глубины промерзания и вне зоны влияния объекта. Иначе все измерения будут искажены.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Слишком редкие циклы наблюдений</h3>
          <p>Можно пропустить момент начала интенсивных деформаций. Периодичность должна соответствовать скорости процесса.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Неучёт температурных деформаций</h3>
          <p>Здания "дышат" — расширяются и сужаются при изменении температуры. Это нужно учитывать при интерпретации результатов.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Ошибки в методике измерений</h3>
          <p>Использование недостаточно точных приборов, несоблюдение методики нивелирования, неправильная привязка к реперам.</p>
        </div>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор мониторинга</h3>
        <p>
          Для автоматического расчёта скоростей осадок и построения графиков используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор мониторинга деформаций
          </a>.
        </p>
      </div>

      <blockquote>
        "Геодезический мониторинг — это не просто измерения, это система раннего 
        предупреждения. Миллиметры, зафиксированные сегодня, могут предотвратить 
        катастрофу завтра. Не экономьте на безопасности."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Нивелирование: от основ до приборов',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Классификация нивелиров, методы, устройство.',
      readTime: 16,
      link: '/knowledge/articles/levelling-basics'
    },
    {
      title: 'Построение геодезических сетей',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Методы триангуляции, полигонометрии, спутниковые технологии.',
      readTime: 14,
      link: '/knowledge/articles/geodetic-networks'
    },
    {
      title: 'Организация инженерно-геодезических работ',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Этапы работ, документальное сопровождение и согласования.',
      readTime: 12,
      link: '/knowledge/articles/survey-stages'
    }
  ];

  return (
    <Layout 
      title="Геодезический мониторинг деформаций" 
      description="Наблюдения за осадками и смещениями зданий и сооружений. Методы, точность, периодичность."
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
            { name: 'Полевые методы', link: '/knowledge/polevye-metody' }, 
            { name: 'Мониторинг деформаций', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Геодезический мониторинг деформаций"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="3 марта 2026"
        readTime={17}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}