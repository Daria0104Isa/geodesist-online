import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';

export default function SokkiaGCX3() {
  return (
    <Layout
      title="Sokkia GCX3 - GNSS-приёмник" 
      description="GNSS-приёмник Sokkia GCX3 — 555 каналов, встроенный модем"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'GNSS-приёмники', link: '/equipment/gnss' },
            { name: 'Sokkia GCX3', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Sokkia"
        model="GCX3"
        type="GNSS-приёмник (ровер/база)"
        accuracy="10 мм + 1 ppm"
        weight="1.3 кг"
        protection="IP67"
        battery="До 7 часов"
        memory="16 ГБ"
        software="MAGNET Field"
        description="Sokkia GCX3 — универсальный GNSS-приёмник для работы в режимах ровера и базовой станции. Поддержка всех спутниковых систем."
        documentation={[
          { label: 'Инструкция пользователя (PDF)', link: '/files/sokkia-gcx3-manual.pdf' },
          { label: 'Технические характеристики (PDF)', link: '/files/sokkia-gcx3-specs.pdf' }
        ]}
        issues={[
          { problem: 'Нет UHF-связи', cause: 'Разные каналы', solution: 'Синхронизировать частоты' },
          { problem: 'Долгий cold start', cause: 'Устаревший альманах', solution: 'Обновить данные' },
          { problem: 'Ошибка SD-карты', cause: 'Форматирование', solution: 'Отформатировать в FAT32' }
        ]}
        compatibility={[
          { title: 'Контроллеры', items: ['Sokkia SHC-5000'] },
          { title: 'ПО', items: ['MAGNET Field', 'Sokkia Link'] },
          { title: 'Модемы', items: ['UHF', '4G'] }
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