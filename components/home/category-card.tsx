import { ProductCategoryProps } from '@/types';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({
  title,
  imageUrl,
  href,
}: ProductCategoryProps) {
  return (
    <div className='relative rounded-3xl overflow-hidden group transition-transform hover:scale-105'>
      {imageUrl && (
        <div className='absolute inset-0 block w-full h-full'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes='(min-width: 1024px) 100vw, 100vw'
            className='object-cover'
          />
        </div>
      )}
      <div className='flex flex-col justify-between relative p-4 h-full min-h-40 md:min-h-[200px]'>
        <div className='text-white font-bold text-xl md:text-2xl'>
          {title.includes(' ') ? (
            <>
              {title.substring(0, title.indexOf(' '))}
              <br />
              {title.substring(title.indexOf(' ') + 1)}
            </>
          ) : (
            title
          )}
        </div>
        <Link
          href={href}
          className='flex items-center gap-1 self-start bg-white/20 backdrop-blur-md text-background rounded-2xl px-2 py-1 hover:bg-white/40 active:bg-white/40 cursor-pointer effect'
        >
          <span className='text-lg font-medium pt-1'>مشاهده</span>
          <ChevronLeft size={18} />
        </Link>
      </div>
    </div>
  );
}
