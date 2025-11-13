import ReviewSection from '@/components/review/review-section';
import { reviewsByFilter } from '@/lib/data';
import { getLocale } from 'next-intl/server';
import { localizeReviewsByFilter } from '@/lib/data-localization';

export default async function ReviewsPage() {
  const locale = (await getLocale()) as 'fa' | 'en';
  const localizedReviewsByFilter = localizeReviewsByFilter(
    reviewsByFilter,
    locale
  );

  return (
    <div className='container pt-20 md:pt-28'>
      {/* Reviews Slider */}
      <ReviewSection
        filters={Object.keys(reviewsByFilter)}
        reviews={[]}
        dataByFilter={localizedReviewsByFilter}
      />
    </div>
  );
}


