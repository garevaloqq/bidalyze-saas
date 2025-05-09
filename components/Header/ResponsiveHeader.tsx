//'use client';
import { DownOutlined, MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Divider, Drawer, Dropdown, Grid, Layout, Menu, Space, Switch } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { useTheme } from 'context/ThemeContext';

type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout;
const { useBreakpoint } = Grid;

const items = [
    {
        key: '1',
        label: <a href="#">Community</a>,
    },
    {
        key: '2',
        label: <a href="#">Charts</a>,
    },
    {
        key: '3',
        label: <a href="#">Insights</a>,
    },
];

const itemsMobile: MenuItem[] = [
    {
        key: '1',
        label: 'Pricing',
    },
    {
        key: '2',
        label: 'Resources',
        children: items,
    },
];

export function ResponsiveHeader() {
    const { theme, toggleTheme } = useTheme();
    const [drawerVisible, setDrawerVisible] = useState(false);
    const screens = useBreakpoint();

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    return (
        <Header
            style={{
                padding: `${screens.md ? "0 24px" : "0 18px"}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                ...(theme == 'light' && { background: '#fff' }),
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
        >
            <Image src={`/assets/logo_${theme}.png`} width={screens.md ? 163 : 120} height={screens.md ? 160 : 120} alt="bidalyze-logo" />
            {screens.md ? (
                <Space size="middle">
                    <Button type="text">Pricing</Button>
                    <Dropdown menu={{ items }}>
                        <Space>Resources <DownOutlined /></Space>
                    </Dropdown>
                    <LanguageSwitcher />
                    <Button type="primary">Sign Up</Button>
                    <Button>Sign In</Button>
                    <Switch
                        onChange={toggleTheme}
                        checkedChildren={<SunOutlined />}
                        unCheckedChildren={<MoonOutlined />}
                        defaultChecked={theme === "light"}
                    />
                </Space>
            ) : (
                <MenuOutlined onClick={toggleDrawer} />
            )}

            <Drawer
                title="Menu"
                placement="right"
                onClose={toggleDrawer}
                open={drawerVisible}
            >
                <Menu items={itemsMobile} mode="inline"/>
                <Divider />
                <Space direction="vertical" style={{width: '100%'}}>
                    <Button type="primary" block >Sign Up</Button>
                    <Button block>Sign In</Button>
                </Space>
            </Drawer>
        </Header>
    );
}