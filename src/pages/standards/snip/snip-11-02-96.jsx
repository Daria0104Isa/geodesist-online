import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import StandardSpecs from '../../../components/StandardSpecs';
import CTABlock from '../../../components/CTABlock'; 
import BackToTop from '../../../components/BackToTop';

export default function Snip110296() {
  return (
    <Layout 
      title="СНиП 11-02-96 - Инженерные изыскания для строительства" 
      description="Общие требования к организации и проведению инженерных изысканий для строительства. Заменён на СП 47.13330.2016."
    >
      {/* Якорь для навигации */}
      <div id="gost" style={{ position: 'absolute', top: '-100px' }}></div>

      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Стандарты', link: '/standards' },
            { name: 'СНиПы', link: '/standards#snip' },
            { name: 'СНиП 11-02-96', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <StandardSpecs
        hideHeader={true}
        fullTitle="СНиП 11-02-96 Инженерные изыскания для строительства. Основные положения"
        year="1996"
        status="заменён"
        description="Общие требования к организации и проведению инженерных изысканий для строительства. Документ утратил силу и заменён на СП 47.13330.2016."
        pdfLink="/files/snip-11-02-96.pdf"
                content={`
          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 32px;">⚠️</span>
              <div>
                <h3 style="color: #B71C1C; margin: 0 0 8px 0;">Документ утратил силу</h3>
                <p style="margin: 0; font-size: 16px;">
                  <strong>СНиП 11-02-96</strong> заменён на <strong>СП 47.13330.2016</strong> 
                  "Инженерные изыскания для строительства. Основные положения. Актуализированная редакция".
                </p>
              </div>
            </div>
          </div>

          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <h3 style="color: #2D5A27; margin: 0 0 12px 0;">📌 Историческое значение</h3>
            <p style="margin: 0;">
              СНиП 11-02-96 был первым документом, комплексно регламентирующим все виды 
              инженерных изысканий. Многие его положения легли в основу действующего СП 47.13330.2016 
              и могут использоваться для понимания эволюции нормативных требований.
            </p>
          </div>

          <h2>Структура документа (историческая)</h2>
          
          <ol style="font-size: 16px; line-height: 1.8;">
            <li><strong>Область применения</strong> — все виды строительства</li>
            <li><strong>Нормативные ссылки</strong> — межгосударственные стандарты</li>
            <li><strong>Общие положения</strong> — организация и проведение изысканий</li>
            <li><strong>Инженерно-геодезические изыскания</strong> — топографо-геодезические работы</li>
            <li><strong>Инженерно-геологические изыскания</strong> — изучение грунтов и геологических процессов</li>
            <li><strong>Инженерно-гидрометеорологические изыскания</strong> — водный режим территории</li>
            <li><strong>Инженерно-экологические изыскания</strong> — оценка состояния окружающей среды</li>
          </ol>

          <h2>Виды изысканий (по СНиП 11-02-96)</h2>
          
          <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #F0F4EF;">
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Вид изысканий</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Состав работ</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #D4DCCD;">Основные требования</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Инженерно-геодезические</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Топографическая съемка, трассирование, геодезические сети</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Масштабы 1:500 - 1:5000, точность согласно классам</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Инженерно-геологические</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Бурение скважин, отбор проб, изучение грунтов</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Глубина изучения, количество выработок</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Инженерно-гидрометеорологические</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Изучение водного режима, климатических характеристик</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Наблюдения за уровнями воды, стоком</td>
              </tr>
              <tr style="background-color: #F9F7F3;">
                <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">Инженерно-экологические</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Оценка состояния среды, отбор проб почвы, воды, воздуха</td>
                <td style="padding: 12px; border: 1px solid #D4DCCD;">Санитарно-гигиенические нормативы</td>
              </tr>
            </tbody>
          </table>

          <div style="background: #FFF3E0; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <h3 style="color: #B85C1F; margin: 0 0 12px 0;">📋 Сравнение с актуальным СП 47.13330.2016</h3>
            <ul style="margin: 0;">
              <li><strong>Структура:</strong> сохранена, но добавлены новые разделы</li>
              <li><strong>Требования к точности:</strong> ужесточены с учётом современных приборов</li>
              <li><strong>Цифровые технологии:</strong> в новом СП учтены методы лазерного сканирования, БПЛА</li>
              <li><strong>Экология:</strong> расширен раздел экологических изысканий</li>
            </ul>
          </div>

          <h2>Основные этапы изысканий (по СНиП 11-02-96)</h2>
          
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 20px 0;">
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">📋</div>
              <strong>Подготовительный</strong>
              <p style="font-size: 13px; margin: 8px 0 0;">Сбор архивных данных</p>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">🔍</div>
              <strong>Полевой</strong>
              <p style="font-size: 13px; margin: 8px 0 0;">Натурные измерения</p>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">💻</div>
              <strong>Камеральный</strong>
              <p style="font-size: 13px; margin: 8px 0 0;">Обработка данных</p>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">📑</div>
              <strong>Отчетный</strong>
              <p style="font-size: 13px; margin: 8px 0 0;">Составление отчета</p>
            </div>
          </div>
          
          <blockquote>
            "СНиП 11-02-96 заложил основу системного подхода к инженерным изысканиям в России. 
            Понимание его структуры помогает быстрее осваивать современные нормативные документы."
          </blockquote>
        `}
      />
      <CTABlock 
        title="Не нашли нужный документ?"
        description="Отправьте запрос в Telegram-бот — мы добавим его в базу"
        buttonText="Отправить запрос"
        buttonLink="https://t.me/GeodezistOnlineBot"
      />
      <BackToTop />
    </Layout>
  );
}