export function getI18nPathClient(url: string, locale: string): string {
  return locale === "es" ? url : `/${locale}${url}`;
}
