import React from 'react';
import Layout from '@theme/Layout';
import CategoryPage from '../../components/CategoryPage';

const articles = [
  {
    title: 'Базовые принципы геодезии и системы координат',
    description: 'Форма Земли, геоид, эллипсоид, системы координат и проекции.',
    author: 'Михаил Иванов',
    readTime: 8,
    link: '/knowledge/articles/basic-principles'
  },
  {
    title: 'Построение геодезических сетей сгущения',
    description: 'Методы триангуляции, полигонометрии и спутниковые технологии.',
    author: 'Анна Петрова',
    readTime: 12,
    link: '/knowledge/articles/geodetic-networks'
  },
  {
    title: 'Переход между системами координат',
    description: 'Трансформация координат, параметры Helmert и локализация.',
    author: 'Сергей Смирнов',
    readTime: 10,
    link: '/knowledge/articles/coordinate-transformation'
  },
  {
    title: 'Построение геодезических сетей: от ГГС до съемочного обоснования',
    description: 'Методы триангуляции, полигонометрии, спутниковые технологии. Классы точности и закрепление пунктов.',
    author: 'Михаил Иванов',
    readTime: 14,
    link: '/knowledge/articles/geodetic-networks'
  },
  {
    title: 'Базовые принципы геодезии и системы координат',
    description: 'Форма Земли, геоид, эллипсоид, системы координат и проекции.',
    author: 'Михаил Иванов',
    readTime: 8,
    link: '/knowledge/articles/basic-principles'
  },
  {
    title: 'Построение геодезических сетей: от ГГС до съемочного обоснования',
    description: 'Методы триангуляции, полигонометрии, спутниковые технологии. Классы точности и закрепление пунктов.',
    author: 'Михаил Иванов',
    readTime: 14,
    link: '/knowledge/articles/geodetic-networks'
  },
  {
    title: 'Переход между системами координат',
    description: 'Трансформация координат, параметры Helmert и локализация.',
    author: 'Сергей Смирнов',
    readTime: 10,
    link: '/knowledge/articles/coordinate-transformation'
  },
  {
    title: 'Планово-высотная съемка: фундамент для карты и строительства',
    description: 'Комплекс геодезических работ по определению координат и высот точек местности. Инструменты, технология, применение.',
    author: 'Михаил Иванов',
    readTime: 8,
    link: '/knowledge/articles/plan-height-survey'
  },
  {
    title: 'Продольное нивелирование трассы: от пикетажа до профиля',
    description: 'Практическое руководство по высотной съёмке оси линейных сооружений. Трассирование, полевые работы, обработка данных.',
    author: 'Анна Смирнова',
    readTime: 12,
    link: '/knowledge/articles/longitudinal-levelling'
  },
  {
    title: 'Современные методы и технологии в инженерно-геодезических изысканиях',
    description: 'Сравнение тахеометрии, ГНСС, аэрофотосъёмки и лазерного сканирования. Комплексное применение методов.',
    author: 'Петр Васильев',
    readTime: 10,
    link: '/knowledge/articles/modern-methods'
  }
];

export default function TeoriyaPage() {
  return (
    <Layout title="Теория и основы геодезии">
      <CategoryPage 
        categoryName="Теория и основы геодезии" 
        articles={articles}
        breadcrumbs={[
          { name: 'Главная', link: '/' },
          { name: 'База знаний', link: '/knowledge' },
          { name: 'Теория и основы', isCurrent: true }
        ]}
      />
    </Layout>
  );
}