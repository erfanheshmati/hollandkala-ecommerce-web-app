'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import flagFaIcon from '../../public/icons/flag-fa.svg';
import flagEnIcon from '../../public/icons/flag-en.svg';
import { ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'fa', name: 'فا', flag: flagFaIcon },
  { code: 'en', name: 'En', flag: flagEnIcon },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((l) => l.code === locale) ?? languages[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const current = languages.find((l) => l.code === locale);
    if (current && current.code !== selectedLanguage.code) {
      setSelectedLanguage(current);
    }
  }, [locale, selectedLanguage.code]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    
    // Get the actual pathname from the browser URL (includes actual parameter values)
    // This is necessary because usePathname() returns templates like /product/[id] for dynamic routes
    const actualPathname = typeof window !== 'undefined' 
      ? window.location.pathname 
      : pathname;
    
    // Strip the locale prefix to get the base path with actual parameters
    // e.g., /fa/product/123 -> /product/123
    const basePath = actualPathname.replace(/^\/(fa|en)(?=\/|$)/, '') || '/';
    
    router.replace(basePath as Parameters<typeof router.replace>[0], { locale: language.code as 'fa' | 'en' });
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 sm:gap-6 h-12 bg-secondary px-3 py-4 rounded-xl cursor-pointer effect hover:bg-[#e8e8e8]'
      >
        {/* Language display */}
        <div className='flex items-center gap-2'>
          <Image
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            width={24}
            height={24}
            className='rounded-full object-cover min-w-6 max-w-6'
          />
          <span
            className='hidden min-[380px]:block'
            style={{ fontFamily: 'Shabnam, sans-serif' }}
          >
            {selectedLanguage.name}
          </span>
        </div>

        {/* Down arrow */}
        <ChevronDown
          className={`hidden min-[350px]:block w-4 h-4 text-foreground/70 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className='absolute top-full left-0 mt-2 w-24 md:w-28 bg-white rounded-2xl shadow-lg border border-secondary overflow-hidden z-50'>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className='w-full flex items-center gap-2 px-4 py-3 hover:bg-secondary transition-colors duration-200 cursor-pointer'
            >
              <Image
                src={language.flag}
                alt={language.name}
                width={24}
                height={24}
                className='rounded-full object-cover'
                onError={(e) => {
                  // Fallback if flag icon is not available
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span
                className='text-base text-[#2B2B2B]'
                style={{ fontFamily: 'Shabnam, sans-serif' }}
              >
                {language.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
