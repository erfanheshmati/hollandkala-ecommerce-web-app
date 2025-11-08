'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/header';
import ProfileNav from '@/components/profile/profile-nav';
import { profileNavItems } from '@/lib/data';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [pendingTitle, setPendingTitle] = React.useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(
    pathname === '/profile'
  );

  const currentTitle = React.useMemo(() => {
    if (pendingTitle) return pendingTitle;
    return (
      profileNavItems.find((item) => item.href === pathname)?.label || 'پروفایل'
    );
  }, [pathname, pendingTitle]);

  React.useEffect(() => {
    // When route changes, clear any pending title and set nav open state appropriately
    setPendingTitle(null);
    setIsMobileNavOpen(pathname === '/profile');
  }, [pathname]);

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
              setPendingTitle(item.label);
              setIsMobileNavOpen(false);
            }}
          />
        ) : (
          <main className='flex flex-1 flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <Link
                href='/profile'
                className='rounded-full p-1 hover:bg-primary/10 active:bg-primary/15 effect'
              >
                <ChevronRight size={24} className='text-primary' />
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
