// app/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs"
import { cookies, headers } from "next/headers"
import type { Metadata } from "next"

// La misma lista de locales que en tu layout
const SUPPORTED_LOCALES = ["es", "en", "fr"]
const DEFAULT_LOCALE = "es"

// Detecta y devuelve el locale (SSR)
async function detectLocale(): Promise<string> {
  const cookieStore = await cookies()
  const headerStore = await headers()
  const cookie = cookieStore.get("NEXT_LOCALE")?.value
  const accept = headerStore.get("accept-language") || ""
  const detected = cookie || accept.split(",")[0]?.split("-")[0]
  return detected && SUPPORTED_LOCALES.includes(detected) ? detected : DEFAULT_LOCALE
}

// Genera los meta tags usando los JSON de traducción
export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocale()
  const messages = (await import(`../../../../messages/${locale}.json`)).default
  return {
    title: messages.SignIn.meta_title,
    description: messages.SignIn.meta_description,
  }
}

export default async function SignInPage() {
  // No necesitas pasar locale al componente SignIn de Clerk
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <SignIn />
    </div>
  )
}
