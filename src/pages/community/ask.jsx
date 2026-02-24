import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function AskRedirect() {
  useEffect(() => {
    window.location.href = '/geodesist-online/forum/new';
  }, []);

  return (
    <Layout title="Перенаправление">
      <div style={{ textAlign: 'center', padding: '60px' }}>
        Перенаправляем на страницу вопроса...
      </div>
    </Layout>
  );
}