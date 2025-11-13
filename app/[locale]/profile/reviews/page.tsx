'use client';

import { profileReviews } from '@/lib/data';
import ReviewCard from '@/components/profile/review-card';

export default function ProfileReviewsPage() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-4 md:p-6 lg:p-8'>
      {profileReviews.map((product) => (
        <ReviewCard key={product.id} {...product} />
      ))}
    </div>
  );
}


