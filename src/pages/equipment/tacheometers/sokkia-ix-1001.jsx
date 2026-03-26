import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';

export default function SokkiaiX1001() {
  return (
    <Layout 
      title="Sokkia iX-1001 - Роботизированный тахеометр" 
      description="Роботизированный тахеометр Sokkia iX-1001 — характеристики, инструкции"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Тахеометры', link: '/equipment/tacheometers' },
            { name: 'Sokkia iX-1001', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Sokkia"
        model="iX-1001"
        type="Роботизированный тахеометр"
  
        // Основные характеристики
        angularAccuracy="1″"
        rangePrism="6000 м"
        rangeNonPrism="800 м"
        rangeFilm="500 м"
        accuracyPrism="±1.0 мм + 2 ppm"
        accuracyNonPrism="±2.0 мм + 2 ppm"
        accuracyFilm="±2.0 мм + 2 ppm"
        measurementTimePrism="? с"
        measurementTimeNonPrism="? с"
        
        // Центрирование и указатели
        centeringType="Оптический"
        sightIndicator="Есть"
        targetIndicator="Есть"
        
        // Компенсатор
        compensatorType="Двухосевой жидкостный"
        compensatorRange="6′"
        
        // Зрительная труба
        magnification="30x"
        reticleIllumination="Есть"
        
        // Питание
        battery="4 ч"
        chargingTime="5.5 ч"
        
        // Управление
        keyboard="24 клавиши"
        display='Цветной сенсорный VWGA, 4.3"'
        
        // Интерфейсы и память
        memory="1 ГБ"
        interfaces="USB, RS232C, Bluetooth"
        usbHost="USB флэш (до 8 ГБ)"
        
        // Физические характеристики
        weight="5.8 кг"
        protection="IP66"
        tempRange="-20°C до +50°C"
        
        // ПО и форматы
        software="MAGNET Field On-Board + Basic"
        dataFormats="SOKKIA SDR33, TOPCON, DXF/DWG, ESRI Shape, TDS, LandXML, MOSS GENIO, CSV, Microstation"
        country="Япония"
        warranty="1 год"
        
        // Управление наводкой
        driveSystem="Сервопривод"
        
        issues={[]}
        
        manual="/files/sokkia-ix1001-manual.pdf"
        
        description={`Sokkia iX-1001 — роботизированный тахеометр с автофокусом и точностью угловых измерений 1″. 
          Прибор обеспечивает дальность измерений до 6000 м на призму и до 800 м в безотражательном режиме. 
          Оснащен двухосевым жидкостным компенсатором, оптическим центрированием и цветным сенсорным дисплеем 4.3″. 
          Поддерживает работу с ПО MAGNET Field и широким спектром форматов данных.`}
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