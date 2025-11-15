import createMiddleware from 'next-intl/middleware';
import { type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: routing.localePrefix,
  localeDetection: false,
});

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Skip Next.js internals and static files
  matcher: ['/((?!_next|.*\\..*).*)'],
};

