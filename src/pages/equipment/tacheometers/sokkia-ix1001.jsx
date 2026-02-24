/* 
---
sidebar_position: 2
title: Sokkia iX-1001
description: Роботизированный тахеометр Sokkia iX-1001 — характеристики, инструкции
image: /img/equipment/sokkia-ix1001.jpg
---
*/

import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';

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
                  { name: 'Тахеометры', link: '/equipment/levels' },
                  { name: 'Sokkia iX-1001', isCurrent: true }
                ]} 
                containerStyle={{ padding: 0, margin: 0 }} 
              />
            </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Sokkia"
        model="ix1001"
        type="Роботизированный тахеометр"
        accuracy="1″"
        range="3500 м"
        weight="5.2 кг"
        protection="IP66"
        battery="До 7 часов"
        memory="16 ГБ"
        display="Сенсорный, 3.5″"
        software="MAGNET Field"
        description="Sokkia iX-1001 — роботизированный тахеометр с системой автофокуса и технологией Hybrid Positioning. Обеспечивает высокую скорость измерений и надёжную работу в сложных условиях."
        documentation={[
          { label: 'Инструкция пользователя (PDF)', link: '/files/sokkia-ix1001-manual.pdf' },
          { label: 'Технические характеристики (PDF)', link: '/files/sokkia-ix1001-specs.pdf' },
          { label: 'Брошюра (PDF)', link: '/files/sokkia-ix1001-brochure.pdf' }
        ]}
        issues={[
          { problem: 'Ошибка автофокуса', cause: 'Загрязнение линзы', solution: 'Прочистить объектив' },
          { problem: 'Не держит заряд', cause: 'Износ аккумулятора', solution: 'Заменить батарею' },
          { problem: 'Сбой Bluetooth', cause: 'Конфликт устройств', solution: 'Переподключение' }
        ]}
        compatibility={[
          { title: 'Контроллеры', items: ['Sokkia SHC-5000', 'Sokkia SHC-2500'] },
          { title: 'ПО', items: ['MAGNET Field', 'Sokkia Link'] },
          { title: 'Облако', items: ['Sokkia Cloud'] }
        ]}
      />
      <BackToTop />
    </Layout>
  );
}