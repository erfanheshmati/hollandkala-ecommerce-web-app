'use client';

import { Search as SearchIcon } from 'lucide-react';

interface OrderSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function OrderSearch({ value, onChange }: OrderSearchProps) {
  return (
    <div className='relative w-full lg:max-w-2xs h-11'>
      <input
        type='text'
        placeholder='جست و جو نام یا کد سفارش'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full h-full pr-11 pl-4 rounded-xl bg-secondary border-none outline-none text-sm font-medium text-foreground'
      />
      <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/40'>
        <SearchIcon size={24} />
      </span>
    </div>
  );
}
