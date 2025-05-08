import { type ClassValue, clsx } from 'clsx';
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { twMerge } from 'tailwind-merge';


export const SUPPORTED_LOCALES = ["es", "en", "fr"] as const;
export const DEFAULT_LOCALE = "es";

/** Detecta el locale (cookie o header) */
async function detectLocale(): Promise<string> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookie = cookieStore.get("NEXT_LOCALE")?.value;
  const accept = headerStore.get("accept-language") || "";
  const detected = cookie || accept.split(",")[0]?.split("-")[0];
  return detected && SUPPORTED_LOCALES.includes(detected) ? detected : DEFAULT_LOCALE;
}

/** Carga el JSON de mensajes para un locale dado */
export async function loadMessages(locale: string) {
  return (await import(`../messages/${locale}.json`)).default;
}

/**
 * Genera metadata para una página dado su namespace en el JSON
 * @param namespace Ej. "SignUp" o "SignIn"
 */
export async function generatePageMetadata(namespace: string): Promise<Metadata> {
  const locale = await detectLocale();
  const messages = await loadMessages(locale);
  const pageMsgs = messages[namespace];
  return {
    title: pageMsgs.meta_title,
    description: pageMsgs.meta_description,
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MILLISECONDS_IN_ONE_DAY = 86_400_000;

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === 'es') {
    return url;
  }

  return `/${locale}${url}`;
};
