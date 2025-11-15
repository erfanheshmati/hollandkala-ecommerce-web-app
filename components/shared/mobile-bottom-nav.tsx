'use client';

import { Link, usePathname } from '@/i18n/routing';
import { mobileNavItems, cartItems } from '@/lib/data';
import { useLocale, useTranslations } from 'next-intl';
import type { ComponentProps } from 'react';

function mapNavLabel(
  t: ReturnType<typeof useTranslations>,
  href: ComponentProps<typeof Link>['href'],
  fallback: string
) {
  const hrefString =
    typeof href === 'string'
      ? href
      : (href as { pathname: string }).pathname || '';
  if (hrefString === '/') return t('nav.home');
  if (hrefString.startsWith('/favorites')) return t('nav.favorites');
  if (hrefString.startsWith('/cart')) return t('nav.cart');
  if (hrefString.startsWith('/profile')) return t('profile.title');
  return fallback;
}

function getHrefString(href: ComponentProps<typeof Link>['href']): string {
  return typeof href === 'string'
    ? href
    : (href as { pathname: string }).pathname || '';
}

export default function MobileBottomNav() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const itemsCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-background z-50 md:hidden shadow-[0_0_20px_0_rgba(0,0,0,0.11)]'>
      <div className='flex items-center justify-between sm:justify-center sm:gap-14 py-2 px-4'>
        {mobileNavItems.map((item, index) => {
          const hrefString = getHrefString(item.href);
          const isActive =
            pathname === hrefString || pathname.startsWith(hrefString + '/');

          return (
            // Nav Item Link
            <Link
              key={index}
              href={item.href}
              className='flex flex-col items-center transition-opacity relative'
            >
              {/* Icon */}
              <div className='w-6 h-6 flex items-center justify-center mb-1'>
                {typeof item.icon === 'function' ? (
                  <item.icon
                    size={24}
                    className={`${
                      isActive
                        ? 'text-primary opacity-100'
                        : 'text-foreground opacity-30'
                    }`}
                  />
                ) : (
                  item.icon
                )}
              </div>
              {/* Text */}
              <span
                className={`text-sm whitespace-nowrap text-center ${
                  isActive
                    ? 'text-primary font-bold opacity-100'
                    : 'text-foreground font-medium opacity-30'
                }`}
              >
                {mapNavLabel(t, item.href, item.label)}
              </span>
              {/* Cart Item Count Badge */}
              {hrefString === '/cart' && itemsCount > 0 && (
                <span
                  className={`absolute -top-1.5 w-[18px] h-[18px] rounded-full bg-primary text-background text-[11px] font-bold ${
                    locale === 'fa' ? 'right-1 p-1' : '-right-2 p-0.5'
                  }`}
                >
                  {itemsCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
