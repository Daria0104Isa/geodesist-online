import React from 'react';
import Layout from '@theme/Layout';
import KnowledgeBase from '../components/KnowledgeBase';
import Header from '../components/Header';
import CTABlock from '../components/CTABlock';
import BackToTop from '../components/BackToTop';

export default function KnowledgePage() {
  return (
    <Layout title="База знаний" description="Теория и практика геодезии">
      <Header />
      <KnowledgeBase />
      <BackToTop />
    </Layout>
  );
}