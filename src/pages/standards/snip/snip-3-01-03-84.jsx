import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import StandardSpecs from '../../../components/StandardSpecs';
import CTABlock from '../../../components/CTABlock'; 
import BackToTop from '../../../components/BackToTop';

export default function Snip3010384() {
  return (
    <Layout 
      title="СНиП 3.01.03-84 - Геодезические работы в строительстве" 
      description="Правила производства геодезических работ при строительстве зданий и сооружений. Заменён на СП 126.13330.2012."
    >
      {/* Якорь для навигации */}
      <div id="gost" style={{ position: 'absolute', top: '-100px' }}></div>
      
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Стандарты', link: '/standards' },
            { name: 'СНиПы', link: '/standards#snip' },
            { name: 'СНиП 3.01.03-84', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <StandardSpecs
        hideHeader={true}
        fullTitle="СНиП 3.01.03-84 Геодезические работы в строительстве"
        year="1984"
        status="заменён"
        description="Правила производства геодезических работ при строительстве зданий и сооружений. Документ утратил силу и заменён на СП 126.13330.2012."
        pdfLink="/files/snip-3-01-03-84.pdf"
        content={`
          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 32px;">⚠️</span>
              <div>
                <h3 style="color: #B71C1C; margin: 0 0 8px 0;">Документ утратил силу</h3>
                <p style="margin: 0; font-size: 16px;">
                  <strong>СНиП 3.01.03-84</strong> заменён на <strong>СП 126.13330.2012</strong> 
                  "СНиП 3.01.03-84. Геодезические работы в строительстве. Актуализированная редакция".
                </p>
              </div>
            </div>
          </div>

          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <h3 style="color: #2D5A27; margin: 0 0 12px 0;">📌 Информация о документе</h3>
            <p style="margin: 0;">
              Несмотря на замену, данный СНиП может использоваться как справочный материал 
              для понимания истории развития нормативной базы геодезических работ в строительстве. 
              Для актуальных требований следует обращаться к <strong>СП 126.13330.2012</strong>.
            </p>
          </div>

          <h2>Содержание (историческое)</h2>
          
          <ol style="font-size: 16px; line-height: 1.8;">
            <li><strong>Общие положения</strong> — область применения, нормативные ссылки</li>
            <li><strong>Геодезические работы при строительстве</strong> — создание разбивочной основы, вынос осей</li>
            <li><strong>Контроль точности</strong> — допуски и методы контроля геометрических параметров</li>
            <li><strong>Приемка геодезических работ</strong> — состав исполнительной документации</li>
          </ol>

          <h2>Основные требования (в редакции 1984 г.)</h2>
          
          <ul>
            <li>Точность построения разбивочной сети — не ниже 1:5000</li>
            <li>Средняя квадратическая погрешность измерений углов — 30"</li>
            <li>Относительная погрешность линейных измерений — 1:2000</li>
            <li>Обязательное закрепление осей знаками вне зоны работ</li>
          </ul>

          <div style="background: #FFF3E0; padding: 16px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0; font-style: italic;">
              💡 <strong>Для сравнения:</strong> В актуальном СП 126.13330.2012 требования к точности 
              были пересмотрены с учётом современных приборов и методов измерений. 
              Допуски стали более жёсткими для высокоточных работ.
            </p>
          </div>

          <h2>Ссылки на связанные документы</h2>
          
          <ul>
            <li><strong>СП 126.13330.2012</strong> — актуальная редакция (действующий)</li>
            <li><strong>ГОСТ Р 51872-2002</strong> — документация исполнительная геодезическая</li>
            <li><strong>ГОСТ 26433.0-85</strong> — система обеспечения точности</li>
          </ul>

          <blockquote>
            "Знание истории развития нормативной базы помогает лучше понимать современные требования 
            и тенденции их ужесточения с развитием технологий."
          </blockquote>
        `}
      />
      <CTABlock 
        title="Не нашли нужный документ?"
        description="Отправьте запрос в Telegram-бот — мы добавим его в базу"
        buttonText="Отправить запрос"
        buttonLink="https://t.me/GeodezistOnlineBot"
      />
      <BackToTop />
    </Layout>
  );
}