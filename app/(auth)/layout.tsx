import { enUS, esES, frFR } from "@clerk/localizations"
import { ClerkProvider } from "@clerk/nextjs"
import { useLocale } from "next-intl"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // 1. Leer el locale actual del NextIntlClientProvider
  const locale = useLocale()

  // 2. Mapear a la localización de Clerk
  let clerkLocale = esES
  if (locale === "en") clerkLocale = enUS
  if (locale === "fr") clerkLocale = frFR

  // 3. Construir URLs de Clerk (sin prefijo de ruta)
  const signInUrl = "/sign-in"
  const signUpUrl = "/sign-up"
  const dashboardUrl = "/dashboard"
  const afterSignOutUrl = "/"

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      {children}
    </ClerkProvider>
  )
}
