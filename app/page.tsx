'use client';
import { Layout } from 'antd';
import React from 'react';
import { ResponsiveHeader } from 'components/Header/ResponsiveHeader';
import LandingPage from 'components/LandingPage/LandingPage';
const { Content, Footer } = Layout;

export default function HomePage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ResponsiveHeader />
      <Content style={{ padding: '25px 10%' }}>
        <LandingPage />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Bidalyze ©2025 - Todos los derechos reservados
      </Footer>
    </Layout>
  );
}
