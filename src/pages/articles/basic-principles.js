import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../components/Header';
import ArticlePage from '../../components/ArticlePage';

export default function BasicPrinciplesArticle() {
  const content = (
    <>
      <p>
        Геодезия — это наука об измерении пространства. Она обеспечивает
        основу для картографии, навигации, строительства и управления
        земельными ресурсами. В этой статье мы рассмотрим фундаментальные
        концепции, на которых строится вся современная геодезическая
        практика.
      </p>

      <h2>Форма и размеры Земли</h2>
      <p>
        Исторически представление о форме Земли эволюционировало от
        плоского диска до сферы, а затем до эллипсоида вращения. Однако
        истинная форма Земли сложнее.
      </p>
      {/* ... остальное содержимое ... */}
    </>
  );

  const relatedArticles = [
    {
      title: 'Уравнивание теодолитного хода',
      category: 'ОБРАБОТКА ДАННЫХ',
      description: 'Практические методы распределения невязок и вычисления координат.',
      readTime: 15,
      link: '/articles/adjustment'
    },
    // ... другие статьи
  ];

  return (
    <Layout title="Базовые принципы геодезии">
      <Header />
      <ArticlePage
        category="Теория и основы"
        title="Базовые принципы геодезии и системы координат"
        author={{ name: 'Михаил Иванов', role: 'Главный геодезист' }}
        date="12 октября 2023"
        readTime={8}
        content={content}
        relatedArticles={relatedArticles}
      />
    </Layout>
  );
}