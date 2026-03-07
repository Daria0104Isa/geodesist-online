import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function StakingOutArticle() {
  const content = (
    <>
      <p>
        Разбивочные работы — один из самых ответственных этапов строительства. 
        От того, насколько точно будут вынесены оси здания в натуру, зависит 
        геометрия всего сооружения. В этой статье мы разберём методы выноса 
        осей, требования к точности и полевой контроль.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          🎯 <strong>Суть разбивки:</strong> Перенести проектное положение 
          конструкций на местность с заданной точностью. Результат — закреплённые 
          на местности оси и отметки, от которых ведётся строительство.
        </p>
      </div>

      <h2>📋 Исходные данные для разбивки</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Необходимые документы:</h3>
        <ul>
          <li><strong>Генеральный план</strong> — с указанием осей и привязок</li>
          <li><strong>Стройгенплан</strong> — с расположением здания на участке</li>
          <li><strong>Разбивочный чертёж</strong> — с координатами осей и характерных точек</li>
          <li><strong>Каталог координат</strong> — пунктов геодезической сети</li>
        </ul>
      </div>

      <h2>🔧 Методы разбивки</h2>

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
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📐 Полярный способ</h3>
          <p>Самый распространённый метод при работе с тахеометром. Выполняется с одной станции:</p>
          <ol style={{ marginTop: '12px' }}>
            <li>Установить прибор на пункте с известными координатами</li>
            <li>Ориентироваться на другой пункт</li>
            <li>Вычислить полярные координаты (угол и расстояние) до выносимой точки</li>
            <li>Отложить угол и расстояние, закрепить точку</li>
          </ol>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📐 Способ прямоугольных координат</h3>
          <p>Используется при наличии строительной сетки или линий, параллельных осям:</p>
          <ol style={{ marginTop: '12px' }}>
            <li>Отложить по оси X проектное расстояние</li>
            <li>Построить перпендикуляр и отложить расстояние по оси Y</li>
            <li>Закрепить полученную точку</li>
          </ol>
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
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📐 Способ угловой засечки</h3>
          <p>Применяется для выноса труднодоступных точек:</p>
          <ol style={{ marginTop: '12px' }}>
            <li>С двух пунктов измеряют углы на выносимую точку</li>
            <li>Пересечение направлений даёт искомое положение</li>
          </ol>
        </div>
        
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>📐 Способ линейной засечки</h3>
          <p>Используется при наличии рулетки или дальномера:</p>
          <ol style={{ marginTop: '12px' }}>
            <li>С двух пунктов откладывают проектные расстояния</li>
            <li>Пересечение дуг даёт положение точки</li>
          </ol>
        </div>
      </div>

      <h2>🎯 Вынос основных осей</h2>

      <div style={{
        background: '#FFF3E0',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0',
        borderLeft: '4px solid #E6B422'
      }}>
        <h3 style={{ color: '#B85C1F', marginBottom: '12px' }}>Последовательность вынос осей здания:</h3>
        <ol>
          <li><strong>Вынос главных осей</strong> — две взаимно перпендикулярные линии, определяющие положение здания</li>
          <li><strong>Закрепление осей обноской</strong> — установка столбов за пределами котлована</li>
          <li><strong>Вынос промежуточных осей</strong> — от главных осей с помощью рулетки</li>
          <li><strong>Контрольные промеры</strong> — проверка диагоналей и углов</li>
        </ol>
      </div>

      <h2>📏 Точность разбивочных работ</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '24px 0',
        fontSize: '15px'
      }}>
        <thead>
          <tr style={{ background: '#F0F4EF' }}>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Этап работ</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Допустимая погрешность</th>
            <th style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Метод контроля</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Вынос главных осей</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±10 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Контрольные промеры, замкнутый ход</td>
          </tr>
          <tr style={{ background: '#F9F7F3' }}>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Вынос промежуточных осей</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±5 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Сравнение с проектом</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD', fontWeight: 500 }}>Вертикальная планировка</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>±20 мм</td>
            <td style={{ padding: '12px', border: '1px solid #D4DCCD' }}>Нивелирование</td>
          </tr>
        </tbody>
      </table>

      <h2>🏗️ Разбивка котлована</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Порядок разбивки котлована:</h3>
        <ol>
          <li>Вынести основные оси здания и закрепить их обноской</li>
          <li>Отложить от осей контуры котлована с учётом заложения откосов</li>
          <li>Закрепить границы котлована колышками</li>
          <li>Определить "красные" отметки (проектные высоты) и вынести их на обноску</li>
        </ol>
        
        <div style={{
          background: '#F0F4EF',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px'
        }}>
          <p style={{ margin: 0 }}>
            <strong>Пример:</strong> При глубине котлована 3 м и коэффициенте откоса 1:0.5 
            ширина котлована по верху будет на 3 м больше, чем по низу.
          </p>
        </div>
      </div>

      <h2>📊 Полевой контроль разбивки</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        margin: '24px 0'
      }}>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📏</div>
          <strong>Контрольные промеры</strong>
          <p style={{ fontSize: '13px', marginTop: '8px' }}>Измерение расстояний между вынесенными точками</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📐</div>
          <strong>Контроль углов</strong>
          <p style={{ fontSize: '13px', marginTop: '8px' }}>Проверка прямоугольности (диагонали)</p>
        </div>
        <div style={{
          background: '#F0F4EF',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📊</div>
          <strong>Исполнительная съёмка</strong>
          <p style={{ fontSize: '13px', marginTop: '8px' }}>Фактическое положение осей и отметок</p>
        </div>
      </div>

      <h2>📝 Документация разбивочных работ</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>Обязательные документы:</h3>
        <ul>
          <li><strong>Акт разбивки осей</strong> — с подписями заказчика и подрядчика</li>
          <li><strong>Схема разбивки</strong> — с указанием фактических промеров</li>
          <li><strong>Ведомость координат вынесенных точек</strong></li>
          <li><strong>Акт освидетельствования геодезической разбивочной основы</strong></li>
        </ul>
      </div>

      <h2>🚨 Типичные ошибки при разбивке</h2>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Ошибки в исходных данных</h3>
          <p>Неправильные координаты пунктов, неверные проектные отметки — приводят к браку на ранних этапах.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Неправильный выбор метода</h3>
          <p>Для каждой конкретной задачи нужно выбирать оптимальный метод с учётом точности и условий.</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Отсутствие контроля</h3>
          <p>Каждую вынесенную точку нужно проверять независимым методом.</p>
        </div>
        
        <div>
          <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>❌ Плохое закрепление осей</h3>
          <p>Обноска должна быть устойчивой и защищённой от повреждений строительной техникой.</p>
        </div>
      </div>

      <h2>✅ Чек-лист геодезиста перед разбивкой</h2>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <ul style={{ columns: 2, columnGap: '40px' }}>
          <li>✅ Проверить наличие проекта (разбивочный чертёж)</li>
          <li>✅ Проверить координаты исходных пунктов</li>
          <li>✅ Выбрать метод разбивки</li>
          <li>✅ Подготовить тахеометр (поверка, настройки)</li>
          <li>✅ Заготовить материалы для закрепления (арматуру, краску)</li>
          <li>✅ Согласовать время с производителем работ</li>
          <li>✅ Выполнить контрольные измерения</li>
          <li>✅ Оформить акт</li>
        </ul>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '24px 0'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '12px' }}>🧮 Калькулятор разбивки</h3>
        <p>
          Для автоматического расчёта полярных координат и контроля точности используйте 
          <a href="/calculators" style={{ color: '#2D5A27', fontWeight: 600, textDecoration: 'underline', marginLeft: '4px' }}>
            калькулятор разбивочных работ
          </a>.
        </p>
      </div>

      <blockquote>
        "Разбивка — это мост между проектом и строительством. Ошибка в 1 см на бумаге 
        может обернуться метрами на стройплощадке. Будьте внимательны на каждом этапе."
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
    }
  ];

  return (
    <Layout 
      title="Разбивочные работы: вынос осей в натуру" 
      description="Методы и точность разбивки, полевой контроль, документация."
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
            { name: 'Разбивочные работы', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Полевые методы"
        title="Разбивочные работы: вынос осей в натуру"
        author={{ 
          name: 'Сергей Смирнов', 
          role: 'Инженер-геодезист',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        }}
        date="2 марта 2026"
        readTime={15}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}