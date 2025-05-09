'use client';
import { Layout } from 'antd';
import React from 'react';
import { MainHeader } from 'components/Header/MainHeader';
import LandingPage from 'components/LandingPage/LandingPage';
const { Content, Footer } = Layout;

export default function HomePage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MainHeader />
      <Content style={{ padding: '50px 15%' }}>
        <LandingPage />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Bidalyze ©2025 - Todos los derechos reservados
      </Footer>
    </Layout>
  );
}
