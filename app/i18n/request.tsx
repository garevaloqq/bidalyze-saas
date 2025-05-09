import { NextRequest } from "next/server"

export default function getRequestLocale(request: NextRequest): string | undefined {
  // Obtener el valor del encabezado Accept-Language para determinar el idioma
  const acceptLanguage = request?.headers?.get("accept-language")
  if (!acceptLanguage) return undefined

  // Obtener el idioma principal del encabezado
  const language = acceptLanguage.split(",")[0] || "es"

  // Filtrar idiomas soportados
  const supportedLocales = ["en", "es", "fr"]
  return supportedLocales.includes(language) ? language : undefined
}
