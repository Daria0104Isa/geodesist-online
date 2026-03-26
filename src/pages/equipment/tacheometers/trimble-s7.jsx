import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';

export default function TrimbleS7() {
  return (
    <Layout 
      title="Trimble S7 - Механический тахеометр" 
      description="Механический тахеометр Trimble S7 с технологией MagDrive"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Тахеометры', link: '/equipment/tacheometers' },
            { name: 'Trimble S7', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Trimble"
        model="S7"
        type="Роботизированный / Механический тахеометр"
  
        // Основные характеристики
        angularAccuracy="1″"
        rangePrism="2500 м (5500 м LO режим)"
        rangeNonPrism="1200 м (белая карта), 600 м (серая карта)"
        rangeFilm="1200 м (фольга 60x60 мм)"
        accuracyPrism="2 мм + 2 ppm"
        accuracyNonPrism="2 мм + 2 ppm"
        accuracyFilm="2 мм + 2 ppm"
        measurementTimePrism="1.2 с"
        measurementTimePrismTrack="0.4 с"
        measurementTimeNonPrism="1–5 с"
        measurementTimeNonPrismTrack="0.4 с"
  
        // Центрирование и указатели
        centeringType="Оптический"
        sightIndicator="Есть"
        targetIndicator="Есть"
        
        // Компенсатор
        compensatorType="Двухосевой центрированный"
        compensatorRange="±5.4′"
        compensatorAccuracy="0.5″"
        
        // Зрительная труба
        magnification="30x"
        aperture="40 мм"
        fieldOfView="2.6 м на 100 м"
        minFocusingDistance="1.5 м"
        reticleIllumination="Переменная (10 уровней)"
        autofocus="Стандартная"
        
        // Камера
        cameraResolution="2048×1536 пикс"
        digitalZoom="4 уровня (1x, 2x, 4x, 8x)"
        
        // Питание
        battery="6.5 ч"
        batteryMulti="26 ч (3 аккум.)"
        batteryType="Li-ion 10.8 В, 6.5 А/ч"
        
        // Управление
        keyboard="Сенсорный + клавиши"
        
        // Интерфейсы и память
        interfaces="2.4 ГГц, USB, RS232, Bluetooth"
        
        // Сервопривод
        driveSystem="MagDrive"
        rotationSpeed="115 град/с"
        
        // Физические характеристики
        weight="5.5 кг"
        protection="IP65"
        tempRange="-20°C до +50°C"
        storageTemp="-40°C до +70°C"
        humidity="100% с конденсацией"
        
        // Robotic/Autolock
        atrRange="700 м (пассивные призмы)"
        atrAccuracy="<2 мм на 200 м"
        gpsSearchTime="15–30 с"
        
        // ПО
        software="Trimble Access"
        
        country="США"  // уточнить
        warranty="1 год"
        
        documentation={[
        { label: 'Руководство пользователя (PDF)', link: '/files/trimble-s7-manual.pdf' },
        { label: 'Технические характеристики (PDF)', link: '/files/trimble-s7-specs.pdf' }
      ]}

        issues={[]}
        
        description={`Trimble S7 — механический тахеометр с сервоприводом MagDrive и точностью угловых измерений 1″. 
          Прибор обеспечивает дальность измерений до 2500 м на призму и до 1200 м в безотражательном режиме. 
          Оснащен двухосевым компенсатором, оптическим центрированием и цветной камерой. 
          Поддерживает работу с ПО Trimble Access.`}
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