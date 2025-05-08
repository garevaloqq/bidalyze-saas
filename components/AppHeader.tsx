'use client'

import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
// import Link from "next/link";

const { Header } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: '1', label: 'Inicio' },
    { key: '2', label: 'Productos' },
    { key: '3', label: 'Precios' },
    { key: '4', label: 'Contacto' }
];

export function AppHeader() {
    return (
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} items={items} />
        </Header>
    )
};
