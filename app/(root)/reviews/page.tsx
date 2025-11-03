import ReviewSection from '@/components/review/review-section';
import { reviewsByFilter } from '@/lib/data';

export default function ReviewsPage() {
  return (
    <div className='container pt-20 md:pt-28'>
      {/* Reviews Slider */}
      <ReviewSection
        filters={Object.keys(reviewsByFilter)}
        reviews={[]}
        dataByFilter={reviewsByFilter}
      />
    </div>
  );
}
