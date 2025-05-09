import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "../common/constants";

/** 
 * Detecta el locale en el cliente (Client-Side)
 */
export function detectLocaleClient(): string {
    if (typeof window === "undefined") {
        throw new Error("detectLocaleClient should only be used in Client-Side.");
    }

    const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1] ?? "";

    const browserLocale = navigator.language?.split("-")[0] ?? "";

    const detectedLocale = cookieLocale || browserLocale || DEFAULT_LOCALE;

    return SUPPORTED_LOCALES.includes(detectedLocale) ? detectedLocale : DEFAULT_LOCALE;
}


/* export async function detectLocaleClient(): Promise<string> {
  const cookieStore = await cookies()
  const headerStore = await headers()
  const cookie = cookieStore.get("NEXT_LOCALE")?.value
  const accept = headerStore.get("accept-language") || ""
  const detected = cookie || accept.split(",")[0]?.split("-")[0]
  return detected && SUPPORTED_LOCALES.includes(detected) ? detected : DEFAULT_LOCALE
} */