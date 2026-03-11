import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';

export default function LeicaTS60() {
  return (
    <Layout
      title="Leica TS60 - Роботизированный тахеометр" 
      description="Leica TS60 — точность 0.5″, дальность до 3500 м, безотражательный режим 1000 м"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Тахеометры', link: '/equipment/tacheometers' },
            { name: 'Leica TS60', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Leica"
        model="TS60"
        type="Роботизированный тахеометр"
        
        // Основные характеристики
        angularAccuracy="0.5″"
        rangePrism="3500 м (10000 м LO режим)"
        rangeNonPrism="1000+ м"
        accuracyPrism="0.6 мм + 1 ppm"
        accuracyNonPrism="2 мм + 2 ppm"
        measurementTimePrecise="3-6 с"
        measurementTimeFast="2.4 с" 
        
        // Центрирование и указатели
        centeringType="Лазерный"
        centeringAccuracy="1.5 мм на 1.5 м"
        sightIndicator="Есть"
        targetIndicator="Есть"
        
        // Компенсатор
        compensatorType="Двухосевой"
        compensatorRange="4′"
        
        // Зрительная труба
        magnification="30x"
        minFocusingDistance="1.7 м"
        
        // Питание
        battery="7-9 ч"
        chargingTime="2.5-3.5 ч"
        
        // Управление
        keyboard="37 клавиш, подсветка"
        display='5" WVGA, цветной сенсорный, двусторонний'
        
        // Интерфейсы и память
        memory="2 ГБ ОЗУ + SD-карта 1/8 ГБ"
        interfaces="USB, RS232, Bluetooth"
        
        // Физические характеристики
        weight="7.7 кг"
        protection="IP65"
        tempRange="-20°C до +50°C"
        
        // ПО и форматы
        software="Leica Captivate"
        dataFormats="ASCII, DXF, XML, GSI"
        country="Швейцария"
        warranty="1 год"
        
        issues={[]}

        // Руководство пользователя
        manual="/files/leica-ts60-manual.pdf"
        
        description={`Leica TS60 — роботизированный тахеометр премиум-класса с точностью угловых измерений 0.5″. 
          Прибор обеспечивает дальность измерений до 3500 м на призму и до 1000 м в безотражательном режиме. 
          Оснащен двухосевым компенсатором, лазерным центрированием и двусторонним сенсорным дисплеем 5″. 
          Поддерживает работу с ПО Leica Captivate и широким спектром форматов данных.`}
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