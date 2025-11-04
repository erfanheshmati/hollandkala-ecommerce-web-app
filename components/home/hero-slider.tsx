'use client';

import { slideImages } from '@/lib/data';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const goTo = (idx: number) => {
    const total = slideImages.length;
    const normalized = ((idx % total) + total) % total;
    setCurrentSlide(normalized);
  };

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      goTo(currentSlide + 1);
    }, 4000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [currentSlide]);

  const total = slideImages.length;

  return (
    <section className='my-6 md:my-10'>
      {/* Desktop: 5 images visible (60px, 60px, center, 60px, 60px) */}
      <div className='hidden md:grid grid-cols-[60px_60px_1fr_60px_60px] gap-3 md:h-80 lg:h-[400px] xl:h-[500px] 2xl:h-[540px]'>
        {[-2, -1, 0, 1, 2].map((offset) => {
          const idx = (currentSlide + offset + total) % total;
          const img = slideImages[idx];
          const isCenter = offset === 0;
          return (
            <button
              key={`hero-col-${offset}-${idx}`}
              onClick={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                goTo(idx);
              }}
              className={`relative w-full h-full overflow-hidden rounded-4xl effect ${
                isCenter ? '' : 'hover:opacity-80 cursor-pointer'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes={isCenter ? '40vw' : '60px'}
                className='object-cover'
                priority={isCenter}
              />
            </button>
          );
        })}
      </div>

      {/* Mobile: 3 images visible (30px, center, 30px) */}
      <div className='grid md:hidden grid-cols-[30px_1fr_30px] gap-2 h-[210px] sm:h-[280px]'>
        {[-1, 0, 1].map((offset) => {
          const idx = (currentSlide + offset + total) % total;
          const img = slideImages[idx];
          const isCenter = offset === 0;
          return (
            <button
              key={`hero-mobile-col-${offset}-${idx}`}
              onClick={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                goTo(idx);
              }}
              className={`relative w-full h-full overflow-hidden rounded-2xl ${
                isCenter ? '' : ''
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes={isCenter ? '70vw' : '30px'}
                className='object-cover'
                priority={isCenter}
              />
            </button>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className='flex justify-center gap-2 mt-4 md:mt-6'>
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              goTo(idx);
            }}
            className={`h-2 rounded-full cursor-pointer effect ${
              idx === currentSlide
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400 active:bg-gray-400 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
