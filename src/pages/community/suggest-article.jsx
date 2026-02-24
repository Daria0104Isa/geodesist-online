import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function SuggestArticle() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0cbfdfbe-e5f1-46ec-8e65-86359a7ad921");
    
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("success");
      // Очистить форму? Можно добавить сброс полей
    } else {
      setResult("error");
    }
  };

  if (result === "success") {
    return (
      <Layout title="Предложить статью" description="Спасибо за предложение">
         <Header />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 12px 24px rgba(45, 90, 39, 0.06)',
            border: '1px solid rgba(167, 196, 160, 0.3)'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>💚</div>
            <h1 style={{ fontSize: '32px', color: '#2D5A27', marginBottom: '16px' }}>
              Спасибо!
            </h1>
            <p style={{ fontSize: '18px', color: '#6B776D', marginBottom: '32px' }}>
              Ваше предложение отправлено. Я рассмотрю его в ближайшее время.
            </p>
            <Link
              to="/community"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 32px',
                backgroundColor: '#2D5A27',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: 500
              }}
            >
              ← Вернуться в сообщество
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Предложить статью" description="Поделитесь опытом или предложите тему">
       <Header />
      {/* Хлебные крошки */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', width: '100%' }}>
        <Breadcrumbs 
          paths={[
            { name: 'Главная', link: '/' },
            { name: 'Сообщество', link: '/community' },
            { name: 'Предложить статью', isCurrent: true }
          ]}
          containerStyle={{ padding: 0, margin: 0 }}
        />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px 60px' }}>
        
        {/* Заголовок */}
        <h1 style={{ 
          fontSize: '48px', 
          color: '#2D5A27', 
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          ✍️ Предложить статью
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B776D', 
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Готовы поделиться своим опытом или нашли интересную статью по геодезии? <br />
          Есть идеи как улучшить сайт или нашли ошибку?
        </p>

        {/* Форма */}
        <form onSubmit={onSubmit} style={{
          background: 'white',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 12px 24px rgba(45, 90, 39, 0.06)',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <input type="hidden" name="email" value="sir0tkinadasha@mail.ru" />
          {/* Что хотите сделать? */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2D5A27',
              marginBottom: '16px'
            }}>
              📌 Что вы хотите сделать?
            </label>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="action"
                  value="topic"
                  defaultChecked
                  style={{ width: '18px', height: '18px', accentColor: '#2D5A27' }}
                />
                <span style={{ color: '#1A2A1A' }}>Предложить тему для статьи</span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="action"
                  value="material"
                  style={{ width: '18px', height: '18px', accentColor: '#2D5A27' }}
                />
                <span style={{ color: '#1A2A1A' }}>У меня уже есть готовый материал</span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="action"
                  value="error"
                  style={{ width: '18px', height: '18px', accentColor: '#2D5A27' }}
                />
                <span style={{ color: '#1A2A1A' }}>Сообщить об ошибке / неточности</span>
              </label>
            </div>
          </div>

          {/* Тема или название */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2D5A27',
              marginBottom: '8px'
            }}>
              📋 Тема или название
            </label>
            <input
              type="text"
              name="title"
              placeholder="Например: Современные методы тахеометрии"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #D4DCCD',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2D5A27'}
              onBlur={(e) => e.target.style.borderColor = '#D4DCCD'}
            />
          </div>

          {/* Раздел */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2D5A27',
              marginBottom: '8px'
            }}>
              📂 Раздел
            </label>
            <select
              name="section"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #D4DCCD',
                fontSize: '16px',
                outline: 'none',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="">Выберите раздел</option>
              <option value="equipment">Оборудование</option>
              <option value="standards">Стандарты</option>
              <option value="methods">Методики</option>
              <option value="calculations">Расчёты</option>
              <option value="other">Другое</option>
            </select>
          </div>

          {/* Ваш текст или комментарий */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2D5A27',
              marginBottom: '8px'
            }}>
              📝 Ваш текст или комментарий
            </label>
            <textarea
              name="message"
              placeholder="Поделитесь мыслями, документами, ссылками или укажите, где ошибка"
              rows="5"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #D4DCCD',
                fontSize: '16px',
                outline: 'none',
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2D5A27'}
              onBlur={(e) => e.target.style.borderColor = '#D4DCCD'}
            />
          </div>

          {/* Ваше имя */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2D5A27',
              marginBottom: '8px'
            }}>
              👤 Ваше имя (как подписать)
            </label>
            <input
              type="text"
              name="name"
              placeholder="Или оставьте 'Анонимно'"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #D4DCCD',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2D5A27'}
              onBlur={(e) => e.target.style.borderColor = '#D4DCCD'}
            />
          </div>

          {/* Для связи */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2D5A27',
              marginBottom: '8px'
            }}>
              📬 Для связи (необязательно)
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Telegram / Email для уточнений"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #D4DCCD',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2D5A27'}
              onBlur={(e) => e.target.style.borderColor = '#D4DCCD'}
            />
          </div>

          {/* Кнопка отправки */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 40px',
                backgroundColor: '#2D5A27',
                color: 'white',
                border: 'none',
                borderRadius: '40px',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 12px rgba(45, 90, 39, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1A3C17';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2D5A27';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              💚 Отправить предложение
            </button>
          </div>

          {/* Сообщение об ошибке */}
          {result === "error" && (
            <div style={{ 
              marginTop: '20px', 
              padding: '12px', 
              backgroundColor: '#FFE5E5', 
              borderRadius: '8px', 
              color: '#D32F2F',
              textAlign: 'center'
            }}>
              Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
            </div>
          )}
        </form>

        {/* Ссылка назад */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link
            to="/community"
            style={{
              color: '#2D5A27',
              textDecoration: 'none',
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            ← Вернуться в сообщество
          </Link>
        </div>
      </div>
    </Layout>
  );
}