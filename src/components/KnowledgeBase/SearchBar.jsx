import React, { useState } from 'react';

export default function SearchBar({ placeholder = "Поиск по базе знаний..." }) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      
      const data = await response.json();
      
      // Создаём новый элемент для отображения результата
      const resultDiv = document.createElement('div');
      resultDiv.style.position = 'fixed';
      resultDiv.style.top = '50%';
      resultDiv.style.left = '50%';
      resultDiv.style.transform = 'translate(-50%, -50%)';
      resultDiv.style.backgroundColor = 'white';
      resultDiv.style.padding = '30px';
      resultDiv.style.borderRadius = '16px';
      resultDiv.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
      resultDiv.style.zIndex = '1000';
      resultDiv.style.maxWidth = '600px';
      resultDiv.style.maxHeight = '80vh';
      resultDiv.style.overflow = 'auto';
      resultDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h3 style="color: #2D5A27;">Результат поиска</h3>
          <button onclick="this.parentElement.parentElement.remove()" style="border: none; background: none; font-size: 24px; cursor: pointer;">×</button>
        </div>
        <div style="line-height: 1.6;">${data.answer}</div>
      `;
      document.body.appendChild(resultDiv);
      
    } catch (error) {
      console.error('Ошибка поиска:', error);
    } finally {
      setIsSearching(false);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ width: '100%' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          disabled={isSearching}
          style={{
            width: '100%',
            padding: '16px 50px 16px 20px',
            borderRadius: '30px',
            border: '2px solid #A7C4A0',
            fontSize: '16px',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={isSearching}
          style={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#2D5A27',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            cursor: 'pointer'
          }}
        >
          {isSearching ? '...' : 'Найти'}
        </button>
      </div>
    </form>
  );
}