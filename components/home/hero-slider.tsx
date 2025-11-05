'use client';

import { slideImages } from '@/lib/data';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [dragDx, setDragDx] = useState(0);
  const [lastDirection, setLastDirection] = useState(0); // -1 left, +1 right

  // swipe/drag state
  const dragStartXRef = useRef<number | null>(null);
  const isMouseDownRef = useRef(false);
  const SWIPE_THRESHOLD = 40; // px

  const goTo = useCallback(
    (idx: number) => {
      const total = slideImages.length;
      const normalized = ((idx % total) + total) % total;
      const delta = (normalized - currentSlide + total) % total;
      const dir = delta === 0 ? 0 : delta <= total / 2 ? 1 : -1;
      setLastDirection(dir);
      setCurrentSlide(normalized);
      // trigger a quick fade-in on change
      setIsFading(true);
      // next frame -> remove to animate to opacity-100
      requestAnimationFrame(() => setIsFading(false));
    },
    [currentSlide]
  );

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      goTo(currentSlide + 1);
    }, 4000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, goTo]);

  const total = slideImages.length;

  const swipeHandlers = {
    onTouchStart: (e: React.TouchEvent) => {
      dragStartXRef.current = e.touches[0].clientX;
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    onTouchMove: (e: React.TouchEvent) => {
      const startX = dragStartXRef.current;
      if (startX == null) return;
      const dx = e.touches[0].clientX - startX;
      setDragDx(dx);
      if (Math.abs(dx) > 8) e.preventDefault();
    },
    onTouchEnd: (e: React.TouchEvent) => {
      const startX = dragStartXRef.current;
      dragStartXRef.current = null;
      if (startX == null) return;
      const endX = e.changedTouches[0].clientX;
      const dx = endX - startX;
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        goTo(currentSlide + (dx < 0 ? -1 : 1));
      }
      setDragDx(0);
    },
    onTouchCancel: () => {
      dragStartXRef.current = null;
      setDragDx(0);
    },
    onMouseDown: (e: React.MouseEvent) => {
      isMouseDownRef.current = true;
      dragStartXRef.current = e.clientX;
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    onMouseMove: (e: React.MouseEvent) => {
      if (!isMouseDownRef.current) return;
      const startX = dragStartXRef.current;
      if (startX == null) return;
      const dx = e.clientX - startX;
      setDragDx(dx);
    },
    onMouseUp: (e: React.MouseEvent) => {
      if (!isMouseDownRef.current) return;
      isMouseDownRef.current = false;
      const startX = dragStartXRef.current;
      dragStartXRef.current = null;
      if (startX == null) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        goTo(currentSlide + (dx < 0 ? -1 : 1));
      }
      setDragDx(0);
    },
    onMouseLeave: () => {
      isMouseDownRef.current = false;
      dragStartXRef.current = null;
      setDragDx(0);
    },
  };

  return (
    <section className={`my-6 md:my-10 select-none`}>
      {/* Desktop: 5 images visible (60px, 60px, center, 60px, 60px) */}
      <div
        className={`hidden md:grid grid-cols-[60px_60px_1fr_60px_60px] gap-3 md:h-80 lg:h-[400px] xl:h-[500px] 2xl:h-[540px] effect ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {[-2, -1, 0, 1, 2].map((offset) => {
          const idx = (currentSlide + offset + total) % total;
          const img = slideImages[idx];
          const isCenter = offset === 0;

          return (
            <button
              key={`hero-col-${offset}-${idx}`}
              onClick={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                goTo(idx);
              }}
              className={`relative w-full h-full overflow-hidden rounded-4xl effect ${
                isCenter ? 'cursor-grab' : 'hover:opacity-80 cursor-pointer'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              type='button'
            >
              <div
                className='absolute inset-0 effect'
                style={
                  isCenter
                    ? {
                        opacity: isFading ? 0 : 1,
                        transform: isFading
                          ? `translateX(${lastDirection * 24}px) scale(0.98)`
                          : `translateX(${dragDx * 0.2}px) scale(${Math.max(
                              0.97,
                              1 - Math.min(Math.abs(dragDx) / 1000, 0.03)
                            )})`,
                      }
                    : undefined
                }
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes={isCenter ? '40vw' : '60px'}
                  className='object-cover rounded-4xl'
                  draggable={false}
                  priority={isCenter}
                />
              </div>
              {isCenter ? (
                <div className='absolute inset-0' {...swipeHandlers} />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Mobile: 3 images visible (30px, center, 30px) */}
      <div
        className={`grid md:hidden grid-cols-[30px_1fr_30px] gap-2 h-[210px] sm:h-[280px] effect ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {[-1, 0, 1].map((offset) => {
          const idx = (currentSlide + offset + total) % total;
          const img = slideImages[idx];
          const isCenter = offset === 0;
          return (
            <button
              key={`hero-mobile-col-${offset}-${idx}`}
              onClick={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                goTo(idx);
              }}
              className={`relative w-full h-full overflow-hidden rounded-2xl ${
                isCenter ? '' : ''
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              type='button'
            >
              <div
                className='absolute inset-0 effect'
                style={
                  isCenter
                    ? {
                        opacity: isFading ? 0 : 1,
                        transform: isFading
                          ? `translateX(${lastDirection * 24}px) scale(0.98)`
                          : `translateX(${dragDx * 0.2}px) scale(${Math.max(
                              0.97,
                              1 - Math.min(Math.abs(dragDx) / 1000, 0.03)
                            )})`,
                      }
                    : undefined
                }
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes={isCenter ? '70vw' : '30px'}
                  className='object-cover rounded-2xl'
                  draggable={false}
                  priority={isCenter}
                />
              </div>
              {isCenter ? (
                <div className='absolute inset-0' {...swipeHandlers} />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className='flex justify-center gap-2 mt-4 md:mt-6'>
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              goTo(idx);
            }}
            className={`h-2 rounded-full cursor-pointer effect ${
              idx === currentSlide
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400 active:bg-gray-400 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
