import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { BILLING_INTERVAL, type PricingPlan } from "types/Subscription"

const defaultLocale = "es"
const COOKIE_NAME = "NEXT_LOCALE"

export async function getUserLocale(): Promise<string> {
  // Obtener la cookie desde el encabezado
  const cookieStore = await cookies()
  const locale = cookieStore.get(COOKIE_NAME)?.value

  return locale || defaultLocale
}
export async function setUserLocale(locale: string) {
  // Crear una respuesta vacía para asignar la cookie
  const response = NextResponse.next()
  // Establecer la cookie en la respuesta
  response.cookies.set(COOKIE_NAME, locale, { path: "/" })
  return response
}

export const PLAN_ID = {
  FREE: "free",
  PREMIUM: "premium",
  ENTERPRISE: "enterprise",
} as const

export const PricingPlanList: Record<string, PricingPlan> = {
  [PLAN_ID.FREE]: {
    id: PLAN_ID.FREE,
    price: 0,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: "",
    devPriceId: "",
    prodPriceId: "",
    features: {
      teamMember: 2,
      website: 2,
      storage: 2,
      transfer: 2,
    },
  },
  [PLAN_ID.PREMIUM]: {
    id: PLAN_ID.PREMIUM,
    price: 79,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: "price_premium_test", // Use for testing
    // FIXME: Update the price ID, you can create it after running `npm run stripe:setup-price`
    devPriceId: "price_1PNksvKOp3DEwzQlGOXO7YBK",
    prodPriceId: "",
    features: {
      teamMember: 5,
      website: 5,
      storage: 5,
      transfer: 5,
    },
  },
  [PLAN_ID.ENTERPRISE]: {
    id: PLAN_ID.ENTERPRISE,
    price: 199,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: "price_enterprise_test", // Use for testing
    // FIXME: Update the price ID, you can create it after running `npm run stripe:setup-price`
    devPriceId: "price_1PNksvKOp3DEwzQli9IvXzgb",
    prodPriceId: "price_123",
    features: {
      teamMember: 100,
      website: 100,
      storage: 100,
      transfer: 100,
    },
  },
}
