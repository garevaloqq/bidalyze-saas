"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import { NextIntlClientProvider } from "next-intl"
import React, { useEffect, useState } from "react"
import { ThemeProvider } from "context/ThemeContext"

interface ProvidersProps {
  children: React.ReactNode
  locale: string
}

export default function Providers({ children, locale }: ProvidersProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<Record<string, any> | null>(null)

  useEffect(() => {
    async function loadMessages() {
      try {
        const messagesModule = await import(`./messages/${locale}.json`)
        setMessages(messagesModule.default)
      } catch (error) {
        console.error("Error loading messages:", error)
        setMessages({})
      }
    }
    loadMessages()
  }, [locale])

  // Mostrar un loader mientras se cargan los mensajes
  if (!messages) {
    return <div>Loading translations...</div>
  }

  return (
    <AntdRegistry>
      <NextIntlClientProvider timeZone="America/Montevideo" locale={locale} messages={messages}>
        <ThemeProvider>{children}</ThemeProvider>
      </NextIntlClientProvider>
    </AntdRegistry>
  )
}
