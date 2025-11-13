'use client';

import FeatureCard from './feature-card';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import type { FeatureCardProps } from '@/types';
import { useLocale } from 'next-intl';

export default function FeatureSection({
  features,
}: {
  features: FeatureCardProps[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [lastSlide, setLastSlide] = useState(0);
  const locale = useLocale();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: locale === 'fa',
    slides: {
      perView: 1,
      spacing: 16,
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

  return (
    <section className='mt-8'>
      {/* Mobile: slider */}
      <div className='md:hidden'>
        <div ref={sliderRef} className='keen-slider'>
          {features.map((feature, index) => (
            <div key={index} className='keen-slider__slide'>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
        {loaded && (
          <div
            className='flex items-center justify-center gap-2 mt-4'
            aria-label='feature slider pagination'
          >
            {Array.from({ length: lastSlide + 1 }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 rounded-full cursor-pointer effect ${
                  currentSlide === idx
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400 active:bg-gray-400 w-2'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop: grid */}
      <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
