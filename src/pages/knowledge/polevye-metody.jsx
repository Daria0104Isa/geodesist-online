import React from 'react';
import Layout from '@theme/Layout';
import CategoryPage from '../../components/CategoryPage';

const articles = [
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
  },
  {
    title: 'Тахеометрическая съемка: пошаговое руководство',
    description: 'Методика полевых работ, обработка данных, создание топографического плана.',
    author: 'Сергей Смирнов',
    readTime: 16,
    link: '/knowledge/articles/tacheometric-survey'
  },
  {
    title: 'Разбивочные работы: вынос осей в натуру',
    description: 'Методы и точность разбивки, полевой контроль, документация.',
    author: 'Алексей Петров',
    readTime: 12,
    link: '/knowledge/articles/staking-out'
  },
  {
    title: 'Организация и проведение инженерно-геодезических работ',
    description: 'Практическое руководство по этапам работ, документальному сопровождению и согласованиям. Основано на СП 47.13330.2016.',
    author: 'Михаил Иванов',
    readTime: 12,
    link: '/knowledge/articles/survey-stages'
  },
  {
    title: 'Съемка подземных коммуникаций',
    description: 'Методы поиска и съемки инженерных сетей, оформление исполнительной документации.',
    author: 'Иван Петров',
    readTime: 14,
    link: '/knowledge/articles/underground-utilities'
  },
  {
    title: 'Геодезический мониторинг деформаций',
    description: 'Наблюдения за осадками и смещениями зданий и сооружений. Методы, точность, периодичность.',
    author: 'Анна Смирнова',
    readTime: 15,
    link: '/knowledge/articles/deformation-monitoring'
  },
  {
    title: 'Высотная съемка фасадов зданий',
    description: 'Методика сбора данных для архитектурных обмеров и реставрационных работ.',
    author: 'Петр Васильев',
    readTime: 10,
    link: '/knowledge/articles/façade-survey'
  }
];

export default function PolevyeMetodyPage() {
  return (
    <Layout title="Полевые методы геодезии">
      <CategoryPage 
        categoryName="Полевые методы" 
        articles={articles}
        breadcrumbs={[
          { name: 'Главная', link: '/' },
          { name: 'База знаний', link: '/knowledge' },
          { name: 'Полевые методы', isCurrent: true }
        ]}
      />
    </Layout>
  );
}