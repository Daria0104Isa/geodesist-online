/* 
---
sidebar_position: 3
title: Trimble S7
description: Механический тахеометр Trimble S7 с технологией MagDrive
image: /img/equipment/trimble-s7.jpg
---
*/

import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';

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
                  { name: 'Тахеометры', link: '/equipment/levels' },
                  { name: 'Trimble S7', isCurrent: true }
                ]} 
                containerStyle={{ padding: 0, margin: 0 }} 
              />
            </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Trimble"
        model="S7"
        type="Механический тахеометр"
        accuracy="1″"
        range="2500 м"
        weight="5.4 кг"
        protection="IP65"
        battery="До 6 часов"
        memory="8 ГБ"
        display="Сенсорный, цветной"
        software="Trimble Access"
        description="Trimble S7 — высокоточный механический тахеометр с уникальной технологией MagDrive (электромагнитный привод). Идеальное решение для строительства и мониторинга."
        documentation={[
          { label: 'Инструкция пользователя (PDF)', link: '/files/trimble-s7-manual.pdf' },
          { label: 'Технические характеристики (PDF)', link: '/files/trimble-s7-specs.pdf' },
          { label: 'Руководство по MagDrive (PDF)', link: '/files/trimble-magdrive-guide.pdf' }
        ]}
        issues={[
          { problem: 'MagDrive шумит', cause: 'Износ подшипников', solution: 'Сервисное обслуживание' },
          { problem: 'Не видит призму', cause: 'Неправильная настройка MultiTrack', solution: 'Калибровка трекера' },
          { problem: 'Сбой ПО', cause: 'Конфликт версий', solution: 'Обновить прошивку' }
        ]}
        compatibility={[
          { title: 'Контроллеры', items: ['Trimble TSC7', 'Trimble T100'] },
          { title: 'ПО', items: ['Trimble Access', 'Trimble Business Center'] },
          { title: 'Облако', items: ['Trimble Connect'] }
        ]}
      />
      <BackToTop />
    </Layout>
  );
}