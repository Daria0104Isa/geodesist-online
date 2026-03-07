import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function UndergroundUtilitiesArticle() {
  const content = (
    <>
      <p>
        Съемка подземных коммуникаций — один из самых сложных и ответственных 
        видов геодезических работ. От точности определения положения сетей 
        зависит безопасность строительства и эксплуатации объектов. В этой 
        статье мы разберём методы поиска и съемки инженерных сетей, а также 
        оформление исполнительной документации.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🕳️ <strong>Важность работ:</strong> Ошибки в определении положения 
          подземных коммуникаций могут привести к их повреждению при строительстве, 
          что чревато авариями, остановкой работ и крупными штрафами.
        </p>
      </div>

      <h2>📋 Виды подземных коммуникаций</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>💧</div>
          <h3 style={{ color: '#2D5A27', fontSize: '16px', marginBottom: '8px' }}>Водопровод</h3>
          <p style={{ fontSize: '13px' }}>Трубы водоснабжения, пожарные гидранты</p>
        </div>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>⚡</div>
          <h3 style={{ color: '#2D5A27', fontSize: '16px', marginBottom: '8px' }}>Кабельные сети</h3>
          <p style={{ fontSize: '13px' }}>Силовые кабели, линии связи, освещение</p>
        </div>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>🔥</div>
          <h3 style={{ color: '#2D5A27', fontSize: '16px', marginBottom: '8px' }}>Теплосети</h3>
          <p style={{ fontSize: '13px' }}>Трубопроводы отопления, горячего водоснабжения</p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>⛽</div>
          <h3 style={{ color: '#2D5A27', fontSize: '16px', marginBottom: '8px' }}>Газопроводы</h3>
          <p style={{ fontSize: '13px' }}>Трубы высокого и низкого давления</p>
        </div>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>💩</div>
          <h3 style={{ color: '#2D5A27', fontSize: '16px', marginBottom: '8px' }}>Канализация</h3>
          <p style={{ fontSize: '13px' }}>Бытовая, ливневая, дренаж</p>
        </div>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(167, 196, 160, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>📡</div>
          <h3 style={{ color: '#2D5A27', fontSize: '16px', marginBottom: '8px' }}>Слаботочные сети</h3>
          <p style={{ fontSize: '13px' }}>Интернет, телефония, CCTV</p>
        </div>
      </div>

      <h2>🔍 Методы поиска подземных коммуникаций</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>1. Трассоискатели (кабелеискатели)</h3>
        <p>Приборы, работающие по принципу электромагнитной индукции. Состоят из генератора и приёмника.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          margin: '16px 0'
        }}>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Активный режим</h4>
            <p style={{ fontSize: '14px' }}>Генератор подключается к коммуникации (через люк или прямую точку доступа) и создаёт электромагнитное поле. Приёмник фиксирует его и определяет трассу.</p>
          </div>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Пассивный режим</h4>
            <p style={{ fontSize: '14px' }}>Поиск по собственному электромагнитному полю (для силовых кабелей под напряжением) или по наведённому полю промышленной частоты 50 Гц.</p>
          </div>
        </div>
        
        <div style={{
          background: '#F0F4EF',
          padding: '12px',
          borderRadius: '8px',
          marginTop: '12px'
        }}>
          <p style={{ margin: 0, fontWeight: 500 }}>📌 Глубина обнаружения: до 5-10 м в зависимости от типа грунта и мощности сигнала.</p>
        </div>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>2. Георадар (GPR)</h3>
        <p>Метод, основанный на излучении электромагнитных волн и приёме отражённого сигнала от подземных объектов.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          margin: '16px 0'
        }}>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Плюсы</h4>
            <ul style={{ fontSize: '14px' }}>
              <li>Обнаруживает любые объекты (металл, пластик, бетон)</li>
              <li>Не требует контакта с коммуникацией</li>
              <li>Даёт представление о структуре грунта</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Минусы</h4>
            <ul style={{ fontSize: '14px' }}>
              <li>Меньшая точность определения глубины</li>
              <li>Сильно зависит от влажности грунта</li>
              <li>Сложность интерпретации данных</li>
            </ul>
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
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>3. Шурфование</h3>
        <p>Прямой метод — вскрытие грунта вручную или механизированным способом для точного определения положения коммуникаций.</p>
        <div style={{
          background: '#FFF3E0',
          padding: '12px',
          borderRadius: '8px',
          marginTop: '12px'
        }}>
          <p style={{ margin: 0, fontWeight: 500 }}>
            ⚠️ Применяется для уточнения спорных участков, при пересечении с другими сетями, 
            а также когда приборные методы не дают однозначного результата.
          </p>
        </div>
      </div>

      <h2>📏 Полевая съёмка подземных коммуникаций</h2>

      <h3>Что подлежит съёмке:</h3>
      <ul>
        <li><strong>Точки выхода на поверхность</strong> — люки, камеры, колодцы, гидранты, задвижки</li>
        <li><strong>Углы поворота</strong> — места изменения направления трассы</li>
        <li><strong>Точки пересечения</strong> — с другими коммуникациями, с осями зданий</li>
        <li><strong>Изменения диаметра</strong>, материала, типа прокладки</li>
        <li><strong>Отметки верха трубы</strong> и поверхности земли</li>
      </ul>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Технология съёмки:</h3>
        <ol>
          <li><strong>Рекогносцировка</strong> — визуальное обследование территории, поиск люков и камер</li>
          <li><strong>Трассирование</strong> — определение хода трассы приборами (трассоискателем)</li>
          <li><strong>Закрепление точек</strong> — маркировка характерных точек на местности</li>
          <li><strong>Геодезическая съёмка</strong> — определение координат и высот всех точек</li>
          <li><strong>Промеры глубин</strong> — определение отметок лотка трубы (для самотечных коммуникаций)</li>
        </ol>
      </div>

      <h2>📊 Точность съёмки подземных коммуникаций</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Вид работ</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Допустимая погрешность плановых</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Допустимая погрешность высотных</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Открытые участки (лотки, каналы)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±5 см</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±5 см</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Закрытые участки (приборный поиск)</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±15-20 см</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±10-15 см</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Точки на люках и камерах</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±2-3 см</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±2 см</td>
          </tr>
        </tbody>
      </table>

      <h2>📋 Условные обозначения на планах</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px'
        }}>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Буквенные индексы:</h4>
            <ul>
              <li><strong>В</strong> — водопровод</li>
              <li><strong>К</strong> — канализация</li>
              <li><strong>К1</strong> — бытовая канализация</li>
              <li><strong>К2</strong> — дождевая канализация</li>
              <li><strong>Т</strong> — теплосеть</li>
              <li><strong>Г</strong> — газопровод</li>
              <li><strong>Э</strong> — электрокабель</li>
              <li><strong>С</strong> — слаботочные сети</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#2D5A27', marginBottom: '8px' }}>Цветовое обозначение:</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#0000FF', fontWeight: 'bold' }}>Синий</span> — водопровод</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#800080', fontWeight: 'bold' }}>Фиолетовый</span> — канализация</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#FF0000', fontWeight: 'bold' }}>Красный</span> — теплосеть</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#008000', fontWeight: 'bold' }}>Зелёный</span> — кабели связи</li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#000000', fontWeight: 'bold' }}>Чёрный</span> — газопровод</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>📝 Согласование и исполнительная документация</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Обязательные документы:</h3>
        <ol>
          <li><strong>Исполнительный чертёж</strong> — план с нанесёнными коммуникациями, их характеристиками и отметками</li>
          <li><strong>Ведомость координат</strong> — характерных точек (углы поворота, колодцы, пересечения)</li>
          <li><strong>Каталог высот</strong> — отметки земли и верха труб/лотков</li>
          <li><strong>Акты согласования</strong> — с эксплуатирующими организациями (водоканал, теплосети, электросети)</li>
        </ol>
        
        <div style={{
          background: '#FFF3E0',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px'
        }}>
          <p style={{ margin: 0, fontWeight: 500 }}>
            ⚠️ <strong>Важно:</strong> Согласование с эксплуатирующими организациями — обязательный этап. 
            Без него документы не имеют юридической силы.
          </p>
        </div>
      </div>

      <h2>🚨 Типичные проблемы и их решение</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Нет данных о сетях</h3>
          <p><strong>Решение:</strong> Использовать георадар или выполнить шурфование для определения трассы.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Пересечение сетей с разными глубинами</h3>
          <p><strong>Решение:</strong> Тщательно фиксировать отметки, при необходимости выполнять шурфы для уточнения вертикального положения.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Мешают металлические конструкции</h3>
          <p><strong>Решение:</strong> Использовать георадар (для него металл — не помеха) или комбинировать методы.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Несовпадение с архивными данными</h3>
          <p><strong>Решение:</strong> Всегда доверять полевым измерениям, но фиксировать расхождения в отчёте.</p>
        </div>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор подземных коммуникаций</h3>
        <p>
          Для расчёта глубины заложения по данным трассоискателя или перевода отметок используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор подземных сетей
          </a>.
        </p>
      </div>

      <blockquote>
        "Подземные коммуникации — невидимая часть инфраструктуры, но от их правильного 
        учёта зависит безопасность и эффективность всего строительства. Тратьте время 
        на тщательную съёмку сейчас, чтобы не тратить миллионы на ремонт потом."
      </blockquote>
    </>
  );

  const relatedArticles = [
    {
      title: 'Организация инженерно-геодезических работ',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Этапы работ, документальное сопровождение и согласования.',
      readTime: 12,
      link: '/knowledge/articles/survey-stages'
    },
    {
      title: 'Планово-высотная съемка',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Фундамент для карты и строительства.',
      readTime: 8,
      link: '/knowledge/articles/plan-height-survey'
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
      title="Съемка подземных коммуникаций" 
      description="Методы поиска и съемки инженерных сетей, оформление исполнительной документации."
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
            { name: 'Съемка подземных коммуникаций', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Съемка подземных коммуникаций"
        author={{ 
          name: 'Иван Петров', 
          role: 'Инженер-геофизик',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        }}
        date="3 марта 2026"
        readTime={16}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}