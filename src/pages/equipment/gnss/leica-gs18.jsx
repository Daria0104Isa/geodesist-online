import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';


export default function LeicaGS18() {
  return (
    <Layout
      title="Leica GS18 - GNSS-приёмник" 
      description="GNSS-приёмник Leica GS18 — RTX, SmartLink, безкабельная калибровка"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'GNSS-приёмники', link: '/equipment/gnss' },
            { name: 'Leica GS18', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Leica"
        model="GS18"
        type="GNSS-приёмник (ровер)"
        accuracy="8 мм + 1 ppm"
        weight="1.2 кг"
        protection="IP68"
        battery="До 6 часов"
        memory="32 ГБ"
        software="Leica Captivate"
        description="Leica GS18 — флагманский GNSS-приёмник с технологиями SmartLink и RTX. Не требует базовой станции и калибровки — готов к работе за минуту."
        documentation={[
          { label: 'Инструкция пользователя (PDF)', link: '/files/leica-gs18-manual.pdf' },
          { label: 'Технические характеристики (PDF)', link: '/files/leica-gs18-specs.pdf' },
          { label: 'SmartLink Guide (PDF)', link: '/files/leica-smartlink.pdf' }
        ]}
        issues={[
          { problem: 'Нет RTX-сигнала', cause: 'Закрытое небо', solution: 'Переместиться на открытое место' },
          { problem: 'SmartLink не активен', cause: 'Нет подписки', solution: 'Проверить лицензию' },
          { problem: 'Сбой Bluetooth', cause: 'Конфликт', solution: 'Перезагрузить приёмник' }
        ]}
        compatibility={[
          { title: 'Контроллеры', items: ['Leica CS20', 'CS35'] },
          { title: 'ПО', items: ['Leica Captivate', 'Leica Infinity'] },
          { title: 'Сети', items: ['RTK', 'RTX', 'SmartLink'] }
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