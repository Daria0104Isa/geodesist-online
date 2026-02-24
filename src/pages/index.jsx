import React from 'react';
import Layout from '@theme/Layout';
import Header from '../components/Header';
import HomepageFeatures from '../components/HomepageFeatures';
import CTABlock from '../components/CTABlock';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <Layout 
      title="Главная" 
      description="Открытая база знаний для геодезистов"
    >
      <Header />
      <HomepageFeatures />
      <CTABlock 
        title="Начните работать с нами прямо сейчас"
        description="Присоединяйтесь к сообществу геодезистов, задавайте вопросы и делитесь опытом в Telegram"
        buttonText="Перейти в Telegram"
        buttonLink="https://t.me/GeodezistOnlineBot"
      />
      <BackToTop />
    </Layout>
  );
}