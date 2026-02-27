import React, { useState } from 'react';

export default function SearchBar({ placeholder = "Поиск по базе знаний..." }) {
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
      // Замените URL на ваш продакшн-адрес после деплоя
      const response = await fetch('https://geodesist-online.vercel.app/api/search', {
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

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSearch}>
        <div style={{ 
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            disabled={loading}
            style={{
              flex: 1,
              padding: '16px 20px',
              borderRadius: '30px',
              border: '2px solid #A7C4A0',
              fontSize: '16px',
              outline: 'none',
              backgroundColor: 'white',
              color: '#2D5A27'
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              background: '#2D5A27',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: loading ? 'default' : 'pointer',
              opacity: loading ? 0.7 : 1,
              whiteSpace: 'nowrap'
            }}
          >
            {loading ? 'Поиск...' : 'Найти'}
          </button>
        </div>
      </form>

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

      {answer && (
        <div style={{
          marginTop: '20px',
          padding: '24px',
          backgroundColor: '#F0F4EF',
          borderRadius: '16px',
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
            margin: 0,
            whiteSpace: 'pre-wrap'
          }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}