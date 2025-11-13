'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/header';
import ProfileNav from '@/components/profile/profile-nav';
import { useLocale, useTranslations } from 'next-intl';
import type { ComponentProps } from 'react';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [pendingTitle, setPendingTitle] = React.useState<string | null>(null);
  const isProfileRoot = React.useMemo(() => {
    if (!pathname) return false;
    return pathname === '/profile' || pathname.endsWith('/profile');
  }, [pathname]);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(isProfileRoot);

  const currentTitle = React.useMemo(() => {
    if (pendingTitle) return pendingTitle;
    const key = mapProfileKey(pathname);
    return t(key);
  }, [pathname, pendingTitle, t]);

  React.useEffect(() => {
    // When route changes, clear any pending title and set nav open state appropriately
    setPendingTitle(null);
    setIsMobileNavOpen(isProfileRoot);
  }, [isProfileRoot]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      {/* Desktop: show nav and content side-by-side */}
      <div className='container hidden md:flex flex-1 gap-4 lg:gap-6 xl:gap-10 mt-32 py-8'>
        <ProfileNav />
        <main className='flex flex-1 flex-col border border-foreground/20 rounded-2xl'>
          {children}
        </main>
      </div>

      {/* Mobile: toggle between nav and content */}
      <div className='container flex md:hidden flex-1 gap-10 mt-16 py-10'>
        {isMobileNavOpen ? (
          <ProfileNav
            onItemClick={(item) => {
              // Translate on selection to avoid stale Persian labels
              setPendingTitle(t(mapProfileKey(item.href)));
              setIsMobileNavOpen(false);
            }}
          />
        ) : (
          <main className='flex flex-1 flex-col gap-2 pb-8'>
            <div className='flex items-center gap-2'>
              <Link
                href='/profile'
                className='rounded-full p-1 hover:bg-primary/10 active:bg-primary/15 effect'
              >
                <ChevronRight
                  size={24}
                  className={`text-primary ${
                    locale === 'fa' ? '' : 'rotate-180'
                  }`}
                />
              </Link>
              <span className='text-xl font-bold text-primary pt-1'>
                {currentTitle}
              </span>
            </div>
            {children}
          </main>
        )}
      </div>
    </div>
  );
}

function mapProfileKey(href: string | ComponentProps<typeof Link>['href']) {
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
