'use client';

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export function MobileSearch() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLDivElement>(null);

  // Close mobile search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isMobileSearchOpen &&
        searchInputRef.current &&
        !searchInputRef.current.contains(target)
      ) {
        setIsMobileSearchOpen(false);
      }
    };

    if (isMobileSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileSearchOpen]);

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  return (
    <>
      {/* Mobile Search Button */}
      <button
        onClick={toggleMobileSearch}
        className='md:hidden p-3 rounded-xl bg-secondary'
        aria-label={t('common.search')}
      >
        <SearchIcon size={24} className='text-foreground' />
      </button>

      {/* Mobile Search Input */}
      {isMobileSearchOpen && (
        <div
          ref={searchInputRef}
          className='absolute top-full left-0 right-0 p-4 bg-white shadow-lg md:hidden'
        >
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isMobileSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className='relative'>
              <input
                type='text'
                placeholder={t('common.search')}
                className='input w-full rtl:pr-12 ltr:pl-12 rounded-xl h-12'
              />
              <button
                className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 rtl:pb-1 ${
                  locale === 'fa' ? 'right-4' : 'left-4'
                }`}
              >
                <SearchIcon size={24} />
              </button>
              {/* <button
                onClick={() => setIsMobileSearchOpen(false)}
                className='absolute ltr:right-4 rtl:left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
              >
                <X size={24} />
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
