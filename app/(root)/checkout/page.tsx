'use client';

import { useState } from 'react';
import { CartProps } from '@/types';
import { cartItems } from '@/lib/data';
import Breadcrumb from '@/components/shared/breadcrumb';
import CartItem from '@/components/cart/cart-item';
import Image from 'next/image';
import { toPersianDigits } from '@/lib/utils';
import { BsChevronDown, BsPatchCheck } from 'react-icons/bs';

export default function CheckoutPage() {
  const [items] = useState<CartProps[]>(cartItems);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    province: '',
    city: '',
    nationalCode: '',
    zipCode: '',
    address: '',
    description: '',
    paymentMethod: 'zibal1' as 'zibal1' | 'zibal2' | 'zibal3',
    discountCode: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (
    method: 'zibal1' | 'zibal2' | 'zibal3'
  ) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 5;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout submission
    console.log('Checkout submitted:', formData);
  };

  return (
    <div className='container flex flex-col gap-6 pt-24 md:pt-36'>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'صفحه اصلی', href: '/' },
          { label: 'سبد خرید', href: '/cart' },
          { label: 'تایید و ثبت سفارش' },
        ]}
      />

      {/* Title */}
      <h1 className='text-2xl font-bold'>ثبت سفارش</h1>

      {/* Content */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
        {/* Form Grid */}
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8'>
          {/* Inputs Column */}
          {/* <div className='flex flex-col gap-8 md:col-span-2 md:sticky md:top-10 self-start'> */}
          <div className='flex flex-col gap-8 md:col-span-2'>
            {/* All Form Inputs */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {/* Full Name */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  نام و نام خانوادگی:{' '}
                </label>
                <input
                  id='fullName'
                  name='fullName'
                  type='text'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className='bg-transparent text-xl font-medium text-primary outline-none'
                  required
                />
              </div>

              {/* Phone */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  شماره تماس:{' '}
                </label>
                <input
                  id='phone'
                  name='phone'
                  type='number'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='bg-transparent text-xl font-medium text-primary outline-none'
                  required
                />
              </div>

              {/* Province */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  استان:{' '}
                </label>
                <input
                  id='province'
                  name='province'
                  type='text'
                  value={formData.province}
                  onChange={handleInputChange}
                  className='bg-transparent text-xl font-medium text-primary outline-none'
                  required
                />
              </div>

              {/* City */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  شهرستان:{' '}
                </label>
                <input
                  id='city'
                  name='city'
                  type='text'
                  value={formData.city}
                  onChange={handleInputChange}
                  className='bg-transparent text-xl font-medium text-primary outline-none'
                  required
                />
              </div>

              {/* National Code */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  کد ملی:{' '}
                </label>
                <input
                  id='nationalCode'
                  name='nationalCode'
                  type='number'
                  value={formData.nationalCode}
                  onChange={handleInputChange}
                  className='bg-transparent text-xl font-medium text-primary outline-none'
                  required
                />
              </div>

              {/* Zip Code */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  کد پستی:{' '}
                </label>
                <input
                  id='zipCode'
                  name='zipCode'
                  type='number'
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className='bg-transparent text-xl font-medium text-primary outline-none'
                  required
                />
              </div>

              {/* Address */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 sm:col-span-2'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  آدرس تحویل سفارش:{' '}
                </label>
                <textarea
                  id='address'
                  name='address'
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className='bg-transparent text-xl font-medium text-primary outline-none resize-none'
                  required
                />
              </div>

              {/* Description */}
              <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 sm:col-span-2'>
                <label className='text-base font-normal text-foreground opacity-44'>
                  توضیحات سفارش (اختیاری):{' '}
                </label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className='bg-transparent text-xl font-medium text-primary outline-none resize-none'
                  required
                />
              </div>
            </div>
          </div>

          {/* Order */}
          <div className='flex flex-col gap-6 md:col-span-2 lg:col-span-1 p-4 rounded-2xl bg-secondary'>
            {/* Title & Items */}
            <div className='flex flex-col gap-2'>
              {/* Title */}
              <h2 className='text-xl font-bold text-center'>سبد سفارش</h2>
              {/* Order Items */}
              <ul className='flex flex-col gap-2'>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrement={() => {}}
                    onDecrement={() => {}}
                    onRemove={() => {}}
                    className='bg-background'
                  />
                ))}
              </ul>
            </div>

            {/* Payment Method */}
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl font-bold text-center'>
                انتخاب درگاه پرداخت
              </h2>
              <div className='flex flex-wrap items-center justify-between gap-2 p-4 rounded-2xl bg-background'>
                {(['zibal1', 'zibal2', 'zibal3'] as const).map((method) => {
                  const isSelected = formData.paymentMethod === method;
                  return (
                    <div
                      key={method}
                      className='flex flex-col items-center gap-3'
                    >
                      <button
                        type='button'
                        onClick={() => handlePaymentMethodChange(method)}
                        className={`flex items-center justify-center rounded-xl p-4 w-20 h-16 cursor-pointer ${
                          isSelected
                            ? 'border-primary bg-secondary'
                            : 'border border-primary/50 bg-background'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <Image
                          src={'/icons/zibal.svg'}
                          alt={method}
                          width={53}
                          height={18}
                          className='object-cover'
                        />
                      </button>
                      <label className='flex items-center gap-1 cursor-pointer select-none'>
                        <input
                          type='radio'
                          name='paymentMethod'
                          value={method}
                          checked={isSelected}
                          onChange={() => handlePaymentMethodChange(method)}
                          className='peer sr-only'
                          aria-label='پرداخت امن زیبال'
                        />
                        <span
                          className={`flex items-center justify-center w-4 h-4 rounded-full border effect ${
                            isSelected
                              ? 'border-primary'
                              : 'border-foreground/40'
                          }`}
                          aria-hidden='true'
                        >
                          {isSelected && (
                            <span className='w-2.5 h-2.5 rounded-full bg-primary' />
                          )}
                        </span>
                        <span className='font-bold text-primary text-sm'>
                          پرداخت زیبال
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Summary */}
            <div className='flex flex-col gap-6 bg-background rounded-2xl p-4 border border-primary/20 max-md:fixed max-md:bottom-16 max-md:left-0 max-md:right-0 max-md:rounded-b-none'>
              {/* Mobile header with toggle */}
              <div
                onClick={() => setIsSummaryOpen((prev) => !prev)}
                className='md:hidden flex items-center justify-between cursor-pointer'
              >
                <span className='font-bold'>جمع کل</span>
                <button
                  type='button'
                  aria-label='باز/بسته کردن خلاصه قیمت'
                  aria-expanded={isSummaryOpen}
                  className='text-primary cursor-pointer'
                >
                  <BsChevronDown
                    size={18}
                    className={`${isSummaryOpen ? '' : 'rotate-180'} effect`}
                  />
                </button>
                <div className='flex items-center gap-2'>
                  <span className='font-bold'>
                    {toPersianDigits(total)} یورو
                  </span>
                </div>
              </div>

              {/* Collapsible content (always visible on md+) */}
              <div
                className={`md:block ${
                  isSummaryOpen ? 'block' : 'hidden'
                } space-y-3`}
              >
                <div className='relative'>
                  <BsPatchCheck
                    size={20}
                    className='absolute right-3 top-4.5 text-foreground/80'
                  />
                  <input
                    id='discountCode'
                    name='discountCode'
                    type='text'
                    value={formData.discountCode}
                    onChange={handleInputChange}
                    placeholder='کد تخفیف:'
                    className='input w-full rounded-2xl pr-10 placeholder:text-foreground/80'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-foreground/60'>تعداد محصول</span>
                  <span className='font-bold'>
                    {toPersianDigits(items.length)} عدد
                  </span>
                </div>
                <div className='h-px w-full bg-foreground/10' />
                <div className='flex items-center justify-between'>
                  <span className='text-foreground/60'>جمع سبد</span>
                  <span className='font-bold'>
                    {toPersianDigits(subtotal)} یورو
                  </span>
                </div>
                <div className='h-px w-full bg-foreground/10' />
                <div className='flex items-center justify-between'>
                  <span className='text-foreground/60'>هزینه ارسال</span>
                  <span className='font-bold'>
                    {toPersianDigits(shipping)} یورو
                  </span>
                </div>
                <div className='h-px w-full bg-foreground/10 max-md:hidden' />
                <div className='hidden md:flex items-center justify-between text-lg'>
                  <span className='font-bold'>جمع کل</span>
                  <span className='font-bold'>
                    {toPersianDigits(total)} یورو
                  </span>
                </div>
                {/* Submit Button */}
                <button
                  type='submit'
                  className='btn-primary rounded-2xl font-medium w-full'
                >
                  پرداخت
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
