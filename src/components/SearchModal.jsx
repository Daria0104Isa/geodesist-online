import React, { useState } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка запроса');
      }

      setAnswer(data.answer);
    } catch (err) {
      setError(err.message || 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '32px',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#6B776D'
          }}
        >
          ×
        </button>

        {/* Заголовок */}
        <h2 style={{
          fontSize: '24px',
          color: '#2D5A27',
          marginBottom: '24px',
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          🔍 Поиск по базе знаний
        </h2>

        {/* Форма ввода */}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Например: как настроить GNSS или что такое теодолит"
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '12px',
              border: '2px solid #A7C4A0',
              fontSize: '16px',
              marginBottom: '16px',
              outline: 'none'
            }}
            autoFocus
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: loading ? '#A7C4A0' : '#2D5A27',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: loading ? 'default' : 'pointer',
              transition: '0.2s'
            }}
          >
            {loading ? 'Ищу ответ...' : 'Найти ответ'}
          </button>
        </form>

        {/* Ошибка */}
        {error && (
          <div style={{
            marginTop: '20px',
            padding: '16px',
            backgroundColor: '#FFEBEE',
            borderRadius: '12px',
            color: '#B71C1C',
            border: '1px solid #FFCDD2'
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Ответ */}
        {answer && (
          <div style={{
            marginTop: '20px',
            padding: '24px',
            backgroundColor: '#F0F4EF',
            borderRadius: '12px',
            border: '1px solid #A7C4A0'
          }}>
            <h3 style={{
              fontSize: '18px',
              color: '#2D5A27',
              marginBottom: '12px'
            }}>
              📌 Ответ:
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#1A2A1A',
              margin: 0
            }}>
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}