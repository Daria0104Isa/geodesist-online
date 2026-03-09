import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';

export default function SokkiaSDL30() {
  return (
    <Layout
      title="Sokkia SDL30 - Цифровой нивелир" 
      description="Цифровой нивелир Sokkia SDL30 — точность 0.6 мм/км, память 10 000 точек"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Нивелиры', link: '/equipment/levels' },
            { name: 'Sokkia SDL30', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Sokkia"
        model="SDL30"
        type="Цифровой нивелир"
        
        // Основные характеристики
        accuracy="0.6 мм/км (электронное)"
        accuracyOptical="1.0 мм/км (визуально)"
        range="1.6 - 100 м"
        weight="2.4 кг"
        dimensions="158×257×182 мм"
        protection="IPX4"
        
        // Питание
        battery=">16 часов"
        batteryType="Li-ion 7.2 В (BDC71)"
        
        // Оптика
        magnification="32x"
        objectiveDiameter="45 мм"
        minFocusingDistance="1.5 м"
        imageType="Прямое"
        fieldOfView="1°20′"
        resolution="3″"
        
        // Компенсатор
        compensationRange="±15′"
        compensationType="Магнитный"
        
        // Память и интерфейсы
        memory="10 000 точек"
        interfaces="RS-232C"
        
        // Дисплей и управление
        display="ЖК, 128×32 пикс, подсветка"
        keyboard="8 клавиш"
        autoPowerOff="Да (30 мин)"
        
        // Режимы измерения
        measurementModes="Single, Repeat, Average, Tracking, Wave-and-Read"
        measurementTime="Single: 2.5 сек, Tracking: 1 сек"
        
        // Рейки
        rodTypes="Инварные (BIS20/30), стекловолокно (BGS40/50), алюминиевые (BAS55)"
        
        // Точность с разными рейками
        accuracyInvarn="0.6 мм/км"
        accuracyFiberglass="1.0 мм/км"
        accuracyAluminum="1.2 мм/км"
        
        // Температура
        tempRange="-20°C до +50°C"
        storageTemp="-40°C до +70°C"
        
        // Дополнительно
        software="MAGNET Field"
        horizontalCircle="1° / 1гон"
        
        manual="/files/sokkia-sdl30-manual.pdf"
        
        description={`Sokkia SDL30 — высокоточный цифровой нивелир для инженерно-геодезических работ. 
          Прибор обеспечивает точность 0.6 мм/км с инварными рейками и поддерживает различные режимы 
          измерений: Single, Repeat, Average, Tracking и Wave-and-Read. Благодаря магнитному компенсатору 
          с диапазоном ±15′ и водозащите IPX4, нивелир надежно работает в полевых условиях. 
          Встроенная память на 10 000 точек и интерфейс RS-232C позволяют быстро экспортировать данные.`}
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