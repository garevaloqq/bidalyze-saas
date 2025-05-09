import { detectLocaleSSR } from "./detectLocaleSSR";

export async function getI18nPathServer(url: string): Promise<string> {
  const locale = await detectLocaleSSR();
  return locale === "es" ? url : `/${locale}${url}`;
}
