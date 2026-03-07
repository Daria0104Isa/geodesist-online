import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function TacheometricSurveyArticle() {
  const content = (
    <>
      <p>
        Тахеометрическая съемка — один из самых распространенных методов получения 
        топографических планов. Она позволяет одновременно определять плановое и 
        высотное положение точек местности. В этой статье мы подробно разберём 
        весь процесс: от подготовки оборудования до создания готового плана.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📐 <strong>Суть метода:</strong> С одной точки стояния (станции) измеряются 
          направления, расстояния и углы наклона до характерных точек местности. 
          По этим данным вычисляются координаты и высоты точек.
        </p>
      </div>

      <h2>📋 Подготовительный этап</h2>

      <h3>1. Рекогносцировка местности</h3>
      <p>Перед началом работ необходимо обследовать участок и определить:</p>
      <ul>
        <li>Места установки станций (с учётом видимости)</li>
        <li>Наличие исходных пунктов геодезической сети</li>
        <li>Характерные точки рельефа и ситуации</li>
        <li>Препятствия и зоны плохой видимости</li>
      </ul>

      <h3>2. Подготовка оборудования</h3>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>Необходимое оборудование:</h4>
        <ul style={{ columns: 2, columnGap: '40px' }}>
          <li>✅ Электронный тахеометр</li>
          <li>✅ Штатив (2 шт.)</li>
          <li>✅ Веха с отражателем</li>
          <li>✅ Полевой контроллер или планшет</li>
          <li>✅ Зарядные устройства</li>
          <li>✅ Рулетка для измерения высоты прибора</li>
          <li>✅ Полевой журнал (бумажный или электронный)</li>
          <li>✅ Защитный чехол от дождя</li>
        </ul>
      </div>

      <h2>🎯 Полевые работы</h2>

      <h3>1. Создание съёмочного обоснования</h3>
      <p>
        Если на участке нет пунктов ГГС, необходимо проложить теодолитный или 
        тахеометрический ход. Минимальное количество станций — 2 (начальная и конечная).
      </p>

      <div style={{
        background: '#FFF3E0',
        padding: '16px',
        borderRadius: '8px',
        margin: '20px 0',
        borderLeft: '4px solid #E6B422'
      }}>
        <p style={{ margin: 0, fontWeight: 500 }}>
          📌 <strong>Требования к ходу:</strong> Длина хода не более 1-2 км, 
          количество станций не более 10-15, относительная погрешность не более 1:2000.
        </p>
      </div>

      <h3>2. Установка прибора на станции</h3>
      <ol>
        <li><strong>Центрирование</strong> — установите тахеометр точно над точкой (погрешность не более 3-5 мм)</li>
        <li><strong>Горизонтирование</strong> — приведите пузырёк уровня в нуль-пункт</li>
        <li><strong>Измерение высоты прибора</strong> — рулеткой от точки до оси вращения трубы</li>
        <li><strong>Ориентирование</strong> — наведитесь на предыдущую станцию или пункт с известными координатами</li>
      </ol>

      <h3>3. Съёмка реечных точек</h3>
      <p>Последовательность действий при съёмке каждой точки:</p>
      <ol>
        <li>Навестись на веху с отражателем</li>
        <li>Зафиксировать отсчёты: горизонтальный угол, вертикальный угол, расстояние</li>
        <li>Записать номер точки и код (пикет, рельеф, ситуация)</li>
        <li>Проконтролировать качество (RMS, количество измерений)</li>
      </ol>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '20px 0'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>💡 Кодирование точек:</h4>
        <p>Используйте коды для автоматизации обработки:</p>
        <ul>
          <li><strong>GR</strong> — граница растительности</li>
          <li><strong>BD</strong> — здание</li>
          <li><strong>RD</strong> — дорога</li>
          <li><strong>BR</strong> — бровка</li>
          <li><strong>TG</strong> — тангенс (перегиб рельефа)</li>
        </ul>
      </div>

      <h3>4. Контрольные измерения</h3>
      <ul>
        <li>Через каждые 50-100 точек выполняйте повторное измерение на предыдущую станцию</li>
        <li>Следите за стабильностью прибора (пузырёк уровня)</li>
        <li>Периодически проверяйте ориентирование (замыкание горизонта)</li>
      </ul>

      <h2>💻 Камеральная обработка</h2>

      <h3>1. Выгрузка данных</h3>
      <p>
        Перенесите полевые измерения с контроллера на компьютер. Форматы данных:
      </p>
      <ul>
        <li><strong>Raw data</strong> — сырые измерения (углы, расстояния)</li>
        <li><strong>DXF/DWG</strong> — готовые чертежи (если обрабатывали в поле)</li>
        <li><strong>CSV/TXT</strong> — координаты точек</li>
      </ul>

      <h3>2. Обработка в специализированном ПО</h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        margin: '20px 0'
      }}>
        <div style={{
          background: 'white',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>🇷🇺</div>
          <strong>CREDO</strong>
          <p style={{ fontSize: '13px', marginTop: '8px' }}>Стандарт в России, полный цикл обработки</p>
        </div>
        <div style={{
          background: 'white',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>🇺🇸</div>
          <strong>AutoCAD Civil 3D</strong>
          <p style={{ fontSize: '13px', marginTop: '8px' }}>Мощный инструмент для моделирования</p>
        </div>
        <div style={{
          background: 'white',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>🇨🇭</div>
          <strong>Leica Infinity</strong>
          <p style={{ fontSize: '13px', marginTop: '8px' }}>Единая среда для всех данных</p>
        </div>
      </div>

      <h3>3. Создание топографического плана</h3>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>Последовательность создания плана:</h4>
        <ol>
          <li><strong>Построение рельефа</strong> — создание горизонталей (триангуляция, интерполяция)</li>
          <li><strong>Нанесение ситуации</strong> — здания, дороги, коммуникации</li>
          <li><strong>Оформление зарамочных надписей</strong> — штамп, масштаб, дата</li>
          <li><strong>Контроль качества</strong> — проверка наложений, полноты съёмки</li>
          <li><strong>Экспорт в требуемый формат</strong> (DWG, DXF, PDF)</li>
        </ol>
      </div>

      <h2>📊 Точность тахеометрической съёмки</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Масштаб съёмки</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Сечение рельефа, м</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>СКП плановых</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>СКП высотных</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1:500</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.25-0.5</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.5 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1/10 сечения</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1:1000</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.5</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.5 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1/10 сечения</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1:2000</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1.0</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1.0 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1/10 сечения</td>
          </tr>
        </tbody>
      </table>

      <h2>🚨 Типичные ошибки и их предотвращение</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Ошибки центрирования</h3>
          <p><strong>Последствия:</strong> систематические ошибки в координатах</p>
          <p><strong>Решение:</strong> тщательно центрировать прибор, использовать оптический отвес</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Неправильная высота прибора</h3>
          <p><strong>Последствия:</strong> ошибки в высотах точек</p>
          <p><strong>Решение:</strong> измерять высоту до оси вращения трубы, записывать в журнал</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Плохое ориентирование</h3>
          <p><strong>Последствия:</strong> разворот всей съёмки</p>
          <p><strong>Решение:</strong> проверять ориентирование через каждые 50-100 точек</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Пропуск характерных точек</h3>
          <p><strong>Последствия:</strong> искажение рельефа и ситуации</p>
          <p><strong>Решение:</strong> тщательная рекогносцировка, ведение абриса</p>
        </div>
      </div>

      <h2>📝 Чек-лист полевых работ</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <ul style={{ columns: 2, columnGap: '40px' }}>
          <li>✅ Проверить заряд аккумуляторов</li>
          <li>✅ Проверить целостность штатива</li>
          <li>✅ Настроить метеопоправки</li>
          <li>✅ Создать проект в контроллере</li>
          <li>✅ Проверить ориентирование</li>
          <li>✅ Измерить высоту прибора</li>
          <li>✅ Вести абрис (схему)</li>
          <li>✅ Контрольные измерения</li>
          <li>✅ Сохранять данные после каждой станции</li>
          <li>✅ Делать резервную копию</li>
        </ul>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор тахеометрической съёмки</h3>
        <p>
          Для расчёта необходимого количества станций и точности воспользуйтесь нашим 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятором тахеометрической съёмки
          </a>.
        </p>
      </div>

      <blockquote>
        "Тахеометрическая съёмка — это искусство видеть главное. Опытный геодезист 
        снимает ровно столько точек, сколько нужно для достоверного отображения 
        местности, не тратя время на лишние измерения."
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
      title: 'Уравнивание теодолитного хода',
      category: 'ОБРАБОТКА ДАННЫХ',
      description: 'Пошаговое руководство по распределению невязок.',
      readTime: 12,
      link: '/knowledge/articles/adjustment'
    },
    {
      title: 'Планово-высотная съемка',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Комплекс геодезических работ по определению координат и высот.',
      readTime: 8,
      link: '/knowledge/articles/plan-height-survey'
    }
  ];

  return (
    <Layout 
      title="Тахеометрическая съемка: пошаговое руководство" 
      description="Методика полевых работ, обработка данных, создание топографического плана."
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
            { name: 'Тахеометрическая съемка', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Тахеометрическая съемка: пошаговое руководство"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="2 марта 2026"
        readTime={18}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}