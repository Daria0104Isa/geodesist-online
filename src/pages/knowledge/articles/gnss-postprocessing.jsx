import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function GnssPostprocessingArticle() {
  const content = (
    <>
      <p>
        Постобработка GNSS-измерений (Post-Processing Kinematic, PPK) — метод 
        определения координат, при котором данные с ровера и базовой станции 
        обрабатываются после завершения полевых работ. Это альтернатива RTK, 
        которая позволяет получить высокую точность там, где нестабильна связь 
        с базой или невозможно получить фиксированное решение в реальном времени.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📡 <strong>Когда применяется постобработка:</strong> при работе в 
          труднодоступных районах, где нет связи (горы, лес), при съемке с БПЛА, 
          для высокоточных работ, требующих дополнительного контроля, а также 
          когда необходимо пересчитать данные с несколькими базовыми станциями.
        </p>
      </div>

      <h2>📊 Сравнение RTK и постобработки</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Параметр</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>RTK</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Постобработка (PPK)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Точность</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10-30 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>5-20 мм</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Необходимость связи</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Требуется постоянная связь с базой</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Не требуется</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Время получения результата</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>В реальном времени</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>После камеральной обработки</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Объем данных</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Минимальный (только координаты)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Сырые данные (большой объем)</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Стоимость полевого оборудования</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Выше (нужны модемы)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Ниже (только запись данных)</td>
          </tr>
        </tbody>
      </table>

      <h2>📋 Подготовка к полевым работам</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>1. Выбор базовой станции</h3>
        <p>Базовая станция должна быть установлена на пункте с известными координатами (или определенными с высокой точностью). Возможные варианты:</p>
        <ul>
          <li><strong>Собственная база</strong> — устанавливается на точке с известными координатами</li>
          <li><strong>Постоянная база</strong> — данные с ближайшей постоянно действующей станции (CORS)</li>
          <li><strong>Виртуальная база</strong> — создается по данным сети станций</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 12px' }}>2. Настройка оборудования</h3>
        <ul>
          <li>Установить частоту записи (обычно 1 Гц, для кинематики — до 10-20 Гц)</li>
          <li>Задать маску угла возвышения (обычно 10-15°)</li>
          <li>Включить запись сырых данных (RINEX или внутренний формат)</li>
          <li>Зафиксировать высоту антенны (очень важно!)</li>
        </ul>
      </div>

      <h2>📱 Полевые работы</h2>

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
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📍 Статика</h3>
          <p>Приемник неподвижен на точке в течение длительного времени (от 20 минут до нескольких часов).</p>
          <p style={{ marginTop: '12px' }}><strong>Применение:</strong> создание опорных сетей, высокоточное определение координат пунктов.</p>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🚶 Кинематика (Stop&Go)</h3>
          <p>Приемник перемещается между точками, делая остановки на каждой точке на 1-5 минут.</p>
          <p style={{ marginTop: '12px' }}><strong>Применение:</strong> съемка большого количества точек, когда RTK недоступен.</p>
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
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>✈️ Кинематика с БПЛА</h3>
          <p>Приемник на дроне записывает данные непрерывно во время полета. Постобработка дает точные координаты центров фотографий.</p>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🔄 Повторные измерения</h3>
          <p>Для контроля рекомендуется повторять измерения на 5-10% точек в другое время.</p>
        </div>
      </div>

      <h2>💻 Камеральная обработка</h2>

      <h3>Этапы обработки:</h3>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <ol style={{ margin: 0, paddingLeft: '20px' }}>
          <li><strong>Конвертация данных</strong> — перевод из внутреннего формата приёмника в RINEX (если необходимо)</li>
          <li><strong>Загрузка в ПО</strong> — импорт данных ровера и базовой станции</li>
          <li><strong>Вычисление базовых линий</strong> — решение векторов между базой и ровером</li>
          <li><strong>Анализ качества</strong> — проверка фиксации решений, отношения сигнал/шум, многопутности</li>
          <li><strong>Уравнивание</strong> — совместная обработка всех базовых линий</li>
          <li><strong>Экспорт координат</strong> — получение координат точек в требуемой системе</li>
        </ol>
      </div>

      <h3>Программное обеспечение для постобработки</h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        margin: '20px 0'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>🇨🇭</div>
          <strong>Leica Infinity</strong>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>🇺🇸</div>
          <strong>Trimble Business Center</strong>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>🇯🇵</div>
          <strong>MAGNET Office</strong>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>🇷🇺</div>
          <strong>Credo DAT</strong>
        </div>
      </div>

      <h2>📊 Критерии качества</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Параметр</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Хорошо</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Приемлемо</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Плохо</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Решение</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Fixed</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Float</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Differential</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>СКП базовой линии</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'<'} 10 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10-30 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'>'} 30 мм</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Отношение (Ratio)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'>'} 3.0</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1.5-3.0</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'<'} 1.5</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Reference Variance</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.5-2.0</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>2.0-5.0</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'>'} 5.0</td>
          </tr>
        </tbody>
      </table>

      <h2>📏 Точность в зависимости от длительности наблюдений</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Длительность</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Точность плановая</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Точность высотная</th>
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Применение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>15-30 мин</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>5-10 мм</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>10-20 мм</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Съемочное обоснование</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1-2 часа</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3-5 мм</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>5-10 мм</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Геодезические сети сгущения</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>4-8 часов</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>2-3 мм</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>3-5 мм</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Опорные сети</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🚨 Типичные проблемы и решения</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Не фиксируется решение</h3>
          <p><strong>Причины:</strong> слишком короткая сессия, плохая геометрия спутников, большая длина базовой линии.</p>
          <p><strong>Решение:</strong> увеличить время наблюдений, использовать данные с нескольких базовых станций, проверить маску угла возвышения.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Большие невязки на контрольных точках</h3>
          <p><strong>Причины:</strong> ошибка в высоте антенны, неверные координаты базы, проблемы с эфемеридами.</p>
          <p><strong>Решение:</strong> проверить введенную высоту антенны, уточнить координаты базы, использовать точные эфемериды.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Потеря данных на части сессии</h3>
          <p><strong>Причины:</strong> сбой питания, перегрев приёмника, проблемы с записью на карту памяти.</p>
          <p><strong>Решение:</strong> разбивать длительные сессии на несколько файлов, использовать надёжные карты памяти, контролировать питание.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Расхождение между обработкой в разных ПО</h3>
          <p><strong>Причины:</strong> разные модели эфемерид, алгоритмы обработки, настройки.</p>
          <p><strong>Решение:</strong> использовать одно ПО для всего проекта, применять одинаковые настройки, проверять на контрольных точках.</p>
        </div>
      </div>

      <h2>📝 Рекомендации для высокоточных работ</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <ul>
          <li>Используйте точные эфемериды (IGS Final для максимальной точности)</li>
          <li>Применяйте данные с нескольких базовых станций (сеть)</li>
          <li>Выполняйте уравнивание с учётом ковариационной информации</li>
          <li>Контролируйте качество по независимым измерениям (тахеометрия, нивелирование)</li>
          <li>Ведите подробный полевой журнал с временем начала/окончания сессий, высотами антенн</li>
          <li>Для длительных сессий разбивайте данные на блоки для контроля стабильности</li>
        </ul>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📊 Калькулятор постобработки</h3>
        <p>
          Для расчёта оптимальной длительности сессии и ожидаемой точности используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор GNSS-постобработки
          </a>.
        </p>
      </div>

      <blockquote>
        "Постобработка — это не просто запасной вариант на случай отсутствия RTK, 
        а самостоятельный метод, часто дающий более высокую точность и надёжность. 
        Умение грамотно обрабатывать данные в камералке отличает настоящего 
        профессионала от оператора, нажимающего кнопки в поле."
      </blockquote>
    </>
  );

  const relatedArticles = [
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
    },
    {
      title: 'Работа с GNSS-приёмником',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Практическое руководство по базовым методам измерений.',
      readTime: 14,
      link: '/knowledge/articles/gnss-receiver'
    }
  ];

  return (
    <Layout 
      title="Обработка GNSS-измерений в постобработке" 
      description="Работа с базовыми станциями, решение векторов, уравнивание сетей, анализ качества."
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
            { name: 'Обработка данных', link: '/knowledge/obrabotka' }, 
            { name: 'Обработка GNSS', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Обработка данных"
        title="Обработка GNSS-измерений в постобработке"
        author={{ 
          name: 'Анна Смирнова', 
          role: 'Специалист по GNSS',
          avatar: 'https://images.unsplash.com/photo-1494790108777-4f3b77e6a9a7?auto=format&fit=crop&q=80&w=100'
        }}
        date="6 марта 2026"
        readTime={16}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}