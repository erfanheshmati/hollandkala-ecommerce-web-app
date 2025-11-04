'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function PromotionalPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenPromotionalPopup');

    if (!hasSeenPopup) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Disable background scroll when popup is open
  useEffect(() => {
    if (!mounted) return;
    if (showPopup) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [showPopup, mounted]);

  // Don't render anything until after hydration
  if (!mounted) return null;

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('hasSeenPromotionalPopup', 'true');
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Overlay - covers full background including header */}
      <div className='fixed inset-0 bg-black/50 z-200' onClick={handleClose} />

      {/* Popup Container */}
      <div
        className='fixed inset-0 z-201 flex items-center justify-center p-4 pointer-events-none'
        onClick={handleOverlayClick}
      >
        {/* Popup Content */}
        <div
          className='relative w-full max-w-sm rounded-3xl overflow-hidden pointer-events-auto'
          onClick={(e) => e.stopPropagation()}
          style={{
            background:
              'linear-gradient(223deg, rgba(76, 70, 255, 1) 10%, rgba(144, 0, 255, 1) 98%)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className='absolute top-7 right-7 flex items-center gap-2 text-background z-10 cursor-pointer group'
          >
            <div className='flex items-center justify-center w-9 h-9 rounded-lg border group-hover:bg-background/20 effect'>
              <X className='w-5 h-5 text-background' />
            </div>
            {/* <span className='text-xl font-medium'>بستن</span> */}
          </button>

          {/* Decorative Circles */}
          <Image
            src='/images/decorative-circle-1.svg'
            alt=''
            width={176}
            height={176}
            sizes='176px'
            className='absolute -top-28 -left-14 w-44 h-44 opacity-40'
          />
          <Image
            src='/images/decorative-circle-2.svg'
            alt=''
            width={183}
            height={183}
            sizes='183px'
            className='absolute -bottom-20 -right-20 w-[183px] h-[183px] opacity-43'
          />

          {/* Content */}
          <div className='flex flex-col items-center justify-center h-full p-6 relative mt-14'>
            {/* Text Content */}
            <div className='flex flex-col items-center gap-2 mb-6'>
              <h2 className='text-4xl font-bold text-white'>با خرید عمده</h2>
              <p className='text-2xl font-normal text-white'>
                زیر قیمت بازار خرید کن
              </p>
              {/* CTA Button */}
              <button
                onClick={() => {
                  handleClose();
                  // Optional: Navigate to products page or trigger scroll
                  window.location.href = '#';
                }}
                className='bg-white text-foreground px-4 py-3 rounded-2xl font-medium text-xl hover:bg-white/70 cursor-pointer effect'
              >
                مشاهده ی همه محصولات
              </button>
            </div>

            {/* Product Illustration */}
            <div className='flex items-center justify-center w-[200px] h-40 relative'>
              <Image
                src='/images/product-illustration.svg'
                alt='Product illustration'
                fill
                sizes='200px'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
