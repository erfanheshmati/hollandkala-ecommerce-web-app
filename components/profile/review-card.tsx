'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GoStar, GoStarFill } from 'react-icons/go';
import { ProfileReviewProps } from '@/types';
import { AiOutlineMessage } from 'react-icons/ai';
import ReviewFormModal from './review-form-modal';

export default function ReviewCard({
  code,
  name,
  image,
  rating,
}: ProfileReviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getStarState = (starNumber: number, rating: number) => {
    if (starNumber <= Math.floor(rating)) {
      return { type: 'full' as const };
    } else if (starNumber === Math.ceil(rating) && rating % 1 !== 0) {
      // Calculate the exact percentage fill based on the decimal part
      const fillPercentage = (rating % 1) * 100;
      return { type: 'partial' as const, fillPercentage };
    } else {
      return { type: 'empty' as const };
    }
  };

  return (
    <div className='flex flex-col gap-4 bg-secondary rounded-xl p-4'>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        {/* Product Image */}
        <div className='flex items-start'>
          <div className='relative w-28 h-28 rounded-xl overflow-hidden'>
            <Image
              src={image}
              alt={name}
              fill
              className='object-cover'
              sizes='112px'
            />
          </div>
        </div>

        <div className='flex flex-col items-center md:items-start gap-2'>
          {/* Product Name */}
          <h3 className='text-xl font-bold text-foreground'>{name}</h3>

          {/* Order Code */}
          <div className='flex items-center justify-end gap-2'>
            <span className='text-base font-medium text-foreground/66'>
              کد سفارش:
            </span>
            <span className='text-base font-medium text-foreground'>
              {code}
            </span>
          </div>

          {/* Rating Button */}
          <div className='flex items-center justify-center gap-3 bg-background rounded-2xl p-3'>
            <span className='lg:hidden xl:block text-base font-medium text-foreground/66'>
              امتیاز
            </span>
            <div className='flex items-center gap-1' dir='ltr'>
              {[1, 2, 3, 4, 5].map((star) => {
                const starState = getStarState(star, rating);
                return (
                  <button
                    key={star}
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className='focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 rounded cursor-pointer effect relative'
                    aria-label={`امتیاز ${star} از 5`}
                  >
                    {starState.type === 'full' ? (
                      <GoStarFill
                        size={20}
                        className='text-yellow-500 transition-colors'
                      />
                    ) : starState.type === 'partial' ? (
                      <div className='relative'>
                        <GoStar
                          size={20}
                          className='text-yellow-500 transition-colors'
                        />
                        <div
                          className='absolute top-0 left-0 overflow-hidden'
                          style={{ width: `${starState.fillPercentage}%` }}
                        >
                          <GoStarFill
                            size={20}
                            className='text-yellow-500 transition-colors'
                          />
                        </div>
                      </div>
                    ) : (
                      <GoStar
                        size={20}
                        className='text-yellow-500 transition-colors'
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Review Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className='btn-secondary flex items-center justify-center gap-2 rounded-2xl py-3 px-10 w-full sm:w-fit md:w-full mx-auto'
      >
        <AiOutlineMessage size={24} className='text-primary mb-1' />
        <span className='text-xl font-bold text-primary'>ثبت دیدگاه</span>
      </button>

      {/* Review Form Modal */}
      <ReviewFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productImage={image}
        productName={name}
      />
    </div>
  );
}
