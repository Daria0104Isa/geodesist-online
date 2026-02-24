import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import StandardSpecs from '../../../components/StandardSpecs';
import CTABlock from '../../../components/CTABlock'; 
import BackToTop from '../../../components/BackToTop';

export default function GOST2226876() {
  return (
    <Layout 
      title="ГОСТ 22268-76 Геодезия. Термины и определения" 
      description="Настоящий стандарт устанавливает термины и определения основных понятий в области геодезии."
    >
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Стандарты', link: '/standards' },
            { name: 'ГОСТы', link: '/standards#gost' },
            { name: 'ГОСТ 22268-76', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <StandardSpecs
        hideHeader={true}
        fullTitle="ГОСТ 22268-76 Геодезия. Термины и определения"
        year="1976"
        status="действует"
        description="Настоящий стандарт устанавливает термины и определения основных понятий в области геодезии."
        pdfLink="/files/gost-22268-76.pdf"
        content={`
          <h2>Основные термины</h2>
          
          <p>Стандарт устанавливает следующие термины и определения:</p>

          <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #F0F4EF;">
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Термин</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Определение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Геодезия</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Область науки и техники, изучающая форму, размеры Земли и методы измерений на местности</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Топография</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Раздел геодезии, изучающий методы изображения земной поверхности на планах и картах</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Нивелирование</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Определение высот точек земной поверхности</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Теодолит</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Геодезический прибор для измерения горизонтальных и вертикальных углов</td>
              </tr>
            </tbody>
          </table>
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