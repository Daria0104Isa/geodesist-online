import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { supabase } from '../../supabaseClient';
import Header from '../../components/Header';
import BackToTop from '../../components/BackToTop';
import Breadcrumbs from '../../components/Breadcrumbs'; 

export default function ForumPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('approved'); // approved, pending, all

  useEffect(() => {
    fetchTopics();
  }, [filter]);

  const fetchTopics = async () => {
    setLoading(true);
    
    let query = supabase
      .from('topics')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (filter !== 'all') {
      query = query.eq('status', filter);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Ошибка загрузки тем:', error);
    } else {
      setTopics(data);
    }
    
    setLoading(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };
  const isModerator = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('mod') === 'geodezist2026';
  };
  return (
    <Layout title="Форум" description="Вопросы и ответы по геодезии">
      <Header />
       {/* Хлебные крошки с правильными отступами */}
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
            { name: 'Форум', isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
                
        {/* Заголовок */}
        <h1 style={{ 
          fontSize: '48px', 
          color: '#2D5A27', 
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          💬 Форум геодезистов
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B776D', 
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          Задавайте вопросы, делитесь опытом, помогайте другим
        </p>

        {/* Кнопка создания темы */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link
            to="/forum/new"
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
              e.target.style.backgroundColor = '#1A3C17';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2D5A27';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            + Задать вопрос
          </Link>
        </div>

        {/* Фильтры — видны только модератору */}
        {isModerator() && (
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            marginBottom: '24px',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setFilter('approved')}
              style={{
                background: filter === 'approved' ? '#2D5A27' : 'white',
                color: filter === 'approved' ? 'white' : '#2D5A27',
                border: '1px solid #2D5A27',
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ✅ Опубликованные
            </button>
            <button
              onClick={() => setFilter('pending')}
              style={{
                background: filter === 'pending' ? '#B85C1F' : 'white',
                color: filter === 'pending' ? 'white' : '#B85C1F',
                border: '1px solid #B85C1F',
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ⏳ На модерации
            </button>
            <button
              onClick={() => setFilter('all')}
              style={{
                background: filter === 'all' ? '#6B776D' : 'white',
                color: filter === 'all' ? 'white' : '#6B776D',
                border: '1px solid #6B776D',
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              📋 Все
            </button>
          </div>
        )}

        {/* Список тем */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#6B776D' }}>
            Загрузка...
          </div>
        ) : (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid rgba(167, 196, 160, 0.3)',
            overflow: 'hidden'
          }}>
            {topics.length > 0 ? (
              topics.map((topic, index) => (
                <Link
                  key={topic.id}
                  to={`/forum/topic?id=${topic.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    padding: '20px 24px',
                    borderBottom: index < topics.length - 1 ? '1px solid #EDF3EA' : 'none',
                    transition: 'background 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9F7F3'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '18px', color: '#2D5A27', margin: 0, fontWeight: 600 }}>
                        {topic.title}
                      </h3>
                      {topic.status === 'pending' && (
                        <span style={{
                          background: '#FFF3E0',
                          color: '#B85C1F',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: 500
                        }}>
                          На модерации
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: '#6B776D' }}>
                      <span>👤 {topic.author_name || 'Аноним'}</span>
                      <span>📅 {formatDate(topic.created_at)}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B776D' }}>
                {filter === 'pending' 
                  ? '📭 Нет вопросов на модерации' 
                  : filter === 'approved'
                    ? '📭 Пока нет опубликованных вопросов'
                    : '📭 Пока нет вопросов'}
              </div>
            )}
          </div>
        )}
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