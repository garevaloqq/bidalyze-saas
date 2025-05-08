// components/DashboardLayout.tsx
"use client";

import {
  CiOutlined,
  DollarOutlined,
  DownOutlined,
  EnterOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Layout, Menu, MenuProps, Space } from "antd";
import Image from 'next/image'
import React, { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

const initialItems = [
  {
    label: <Space>
      <CiOutlined />
      BTC
    </Space>, key: 'BTC'
  },
  {
    label: <Space>
      <EnterOutlined />
      ETH
    </Space>, key: 'ETH'
  },
  {
    label: <Space>
      <DollarOutlined />
      USDT(ETH)
    </Space>,
    key: 'USDT(ETH)'
  }
];

const OptionSelect = {
  label: 'All Asset',
  key: 'menu',
  icon: <DownOutlined />,
  children: [
    {
      // Componente personalizado en el submenú
      label: (
        <Search
          placeholder="Buscar..."
          style={{ padding: '0 10px', margin: '4px 0' }}
        />
      ),
      key: 'search-input',
      disabled: true, // Opcional: evita que sea seleccionable
    },
    ...initialItems,
  ],
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    if (e.key === 'menu') return;
    setCurrent(e.key);
  };

  // Menú de métricas simuladas
  const menuItems = [
    { key: "summary", label: "Summary" },
    { key: "exchange", label: "Exchange Flows" },
    { key: "flow", label: "Flow Indicator" },
    { key: "market", label: "Market Indicator" },
    { key: "derivatives", label: "Derivatives" },
    // ... añade el resto
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        {/* Espacio central vacío (podrías poner logo o links principales) */}
        <Space size="large">
          {/* Aquí podrías poner links a Community, Charts, Insights, etc. */}
          <Image src="https://pstatic.cryptoquant.com/logo/cryptoquant_logo_dark.svg" width={163} height={21} alt="cryptoquant-logo" />
        </Space>

        {/* Zona de acciones */}
        <Space size="middle">
          <Button type="primary" icon={<PlusOutlined />}>
            New Analytics
          </Button>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </Header>
      <Header style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
        <Menu
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
          defaultSelectedKeys={['BTC']}
          triggerSubMenuAction={'click'}
          items={[...initialItems, OptionSelect]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout >
        {/* Sidebar */}
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={'25%'} trigger={null}>
          {/* Botón de colapsar / expandir sidebar */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: 18 }}
          />
          <Menu
            mode="inline"
            items={menuItems.map(({ key, label }) => ({ key, label }))}
          />
        </Sider>


        {/* Contenido principal */}
        <Content style={{ margin: "24px", padding: 24 }}>
          {children}
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
