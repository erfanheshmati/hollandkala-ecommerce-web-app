'use client';

import { profileNavItems } from '@/lib/data';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiLogout } from 'react-icons/ci';

type ProfileNavProps = {
  onItemClick?: (item: { href: string; label: string }) => void;
};

export default function ProfileNav({ onItemClick }: ProfileNavProps) {
  const pathname = usePathname();

  return (
    <aside className='flex flex-col md:justify-between gap-4 md:gap-8 pt-2 md:pt-6 md:pb-4 w-full md:w-1/3 lg:w-1/4 md:border border-foreground/20 rounded-2xl'>
      <nav className='flex flex-col gap-4 md:gap-8'>
        {/* Header */}
        <h2 className='font-bold text-xl md:text-2xl px-1 md:px-3'>
          علیرضا رحمانی
        </h2>
        {/* Nav Items */}
        <ul className='flex flex-col gap-4 h-full'>
          {profileNavItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <li className='max-md:border border-foreground/20 hover:border-primary active:border-primary rounded-2xl relative'>
                {/* Rounded border indicator */}
                <div
                  className={`hidden md:block absolute bottom-0 right-0 w-[5px] h-full rounded-tl-full rounded-bl-full transform effect ${
                    pathname === item.href
                      ? 'bg-primary'
                      : 'bg-transparent group-hover:bg-primary'
                  }`}
                ></div>
                {/* Nav Item */}
                <Link
                  href={item.href}
                  className={`flex items-center justify-between text-lg hover:text-primary active:text-primary px-3 max-md:py-4 md:py-2 transition-all ${
                    pathname === item.href
                      ? 'md:text-primary md:font-bold'
                      : 'text-foreground/60 font-medium'
                  }`}
                  onClick={() =>
                    onItemClick?.({ href: item.href, label: item.label })
                  }
                >
                  <span>{item.label}</span>
                  <ChevronLeft className='md:hidden w-4 h-4' />
                  {pathname === item.href && (
                    <ChevronLeft className='hidden md:block w-4 h-4' />
                  )}
                </Link>
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
      <button className='flex items-center justify-center gap-2 border border-red-500 text-red-500 bg-background hover:bg-red-50 active:bg-red-50 rounded-xl md:mx-4 py-4 md:py-3 cursor-pointer effect'>
        <CiLogout className='w-5 h-5 rotate-180' />
        <span className='font-medium'> خروج از حساب کاربری</span>
      </button>
    </aside>
  );
}
