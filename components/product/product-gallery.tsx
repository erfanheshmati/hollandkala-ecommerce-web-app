'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoIosMore } from 'react-icons/io';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex flex-col justify-between gap-4 w-full lg:max-w-[500px] xl:max-w-[420px]'>
      <div className='relative w-full aspect-[1.1] rounded-3xl overflow-hidden border border-foreground/10'>
        <Image
          src={images[activeIndex]}
          alt={alt}
          fill
          className='object-cover w-full h-full'
          sizes='(min-width: 1280px) 440px, 100vw'
          priority
        />
      </div>

      <div className='flex items-center justify-between overflow-x-auto no-scrollbar'>
        {images.slice(0, 5).map((src, index) => {
          const isLast = index === 4 && images.length > 5;
          return (
            <button
              key={`${src}-${index}`}
              type='button'
              onClick={() => setActiveIndex(index)}
              className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border cursor-pointer effect ${
                index === activeIndex
                  ? 'border-primary'
                  : 'border-foreground/10 hover:border-foreground/30'
              }`}
              aria-label={`تصویر ${index + 1}`}
              style={{ pointerEvents: isLast ? 'none' : undefined }} // disable click for the blurred one
            >
              <Image
                src={src}
                alt={`${alt} - ${index + 1}`}
                fill
                sizes='(min-width: 768px) 80px, 64px'
                className='object-cover'
              />
              {isLast && (
                <div className='absolute inset-0 flex items-center justify-center backdrop-blur-xs rounded-xl'>
                  <IoIosMore size={24} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
