import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { supabase } from '../../supabaseClient';
import Header from '../../components/Header';
import BackToTop from '../../components/BackToTop';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function NewTopic() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author_name: '',
    author_contact: ''
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const { error } = await supabase
      .from('topics')
      .insert([
        {
          title: formData.title,
          content: formData.content,
          author_name: formData.author_name || 'Аноним',
          author_contact: formData.author_contact,
          status: 'pending'
        }
      ]);

    if (error) {
      console.error('Ошибка:', error);
      alert('Не удалось создать тему');
    } else {
      setSubmitted(true);
    }
    setSending(false);
  };

  if (submitted) {
  return (
    <Layout title="Вопрос отправлен">
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
            Спасибо за вопрос!
          </h1>
          <p style={{ fontSize: '18px', color: '#6B776D', marginBottom: '32px' }}>
            Он отправлен на модерацию. После проверки появится на форуме.
          </p>
          <Link
            to="/forum"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 32px',
              backgroundColor: '#2D5A27',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: 500,
              fontSize: '16px',
              transition: 'all 0.2s'
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
            ← Вернуться к вопросам
          </Link>
        </div>
      </div>
    </Layout>
  );
}

  return (
    <Layout title="Задать вопрос">
      <Header />
        {/* Хлебные крошки */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '16px 24px 0', 
          width: '100%' 
        }}>
          <Breadcrumbs 
            paths={[
             { name: 'Главная', link: '/' },
              { name: 'Сообщество', link: '/community' },
              { name: 'Форум', link: '/forum' },
              { name: 'Новый вопрос', isCurrent: true }
           ]} 
            containerStyle={{ padding: 0, margin: 0 }} 
          />
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ color: '#2D5A27', textAlign: 'center' }}>Задать вопрос</h1>
        
        <form onSubmit={handleSubmit} style={{
          background: 'white',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <input
            type="text"
            name="title"
            placeholder="Тема вопроса"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #D4DCCD' }}
          />
          
          <textarea
            name="content"
            placeholder="Опишите ваш вопрос подробнее..."
            value={formData.content}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #D4DCCD' }}
          />
          
          <input
            type="text"
            name="author_name"
            placeholder="Ваше имя"
            value={formData.author_name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #D4DCCD' }}
          />
          
          <input
            type="text"
            name="author_contact"
            placeholder="Telegram / Email (необязательно)"
            value={formData.author_contact}
            onChange={handleChange}
            style={{ width: '100%', padding: '12px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #D4DCCD' }}
          />
          
          <button
            type="submit"
            disabled={sending}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: sending ? '#A7C4A0' : '#2D5A27',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: sending ? 'default' : 'pointer'
            }}
          >
            {sending ? 'Отправка...' : 'Отправить вопрос'}
          </button>
        </form>

        {/* Кнопка назад — ПЕРЕНЕСЕНА ВНИЗ */}
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
      <BackToTop />
    </Layout>
  );
}