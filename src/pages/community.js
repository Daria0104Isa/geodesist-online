import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Header from '../components/Header';
import CTABlock from '../components/CTABlock';
import BackToTop from '../components/BackToTop';

export default function Community() {
  return (
    <Layout title="Сообщество знаний" description="Вместе систематизируем знания по геодезии">
      <Header />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        
        <h1 style={{ 
          fontSize: '48px', 
          color: '#2D5A27', 
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Сообщество знаний
        </h1>
        
        <p style={{ 
          fontSize: '20px', 
          color: '#6B776D', 
          marginBottom: '60px',
          textAlign: 'center',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          База постоянно обновляется. Вы можете предложить статью, задать вопрос или добавить объявление — вместе мы сделаем базу полнее и лучше.
        </p>

        {/* Сетка из 3 карточек */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '32px',
          marginBottom: '60px'
        }}>
          
          {/* Карточка 1 — Предложить статью / Задать вопрос */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '32px',
            border: '1px solid rgba(167, 196, 160, 0.3)',
            boxShadow: '0 4px 12px rgba(45, 90, 39, 0.04)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'rgba(167, 196, 160, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              color: '#2D5A27'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '22px', color: '#2D5A27', marginBottom: '12px', fontWeight: 600 }}>
              Предложить статью
            </h3>
            <p style={{ color: '#6B776D', lineHeight: '1.6', marginBottom: '24px' }}>
              Знаете тему, которой не хватает в базе? Напишите — я подготовлю материал и добавлю с указанием автора.
            </p>
            <Link 
              to="/community/suggest-article"
              style={{
                color: '#2D5A27',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Предложить
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* Карточка 2 — Задать вопрос / Чат */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '32px',
            border: '1px solid rgba(167, 196, 160, 0.3)',
            boxShadow: '0 4px 12px rgba(45, 90, 39, 0.04)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'rgba(167, 196, 160, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              color: '#2D5A27'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '22px', color: '#2D5A27', marginBottom: '12px', fontWeight: 600 }}>
              Вопросы и ответы
            </h3>
            <p style={{ color: '#6B776D', lineHeight: '1.6', marginBottom: '24px' }}>
              Не нашли ответ в базе? Задайте вопрос — коллеги или я поможем разобраться. Лучшие вопросы становятся статьями.
            </p>
              <Link 
              to="/forum"
              style={{
                color: '#2D5A27',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Перейти в форум
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* Карточка 3 — Ищу работу / Ищу исполнителя / Продаю оборудование */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '32px',
            border: '1px solid rgba(167, 196, 160, 0.3)',
            boxShadow: '0 4px 12px rgba(45, 90, 39, 0.04)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'rgba(167, 196, 160, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              color: '#2D5A27'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '22px', color: '#2D5A27', marginBottom: '12px', fontWeight: 600 }}>
            Доска объявлений
            </h3>
            <p style={{ color: '#6B776D', lineHeight: '1.6', marginBottom: '24px' }}>
              Ищете работу или специалиста? Продаёте оборудование? Здесь можно разместить объявление для коллег.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link 
                to="/community/jobs"
                style={{
                  color: '#2D5A27',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '15px'
                }}
              >
                Ищу работу
              </Link>
              <span style={{ color: '#D4DCCD' }}>•</span>
              <Link 
                to="/community/contractors"
                style={{
                  color: '#2D5A27',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '15px'
                }}
              >
                Ищу исполнителя
              </Link>
              <span style={{ color: '#D4DCCD' }}>•</span>
              <Link 
                to="/community/equipment"
                style={{
                  color: '#2D5A27',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '15px'
                }}
              >
                Продаю оборудование
              </Link>
            </div>
          </div>
        </div>

        {/* Блок с контактами */}
        <div style={{
          background: '#F0F4EF',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '16px', fontWeight: 600 }}>
            Хотите помочь систематизировать знания?
          </h3>
          <p style={{ color: '#6B776D', marginBottom: '24px', fontSize: '16px' }}>
            Пишите в Telegram — я открыт к идеям, правкам и новым разделам.
          </p>
          <Link 
            to="https://t.me/GeodezistOnlineBot"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#2D5A27',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            Написать создателю
          </Link>
        </div>
      </div>
      <CTABlock 
        title="Присоединяйтесь к сообществу в Telegram"
        description="Обсуждайте рабочие вопросы, помогайте коллегам и получайте экспертные ответы"
        buttonText="Вступить в чат"
        buttonLink="https://t.me/GeodezistOnlineBot"
      />
      <BackToTop />
    </Layout>
  );
}