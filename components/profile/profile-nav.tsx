'use client';

import { profileNavItems } from '@/lib/data';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { useLocale, useTranslations } from 'next-intl';
import type { ComponentProps } from 'react';

type ProfileNavProps = {
  onItemClick?: (item: {
    href: ComponentProps<typeof Link>['href'];
    label: string;
  }) => void;
};

export default function ProfileNav({ onItemClick }: ProfileNavProps) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <aside className='flex flex-col md:justify-between gap-4 md:gap-8 pt-2 md:pt-6 md:pb-4 w-full md:w-1/3 lg:w-1/4 md:border border-foreground/20 rounded-2xl md:sticky md:top-8 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto'>
      <nav className='flex flex-col gap-4 md:gap-8'>
        {/* Header */}
        <h2 className='font-bold text-xl md:text-2xl px-1 md:px-3'>
          {t('profile.title')}
        </h2>
        {/* Nav Items */}
        <ul className='flex flex-col gap-4 h-full'>
          {profileNavItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <li className='group max-md:border border-foreground/20 hover:border-primary active:border-primary rounded-2xl relative'>
                {/* Rounded border indicator */}
                {(() => {
                  const hrefString =
                    typeof item.href === 'string'
                      ? item.href
                      : (item.href as { pathname: string }).pathname || '';
                  const isActive = pathname?.endsWith(hrefString);
                  return (
                    <>
                      <div
                        className={`hidden md:block absolute bottom-0 rtl:right-0 ltr:left-0 w-[5px] h-full rtl:rounded-tl-full ltr:rounded-tr-full rtl:rounded-bl-full ltr:rounded-br-full transform effect ${
                          isActive ? 'bg-primary' : 'bg-transparent'
                        }`}
                      ></div>
                      {/* Nav Item */}
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between text-lg hover:text-primary active:text-primary px-3 max-md:py-4 md:py-2 transition-all ${
                          isActive
                            ? 'md:text-primary md:font-bold'
                            : 'text-foreground/60 font-medium'
                        }`}
                        onClick={() =>
                          onItemClick?.({ href: item.href, label: item.label })
                        }
                      >
                        <span>{t(mapProfileKey(item.href))}</span>
                        <ChevronLeft
                          className={`md:hidden w-4 h-4 ${
                            locale === 'fa' ? '' : 'rotate-180'
                          }`}
                        />
                        {isActive && (
                          <ChevronLeft
                            className={`hidden md:block w-4 h-4 ${
                              locale === 'fa' ? '' : 'rotate-180'
                            }`}
                          />
                        )}
                      </Link>
                    </>
                  );
                })()}
              </li>
              {/* Separator */}
              {idx !== profileNavItems.length - 1 && (
                <div className='hidden md:block border-b border-foreground/20 mx-4'></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <button className='flex items-center justify-center gap-2 border border-red-500 text-red-500 bg-background hover:bg-red-50 active:bg-red-50 rounded-2xl md:rounded-xl md:mx-4 py-4 md:py-3 cursor-pointer effect'>
        <CiLogout
          className={`w-5 h-5 ${locale === 'fa' ? 'rotate-180' : ''}`}
        />
        <span className='font-medium'>{t('auth.logout')}</span>
      </button>
    </aside>
  );
}

function mapProfileKey(href: ComponentProps<typeof Link>['href']) {
  const hrefString =
    typeof href === 'string'
      ? href
      : (href as { pathname: string }).pathname || '';
  if (hrefString.endsWith('/info')) return 'profile.info';
  if (hrefString.endsWith('/orders')) return 'profile.orders';
  if (hrefString.endsWith('/ticket')) return 'profile.tickets';
  if (hrefString.endsWith('/collaboration'))
    return 'profile.collaboration.label';
  if (hrefString.endsWith('/reviews')) return 'profile.reviews';
  return 'profile.title';
}
