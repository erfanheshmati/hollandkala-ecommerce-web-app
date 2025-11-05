'use client';

import { ProductProps } from '@/types';
import React, { useState } from 'react';

export default function PriceComparison({
  product,
}: {
  product: ProductProps;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className='flex flex-col gap-3 bg-primary rounded-2xl px-4 md:px-6 py-6'>
      {/* Header */}
      <h3 className='text-background font-bold text-xl'>
        مقایسه جهانی قیمت این محصول
      </h3>

      {/* Content */}
      <div className='bg-background rounded-xl overflow-hidden cursor-grab'>
        <div
          className='py-1'
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
                animation:
                  'marqueeScroll var(--marquee-duration) linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running',
                willChange: 'transform',
              }}
            >
              {product.priceComparison?.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className='flex items-center gap-10 bg-secondary px-4 py-2 rounded-lg'>
                    <div className='text-primary'>
                      {item.title}: {item.price} یورو
                    </div>
                  </div>
                  {/* Separator */}
                  {product.priceComparison &&
                    idx !== product.priceComparison.length - 1 && (
                      <span className='text-primary/30'>&#124;</span>
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
