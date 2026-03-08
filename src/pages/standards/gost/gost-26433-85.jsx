import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import StandardSpecs from '../../../components/StandardSpecs';
import CTABlock from '../../../components/CTABlock'; 
import BackToTop from '../../../components/BackToTop';

export default function GOST2643385() {
  return (
    <Layout 
      title="ГОСТ 26433.0-85 - Система обеспечения точности в строительстве" 
      description="Система обеспечения точности геометрических параметров в строительстве. Правила выполнения измерений и контроля точности."
    >
      {/* Якорь для навигации */}
      <div id="gost" style={{ position: 'absolute', top: '-100px' }}></div>
      
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Стандарты', link: '/standards' },
            { name: 'ГОСТы', link: '/standards#gost' },
            { name: 'ГОСТ 26433.0-85', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <StandardSpecs
        hideHeader={true}
        fullTitle="ГОСТ 26433.0-85 Система обеспечения точности геометрических параметров в строительстве"
        year="1985"
        status="действует"
        description="Настоящий стандарт устанавливает правила выполнения измерений и контроля точности геометрических параметров при строительстве зданий и сооружений."
        pdfLink="/files/gost-26433.0-85.pdf"
        content={`
          <h2>Область применения</h2>
          
          <p>Стандарт распространяется на:</p>
          <ul>
            <li>геодезические работы при строительстве</li>
            <li>контроль точности геометрических параметров</li>
            <li>приемку законченных объектов</li>
          </ul>

          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <p style="margin: 0; font-style: italic;">
              💡 Стандарт является основополагающим документом для обеспечения качества 
              строительно-монтажных работ и геодезического контроля.
            </p>
          </div>

          <h2>Методы измерений</h2>
          
          <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #F0F4EF;">
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Метод</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Применение</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Точность</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Геометрический</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Линейные измерения рулетками, линейками</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">±1-2 мм</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Тригонометрический</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Измерение углов теодолитами</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">±5-30"</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Физико-оптический</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Высокоточные измерения оптическими приборами</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">±0.1-0.5 мм</td>
              </tr>
            </tbody>
          </table>

          <h2>Основные требования к точности</h2>
          
          <ul>
            <li>Средняя квадратическая погрешность измерений не должна превышать 0.2 допуска контролируемого параметра</li>
            <li>Количество измерений на каждой контрольной точке - не менее двух</li>
            <li>Расхождение между результатами повторных измерений не должно превышать 30% установленного допуска</li>
          </ul>

          <blockquote>
            "Соблюдение требований ГОСТ 26433.0-85 обязательно при производстве геодезических работ 
            на всех этапах строительства - от выноса осей до приемки объекта в эксплуатацию."
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