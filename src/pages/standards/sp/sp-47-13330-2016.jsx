import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import StandardSpecs from '../../../components/StandardSpecs';
import CTABlock from '../../../components/CTABlock'; 
import BackToTop from '../../../components/BackToTop';

export default function Sp47133302016() {
  return (
    <Layout 
      title="СП 47.13330.2016 - Инженерные изыскания для строительства" 
      description="Актуализированная версия СНиП 11-02-96. Устанавливает современные требования к инженерным изысканиям с учетом новых технологий."
    >
      {/* Якорь для навигации */}
      <div id="gost" style={{ position: 'absolute', top: '-100px' }}></div>

      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Стандарты', link: '/standards' },
            { name: 'СП', link: '/standards' },
            { name: 'СП 47.13330.2016', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <StandardSpecs
        hideHeader={true}
        fullTitle="СП 47.13330.2016 Инженерные изыскания для строительства. Основные положения"
        year="2016"
        status="действует"
        description="Актуализированная версия СНиП 11-02-96. Устанавливает современные требования к инженерным изысканиям с учетом применения новых технологий: спутниковых методов, лазерного сканирования, БПЛА и цифрового моделирования."
        pdfLink="/files/sp-47-13330-2016.pdf"
        content={`
          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 32px;">✅</span>
              <div>
                <h3 style="color: #1B5E20; margin: 0 0 8px 0;">Действующий документ</h3>
                <p style="margin: 0; font-size: 16px;">
                  <strong>СП 47.13330.2016</strong> является актуализированной версией СНиП 11-02-96 
                  и обязателен к применению при выполнении инженерных изысканий.
                </p>
              </div>
            </div>
          </div>

          <h2>📌 Область применения</h2>
          
          <p>Настоящий свод правил распространяется на все виды инженерных изысканий:</p>
          
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0;">
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 28px; margin-bottom: 8px;">🗺️</div>
              <strong>Геодезические</strong>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 28px; margin-bottom: 8px;">⛰️</div>
              <strong>Геологические</strong>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 28px; margin-bottom: 8px;">💧</div>
              <strong>Гидрометеорологические</strong>
            </div>
            <div style="background: #F0F4EF; padding: 16px; border-radius: 12px; text-align: center;">
              <div style="font-size: 28px; margin-bottom: 8px;">🌿</div>
              <strong>Экологические</strong>
            </div>
          </div>

          <h2>🚀 Нововведения (по сравнению со СНиП 11-02-96)</h2>
          
          <div style="background: white; border-radius: 16px; padding: 24px; margin: 20px 0; border: 1px solid rgba(167, 196, 160, 0.3);">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
              <div>
                <h3 style="color: #2D5A27; margin-bottom: 16px;">📡 Современные методы</h3>
                <ul style="margin: 0;">
                  <li>Применение спутниковых методов (GNSS)</li>
                  <li>Лазерное сканирование (наземное, воздушное)</li>
                  <li>Беспилотные летательные аппараты (БПЛА)</li>
                  <li>Цифровые модели местности и рельефа</li>
                </ul>
              </div>
              <div>
                <h3 style="color: #2D5A27; margin-bottom: 16px;">📋 Организационные</h3>
                <ul style="margin: 0;">
                  <li>Учет международных стандартов</li>
                  <li>Требования к цифровому документообороту</li>
                  <li>Актуализированные сроки согласований</li>
                  <li>Расширенные требования к отчетности</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>📐 Требования к точности геодезических работ</h2>
          
          <div style="overflow-x: auto; margin: 20px 0;">
            <table style="width:100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #F0F4EF;">
                  <th style="padding: 12px; border: 1px solid #D4DCCD;">Масштаб съемки</th>
                  <th style="padding: 12px; border: 1px solid #D4DCCD;">СКП плановые, мм</th>
                  <th style="padding: 12px; border: 1px solid #D4DCCD;">СКП высотные, мм</th>
                  <th style="padding: 12px; border: 1px solid #D4DCCD;">Сечение рельефа, м</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">1:500</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.25 - 0.5</td>
                </tr>
                <tr style="background-color: #F9F7F3;">
                  <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">1:1000</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1.0</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">1:2000</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1.0</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">2.0</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">0.5 - 1.0</td>
                </tr>
                <tr style="background-color: #F9F7F3;">
                  <td style="padding: 12px; border: 1px solid #D4DCCD; font-weight: 500;">1:5000</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">2.0</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">2.5</td>
                  <td style="padding: 12px; border: 1px solid #D4DCCD;">1.0 - 2.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>🔄 Структура изысканий по СП 47.13330.2016</h2>
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin: 30px 0; position: relative;">
            <div style="width: 100%; height: 2px; background: #A7C4A0; position: absolute; top: 25px; z-index: 1;"></div>
  
            <div style="background: #2D5A27; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 20px; z-index: 2; position: relative;">1</div>
            <div style="background: #2D5A27; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 20px; z-index: 2; position: relative;">2</div>
            <div style="background: #2D5A27; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 20px; z-index: 2; position: relative;">3</div>
            <div style="background: #2D5A27; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 20px; z-index: 2; position: relative;">4</div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 16px; text-align: center;">
            <div><strong>Подготовительный этап</strong></div>
            <div><strong>Полевые работы</strong></div>
            <div><strong>Камеральная обработка</strong></div>
            <div><strong>Составление отчета</strong></div>
          </div>

          <h2>📋 Состав технического отчета</h2>
          
          <div style="background: #F0F4EF; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <ul style="columns: 2; column-gap: 40px;">
              <li>Пояснительная записка</li>
              <li>Топографические планы</li>
              <li>Каталоги координат и высот</li>
              <li>Ведомости результатов измерений</li>
              <li>Акты согласования</li>
              <li>Схемы геодезических построений</li>
              <li>Материалы в цифровом виде</li>
              <li>Результаты контроля качества</li>
            </ul>
          </div>

          <blockquote>
            "СП 47.13330.2016 — базовый документ для всех видов изысканий. Его требования 
            учитывают современные технологии и обеспечивают высокое качество проектных решений."
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