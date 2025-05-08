// app/sign-up/page.tsx
import { SignUp } from "@clerk/nextjs";
import { cookies, headers } from "next/headers";
import type { Metadata } from "next";

// Lista de locales soportados y fallback
const SUPPORTED_LOCALES = ["es", "en", "fr"];
const DEFAULT_LOCALE = "es";

// Función de detección de locale en SSR
async function detectLocale(): Promise<string> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookie = cookieStore.get("NEXT_LOCALE")?.value;
  const accept = headerStore.get("accept-language") || "";
  const detected = cookie || accept.split(",")[0]?.split("-")[0];
  return detected && SUPPORTED_LOCALES.includes(detected) ? detected : DEFAULT_LOCALE;
}

// Generación de metadata usando los JSON de traducción
export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocale();
  
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  return {
    title: messages.SignUp.meta_title,
    description: messages.SignUp.meta_description,
  };
}

// Página de registro
export default async function SignUpPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <SignUp path="/sign-up" />
    </div>
  );
}
