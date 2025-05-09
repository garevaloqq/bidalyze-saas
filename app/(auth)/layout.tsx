// app/(auth)/layout.tsx
import { enUS, esES, frFR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { headers } from "next/headers";
import React from "react";

// Función para detectar el idioma basado en el header de la solicitud
async function detectLocale(): Promise<string> {
  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language") || "";
  const detected = acceptLanguage.split(",")[0]?.split("-")[0];
  const SUPPORTED_LOCALES = ["es", "en", "fr"];
  const DEFAULT_LOCALE = "es";

  return detected && SUPPORTED_LOCALES.includes(detected) ? detected : DEFAULT_LOCALE;
}

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  // Detectar el locale en SSR
  const locale = await detectLocale();

  // Mapear a la localización de Clerk
  let clerkLocale = esES;
  if (locale === "en") clerkLocale = enUS;
  if (locale === "fr") clerkLocale = frFR;

  // URLs de Clerk
  const signInUrl = "/sign-in";
  const signUpUrl = "/sign-up";
  const dashboardUrl = "/dashboard";
  const afterSignOutUrl = "/";

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
  );
}
