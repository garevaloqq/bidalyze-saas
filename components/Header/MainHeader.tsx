'use client';
import { DownOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, MenuProps, Space, Switch } from 'antd';
import Image from 'next/image'
import React from 'react';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { useTheme } from 'context/ThemeContext';
const { Header } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

export function MainHeader() {
    const { theme, toggleTheme } = useTheme();

    const onChangeLanguage = (checked: boolean) => {
        toggleTheme();
        console.log(`switch to ${checked}`);
    };
    return (
        <Header
            style={{
                padding: "0 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                ...(theme == 'light' && { background: '#fff' }),
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
        >
            {/* Espacio central vacío (podrías poner logo o links principales) */}
            <Space size="large">
                {/* Aquí podrías poner links a Community, Charts, Insights, etc. */}
                <Image src={`/assets/logo_${theme}.png`} width={163} height={160} alt="bidalyze-logo" />
            </Space>

            {/* Zona de acciones */}
            <Space size="middle">
                <Button type="text">Pricing</Button>
                <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: false }} trigger={['click']}>
                    <Space>
                        Resources
                        <DownOutlined />
                    </Space>
                </Dropdown>
                <LanguageSwitcher />
                <Button type="primary">
                    Sign Up
                </Button>
                <Button>
                    Sign In
                </Button>
                <Switch
                    onChange={onChangeLanguage}
                    checkedChildren={<SunOutlined />}
                    unCheckedChildren={<MoonOutlined />}
                    defaultChecked={theme === "light"}
                />
            </Space>
        </Header>
    )
}