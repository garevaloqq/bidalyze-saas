// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Definir rutas protegidas (regex con (.*) para incluir subrutas)
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/onboarding(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    // Si el usuario no está autenticado, Clerk lo redirige al sign-in
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Omitir rutas internas de Next.js y archivos estáticos
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // (Opcional) Incluir rutas API si se usan
    '/(api|trpc)(.*)',
  ],
};
