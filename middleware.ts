import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: routing.localePrefix,
  localeDetection: false,
});

export const config = {
  // Skip Next.js internals and static files
  matcher: ['/((?!_next|.*\\..*).*)'],
};
