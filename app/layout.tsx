import "@ant-design/v5-patch-for-react-19"
import "antd/dist/reset.css"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { cookies, headers } from "next/headers"
import React from "react"
import Providers from "./providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bidalyze - Data Insights for Your Business",
  description: "Analyze and optimize your business with data insights.",
}

// Lista de locales soportados y fallback
const SUPPORTED_LOCALES = ["es", "en", "fr"]
const DEFAULT_LOCALE = "es"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const headerStore = await headers()
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value
  const acceptLanguage = headerStore.get("accept-language") ?? ""
  const detectedLocale = acceptLanguage.split(",")[0]?.split("-")[0]

  // Seleccionar locale válido
  const locale =
    (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) ||
    (detectedLocale && SUPPORTED_LOCALES.includes(detectedLocale))
      ? cookieLocale ?? detectedLocale
      : DEFAULT_LOCALE

  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Providers locale={locale!}>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
