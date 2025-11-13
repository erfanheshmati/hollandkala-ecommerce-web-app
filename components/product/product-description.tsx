'use client';

import { ProductProps } from "@/types";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function ProductDescription({
  product,
}: {
  product: ProductProps;
}) {
  const t = useTranslations();
  return (
    <div className="rounded-2xl bg-secondary p-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          {t('product.introduction')}
        </h3>
        <p className="leading-6 text-foreground/80">{product.description}</p>
        <Link
          href={{ pathname: '/products/[segment]/[category]', params: { segment: 'wholesale', category: 'all' } }}
          className="btn-primary w-fit rounded-xl py-2"
        >
          {t('common.viewAll')}
        </Link>
      </div>
    </div>
  );
}
