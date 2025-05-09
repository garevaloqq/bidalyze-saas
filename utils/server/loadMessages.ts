/**
 * Carga los mensajes de traducción para un locale dado
 */
export async function loadMessages(locale: string) {
  return (await import(`../../messages/${locale}.json`)).default;
}
