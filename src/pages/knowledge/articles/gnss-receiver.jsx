import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function GnssReceiver() {
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
          📡 <strong>Практическое руководство по базовым методам измерений с использованием спутникового оборудования (GPS/ГЛОНАСС).</strong>
        </p>
      </div>

      <h2>🎯 Что такое GNSS и зачем он нужен геодезисту?</h2>
      <p>
        <strong>GNSS</strong> (Global Navigation Satellite System) — глобальная спутниковая навигационная система. 
        В практике используются сигналы нескольких систем:
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        margin: '20px 0'
      }}>
        <div style={{ background: '#F9F7F3', padding: '12px', borderRadius: '8px' }}>
          <strong>🇺🇸 GPS</strong> — США
        </div>
        <div style={{ background: '#F9F7F3', padding: '12px', borderRadius: '8px' }}>
          <strong>🇷🇺 ГЛОНАСС</strong> — Россия
        </div>
        <div style={{ background: '#F9F7F3', padding: '12px', borderRadius: '8px' }}>
          <strong>🇪🇺 Galileo</strong> — ЕС
        </div>
        <div style={{ background: '#F9F7F3', padding: '12px', borderRadius: '8px' }}>
          <strong>🇨🇳 BeiDou</strong> — Китай
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <p style={{ margin: 0, fontWeight: 500 }}>
          💡 <strong>Преимущество использования нескольких систем (GPS+ГЛОНАСС):</strong> больше видимых спутников, выше точность и надёжность измерений в сложных условиях (город, лес).
        </p>
      </div>

      <h2>📦 Комплект оборудования для выезда</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>✅ Обязательный комплект</h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>GNSS-приёмник (ровер) с аккумулятором</li>
            <li>Внешняя антенна (при необходимости)</li>
            <li>Полевой контроллер или планшет с ПО</li>
            <li>Радиомодем для RTK-связи или SIM-карта для NTRIP</li>
            <li>Тренога или вешка (штатив)</li>
            <li>Зарядные устройства</li>
          </ul>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>📌 Для статики/базы</h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>Второй приёмник (базовая станция)</li>
            <li>Тренога с forced centering</li>
            <li>Источник бесперебойного питания</li>
          </ul>
        </div>
      </div>

      <h2>⚙️ Подготовка к работам: что проверить в офисе</h2>
      
      <ol style={{ marginBottom: '32px' }}>
        <li><strong>Актуальность альманаха и эфемерид</strong> в приёмнике</li>
        <li><strong>Настройки связи</strong> (радиоканал или NTRIP-подключение)</li>
        <li><strong>Параметры проекта</strong> в ПО:
          <ul>
            <li>Система координат (например, <strong>MSK-50</strong>, <strong>WGS-84</strong>)</li>
            <li>Высота геоида/квазигеоида (EGM, <strong>СГК-2011</strong> для РФ)</li>
            <li>Метод трансформирования</li>
          </ul>
        </li>
      </ol>

      <h2>📍 Методы измерений: какой когда использовать</h2>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px'
        }}>
          <thead>
            <tr style={{ background: 'rgba(167, 196, 160, 0.1)' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Метод</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Точность</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Время на точке</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Применение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Статика</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>3-5 мм + 0.5 ppm</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>20-60 мин</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Опорные сети, высокоточные определения</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>RTK</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>10-20 мм</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>30-60 сек</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Разбивка, съёмка, вынос в натуру</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>PPK</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>10-30 мм</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>1-3 мин</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Альтернатива RTK при потере связи</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD', fontWeight: 500 }}>Навигационный</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>1-3 м</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Мгновенно</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Рекогносцировка, поиск точек</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Детализация методов: Статика и Кинематика</h3>
      
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <p><strong>Статический метод</strong> является наиболее надёжным и обеспечивает миллиметровую точность (5-10 мм + 2 мм/км в плане). Применяется для создания съёмочного обоснования. Приёмники выполняют синхронные измерения на каждом пункте от <strong>15 минут до 3 часов</strong>, в зависимости от длины базовой линии и условий.</p>
        
        <p><strong>Кинематический метод (RTK)</strong> обеспечивает сантиметровую точность (2-3 см в плане, 6-8 см по высоте) за несколько секунд на точке и используется для топографической съёмки. Ключевой этап – <strong>инициализация (привязка ровера к базе)</strong>, которая занимает около 30 секунд в начале сеанса работ.</p>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '12px' }}>Сильные и слабые стороны ГНСС-съёмки:</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <p style={{ fontWeight: 600, color: '#2D5A27', marginBottom: '8px' }}>✅ Преимущества:</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Высокая производительность</li>
              <li>Не нужна прямая видимость между пунктами</li>
              <li>Работа ночью и в любую погоду</li>
              <li>Автоматизация измерений</li>
            </ul>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: '#B85C1F', marginBottom: '8px' }}>⚠️ Ограничения:</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Требует открытого небосвода</li>
              <li>Сложности под деревьями и в городе</li>
              <li>Чувствительность к помехам</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>🔧 Пошаговый алгоритм RTK-измерений</h2>

      <h3>1. Настройка базовой станции</h3>
      <ol>
        <li>Установите базу на точке с известными координатами</li>
        <li>Включите, настройте передачу данных (радио или интернет)</li>
        <li>Зафиксируйте высоту антенны</li>
      </ol>

      <h3>2. Работа с ровером</h3>
      <ol>
        <li>Включите ровер, дождитесь инициализации (фиксации целочисленного решения)</li>
        <li><strong>Контроль качества:</strong> HDOP {'<'} 2, количество спутников {'>'} 8, RMS {'<'} 0.02 м</li>
        <li>Установите вешку на точку, убедитесь в устойчивости</li>
        <li>Нажмите измерение, выдержите время (обычно 30-60 измерений)</li>
      </ol>

      <h2>🚨 Типовые проблемы и их решение</h2>

      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '15px'
        }}>
          <thead>
            <tr style={{ background: 'rgba(167, 196, 160, 0.1)' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Проблема</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Возможная причина</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Решение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}><strong>Нет фиксации (float)</strong></td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Мало спутников, плохая геометрия</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Сменить место, подождать</td>
            </tr>
            <tr style={{ background: '#F9F7F3' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}><strong>Обрыв связи с базой</strong></td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Препятствия, разряд батареи</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Проверить видимость, заменить аккумулятор</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}><strong>Большие невязки</strong></td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Ошибка высоты антенны, неверные параметры</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #D4DCCD' }}>Перемерить высоту, проверить настройки</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💾 Организация данных и контроль</h2>
      
      <ol>
        <li><strong>Ежедневная выгрузка</strong> данных с приёмника и контроллера</li>
        <li><strong>Резервное копирование</strong> на 2 разных носителя</li>
        <li><strong>Контрольный прогон</strong> в ПО (CREDO, Спутник)</li>
        <li><strong>Расчёт и анализ невязок</strong> в базовых векторах</li>
      </ol>

      <blockquote>
        "Статья будет дополняться. Есть опыт работы с конкретными моделями (Trimble, Leica, Javad)? Пишите — добавим практические нюансы!"
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Настройка GNSS-оборудования',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Практическое руководство по работе со спутниковым оборудованием.',
      readTime: 15,
      link: '/knowledge/articles/gnss-setup'
    },
    {
      title: 'Организация инженерно-геодезических работ',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Этапы работ, документальное сопровождение и согласования.',
      readTime: 12,
      link: '/knowledge/articles/survey-stages'
    },
    {
      title: 'Современные методы съёмки',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Сравнение тахеометрии, ГНСС, аэрофотосъёмки и лазерного сканирования.',
      readTime: 10,
      link: '/knowledge/articles/modern-methods'
    }
  ];

  return (
    <Layout 
      title="Работа с GNSS-приёмником: быстрый старт" 
      description="Практическое руководство по базовым методам измерений с использованием спутникового оборудования (GPS/ГЛОНАСС)"
    >
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'База знаний', link: '/knowledge' },
            { name: 'Основы оборудования', link: '/knowledge/oborudovanie' },
            { name: 'Работа с GNSS-приёмником', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <ArticlePage
        category="Основы оборудования"
        title="Работа с GNSS-приёмником: быстрый старт"
        author={{ 
          name: 'Анна Смирнова', 
          role: 'Специалист по GNSS',
          avatar: 'https://images.unsplash.com/photo-1494790108777-4f3b77e6a9a7?auto=format&fit=crop&q=80&w=100'
        }}
        date="8 декабря 2023"
        readTime={14}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}