'use client';

import { BlogProps } from '@/types';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { AiOutlineComment } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCalendarOutline } from 'react-icons/io5';
import { useLocale } from 'next-intl';
import { localizeBlog } from '@/lib/data-localization';
import { toPersianDigits } from '@/lib/utils';

export default function BlogCard({ blog }: { blog: BlogProps }) {
  const locale = useLocale() as 'fa' | 'en';
  
  // Localize blog data based on current locale
  const localizedBlog = localizeBlog(blog, locale);

  // Format numbers based on locale
  const formatNumber = (value: number): string => {
    return locale === 'fa' ? toPersianDigits(value) || value.toString() : value.toString();
  };

  return (
    <div className='flex flex-row md:flex-col gap-2 bg-secondary rounded-xl overflow-hidden p-2'>
      {/* Product Image */}
      <div className='w-full max-w-20 md:max-w-full h-20 md:h-56 rounded-xl relative'>
        <Link
          href={{ pathname: '/blog/[id]', params: { id: localizedBlog.id } }}
          target='_blank'
          className='relative block w-full h-full rounded-xl hover:opacity-80 active:opacity-80 effect'
        >
          <Image
            src={localizedBlog.imageUrl}
            alt={localizedBlog.title}
            fill
            sizes='(min-width: 1024px) 100vw, 100vw'
            className='object-cover rounded-xl'
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className='p-1 w-full'>
        <Link
          href={{ pathname: '/blog/[id]', params: { id: localizedBlog.id } }}
          target='_blank'
          className='text-base md:text-xl font-medium text-foreground line-clamp-1 hover:text-primary active:text-primary effect'
        >
          {localizedBlog.title}
        </Link>
        <p className='text-foreground/66 text-sm font-medium line-clamp-1'>
          {localizedBlog.description}
        </p>
        <div className='flex items-center justify-between mt-2'>
          <div className='flex items-center gap-1'>
            <IoCalendarOutline className='w-4 h-4 md:w-5 md:h-5' />
            <span className='text-foreground/80 text-sm pt-1'>{localizedBlog.date}</span>
          </div>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1'>
              <span className='text-foreground/80 text-sm pt-1'>
                {formatNumber(localizedBlog.likes)}
              </span>
              <IoMdHeartEmpty className='w-4 h-4 md:w-5 md:h-5' />
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-foreground/80 text-sm pt-1'>
                {formatNumber(localizedBlog.comments)}
              </span>
              <AiOutlineComment className='w-4 h-4 md:w-5 md:h-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
