'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { mobileNavItems, cartItems } from '@/lib/data';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const itemsCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-background z-50 md:hidden shadow-[0_0_20px_0_rgba(0,0,0,0.11)]'>
      <div className='flex items-center justify-between sm:justify-center sm:gap-14 py-2 px-4'>
        {mobileNavItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            // Nav Item Link
            <Link
              key={item.href}
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
                {item.label}
              </span>
              {/* Cart Item Count Badge */}
              {item.label === 'سبد خرید' && itemsCount > 0 && (
                <span className='absolute -top-1.5 right-1 w-[18px] h-[18px] p-1 rounded-full bg-primary text-background text-[11px] font-bold'>
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
