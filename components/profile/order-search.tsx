'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface OrderSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function OrderSearch({ value, onChange }: OrderSearchProps) {
  const t = useTranslations();
  return (
    <div className='relative w-full lg:max-w-3xs h-11'>
      <input
        type='text'
        placeholder={t('profile.order.searchPlaceholder')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full h-full rtl:pr-11 ltr:pl-11 px-4 rounded-xl bg-secondary border-none outline-none text-sm font-medium text-foreground'
      />
      <span className='absolute rtl:right-3 ltr:left-3 top-1/2 transform -translate-y-1/2 text-foreground/40'>
        <SearchIcon size={24} />
      </span>
    </div>
  );
}
