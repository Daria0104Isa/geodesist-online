import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function FacadeSurveyArticle() {
  const content = (
    <>
      <p>
        Высотная съемка фасадов зданий — специализированный вид геодезических работ, 
        необходимый для реставрации, реконструкции, архитектурных обмеров и 
        составления исполнительной документации. В этой статье мы рассмотрим 
        методы сбора данных, оборудование и особенности обработки результатов.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🏛️ <strong>Для чего нужна съемка фасадов?</strong> Реставрация исторических 
          зданий, проектирование реконструкции, обмерные чертежи для архитектурных 
          решений, создание 3D-моделей, оценка технического состояния.
        </p>
      </div>

      <h2>📋 Методы съемки фасадов</h2>

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
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📐 Тахеометрическая съемка</h3>
          <p>Классический метод с использованием электронного тахеометра. Позволяет получить координаты характерных точек фасада.</p>
          <p style={{ marginTop: '12px' }}><strong>Точность:</strong> ±2-5 см</p>
          <p><strong>Производительность:</strong> низкая</p>
          <p><strong>Особенности:</strong> требует прямой видимости, для высоких зданий нужны дополнительные станции</p>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📷 Фотограмметрия</h3>
          <p>Обработка серии перекрывающихся фотографий. Требует калибровки камеры и специального ПО.</p>
          <p style={{ marginTop: '12px' }}><strong>Точность:</strong> ±1-3 см (с контрольными точками)</p>
          <p><strong>Производительность:</strong> высокая (быстрая съемка, длительная обработка)</p>
          <p><strong>Особенности:</strong> нужны марки или характерные точки для привязки</p>
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
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🔦 Лазерное сканирование</h3>
          <p>Наиболее точный и информативный метод. Сканер получает миллионы точек (облако точек) с высокой плотностью.</p>
          <p style={{ marginTop: '12px' }}><strong>Точность:</strong> ±2-5 мм</p>
          <p><strong>Производительность:</strong> средняя (быстрая съемка, большой объем данных)</p>
          <p><strong>Особенности:</strong> дорогое оборудование, требует мощного ПО для обработки</p>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🚁 Аэросъемка с БПЛА</h3>
          <p>Использование дронов для съемки верхних частей зданий и труднодоступных элементов.</p>
          <p style={{ marginTop: '12px' }}><strong>Точность:</strong> ±3-7 см</p>
          <p><strong>Производительность:</strong> высокая</p>
          <p><strong>Особенности:</strong> требует разрешений на полеты, зависит от погоды</p>
        </div>
      </div>

      <h2>📊 Сравнение методов</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '14px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Метод</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Точность</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Скорость полевых работ</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Стоимость оборудования</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Детализация</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Тахеометрия</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★☆☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★☆☆☆</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Фотограмметрия</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★★☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Лазерное сканирование</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★★★</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★★☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★☆☆☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★★★</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Съемка с БПЛА</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★★★</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>★★★☆☆</td>
          </tr>
        </tbody>
      </table>

      <h2>🔧 Подготовка к съемке</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>1. Рекогносцировка</h3>
        <ul>
          <li>Оценить доступность фасада (строительные леса, высота, окружающая застройка)</li>
          <li>Определить места установки станций (для тахеометра и сканера)</li>
          <li>Выявить необходимость в альпинистском снаряжении или подъемных механизмах</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>2. Создание опорной сети</h3>
        <ul>
          <li>Заложить временные реперы вокруг здания (минимум 3-4 точки)</li>
          <li>Определить их координаты (тахеометрией или GNSS)</li>
          <li>Для высоких зданий предусмотреть передачу отметок на верхние ярусы</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>3. Маркировка</h3>
        <p>Для фотограмметрии и лазерного сканирования часто требуются марки:</p>
        <ul>
          <li><strong>Плоские марки</strong> — для привязки снимков (круглые контрастные наклейки)</li>
          <li><strong>Сферические марки</strong> — для лазерного сканирования</li>
          <li><strong>Естественные точки</strong> — углы, архитектурные детали (если нельзя клеить марки)</li>
        </ul>
      </div>

      <h2>📏 Полевые работы</h2>

      <h3>Тахеометрическая съемка фасада</h3>
      <ol>
        <li>Установить тахеометр на станции с известными координатами</li>
        <li>Последовательно снимать характерные точки: углы, оконные и дверные проемы, архитектурный декор</li>
        <li>Для высоких точек использовать безотражательный режим (точность может снижаться)</li>
        <li>Выполнить контрольные промеры (расстояния между точками)</li>
      </ol>

      <div style={{
        background: '#FFF3E0',
        padding: '16px',
        borderRadius: '8px',
        margin: '20px 0',
        borderLeft: '4px solid #E6B422'
      }}>
        <p style={{ margin: 0, fontWeight: 500 }}>
          💡 <strong>Совет:</strong> Для сложных фасадов выполняйте съемку поэтапно, 
          с нескольких станций, чтобы минимизировать "мертвые зоны".
        </p>
      </div>

      <h3>Фотограмметрическая съемка</h3>
      <ol>
        <li>Разместить марки на фасаде (если требуется высокая точность)</li>
        <li>Выполнить серию снимков с перекрытием 60-80%</li>
        <li>Снимать с разных ракурсов (фронтально, под углом)</li>
        <li>Для высоких зданий использовать телеобъектив или БПЛА</li>
        <li>Измерить координаты марок тахеометром (для привязки)</li>
      </ol>

      <h3>Лазерное сканирование</h3>
      <ol>
        <li>Установить сканер на станции (сканирование с 3-5 точек обычно достаточно)</li>
        <li>Выбрать разрешение сканирования (чем выше, тем больше деталей и больше объем данных)</li>
        <li>Обеспечить перекрытие сканов (для последующей сшивки)</li>
        <li>Отсканировать марки или сферы для привязки</li>
      </ol>

      <h2>💻 Камеральная обработка</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Для тахеометрической съемки:</h3>
        <ol>
          <li>Выгрузить данные из контроллера</li>
          <li>Построить чертеж в CAD (точки соединяются линиями, создаются плоскости)</li>
          <li>Оформить фасад (отмывка, штриховка, размеры)</li>
        </ol>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>Для фотограмметрии:</h3>
        <ol>
          <li>Обработать снимки в ПО (Agisoft Metashape, RealityCapture, Pix4D)</li>
          <li>Создать облако точек, mesh, текстуру</li>
          <li>Выполнить привязку по маркам</li>
          <li>Создать ортофотоплан фасада</li>
          <li>Экспортировать в CAD</li>
        </ol>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>Для лазерного сканирования:</h3>
        <ol>
          <li>Обработать сканы в ПО (Leica Cyclone, Trimble RealWorks, FARO Scene)</li>
          <li>Выполнить регистрацию (сшивку) сканов</li>
          <li>Создать единое облако точек</li>
          <li>Выполнить привязку по координатам</li>
          <li>Построить чертежи по облаку точек</li>
        </ol>
      </div>

      <h2>📐 Точность и детализация</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Масштаб чертежа</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Требуемая точность</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Рекомендуемый метод</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1:50, 1:100 (обмеры)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±5-10 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Лазерное сканирование</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1:200 (архитектурные чертежи)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±20-30 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Фотограмметрия, тахеометрия</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1:500 (ситуационные планы)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±50-100 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>БПЛА, тахеометрия</td>
          </tr>
        </tbody>
      </table>

      <h2>🚨 Особые случаи</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>🏛️ Реставрация исторических зданий</h3>
          <p>Требует максимальной детализации. Рекомендуется лазерное сканирование + макрофотограмметрия для лепнины и декоративных элементов. Каждый элемент должен быть задокументирован с миллиметровой точностью.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>🏢 Высотные здания</h3>
          <p>Для верхних этажей используйте БПЛА или альпинистское снаряжение. Передавайте отметки лазерным отвесом или GNSS-приемниками на верху здания.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>🌆 Стесненные условия</h3>
          <p>В узких улочках, где нет места для установки станций, используйте фотограмметрию с рук или наземное лазерное сканирование с минимального расстояния.</p>
        </div>
      </div>

      <h2>📝 Результаты работ</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Готовая документация:</h3>
        <ul>
          <li><strong>Обмерные чертежи фасадов</strong> (все стороны здания) с размерами и отметками</li>
          <li><strong>Развертки фасадов</strong> (при необходимости)</li>
          <li><strong>Узлы и детали</strong> — архитектурные элементы в крупном масштабе</li>
          <li><strong>3D-модель</strong> — облако точек или твердотельная модель</li>
          <li><strong>Ведомость координат</strong> — характерных точек</li>
          <li><strong>Схемы отклонений</strong> от вертикали (если требуется)</li>
        </ul>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор съемки фасадов</h3>
        <p>
          Для расчета количества станций и выбора оптимального метода используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор съемки фасадов
          </a>.
        </p>
      </div>

      <blockquote>
        "Фасад — лицо здания. Качественная съемка фасада — это не просто чертеж, 
        а документальное свидетельство истории и основа для будущей жизни здания. 
        Особенно когда речь идет о реставрации, где каждый миллиметр имеет значение."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Современные методы съёмки',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Сравнение тахеометрии, ГНСС, аэрофотосъёмки и лазерного сканирования.',
      readTime: 10,
      link: '/knowledge/articles/modern-methods'
    },
    {
      title: 'Работа с тахеометром: быстрый старт',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Краткое руководство для начала полевых работ.',
      readTime: 14,
      link: '/knowledge/articles/tacheometry-basics'
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
      title="Высотная съемка фасадов зданий" 
      description="Методика сбора данных для архитектурных обмеров и реставрационных работ."
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
            { name: 'Съемка фасадов', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Высотная съемка фасадов зданий"
        author={{ 
          name: 'Петр Васильев', 
          role: 'Технический директор',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        }}
        date="4 марта 2026"
        readTime={15}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}