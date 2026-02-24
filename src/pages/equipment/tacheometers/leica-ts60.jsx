/* 
---
sidebar_position: 1
title: Leica TS60
description: Роботизированный тахеометр Leica TS60 — характеристики, инструкции, обзоры
image: /img/equipment/leica-ts60.jpg
---
*/

import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';

export default function LeicaTS60() {
  return (
    <Layout 
    title="Leica TS60 - Роботизированный тахеометр" 
    description="Роботизированный тахеометр Leica TS60 — характеристики, инструкции, обзоры"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
              <Breadcrumbs 
                paths={[
                  { name: 'Главная', link: '/' },
                  { name: 'Оборудование', link: '/equipment' },
                  { name: 'Тахеометры', link: '/equipment/levels' },
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
        accuracy="0.5″"
        range=">3500 м"
        weight="5.6 кг"
        protection="IP65"
        battery="До 8 часов"
        memory="32 ГБ"
        display="Сенсорный, 5.7″"
        software="Leica Captivate"
        description="Leica TS60 — флагманский роботизированный тахеометр для самых сложных задач. Обеспечивает высочайшую точность измерений и полностью автоматизированную работу. Ключевые особенности: технология PWM для точного измерения на любые расстояния, встроенный 4G-модем для удалённой работы, AutoHeight — автоматическое измерение высоты инструмента, SmartWDM — двусторонняя голосовая связь."
        documentation={[
          { label: 'Инструкция пользователя (PDF)', link: '/files/leica-ts60-manual.pdf' },
          { label: 'Технические характеристики (PDF)', link: '/files/leica-ts60-specs.pdf' },
          { label: 'Брошюра (PDF)', link: '/files/leica-ts60-brochure.pdf' }
        ]}
        issues={[
          { problem: 'Не включается', cause: 'Разряжен аккумулятор', solution: 'Зарядить батарею' },
          { problem: 'Ошибка компенсатора', cause: 'Вибрация при включении', solution: 'Перезапустить' },
          { problem: 'Нет связи с контроллером', cause: 'Неверные настройки Bluetooth', solution: 'Перезагрузить устройства' }
        ]}
        compatibility={[
        { title: 'Контроллеры', items: ['Leica CS20', 'CS35'] },
        { title: 'ПО', items: ['Leica Captivate', 'Leica Infinity'] },
        { title: 'Облако', items: ['Leica ConX'] }
      ]}
      />
      <BackToTop />
    </Layout>
  );
}