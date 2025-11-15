/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import ProductCard from './product-card';
import { ProductSliderProps } from '@/types';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Link } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ProductSlider({
  title,
  products,
  backgroundColor,
  href,
}: ProductSliderProps) {
  const t = useTranslations();
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [lastSlide, setLastSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: locale === 'fa',
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 340px)': {
        slides: { perView: 1.2, spacing: 16 },
      },
      '(min-width: 390px)': {
        slides: { perView: 1.4, spacing: 16 },
      },
      '(min-width: 540px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 860px)': {
        slides: { perView: 3, spacing: 16 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 4, spacing: 24 },
      },
    },
    created(slider) {
      setLoaded(true);
      setLastSlide(slider.track.details.maxIdx);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    updated(slider) {
      setLastSlide(slider.track.details.maxIdx);
    },
  });

  // Autoplay functionality
  useEffect(() => {
    if (!loaded) return;

    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [loaded, instanceRef]);

  return (
    <section
      className='my-14 md:my-20 rounded-3xl p-6'
      style={{ backgroundColor }}
    >
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl md:text-2xl font-bold text-foreground'>
          {title}
        </h2>
        <div className='flex items-center gap-3'>
          <Link
            href={href}
            className='flex items-center justify-center bg-background/90 hover:bg-background active:bg-background px-4 py-2 rounded-xl text-foreground hover:text-black active:text-black cursor-pointer effect shrink-0'
          >
            {t('common.viewAll')}
          </Link>
        </div>
      </div>

      {/* Products Slider */}
      <div ref={sliderRef} className='keen-slider'>
        {products.map((product, index) => (
          <div key={index} className='keen-slider__slide'>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
