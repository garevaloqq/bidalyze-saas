// app/page.tsx
'use client';
import { Button } from 'antd';
import { useTranslations } from "next-intl";
import React from 'react';
import LanguageSwitcher from 'components/LanguageSwitcher';

export default function HomePage() {
  const t = useTranslations();
  return (
    <div style={{ padding: 20 }}>
      <LanguageSwitcher />
      <Button type="primary">{t("Navbar.sign_in")}</Button>
    </div>
  );
}
