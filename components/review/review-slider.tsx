'use client';

import { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import ReviewCard from '@/components/review/review-card';
import { ReviewSectionProps } from '@/types';
import { useLocale } from 'next-intl';

export default function ReviewSlider({
  reviews,
}: {
  reviews: ReviewSectionProps['reviews'];
}) {
  const locale = useLocale();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: locale === 'fa',
    slides: {
      origin: 'center',
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 390px)': {
        slides: { origin: 'center', perView: 1.6, spacing: 16 },
      },
      '(min-width: 520px)': {
        slides: { origin: 'center', perView: 1.6, spacing: 16 },
      },
      '(min-width: 720px)': {
        slides: { perView: 2.2, spacing: 16 },
      },
      '(min-width: 760px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 840px)': {
        slides: { perView: 3, spacing: 16 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 4, spacing: 24 },
      },
    },
  });

  // Recreate slider when the dataset changes significantly (filter switch)
  useEffect(() => {
    instanceRef.current?.update();
  }, [reviews, instanceRef]);

  return (
    <div ref={sliderRef} className='keen-slider'>
      {reviews.map((review, index) => (
        <div key={index} className='keen-slider__slide'>
          <ReviewCard {...review} />
        </div>
      ))}
    </div>
  );
}
