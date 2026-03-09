import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';

export default function LeicaLS10() {
  return (
    <Layout
      title="Leica LS10 - Цифровой нивелир" 
      description="Цифровой нивелир Leica LS10 — точность 0.3 мм/км, память 30 000 измерений"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Нивелиры', link: '/equipment/levels' },
            { name: 'Leica LS10', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Leica"
        model="LS10"
        type="Цифровой нивелир"
        
        // Основные характеристики
        accuracy="0.3 мм/км"
        accuracyElectronic="0.3 мм/км"
        accuracyStandard="1.0 мм/км"
        accuracyOptical="2.0 мм/км"
        
        // Оптика
        magnification="32x"
        objectiveDiameter="36 мм"
        range="1.8 - 110 м"
        minFocusingDistance="0.6 м"
        imageType="Прямое"
        fieldOfView="3.5 м на 100 м"
        
        // Компенсатор
        compensationType="Маятниковый с магнитным демпфером"
        compensationRange="±9′"
        compensationAccuracy="0.3″"
        electronicLevel="Да"
        
        // Память и интерфейсы
        memory="30 000 измерений"
        memoryExpansion="USB до 32 ГБ"
        interfaces="USB, USB хост, Bluetooth"
        display="3.6″, QVGA (320×240), цветной сенсорный"
        keyboard="28 клавиш с подсветкой"
        
        // Режимы работы
        measurementModes="Электронные, оптические"
        measurementTime="2.5 сек"
        autoCorrection="Коллимация, кривизна Земли"
        
        // Физические характеристики
        weight="3.7 кг"
        dimensions="276×222×206 мм"
        protection="IP55"
        tempRange="-20°C до +50°C"
        storageTemp="-40°C до +70°C"
        
        // Питание
        battery="10-12 ч"
        batteryType="Li-ion 11.1 В, 2.8 А•ч (GEB331)"
        
        // Дополнительно
        circularLevel="8′/2 мм"
        magneticSensitivity="≤1″"
        
        software="Leica Geo Office"
        
        manual="/files/leica-ls10-manual.pdf"
        
        description={`Leica LS10 — высокоточный цифровой нивелир для геометрического нивелирования. 
          Прибор обеспечивает точность 0.3 мм/км с инварными рейками и оснащен маятниковым компенсатором 
          с магнитным демпфером. Цветной сенсорный дисплей и подсветка клавиш позволяют комфортно работать 
          в любых условиях. Встроенная память на 30 000 измерений и USB-интерфейс обеспечивают быстрый 
          экспорт данных.`}
      />
      
      <CTABlock 
        title="Нужна помощь с выбором оборудования?"
        description="Задайте вопрос в Telegram-боте — наши эксперты помогут подобрать прибор под ваши задачи"
        buttonText="Спросить в Telegram"
        buttonLink="https://t.me/GeodezistOnlineBot"
      />
      <BackToTop />
    </Layout>
  );
}