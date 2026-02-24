import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import EquipmentSpecs from '../../../components/EquipmentSpecs';
import BackToTop from '../../../components/BackToTop';
import CTABlock from '../../../components/CTABlock';


export default function LeicaLS10() {
  return (
    <Layout
      title="Leica LS10 - Цифровой нивелир"
      description="Цифровой нивелир Leica LS10 — точность 0.3 мм/км"
    >
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Оборудование', link: '/equipment' },
            { name: 'Нивелиры', link: '/equipment/levels' },
            { name: 'Leica LS10', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <EquipmentSpecs
        hideHeader={true}
        brand="Leica"
        model="LS10"
        type="Цифровой нивелир"
        accuracy="0.3 мм/км"
        weight="2.8 кг"
        protection="IP55"
        battery="До 12 часов"
        memory="100 000 точек"
        display="Графический, подсветка"
        software="Leica Geo Office"
        description="Leica LS10 — цифровой нивелир для высокоточного геометрического нивелирования. Автоматическое снятие отсчётов, запись данных и контроль допусков."
        documentation={[
          { label: 'Инструкция пользователя (PDF)', link: '/files/leica-ls10-manual.pdf' },
          { label: 'Технические характеристики (PDF)', link: '/files/leica-ls10-specs.pdf' }
        ]}
        issues={[
          { problem: 'Не видит рейку', cause: 'Блики на солнце', solution: 'Использовать тень на рейку' },
          { problem: 'Ошибка компенсатора', cause: 'Сильный ветер', solution: 'Установить ветрозащиту' },
          { problem: 'Не включается', cause: 'Разряд батареи', solution: 'Заменить элемент питания' }
        ]}
        compatibility={[
          { title: 'ПО', items: ['Leica Geo Office', 'Leica Infinity'] },
          { title: 'Рейки', items: ['Leica GSL', 'любой штрих-код'] },
          { title: 'Экспорт', items: ['TXT', 'CSV', 'DXF'] }
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