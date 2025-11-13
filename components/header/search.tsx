'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Search() {
  const t = useTranslations();

  return (
    <div className='hidden md:flex flex-1 md:max-w-3xs lg:max-w-md relative'>
      <input
        type='text'
        placeholder={`${t('common.search')}...`}
        className='input w-full rtl:pr-12 ltr:pl-12 rounded-xl h-12'
      />
      <span className='absolute rtl:right-4 ltr:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 rtl:pb-1'>
        <SearchIcon size={24} />
      </span>
    </div>
  );
}
