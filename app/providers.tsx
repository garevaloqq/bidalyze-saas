"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "context/ThemeContext"

interface ProvidersProps {
  children: React.ReactNode
  locale: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <AntdRegistry>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider>{children}</ThemeProvider>
      </NextIntlClientProvider>
    </AntdRegistry>
  )
}
