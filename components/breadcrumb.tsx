import { BreadcrumbProps } from '@/types';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Breadcrumb({ items = [] as BreadcrumbProps[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label='breadcrumbs' className='w-full'>
      <ol className='flex items-center gap-2 w-fit bg-secondary text-foreground/80 rounded-3xl px-3 py-2'>
        {items.map((item, idx) => (
          <li key={idx} className='flex items-center'>
            {item.href ? (
              <Link
                href={item.href}
                className='text-sm last:font-semibold text-foreground hover:text-black active:text-black cursor-pointer effect line-clamp-1'
              >
                {item.label}
              </Link>
            ) : (
              <span className='text-sm last:font-semibold text-foreground hover:text-black active:text-black cursor-pointer effect line-clamp-1'>
                {item.label}
              </span>
            )}

            {idx < items.length - 1 && (
              <ChevronLeft size={16} className='mx-2 text-foreground/60' />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
