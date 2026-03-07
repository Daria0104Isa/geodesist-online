import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function RtkCalibrationArticle() {
  const content = (
    <>
      <p>
        Калибровка RTK (локализация) — это процесс определения параметров перехода 
        от глобальной системы координат WGS-84 к местной системе координат (МСК) 
        непосредственно на строительной площадке. Правильно выполненная калибровка 
        обеспечивает сантиметровую точность при разбивочных работах и съёмке. 
        В этой статье мы разберём пошаговый алгоритм калибровки.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🎯 <strong>Зачем нужна калибровка?</strong> Спутниковые измерения дают 
          координаты в WGS-84, а стройка ведётся в местной системе (МСК, СК-42 или 
          локальной сетке). Калибровка позволяет "привязать" спутниковые измерения 
          к местной системе с помощью точек с известными координатами.
        </p>
      </div>

      <h2>📋 Подготовка к калибровке</h2>

      <h3>Что необходимо иметь:</h3>
      <ul>
        <li>Не менее 2-х точек с известными координатами в МСК (оптимально 4-5)</li>
        <li>GNSS-приёмник с функцией RTK</li>
        <li>Полевой контроллер с ПО (Leica Captivate, Trimble Access, MAGNET Field)</li>
        <li>Точки должны быть равномерно распределены по участку</li>
      </ul>

      <div style={{
        background: '#FFF3E0',
        padding: '16px',
        borderRadius: '8px',
        margin: '20px 0',
        borderLeft: '4px solid #E6B422'
      }}>
        <p style={{ margin: 0, fontWeight: 500 }}>
          ⚠️ <strong>Важно:</strong> Точки для калибровки должны быть определены 
          с высокой точностью (класс полигонометрии не ниже 1:2000). Использование 
          неточных исходных данных сведёт на нет всю последующую работу.
        </p>
      </div>

      <h2>📐 Типы калибровки</h2>

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
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🔹 Горизонтальная</h3>
          <p>Трансформация только плановых координат (X, Y). Минимум 2 точки.</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B776D' }}>
            Применяется для небольших участков с известными плановыми координатами.
          </p>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🔹 Полная (3D)</h3>
          <p>Трансформация плановых координат и высот (X, Y, Z). Минимум 3 точки.</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B776D' }}>
            Применяется для большинства строительных объектов, где важны высоты.
          </p>
        </div>
      </div>

      <h2>📊 Пошаговая инструкция калибровки</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Шаг 1. Создание проекта</h3>
        <p>В полевом контроллере создайте новый проект и укажите:</p>
        <ul>
          <li>Система координат — выберите WGS-84 (для измерений)</li>
          <li>Единицы измерения — метры</li>
          <li>Метод калибровки — обычно "Conformal" или "Similarity"</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 16px' }}>Шаг 2. Измерение точек в WGS-84</h3>
        <ol>
          <li>Установите веху на первую точку с известными координатами</li>
          <li>Дождитесь фиксации RTK (статус FIX)</li>
          <li>Выполните измерение (обычно 30-60 эпох)</li>
          <li>Запишите измеренные координаты (WGS-84)</li>
          <li>Повторите для всех точек калибровки</li>
        </ol>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 16px' }}>Шаг 3. Ввод известных координат</h3>
        <p>Для каждой измеренной точки введите известные координаты в МСК:</p>
        <ul>
          <li>X, Y (и Z, если выполняется 3D-калибровка)</li>
          <li>Укажите тип точки — "Control" или "Calibration"</li>
          <li>Проверьте правильность ввода (ошибка в цифрах сведёт калибровку на нет)</li>
        </ul>

        <h3 style={{ color: '#2D5A27', margin: '20px 0 16px' }}>Шаг 4. Вычисление параметров</h3>
        <p>В меню контроллера выберите "Калибровка" или "Трансформация". Программа вычислит:</p>
        <ul>
          <li>Параметры сдвига (ΔX, ΔY, ΔZ)</li>
          <li>Угол поворота (θ)</li>
          <li>Масштабный коэффициент (Scale)</li>
          <li>СКО (среднеквадратическую погрешность) по точкам</li>
        </ul>

        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px'
        }}>
          <p style={{ margin: 0 }}>
            <strong>Пример результатов калибровки:</strong><br />
            Сдвиг по X: 12.345 м<br />
            Сдвиг по Y: -5.678 м<br />
            Поворот: 0°02'15"<br />
            Масштаб: 1.000023<br />
            СКО: 0.012 м
          </p>
        </div>
      </div>

      <h2>📈 Анализ результатов калибровки</h2>

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
              <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Действия при превышении</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>СКО по точкам калибровки</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>≤ 2-3 см</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Проверить качество исходных точек, исключить выбросы</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Максимальная невязка</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>≤ 5 см</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Исключить точку с большой невязкой, повторить измерения</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Масштабный коэффициент</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>0.9999 – 1.0001</td>
              <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>При сильном отклонении проверить дальность до базы</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🚨 Типичные ошибки при калибровке</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Недостаточное количество точек</h3>
          <p>2 точки дают только сдвиг и поворот, но не учитывают масштаб. Для полной калибровки нужно минимум 3-4 точки.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Плохое расположение точек</h3>
          <p>Точки должны равномерно покрывать весь участок, а не быть сгруппированы в одном углу. Иначе вне зоны калибровки точность резко падает.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Использование неверных исходных координат</h3>
          <p>Ошибка в координатах исходных пунктов — самая частая причина плохой калибровки. Всегда проверяйте исходные данные.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Калибровка на слишком большой территории</h3>
          <p>При работе на участках более 5-10 км сказывается кривизна Земли. В таких случаях используйте несколько локальных калибровок.</p>
        </div>
      </div>

      <h2>✅ Проверка калибровки</h2>

      <p>После выполнения калибровки обязательно выполните контрольные измерения:</p>

      <ol>
        <li><strong>Измерьте контрольные точки</strong> — точки с известными координатами, не участвовавшие в калибровке</li>
        <li><strong>Сравните полученные координаты</strong> с известными — расхождение не должно превышать допуск (обычно 3-5 см)</li>
        <li><strong>Выполните повторные измерения</strong> на разных участках площадки</li>
        <li><strong>Проверьте линейные размеры</strong> — измерьте расстояние между двумя точками и сравните с проектным</li>
      </ol>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📏 Пример проверки:</h3>
        <p>Контрольная точка КТ1 (известные координаты: X=1234.56, Y=7890.12)</p>
        <p>Измерено после калибровки: X=1234.55, Y=7890.14</p>
        <p>Невязка: ΔX = -0.01 м, ΔY = +0.02 м → <strong style={{ color: '#2D5A27' }}>отлично</strong></p>
      </div>

      <h2>📱 Калибровка в разных программах</h2>

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
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📱</div>
          <strong>Leica Captivate</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>Меню: Инструменты → Калибровка → Локальная трансформация</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📱</div>
          <strong>Trimble Access</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>Меню: Измерения → Калибровка → Локализация</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📱</div>
          <strong>Sokkia MAGNET</strong>
          <p style={{ fontSize: '13px', margin: '8px 0 0' }}>Меню: Настройки → Система координат → Калибровка</p>
        </div>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор калибровки</h3>
        <p>
          Если у вас нет полевого контроллера, можете выполнить предварительный расчёт 
          параметров калибровки в нашем 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            онлайн-калькуляторе
          </a>.
        </p>
      </div>

      <blockquote>
        "Правильная калибровка — это 80% успеха RTK-съёмки. Потратьте час на тщательную 
        калибровку и сэкономьте дни на переделках. Контроль, контроль и ещё раз контроль!"
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
      title: 'Трансформация координат и локализация',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Параметры Гельмерта и методы локализации.',
      readTime: 14,
      link: '/knowledge/articles/coordinate-transformation'
    },
    {
      title: 'Переход между системами координат',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'МСК и WGS-84, параметры трансформации.',
      readTime: 12,
      link: '/knowledge/articles/coordinate-systems'
    }
  ];

  return (
    <Layout 
      title="Калибровка RTK на строительной площадке" 
      description="Пошаговое руководство по локализации и созданию локальной сетки для RTK-съёмки."
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
            { name: 'Калибровка RTK', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Калибровка RTK на строительной площадке"
        author={{ 
          name: 'Анна Смирнова', 
          role: 'Специалист по GNSS',
          avatar: 'https://images.unsplash.com/photo-1494790108777-4f3b77e6a9a7?auto=format&fit=crop&q=80&w=100'
        }}
        date="28 февраля 2026"
        readTime={15}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}