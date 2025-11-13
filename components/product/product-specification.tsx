/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ProductProps } from '@/types';
import { Link } from '@/i18n/routing';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

export default function ProductSpecification({
  product,
}: {
  product: ProductProps;
}) {
  const t = useTranslations();
  const specificationItems = useMemo(() => {
    const FALLBACK_SPECIFICATIONS = [
      { label: t('product.specLabels.material'), value: t('product.fallbackSpecs.material') },
      { label: t('product.specLabels.color'), value: t('product.fallbackSpecs.color') },
      { label: t('product.specLabels.usage'), value: t('product.fallbackSpecs.usage') },
      { label: t('product.specLabels.weight'), value: t('product.fallbackSpecs.weight') },
    ];

    const items = [
      {
        label: t('product.specLabels.material'),
        value: product.materials,
      },
      {
        label: t('product.specLabels.color'),
        value: product.colors?.join(t('common.listSeparator')),
      },
      {
        label: t('product.specLabels.usage'),
        value: product.type,
      },
      {
        label: t('product.specLabels.weight'),
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
  }, [product, t]);

  return (
    <div className='rounded-2xl bg-secondary p-4'>
      <div className='flex flex-col gap-4'>
        {/* Title */}
        <h3 className='text-lg md:text-xl font-bold text-foreground'>
          {t('product.specifications')}
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
          href={{ pathname: '/products/[segment]/[category]', params: { segment: 'wholesale', category: 'all' } }}
          className='btn-primary w-fit rounded-xl py-2'
        >
          {t('common.viewAll')}
        </Link>
      </div>
    </div>
  );
}
