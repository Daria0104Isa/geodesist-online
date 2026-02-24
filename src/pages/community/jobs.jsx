import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function SuggestArticle() {
  return (
    <Layout title="Предложить статью">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ color: '#2D5A27' }}>Предложить статью</h1>
        <p style={{ color: '#6B776D' }}>Скоро здесь будет форма для предложения статей.</p>
        <Link to="/community" style={{ color: '#2D5A27' }}>← Вернуться в сообщество</Link>
      </div>
    </Layout>
  );
}