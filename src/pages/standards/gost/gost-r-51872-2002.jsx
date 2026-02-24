import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import StandardSpecs from '../../../components/StandardSpecs';
import CTABlock from '../../../components/CTABlock'; 
import BackToTop from '../../../components/BackToTop';

export default function GostR518722002() {
  return (
    <Layout 
      title="ГОСТ Р 51872-2002 - Документация исполнительная геодезическая" 
      description="Правила выполнения и оформления исполнительной геодезической документации при строительстве зданий и сооружений."
    >
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Стандарты', link: '/standards' },
            { name: 'ГОСТы', link: '/standards#gost' },
            { name: 'ГОСТ Р 51872-2002', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <StandardSpecs
        hideHeader={true}
        fullTitle="ГОСТ Р 51872-2002 Документация исполнительная геодезическая. Правила выполнения"
        year="2002"
        status="действует"
        description="Настоящий стандарт устанавливает правила выполнения и оформления исполнительной геодезической документации при строительстве зданий и сооружений."
        pdfLink="/files/gost-r-51872-2002.pdf"
        content={`
          <h2>Основные положения</h2>
          
          <p>Стандарт распространяется на исполнительную геодезическую документацию, составляемую при:</p>
          <ul>
            <li>строительстве новых зданий и сооружений</li>
            <li>реконструкции и расширении действующих предприятий</li>
            <li>техническом перевооружении</li>
          </ul>

           <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <p style="margin: 0; font-style: italic;">
              ⚠️ <strong>Важно:</strong> Исполнительная документация является обязательным приложением 
              к актам приемки выполненных работ и предъявляется органам строительного надзора.
            </p>
          </div>

          <h2>Состав исполнительной документации</h2>
          
          <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #F0F4EF;">
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">№</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Наименование документа</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Примечание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">1</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Акт разбивки осей</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Составляется на каждый этап работ</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD;">2</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Исполнительные схемы</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Планово-высотное положение конструкций</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">3</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Каталоги координат</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Опорные и съемочные сети</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD;">4</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Ведомости результатов измерений</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">С приложением полевых журналов</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">5</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Пояснительная записка</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Описание методик и точности работ</td>
              </tr>
            </tbody>
          </table>

          <h2>Требования к оформлению</h2>
          
          <ul>
            <li>Документы должны быть выполнены на бумажных носителях и в электронном виде</li>
            <li>Каждый документ должен иметь штамп и подпись исполнителя</li>
            <li>Все исправления заверяются подписью с расшифровкой</li>
            <li>Масштабы исполнительных схем должны соответствовать рабочей документации</li>
          </ul>

          <h2>Периодичность составления</h2>
          
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0;">
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">📅</div>
              <strong>Ежедневно</strong>
              <p style="font-size: 13px; margin: 8px 0 0;">Журналы работ, полевые измерения</p>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">📆</div>
              <strong>По этапам</strong>
              <p style="font-size: 13px; margin: 8px 0 0;">Акты освидетельствования</p>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">📋</div>
              <strong>По окончании</strong>
              <p style="font-size: 13px; margin: 8px 0 0;">Сводный технический отчет</p>
            </div>
          </div>

          <blockquote>
            "Качество исполнительной документации — это лицо геодезической службы строительной организации. 
            Отсутствие или небрежное оформление документов может привести к задержкам ввода объекта в эксплуатацию."
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