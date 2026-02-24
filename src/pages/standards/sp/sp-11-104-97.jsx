import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import StandardSpecs from '../../../components/StandardSpecs';
import CTABlock from '../../../components/CTABlock'; 
import BackToTop from '../../../components/BackToTop';

export default function Sp1110497() {
  return (
    <Layout 
      title="СП 11-104-97 - Инженерно-геодезические изыскания для строительства" 
      description="Правила выполнения инженерно-геодезических изысканий при строительстве зданий и сооружений. Действующий документ."
    >
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Стандарты', link: '/standards' },
            { name: 'СП', link: '/standards#sp' },
            { name: 'СП 11-104-97', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <StandardSpecs
        hideHeader={true}
        fullTitle="СП 11-104-97 Инженерно-геодезические изыскания для строительства"
        year="1997"
        status="действует"
        description="Правила выполнения инженерно-геодезических изысканий при строительстве зданий и сооружений. Документ является действующим и широко применяется в практике изыскательских работ."
        pdfLink="/files/sp-11-104-97.pdf"
        content={`
          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 32px;">✅</span>
              <div>
                <h3 style="color: #2D5A27; margin: 0 0 12px 0;">Действующий документ</h3>
                <p style="margin: 0; font-size: 16px;">
                  <strong>СП 11-104-97</strong> является действующим и обязательным к применению 
                  при выполнении инженерно-геодезических изысканий.
                </p>
              </div>
            </div>
          </div>

          <h2>Область применения</h2>
          
          <p>Настоящий свод правил устанавливает требования к выполнению инженерно-геодезических изысканий для:</p>
          
          <ul>
            <li>строительства новых зданий и сооружений</li>
            <li>реконструкции и расширения действующих предприятий</li>
            <li>технического перевооружения объектов</li>
            <li>линейных сооружений (дороги, трубопроводы, ЛЭП)</li>
          </ul>

          <h2>Виды работ</h2>
          
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0;">
            <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid rgba(167, 196, 160, 0.3);">
              <h3 style="color: #2D5A27; margin: 0 0 12px 0;">🗺️ Полевые работы</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Создание геодезической разбивочной основы</li>
                <li>Топографическая съемка в масштабах 1:500 – 1:5000</li>
                <li>Трассирование линейных сооружений</li>
                <li>Геодезическое обеспечение строительства</li>
                <li>Наблюдения за деформациями</li>
              </ul>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid rgba(167, 196, 160, 0.3);">
              <h3 style="color: #2D5A27; margin: 0 0 12px 0;">💻 Камеральные работы</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Обработка полевых измерений</li>
                <li>Составление топографических планов</li>
                <li>Построение цифровых моделей рельефа</li>
                <li>Подготовка технического отчета</li>
                <li>Согласование материалов с заказчиком</li>
              </ul>
            </div>
          </div>

          <h2>Требования к точности съемки</h2>
          
          <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #F0F4EF;">
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Характеристика</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Допуск</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Примечание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Погрешность положения пунктов ОГС</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">0.1 мм в масштабе карты</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Для масштаба 1:500 – 5 см на местности</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Погрешность высот пунктов</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">1/10 высоты сечения рельефа</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">При h=0.5м допуск 5 см</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Погрешность плановых измерений</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5 мм в масштабе карты</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Для контуров местности</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">СКП измерения углов</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">30" для технических работ</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Для теодолитных ходов</td>
              </tr>
            </tbody>
          </table>

          <h2>Масштабы съемки в зависимости от назначения</h2>
          
          <div style="overflow-x: auto; margin: 20px 0;">
            <table style="width:100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #F0F4EF;">
                  <th style="padding: 12px; border: 1px solid #D4DCCD;">Назначение</th>
                  <th style="padding: 12px; border: 1px solid #D4DCCD;">Масштаб</th>
                  <th style="padding: 12px; border: 1px solid #D4DCCD;">Сечение рельефа, м</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">Проектирование промплощадок</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1:500</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5</td>
                </tr>
                <tr style="background-color: #F9F7F3;">
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">Линейные сооружения</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1:1000 – 1:2000</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5 – 1.0</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">Застроенные территории</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1:500</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5</td>
                </tr>
                <tr style="background-color: #F9F7F3;">
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">Незастроенные территории</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1:2000</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1.0 – 2.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Состав технического отчета</h2>
          
          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <ol style="margin: 0;">
              <li><strong>Пояснительная записка</strong> — методика работ, условия производства</li>
              <li><strong>Топографические планы</strong> в заданном масштабе</li>
              <li><strong>Каталоги координат и высот</strong> пунктов съемочной сети</li>
              <li><strong>Ведомости результатов измерений</strong> (полевые журналы)</li>
              <li><strong>Акты согласования</strong> с эксплуатирующими организациями</li>
              <li><strong>Схемы геодезических построений</strong></li>
            </ol>
          </div>

          <blockquote>
            "СП 11-104-97 — основной документ, регламентирующий состав, объемы и точность 
            инженерно-геодезических изысканий. Его знание обязательно для всех специалистов, 
            выполняющих полевые и камеральные работы."
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