'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { getDirection } from '@/i18n-config';

export default function PromotionalText({
  items = [] as { title: string; href?: string }[],
}: {
  items?: { title: string; href?: string }[];
}) {
  const [isPaused, setIsPaused] = useState(false);
  const locale = useLocale();
  const direction = getDirection(locale);
  const animationName =
    direction === 'rtl' ? 'marqueeRtlScroll' : 'marqueeLtrScroll';

  return (
    <section className='my-6 md:my-10'>
      <div className='bg-secondary rounded-2xl overflow-hidden cursor-grab'>
        <div
          className='py-4'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
        >
          <div className='relative overflow-hidden'>
            <div
              className='flex items-center gap-10 whitespace-nowrap [--marquee-duration:10s] md:[--marquee-duration:20s]'
              style={{
                animation: `${animationName} var(--marquee-duration) linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                willChange: 'transform',
              }}
            >
              {items.map((text, idx) => (
                <React.Fragment key={idx}>
                  <div className='flex items-center'>
                    <div className='text-foreground/66 hover:text-foreground active:text-foreground effect'>
                      {text.title}
                    </div>
                  </div>
                  {/* Separator */}
                  {idx !== items.length - 1 && (
                    <span className='rotate-180 w-4 h-4 text-primary ltr:mt-2'>
                      &#10094;
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
