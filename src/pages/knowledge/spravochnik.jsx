import React from 'react';
import Layout from '@theme/Layout';
import CategoryPage from '../../components/CategoryPage';

const articles = [];

export default function ObrabotkaPage() {
  return (
    <Layout title="Обработка данных">
      <CategoryPage 
        categoryName="Обработка данных" 
        articles={articles}
        breadcrumbs={[
          { name: 'Главная', link: '/' },
          { name: 'База знаний', link: '/knowledge' },
          { name: 'Обработка данных', isCurrent: true }
        ]}
      />
    </Layout>
  );
}