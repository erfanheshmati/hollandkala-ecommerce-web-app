/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ProductProps } from '@/types';
import Link from 'next/link';
import { useMemo } from 'react';

export default function ProductSpecification({
  product,
}: {
  product: ProductProps;
}) {
  const specificationItems = useMemo(() => {
    const FALLBACK_SPECIFICATIONS = [
      { label: 'جنس رویه', value: 'پارچه، فوم' },
      { label: 'رنگ', value: 'قرمز' },
      { label: 'مورد استفاده', value: 'اسپرت / روزمره' },
      { label: 'وزن', value: '۱۰۰ گرم' },
    ];

    const items = [
      {
        label: 'جنس رویه',
        value: product.materials,
      },
      {
        label: 'رنگ',
        value: product.colors?.join('، '),
      },
      {
        label: 'مورد استفاده',
        value: product.type,
      },
      {
        label: 'وزن',
        value: product.weight,
      },
    ].filter(
      (item): item is { label: string; value: string } =>
        typeof item.value === 'string' && item.value.trim().length > 0
    );

    if (items.length === 0) {
      return FALLBACK_SPECIFICATIONS;
    }

    return items;
  }, [product]);

  return (
    <div className='rounded-2xl bg-secondary p-4'>
      <div className='flex flex-col gap-4'>
        {/* Title */}
        <h3 className='text-lg md:text-xl font-bold text-foreground'>
          مشخصات کلی
        </h3>

        {/* Specification Items */}
        <div className='flex flex-col gap-2'>
          {specificationItems.map((item: any) => (
            <div
              key={`${item.label}-${item.value}`}
              className='flex items-center gap-2 rounded-2xl bg-background p-4'
            >
              <span className='text-foreground/60 font-medium'>
                {item.label}:
              </span>
              <span className='font-bold text-foreground'>{item.value}</span>
            </div>
          ))}
        </div>
        <Link
          href='/products/wholesale/all'
          className='btn-primary w-fit rounded-xl py-2'
        >
          مشاهده ی همه
        </Link>
      </div>
    </div>
  );
}
