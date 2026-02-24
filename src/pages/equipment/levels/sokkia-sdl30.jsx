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
      description="Цифровой нивелир Sokkia SDL30 — память 10 000 точек"
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
        accuracy="0.4 мм/км"
        weight="2.5 кг"
        protection="IP54"
        battery="До 10 часов"
        memory="10 000 точек"
        display="ЖК, 4 строки"
        software="MAGNET Field"
        description="Sokkia SDL30 — надёжный цифровой нивелир для инженерно-геодезических работ. Простота управления, понятный интерфейс, большая память."
        documentation={[
          { label: 'Инструкция пользователя (PDF)', link: '/files/sokkia-sdl30-manual.pdf' },
          { label: 'Технические характеристики (PDF)', link: '/files/sokkia-sdl30-specs.pdf' }
        ]}
        issues={[
          { problem: 'Ошибка чтения рейки', cause: 'Пыль на датчике', solution: 'Продуть объектив' },
          { problem: 'Нет записи', cause: 'Переполнена память', solution: 'Очистить память' },
          { problem: 'Сбой времени', cause: 'Села батарейка RTC', solution: 'Заменить батарейку' }
        ]}
        compatibility={[
          { title: 'ПО', items: ['MAGNET Field', 'Sokkia Link'] },
          { title: 'Рейки', items: ['Sokkia BIS30/50'] },
          { title: 'Экспорт', items: ['SD-карта', 'RS-232'] }
        ]}
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