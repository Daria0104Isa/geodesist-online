import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function TacheometerCalibrationArticle() {
  const content = (
    <>
      <p>
        Калибровка и поверка тахеометра — обязательные процедуры для обеспечения 
        точности измерений. Регулярная проверка прибора позволяет выявить и 
        устранить отклонения, возникающие при транспортировке, эксплуатации и 
        хранении. В этой статье мы рассмотрим основные виды поверок, их 
        периодичность и методику выполнения.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🎯 <strong>Зачем нужна калибровка?</strong> Даже самый точный тахеометр 
          со временем теряет свои характеристики. Механические воздействия, 
          перепады температур, вибрации при транспортировке — всё это влияет 
          на геометрию прибора и точность измерений.
        </p>
      </div>

      <h2>📋 Периодичность поверок</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Тип поверки</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Периодичность</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Кто выполняет</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Первичная</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>При выпуске с завода</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Производитель</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Периодическая</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>1 раз в год</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Аккредитованная лаборатория</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Внеочередная</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>После падений, ударов, ремонта</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Сервисный центр</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Полевая проверка</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Перед началом работ</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Пользователь</td>
          </tr>
        </tbody>
      </table>

      <h2>🔧 Основные поверки тахеометра</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>1. Поверка круглого уровня</h3>
        <p><strong>Цель:</strong> Проверить правильность установки круглого уровня.</p>
        <p><strong>Методика:</strong></p>
        <ol>
          <li>Установите тахеометр на штатив</li>
          <li>Приведите пузырёк круглого уровня в центр подъёмными винтами</li>
          <li>Поверните прибор на 180° вокруг вертикальной оси</li>
          <li>Если пузырёк сместился, отъюстируйте уровень исправительными винтами на половину смещения</li>
        </ol>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>2. Поверка сетки нитей</h3>
        <p><strong>Цель:</strong> Убедиться, что вертикальная нить строго вертикальна.</p>
        <p><strong>Методика:</strong></p>
        <ol>
          <li>Наведитесь на хорошо видимую точку (отвес) в верхней части</li>
          <li>Плавно вращайте трубу по вертикали</li>
          <li>Точка должна двигаться точно по вертикальной нити</li>
          <li>Если отклоняется — юстировка в сервисном центре</li>
        </ol>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '16px' }}>3. Поверка компенсатора</h3>
        <p><strong>Цель:</strong> Проверить работу автоматического компенсатора углов наклона.</p>
        <p><strong>Методика:</strong></p>
        <ol>
          <li>Приведите прибор в рабочее положение</li>
          <li>Выполните измерение горизонтального угла</li>
          <li>Наклоните прибор на небольшой угол (до 3') и снова измерьте</li>
          <li>Разность не должна превышать паспортные данные (обычно 2-3")</li>
        </ol>
      </div>

      <h2>📏 Поверка коллимационной ошибки</h2>

      <p>
        Коллимационная ошибка — это отклонение визирной оси трубы от перпендикуляра 
        к горизонтальной оси вращения. Это одна из самых важных поверок.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '20px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Методика проверки:</h3>
        <ol>
          <li>Наведитесь на удалённую чёткую цель (100-200 м) при круге лево (КЛ)</li>
          <li>Запишите отсчёт по горизонтальному кругу (КЛ)</li>
          <li>Переведите трубу через зенит, наведитесь на ту же цель при круге право (КП)</li>
          <li>Запишите отсчёт (КП)</li>
          <li>Коллимационная ошибка вычисляется по формуле: <strong>c = (КЛ - КП ± 180°)/2</strong></li>
        </ol>
        
        <div style={{
          background: 'white',
          padding: '12px',
          borderRadius: '8px',
          marginTop: '12px',
          fontFamily: 'monospace'
        }}>
          <p style={{ margin: 0 }}>Допустимое значение: <strong>c ≤ 10"</strong> для точных работ</p>
        </div>
      </div>

      <h2>📐 Поверка места нуля (M0)</h2>

      <p>
        Место нуля — это отсчёт по вертикальному кругу, когда визирная ось горизонтальна.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '20px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Методика проверки:</h3>
        <ol>
          <li>Наведитесь на точку при круге лево (КЛ), запишите вертикальный угол</li>
          <li>Наведитесь на ту же точку при круге право (КП), запишите вертикальный угол</li>
          <li>M0 = (КЛ + КП)/2</li>
        </ol>
        
        <div style={{
          background: 'white',
          padding: '12px',
          borderRadius: '8px',
          marginTop: '12px',
          fontFamily: 'monospace'
        }}>
          <p style={{ margin: 0 }}>Допустимое значение: <strong>M0 ≤ 15"</strong></p>
        </div>
      </div>

      <h2>📊 Оформление результатов</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Журнал поверки тахеометра:</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F0F4EF' }}>
              <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Дата</th>
              <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Вид поверки</th>
              <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Результат</th>
              <th style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Подпись</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>01.03.2026</td>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Коллимация</td>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>5.2"</td>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Иванов</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>01.03.2026</td>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Место нуля</td>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>8.1"</td>
              <td style={{ padding: '8px', border: '1px solid #D4DCCD' }}>Иванов</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>📌 Рекомендации</h2>

      <ul>
        <li>Храните прибор в термокейсе, избегайте резких перепадов температур</li>
        <li>Перед началом работ дайте прибору акклиматизироваться (15-20 минут)</li>
        <li>Регулярно проверяйте затяжку всех винтов и креплений</li>
        <li>После транспортировки всегда выполняйте полевую проверку</li>
        <li>Не пытайтесь самостоятельно юстировать сложные узлы — обращайтесь в сервисный центр</li>
      </ul>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор поверок</h3>
        <p>
          Для автоматического расчёта коллимационной ошибки и места нуля используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор поверок тахеометра
          </a>.
        </p>
      </div>

      <blockquote>
        "Поверка тахеометра — это не просто формальность, а гарантия качества ваших измерений. 
        Лучше потратить 15 минут на проверку перед работой, чем недели на переделку брака."
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
      title: 'Тахеометрическая съемка: пошаговое руководство',
      category: 'ПОЛЕВЫЕ МЕТОДЫ',
      description: 'Методика полевых работ, обработка данных, создание топографического плана.',
      readTime: 18,
      link: '/knowledge/articles/tacheometric-survey'
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
      title="Калибровка и поверка тахеометров" 
      description="Периодичность, методики и документирование результатов поверок тахеометров."
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
            { name: 'Основы оборудования', link: '/knowledge/oborudovanie' }, 
            { name: 'Калибровка тахеометра', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Основы оборудования"
        title="Калибровка и поверка тахеометров"
        author={{ 
          name: 'Михаил Иванов', 
          role: 'Главный геодезист',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
        }}
        date="8 марта 2026"
        readTime={12}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}