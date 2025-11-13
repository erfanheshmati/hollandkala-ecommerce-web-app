import { useTranslations } from 'next-intl';
import { orderSortData } from '@/lib/data';
import clsx from 'clsx';

export type OrderSortValue = (typeof orderSortData)[number]['param'];

interface OrderSortProps {
  value: OrderSortValue;
  onChange: (value: OrderSortValue) => void;
}

export default function OrderSort({ value, onChange }: OrderSortProps) {
  const t = useTranslations();
  return (
    <div className='flex items-center gap-2 w-full lg:h-full'>
      <div className='hidden sm:flex md:hidden xl:flex items-center gap-2 shrink-0'>
        <span className='text-foreground font-bold text-xl'>
          {t('ui.sortedBy.orders')}
        </span>
      </div>
      <div
        className='flex items-center gap-2 flex-nowrap overflow-x-auto -ml-4 pl-4'
        style={{ scrollbarWidth: 'none' }}
      >
        {orderSortData.map((sort) => (
          <button
            key={sort.param}
            type='button'
            onClick={() => onChange(sort.param)}
            className={clsx(
              'font-medium border rounded-xl px-4 py-1 cursor-pointer effect shrink-0',
              value === sort.param
                ? 'border-primary bg-primary text-background hover:text-background active:text-background'
                : 'text-foreground border-foreground/30 hover:text-primary active:text-primary hover:border-primary active:border-primary'
            )}
          >
            {t(`data.sort.orders.${sort.param}`, { defaultValue: sort.label })}
          </button>
        ))}
      </div>
    </div>
  );
}
