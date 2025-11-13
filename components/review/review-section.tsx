/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/preserve-manual-memoization */
'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ReviewSectionProps } from '@/types';
import ReviewSlider from './review-slider';
import { Link, usePathname } from '@/i18n/routing';
import ReviewCard from '@/components/review/review-card';
import Pagination from '@/components/shared/pagination';
import { useTranslations } from 'next-intl';

export default function ReviewSection({
  title,
  subtitle,
  reviews,
  filters,
  dataByFilter,
}: ReviewSectionProps) {
  const t = useTranslations();
  const pathname = usePathname();

  // Map filter keys to translation keys
  const getFilterTranslation = (filterKey: string): string => {
    if (filterKey === 'خریداران' || filterKey === 'buyers') {
      return t('reviews.filters.buyers');
    }
    if (filterKey === 'ورزشکاران' || filterKey === 'athletes') {
      return t('reviews.filters.athletes');
    }
    if (filterKey === 'خیریه' || filterKey === 'charity') {
      return t('reviews.filters.charity');
    }
    if (filterKey === t('reviews.all')) {
      return t('reviews.all');
    }
    return filterKey; // Return as-is if no translation found
  };

  // Get initial filter keys (original keys from data)
  const initialFilterKeys = useMemo(() => {
    if (dataByFilter) {
      // When using dataByFilter, just use the filter keys (no "all" option)
      if (filters && filters.length > 0) return filters;
      return Object.keys(dataByFilter);
    }
    // When using reviews array, include "all" option
    const allKey = t('reviews.all');
    if (filters && filters.length > 0) {
      return [allKey, ...filters];
    }
    const set = new Set<string>();
    reviews.forEach((r) => r.badges?.forEach((c) => set.add(c)));
    return [allKey, ...Array.from(set)];
  }, [filters, reviews, dataByFilter, t]);

  // Store original filter key in state for data lookup
  const [activeFilterKey, setActiveFilterKey] = useState<string>(() => {
    if (dataByFilter) {
      return filters?.[0] ?? Object.keys(dataByFilter)[0] ?? '';
    }
    return t('reviews.all');
  });

  // Get translated filters for display
  const derivedFilters = useMemo(() => {
    return initialFilterKeys.map((key) => ({
      original: key,
      translated: getFilterTranslation(key),
    }));
  }, [initialFilterKeys, t]);

  const visibleReviews = useMemo(() => {
    if (dataByFilter) {
      return dataByFilter[activeFilterKey] ?? [];
    }
    if (activeFilterKey === t('reviews.all')) return reviews;
    return reviews.filter((r) => r.badges?.includes(activeFilterKey));
  }, [reviews, activeFilterKey, dataByFilter, t]);

  // Pagination
  const pageSize = 12;
  const searchParams = useSearchParams();
  const currentPage = useMemo(() => {
    const raw = Number(searchParams.get('page') || '1');
    return Number.isFinite(raw) && raw > 0 ? raw : 1;
  }, [searchParams]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(visibleReviews.length / pageSize)),
    [visibleReviews]
  );

  const safePage = useMemo(
    () => Math.min(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const paginatedReviews = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return visibleReviews.slice(start, start + pageSize);
  }, [visibleReviews, safePage]);

  return (
    <section className='flex flex-col gap-4 my-8 md:my-12 -mx-4 md:mx-0'>
      {/* Header */}
      <div className='flex flex-col items-center gap-1'>
        <h2 className='text-xl md:text-2xl font-bold text-foreground'>
          {title ?? t('reviews.title')}
        </h2>
        {subtitle ?? t('reviews.subtitle') ? (
          <p className='text-foreground/66 font-medium text-base md:text-lg'>
            {subtitle ?? t('reviews.subtitle')}
          </p>
        ) : null}
      </div>

      {/* Navbar */}
      <div className='flex gap-4 w-fit mx-auto bg-secondary p-2 rounded-3xl'>
        {derivedFilters.map((filter) => (
          <button
            key={filter.original}
            onClick={() => setActiveFilterKey(filter.original)}
            className={`px-6 md:px-8 py-2 rounded-full cursor-pointer effect ${
              filter.original === activeFilterKey
                ? 'bg-primary text-background'
                : 'hover:bg-foreground/5'
            }`}
          >
            {filter.translated}
          </button>
        ))}
      </div>

      {/* Show in reviews page */}
      {pathname === '/reviews' ? (
        <div className='container flex flex-col gap-8 md:gap-12 pt-4'>
          {/* Reviews Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {paginatedReviews.map((review, idx) => (
              <ReviewCard key={`${review.name}-${idx}`} {...review} />
            ))}
          </div>
          {/* Pagination */}
          <div>
            <Pagination totalItems={visibleReviews.length} perPage={4} />
          </div>
        </div>
      ) : (
        /* Show slider on home page and other pages */
        visibleReviews.length > 0 && (
          <>
            {/* Reviews Slider */}
            <ReviewSlider reviews={visibleReviews} />
            {/* Link to see all */}
            <Link
              href='/reviews'
              className='btn-primary w-fit mx-auto rounded-xl font-medium text-sm md:text-base px-8 py-3 mt-2'
            >
              {t('common.viewAll')}
            </Link>
          </>
        )
      )}
    </section>
  );
}
