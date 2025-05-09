import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "../common/constants";

/** 
 * Detecta el locale en el servidor (Server-Side)
 */
export async function detectLocaleSSR(): Promise<string> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookie = cookieStore.get("NEXT_LOCALE")?.value;
  const accept = headerStore.get("accept-language") || "";
  const detected = cookie || accept.split(",")[0]?.split("-")[0];

  return (detected && SUPPORTED_LOCALES.includes(detected)) ? detected : DEFAULT_LOCALE;
}
