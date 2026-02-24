import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { supabase } from '../../supabaseClient';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import BackToTop from '../../components/BackToTop';

export default function TopicPage() {
  // Получаем id темы из URL
  const urlParts = window.location.pathname.split('/');
  const topicId = urlParts[urlParts.length - 1];
  
  const [topic, setTopic] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [sending, setSending] = useState(false);

  console.log('URL:', window.location.pathname);
  console.log('topicId:', topicId);
  console.log('тип topicId:', typeof topicId);

  useEffect(() => {
    fetchTopic();
    fetchComments();
  }, []);

  const fetchTopic = async () => {
    const { data, error } = await supabase
      .from('topics')
      .select('*')
      .eq('id', topicId)
      .single();
    
    if (error) {
      console.error('Ошибка загрузки темы:', error);
    } else {
      setTopic(data);
    }
  };

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('topic_id', topicId)
      .order('created_at', { ascending: true });
    
    if (error) {
      console.error('Ошибка загрузки комментариев:', error);
    } else {
      setComments(data || []);
    }
    setLoading(false);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;
    
    setSending(true);
    
    const { error } = await supabase
      .from('comments')
      .insert([
        {
          topic_id: parseInt(topicId),
          content: newComment,
          author_name: authorName
        }
      ]);
    
    if (error) {
      console.error('Ошибка отправки:', error);
      alert('Не удалось отправить комментарий');
    } else {
      setNewComment('');
      fetchComments(); // перезагружаем комментарии
    }
    
    setSending(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU');
  };

  if (loading) {
    return (
      <Layout title="Загрузка...">
        <Header />
        <div style={{ textAlign: 'center', padding: '60px' }}>
          Загрузка...
        </div>
      </Layout>
    );
  }

  if (!topic) {
    return (
      <Layout title="Тема не найдена">
        <Header />
        <div style={{ textAlign: 'center', padding: '60px' }}>
          <h2>Тема не найдена</h2>
          <Link to="/forum">← Вернуться к списку</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={topic.title} description={`Обсуждение: ${topic.title}`}>
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
            { name: topic.title.length > 30 ? topic.title.substring(0, 30) + '...' : topic.title, isCurrent: true }
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}></div>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Кнопка назад */}
        <div style={{ marginBottom: '24px' }}>
          <Link
            to="/forum"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: '#2D5A27',
              textDecoration: 'none'
            }}
          >
            ← К списку вопросов
          </Link>
        </div>

        {/* Тема */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px',
          border: '1px solid rgba(167, 196, 160, 0.3)'
        }}>
          <h1 style={{ fontSize: '32px', color: '#2D5A27', marginBottom: '16px' }}>
            {topic.title}
          </h1>
          
          <div style={{
            background: '#F9F7F3',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '16px'
          }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              {topic.content}
            </p>
          </div>
          
          <div style={{ fontSize: '14px', color: '#6B776D' }}>
            Автор: {topic.author_name || 'Аноним'} • {formatDate(topic.created_at)}
          </div>
        </div>

        {/* Комментарии */}
        <h2 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px' }}>
          Ответы ({comments.length})
        </h2>

        <div style={{ marginBottom: '40px' }}>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '16px',
                border: '1px solid rgba(167, 196, 160, 0.2)'
              }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '12px' }}>
                  {comment.content}
                </p>
                <div style={{ fontSize: '14px', color: '#6B776D' }}>
                  {comment.author_name} • {formatDate(comment.created_at)}
                </div>
              </div>
            ))
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              background: '#F9F7F3',
              borderRadius: '12px',
              color: '#6B776D'
            }}>
              Пока нет ответов. Будьте первым!
            </div>
          )}
        </div>

        {/* Форма нового комментария */}
        <div style={{
          background: '#F9F7F3',
          borderRadius: '16px',
          padding: '32px'
        }}>
          <h3 style={{ fontSize: '20px', color: '#2D5A27', marginBottom: '20px' }}>
            Написать ответ
          </h3>
          
          <form onSubmit={handleSubmitComment}>
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #D4DCCD',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <textarea
                placeholder="Ваш ответ..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #D4DCCD',
                  fontSize: '16px',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <button
              type="submit"
              disabled={sending}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 32px',
                backgroundColor: sending ? '#A7C4A0' : '#2D5A27',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: 500,
                cursor: sending ? 'default' : 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {sending ? 'Отправка...' : '💬 Отправить ответ'}
            </button>
          </form>
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
}