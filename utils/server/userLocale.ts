import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "NEXT_LOCALE";
const DEFAULT_LOCALE = "es";

/**
 * Obtiene el locale del usuario desde la cookie (SSR)
 */
export async function getUserLocale(): Promise<string> {
  const cookieStore = await cookies();
  const locale = cookieStore.get(COOKIE_NAME)?.value;

  return locale || DEFAULT_LOCALE;
}

/**
 * Establece el locale del usuario en una cookie (SSR)
 */
export function setUserLocale(locale: string) {
  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME, locale, { path: "/" });
  return response;
}
