import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';      // ../../../components/Header
import ArticlePage from '../../../components/ArticlePage';  // ../../../components/ArticlePage
import BackToTop from '../../../components/BackToTop';      // ../../../components/BackToTop
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function GnssSetupArticle() {
  const content = (
    <>
      <p>
        GNSS-оборудование стало неотъемлемой частью работы современного геодезиста.
        Однако даже самый дорогой приёмник не даст нужной точности без правильной настройки.
        В этой статье мы разберём ключевые параметры и этапы подготовки GNSS к полевым работам.
      </p>

      <h2>Выбор режима съёмки</h2>
      <p>
        Первый и самый важный шаг — определить, какой режим измерений подходит для вашей задачи.
        От этого зависит и методика полевых работ, и время, и итоговая точность.
      </p>

      <div style={{ overflowX: 'auto', margin: '32px 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '16px'
        }}>
          <thead>
            <tr style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              color: '#2D5A27',
              background: 'rgba(167, 196, 160, 0.1)'
            }}>
              <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #D4DCCD' }}>Режим</th>
              <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #D4DCCD' }}>Точность</th>
              <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #D4DCCD' }}>Применение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>Статика</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>±5 мм + 1 мм/км</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>Создание опорных сетей, наблюдения за деформациями</td>
            </tr>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>Быстрая статика</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>±10 мм + 2 мм/км</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>Сгущение сетей, съёмка участков до 20 км</td>
            </tr>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>Stop&Go</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>±20 мм + 3 мм/км</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>Контурная съёмка, обновление карт</td>
            </tr>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>RTK</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>±10 мм + 1.5 мм/км</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #D4DCCD' }}>Топографическая съёмка, разбивочные работы</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Ключевые параметры настройки</h2>

      <h3>Маска угла возвышения</h3>
      <p>
        Это минимальный угол над горизонтом, при котором спутники учитываются в решении.
        Слишком низкая маска (менее 5°) приводит к включению шумовых сигналов и многолучёвости.
        Слишком высокая (более 20°) уменьшает количество видимых спутников.
      </p>
      
      <ul>
        <li><strong>Рекомендуемое значение:</strong> 10-15°</li>
        <li><strong>В горах:</strong> до 20°</li>
        <li><strong>На открытой местности:</strong> можно опустить до 8°</li>
      </ul>

      <h3>Интервал записи (эпоха)</h3>
      <p>
        Частота, с которой приёмник записывает данные. Выбор зависит от режима съёмки:
      </p>
      
      <ul>
        <li><strong>Статика:</strong> 5-30 секунд</li>
        <li><strong>Быстрая статика:</strong> 5-10 секунд</li>
        <li><strong>Кинематика:</strong> 1-5 секунд</li>
        <li><strong>RTK:</strong> 1 секунда или "по событию"</li>
      </ul>

      <blockquote>
        "Для статических наблюдений длительностью менее часа лучше ставить интервал 5 секунд — 
        это даст больше данных для постобработки и повысит надёжность решения."
      </blockquote>

      <h3>Типы спутниковых систем</h3>
      <p>
        Современные приёмники поддерживают несколько GNSS. Какие включать?
      </p>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h4 style={{ color: '#2D5A27', marginBottom: '16px' }}>GPS + ГЛОНАСС</h4>
        <p style={{ marginBottom: '16px' }}>Базовая комплектация для большинства задач. Даёт достаточное количество спутников в средних широтах.</p>
        
        <h4 style={{ color: '#2D5A27', marginBottom: '16px', marginTop: '24px' }}>+ Galileo / BeiDou</h4>
        <p style={{ marginBottom: '16px' }}>Включайте в сложных условиях (город, карьеры) — больше спутников, лучше геометрия.</p>
        
        <h4 style={{ color: '#2D5A27', marginBottom: '16px', marginTop: '24px' }}>SBAS (EGNOS, WAAS)</h4>
        <p>Полезен для RTK без базовой станции, но доверять ему для ответственных работ не стоит.</p>
      </div>

      <h2>Настройка подключения к базовой станции (RTK)</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0',
        fontFamily: 'monospace'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Пример настроек NTRIP</h3>
        <p style={{ margin: '4px 0' }}>Тип: <strong>NTRIP Client</strong></p>
        <p style={{ margin: '4px 0' }}>Адрес: <strong>rtk.geodesist.online</strong></p>
        <p style={{ margin: '4px 0' }}>Порт: <strong>2101</strong></p>
        <p style={{ margin: '4px 0' }}>Точка монтирования: <strong>VRS</strong> или <strong>RTCM23</strong></p>
        <p style={{ margin: '4px 0' }}>Логин/Пароль: <strong>user/****</strong></p>
      </div>

      <h3>Проверка качества RTK-решения</h3>
      <p>
        Перед началом съёмки убедитесь, что приёмник выдаёт <strong>"FIX"</strong> (фиксированное решение).
        "FLOAT" означает, что точность может быть в десятки раз ниже.
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        margin: '24px 0',
        flexWrap: 'wrap'
      }}>
        <div style={{
          background: '#E8F5E9',
          padding: '12px 24px',
          borderRadius: '8px',
          color: '#2D5A27',
          fontWeight: 600
        }}>
          ✅ FIX — можно работать
        </div>
        <div style={{
          background: '#FFF3E0',
          padding: '12px 24px',
          borderRadius: '8px',
          color: '#E6B422',
          fontWeight: 600
        }}>
          ⚠️ FLOAT — проверьте соединение
        </div>
        <div style={{
          background: '#FFEBEE',
          padding: '12px 24px',
          borderRadius: '8px',
          color: '#D32F2F',
          fontWeight: 600
        }}>
          ❌ SINGLE — нет коррекции
        </div>
      </div>

      <h2>Калибровка высоты антенны</h2>
      <p>
        Одна из самых частых ошибок — неправильное измерение высоты антенны.
        Помните: измерять нужно до <strong>фазового центра</strong>, а не до низа антенны.
      </p>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>Типы антенн и поправки</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '12px' }}>📡 <strong>Geodetic (съемная)</strong> — измеряйте наклонную высоту до края антенны</li>
          <li style={{ marginBottom: '12px' }}>📱 <strong>Встроенная в веху</strong> — используйте вертикальное измерение</li>
          <li style={{ marginBottom: '12px' }}>🎯 <strong>Сниженный фазовый центр</strong> — уточняйте в спецификации прибора</li>
        </ul>
      </div>

      <h2>Чек-лист перед выездом</h2>

      <div style={{
        background: '#F9F7F3',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0'
      }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '12px' }}>☑️ Зарядить аккумуляторы (и взять запасные)</li>
          <li style={{ marginBottom: '12px' }}>☑️ Проверить наличие карты памяти</li>
          <li style={{ marginBottom: '12px' }}>☑️ Обновить альманах (если приёмник давно не использовался)</li>
          <li style={{ marginBottom: '12px' }}>☑️ Проверить целостность антенного кабеля</li>
          <li style={{ marginBottom: '12px' }}>☑️ Взять рулетку для измерения высоты антенны</li>
          <li style={{ marginBottom: '12px' }}>☑️ Проверить прогноз погоды</li>
          <li style={{ marginBottom: '12px' }}>☑️ Скачать координаты пунктов ГГС на район работ</li>
        </ul>
      </div>

      <h2>Типичные ошибки и их решение</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '32px 0'
      }}>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Нет FIX в RTK</h3>
          <p>Проверьте: интернет на базе, правильность точки монтирования, удалённость от базы (не более 30-40 км)</p>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Большие расхождения на контрольных точках</h3>
          <p>Проверьте высоту антенны, калибровку инструмента, не перепутаны ли системы координат</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Приёмник не видит спутники</h3>
          <p>Возможно, сбиты настройки или требуется холодный перезапуск. Проверьте, включены ли нужные GNSS</p>
        </div>
      </div>
    </>
  );

  const relatedArticles = [
    {
      title: 'Выбор GNSS-оборудования: сравнение моделей',
      category: 'ОСНОВЫ ОБОРУДОВАНИЯ',
      description: 'Leica, Trimble, Sokkia — что выбрать для разных задач и бюджетов?',
      readTime: 12,
      link: '/knowledge/articles/gnss-comparison'
    },
    {
      title: 'Системы координат: от WGS-84 до МСК',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Разбираемся в трансформациях и параметрах пересчёта.',
      readTime: 10,
      link: '/knowledge/articles/coordinate-systems'
    },
    {
      title: 'Калибровка RTK на строительной площадке',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Пошаговое руководство по локализации и созданию локальной сетки.',
      readTime: 15,
      link: '/knowledge/articles/rtk-calibration'
    }
  ];

  return (
    <Layout title="Настройка GNSS-оборудования: полное руководство">
      <Header />
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '16px 24px 0', 
        width: '100%' }}> 
        <Breadcrumbs 
        paths={[ 
          { name: 'Главная', link: '/' }, 
          { name: 'База знаний', link: '/knowledge' }, 
          { name: 'Основы оборудования', link: '/knowledge/oborudovanie' }, 
          { name: 'Настройка GNSS', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
          /> 
          </div>
      <ArticlePage
        category="Основы оборудования"
        title="Настройка GNSS-оборудования: от теории до поля"
        author={{ 
          name: 'Анна Смирнова', 
          role: 'Специалист по GNSS',
          avatar: 'https://images.unsplash.com/photo-1494790108777-4f3b77e6a9a7?auto=format&fit=crop&q=80&w=100'
        }}
        date="15 ноября 2023"
        readTime={15}
        content={content}
        relatedArticles={relatedArticles}
        maxWidth="1400px"
      />
      <BackToTop />
    </Layout>
  );
}