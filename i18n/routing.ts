import { i18n } from '@/i18n-config';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: i18n.locales.map((l) => l.code),
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/login': '/login',
    '/blog': '/blog',
    '/blog/[id]': '/blog/[id]',
    '/products': '/products',
    '/products/[segment]/[category]': '/products/[segment]/[category]',
    '/product/[id]': '/product/[id]',
    '/cart': '/cart',
    '/checkout': '/checkout',
    '/favorites': '/favorites',
    '/gifts': '/gifts',
    '/reviews': '/reviews',
    '/about': '/about',
    '/contact': '/contact',
    '/profile': '/profile',
    '/profile/info': '/profile/info',
    '/profile/orders': '/profile/orders',
    '/profile/reviews': '/profile/reviews',
    '/profile/ticket': '/profile/ticket',
    '/profile/collaboration': '/profile/collaboration',
  } as const,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
