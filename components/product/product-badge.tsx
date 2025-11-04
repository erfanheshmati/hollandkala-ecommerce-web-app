'use client';

import { useState } from 'react';
import { PiSealCheckFill } from 'react-icons/pi';

import { ProductProps } from '@/types';
import { cn, toPersianDigits } from '@/lib/utils';

const PURCHASE_MODES = ['تکی', 'عمده'] as const;

export default function ProductBadge({ product }: { product: ProductProps }) {
  const [activePurchaseMode, setActivePurchaseMode] = useState<
    (typeof PURCHASE_MODES)[number]
  >(PURCHASE_MODES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');

  const activePriceLabel =
    activePurchaseMode === 'تکی' ? 'قیمت تکی' : 'قیمت عمده';

  const isOutOfStock = !product.availability || product.stock === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Phone:', phoneNumber, 'Description:', description);
  };

  return (
    <aside className='w-full xl:max-w-xs flex flex-col gap-8 rounded-2xl border border-foreground/20 p-4'>
      {/* Out of stock */}
      {isOutOfStock && (
        <div className='flex flex-col gap-4 h-full'>
          {/* Header */}
          <div className='flex items-center justify-between gap-2'>
            <h2 className='text-xl font-bold text-foreground'>
              اطلاع از تجدید موجودی
            </h2>
            <span className='w-fit rounded-2xl px-2 py-1 text-sm bg-red-100 text-red-600'>
              ناموجود
            </span>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
              id='phone'
              type='number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder='شماره تماس خود را وارد کنید'
              className='input rounded-2xl'
              required
            />
            <textarea
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='توضیحات خود را وارد کنید'
              rows={4}
              className='input rounded-2xl resize-none'
            />
            <button type='submit' className='btn-tertiary rounded-2xl'>
              ارسال
            </button>
          </form>
          {/* Separator */}
          <div className='h-px w-full bg-foreground/10' />
          <div className='flex flex-col gap-2 mt-auto'>
            {/* Title */}
            <div className='flex items-center justify-between'>
              <span className='text-foreground/50'>نام محصول :</span>
              <span className='text-lg font-medium text-foreground line-clamp-1'>
                {product.title}
              </span>
            </div>
            {/* Code */}
            <div className='flex items-center justify-between'>
              <span className='text-foreground/50'>کد محصول :</span>
              <span className='text-lg font-medium text-foreground'>
                {product.code}
              </span>
            </div>
            {/* Price */}
            <div className='flex items-center justify-between'>
              <span className='text-foreground/50'>قیمت :</span>
              <span className='text-lg font-medium text-foreground'>
                {product.originalPrice} یورو
              </span>
            </div>
          </div>
        </div>
      )}

      {/* In stock */}
      {!isOutOfStock && (
        <div className='flex flex-col gap-8 h-full'>
          <div className='flex flex-col gap-3'>
            {/* Title */}
            <h2 className='text-xl font-bold text-foreground'>
              {product.title}
            </h2>
            {/* Badges */}
            <div className='flex flex-wrap gap-2'>
              {product.badges?.map((badge, index) => {
                const palette = [
                  'bg-[#21468B1A] text-[#21468B]',
                  'bg-[#E1324E1A] text-[#E1324E]',
                  'bg-[#47B8011A] text-[#47B801]',
                ];

                return (
                  <span
                    key={`${badge}-${index}`}
                    className={cn(
                      'rounded-2xl px-3 py-1 text-sm font-medium leading-6',
                      palette[index % palette.length]
                    )}
                  >
                    {badge}
                  </span>
                );
              })}
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            {/* Code */}
            <div className='flex items-center justify-between'>
              <span className='text-foreground/50'>کد محصول :</span>
              <span className='text-lg font-semibold text-foreground'>
                {product.code}
              </span>
            </div>
            {/* Separator */}
            <div className='h-px w-full bg-foreground/10' />
            {/* Price */}
            <div className='flex items-center justify-between'>
              <div className='flex flex-col items-start gap-1'>
                <span className='text-sm text-foreground/50'>
                  {activePriceLabel}
                </span>
                <span className='rounded-2xl bg-red-500 px-3 pt-1 font-semibold text-background'>
                  {product.discountPercentage}%
                </span>
              </div>
              <div className='flex flex-col items-end gap-0'>
                <span className='text-2xl font-bold text-foreground'>
                  {product.purchaseMode === 'تکی'
                    ? toPersianDigits(product.retailPrice)
                    : toPersianDigits(product.wholesalePrice)}{' '}
                  یورو
                </span>
                <span className='text-foreground/55 text-lg font-bold relative inline-block px-1'>
                  {toPersianDigits(product.originalPrice)} یورو
                  {/* Line Through */}
                  <span
                    className='absolute left-0 right-0 border-b-2 border-primary'
                    style={{ bottom: '50%' }}
                  />
                </span>
              </div>
            </div>

            {/* Separator */}
            <div className='h-px w-full bg-foreground/10' />

            {/* Purchase Type */}
            <div className='flex items-center justify-between'>
              <span className='text-sm text-foreground/50'>خرید به صورت :</span>
              <div className='flex items-center gap-2'>
                {PURCHASE_MODES.map((mode) => {
                  const isActive = activePurchaseMode === mode;
                  return (
                    <button
                      key={mode}
                      type='button'
                      onClick={() => setActivePurchaseMode(mode)}
                      className={cn(
                        'rounded-2xl border px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary cursor-pointer effect',
                        isActive
                          ? 'border-primary bg-white text-primary shadow-sm'
                          : 'border-transparent bg-[#21468B14] text-[#2B2B2B] hover:border-[#21468B33]'
                      )}
                    >
                      {mode}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className='flex items-center gap-2 text-green-600'>
            <PiSealCheckFill className='text-green-600' size={20} />
            <span className='text-sm font-semibold'>
              گارانتی اصالت و سلامت فیزیکی کالا
            </span>
          </div>

          {/* Add to cart */}
          <button
            type='button'
            className='btn-primary font-medium rounded-2xl mt-auto'
          >
            افزودن به سبد
          </button>
        </div>
      )}
    </aside>
  );
}
