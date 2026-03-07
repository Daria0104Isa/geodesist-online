import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function GnssRtkArticle() {
  const content = (
    <>
      <p>
        RTK (Real Time Kinematic) — самый популярный режим спутниковых измерений для 
        топографической съёмки и разбивочных работ. Он позволяет получать координаты 
        точек с сантиметровой точностью в реальном времени. В этой статье мы разберём, 
        как настроить оборудование, получить фиксированное решение и контролировать 
        качество измерений.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📡 <strong>Что такое RTK?</strong> Это метод, при котором два GNSS-приёмника 
          работают одновременно: базовая станция передаёт поправки роверу по радиоканалу 
          или через интернет (NTRIP). Ровер, получая поправки, вычисляет свои координаты 
          с высокой точностью.
        </p>
      </div>

      <h2>📦 Состав оборудования для RTK-съёмки</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📡 Базовая станция</h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>GNSS-приёмник (можно любой)</li>
            <li>Тренога с принудительным центрированием</li>
            <li>Радиомодем или 4G-модем для передачи поправок</li>
            <li>Источник питания (аккумулятор)</li>
          </ul>
        </div>
        
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🎯 Ровер</h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>GNSS-приёмник с функцией RTK</li>
            <li>Веха (телескопическая или составная)</li>
            <li>Полевой контроллер или планшет с ПО</li>
            <li>Приёмник поправок (радио или SIM-карта)</li>
          </ul>
        </div>
      </div>

      <h2>⚙️ Настройка RTK-соединения</h2>

      <h3>Вариант 1: Радиомодем (UHF)</h3>
      <ol>
        <li><strong>Настройте базовую станцию</strong> — установите на точке с известными координатами, измерьте высоту антенны</li>
        <li><strong>Настройте радиоканал</strong> — выберите одинаковую частоту на базе и ровере</li>
        <li><strong>Запустите передачу поправок</strong> — база начнёт транслировать RTCM-сообщения</li>
        <li><strong>На ровере</strong> — выберите тип соединения "Радио" и настройте приём на ту же частоту</li>
      </ol>

      <h3>Вариант 2: NTRIP (через интернет)</h3>
      <ol>
        <li><strong>Выберите провайдера</strong> — государственная сеть, частная или собственная база с NTRIP-сервером</li>
        <li><strong>Настройте ровер</strong> — укажите:
          <ul>
            <li>Адрес сервера (например, rtk.geodesist.ru)</li>
            <li>Порт (обычно 2101)</li>
            <li>Точку монтирования (mount point)</li>
            <li>Логин и пароль</li>
          </ul>
        </li>
        <li><strong>Подключитесь</strong> — ровер начнёт получать поправки через 4G-модем</li>
      </ol>

      <div style={{
        background: '#FFF3E0',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0',
        borderLeft: '4px solid #E6B422'
      }}>
        <h3 style={{ color: '#B85C1F', marginBottom: '8px' }}>✅ FIX, FLOAT, SINGLE — что это?</h3>
        <ul style={{ margin: 0 }}>
          <li><strong>FIX</strong> — фиксированное решение, точность 1-3 см (можно работать)</li>
          <li><strong>FLOAT</strong> — плавающее решение, точность 10-30 см (проверьте соединение)</li>
          <li><strong>SINGLE</strong> — нет поправок, точность 1-3 м (нет связи с базой)</li>
        </ul>
      </div>

      <h2>📏 Инициализация RTK</h2>
      <p>
        Перед началом съёмки ровер должен пройти инициализацию — определить своё положение 
        относительно базы с целочисленной неоднозначностью фаз. Для этого:
      </p>
      <ol>
        <li>Установите веху на точке с хорошей видимостью спутников</li>
        <li>Держите веху неподвижно 30-60 секунд</li>
        <li>Наблюдайте за статусом — должно появиться "FIX"</li>
      </ol>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>💡 Советы для быстрой инициализации:</h3>
        <ul>
          <li>Выбирайте место с открытым небом (HDOP {'<'} 2, количество спутников {'>'} 8)</li>
          <li>Избегайте зон с многопутностью (рядом со зданиями, деревьями, ЛЭП)</li>
          <li>При плохих условиях используйте инициализацию на точке с известными координатами</li>
        </ul>
      </div>

      <h2>📊 Контроль качества RTK-измерений</h2>
      
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Параметр</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Допустимое значение</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Что делать при отклонении</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Статус решения</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>FIX</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Проверить связь с базой, качество сигнала</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>RMS (среднекв. погрешность)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'<'} 0.02 м</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Переинициализироваться, сменить место</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>HDOP</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'<'} 2</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Подождать улучшения геометрии спутников</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Количество спутников</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>{'>'} 8</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Включить GPS+ГЛОНАСС+Galileo</td>
          </tr>
        </tbody>
      </table>

      <h2>🚨 Типичные проблемы и решения</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Нет FIX, постоянно FLOAT</h3>
          <p><strong>Причина:</strong> Плохая видимость спутников, большая удалённость от базы, помехи.</p>
          <p><strong>Решение:</strong> Переместиться на открытое место, проверить длину базовой линии (не более 20-30 км), отключить источники помех.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Потеря связи с базой</h3>
          <p><strong>Причина:</strong> Препятствия для радиосигнала, разряд батареи на базе, сбой NTRIP-соединения.</p>
          <p><strong>Решение:</strong> Проверить видимость между базой и ровером, заменить аккумуляторы, перезапустить передачу поправок.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Большие расхождения на контрольных точках</h3>
          <p><strong>Причина:</strong> Ошибка в высоте антенны, неверные параметры трансформации, плохая калибровка.</p>
          <p><strong>Решение:</strong> Перемерить высоту антенны, проверить настройки проекта, выполнить повторную калибровку.</p>
        </div>
      </div>

      <h2>📝 Чек-лист перед выездом на RTK-съёмку</h2>
      
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <ul style={{ columns: 2, columnGap: '40px' }}>
          <li>✅ Зарядить аккумуляторы базы и ровера</li>
          <li>✅ Проверить работу радиомодемов / SIM-карт</li>
          <li>✅ Убедиться в наличии поправок (NTRIP или радио)</li>
          <li>✅ Проверить целостность антенного кабеля</li>
          <li>✅ Взять рулетку для измерения высоты антенны</li>
          <li>✅ Проверить прогноз погоды</li>
          <li>✅ Загрузить координаты исходных пунктов</li>
          <li>✅ Настроить проект в контроллере (СК, высота геоида)</li>
        </ul>
      </div>

      <blockquote>
        "RTK-съёмка — это не просто технология, а искусство быстрого получения точных 
        координат. Главное — контроль качества на каждом этапе и понимание физики процесса."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Настройка GNSS-оборудования',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Выбор режима съёмки, параметры настройки, подключение к RTK.',
      readTime: 15,
      link: '/knowledge/articles/gnss-setup'
    },
    {
      title: 'Калибровка RTK на строительной площадке',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Пошаговое руководство по локализации и созданию локальной сетки.',
      readTime: 12,
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
      title="Основы работы с GNSS-приемниками в режиме RTK" 
      description="Настройка базы и ровера, получение фиксированного решения и контроль качества измерений."
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
            { name: 'Основы работы с GNSS в режиме RTK', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Основы работы с GNSS-приемниками в режиме RTK"
        author={{ 
          name: 'Анна Смирнова', 
          role: 'Специалист по GNSS',
          avatar: 'https://images.unsplash.com/photo-1494790108777-4f3b77e6a9a7?auto=format&fit=crop&q=80&w=100'
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