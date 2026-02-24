import React from 'react';
import Layout from '@theme/Layout';
import CategoryPage from '../../components/CategoryPage';

const articles = [
  {
    title: 'Настройка GNSS-оборудования: от теории до поля',
    description: 'Выбор режима съёмки, параметры настройки, подключение к RTK, калибровка высоты антенны и чек-лист перед выездом.',
    author: 'Анна Смирнова',
    readTime: 15,
    link: '/knowledge/articles/gnss-setup'
  },
  {
    title: 'Выбор GNSS-оборудования: сравнение моделей',
    description: 'Leica, Trimble, Sokkia — что выбрать для разных задач и бюджетов?',
    author: 'Петр Иванов',
    readTime: 12,
    link: '/knowledge/articles/gnss-comparison'
  },
  {
    title: 'Калибровка и поверка тахеометров',
    description: 'Периодичность, методики и документирование результатов.',
    author: 'Иван Петров',
    readTime: 10,
    link: '/knowledge/articles/tacheometer-calibration'
  },
  {
    title: 'Настройка GNSS-оборудования: от теории до поля',
    description: 'Выбор режима съёмки, параметры настройки, подключение к RTK, калибровка высоты антенны и чек-лист перед выездом.',
    author: 'Анна Смирнова',
    readTime: 15,
    link: '/knowledge/articles/gnss-setup'
  },
  {
    title: 'Выбор GNSS-оборудования: сравнение моделей',
    description: 'Leica, Trimble, Sokkia — что выбрать для разных задач и бюджетов?',
    author: 'Петр Иванов',
    readTime: 12,
    link: '/knowledge/articles/gnss-comparison'
  },
  {
    title: 'Калибровка и поверка тахеометров',
    description: 'Периодичность, методики и документирование результатов.',
    author: 'Иван Петров',
    readTime: 10,
    link: '/knowledge/articles/tacheometer-calibration'
  },
  {
  title: 'Работа с GNSS-приёмником: быстрый старт',
  description: 'Практическое руководство по базовым методам измерений с использованием спутникового оборудования (GPS/ГЛОНАСС).',
  author: 'Анна Смирнова',
  readTime: 14,
  link: '/knowledge/articles/gnss-receiver'
  },
  {
  title: 'Нивелирование: от основ до современных приборов',
  description: 'Исчерпывающее руководство по нивелированию: теория высот, методы, классификация и принцип работы современных приборов.',
  author: 'Михаил Иванов',
  readTime: 16,
  link: '/knowledge/articles/levelling-basics'
  },
  {
  title: 'Работа с тахеометром: быстрый старт',
  description: 'Краткое руководство для начала полевых работ. Основано на практике работы с приборами Leica, Sokkia, Trimble.',
  author: 'Михаил Иванов',
  readTime: 14,
  link: '/knowledge/articles/tacheometry-basics'
  }
];

export default function OborudovaniePage() {
  return (
    <Layout title="Основы геодезического оборудования">
      <CategoryPage 
        categoryName="Основы оборудования" 
        articles={articles} 
        breadcrumbs={[
          { name: 'Главная', link: '/' },
          { name: 'База знаний', link: '/knowledge' },
          { name: 'Основы оборудования', isCurrent: true }
        ]}
      />
    </Layout>
  );
}