import { orderSortData } from '@/lib/data';
import clsx from 'clsx';

export type OrderSortValue = (typeof orderSortData)[number]['param'];

interface OrderSortProps {
  value: OrderSortValue;
  onChange: (value: OrderSortValue) => void;
}

export default function OrderSort({ value, onChange }: OrderSortProps) {
  return (
    <div className='flex items-center gap-4'>
      <div className='hidden xl:flex items-center gap-2'>
        <span className='text-foreground font-bold text-xl'>
          سفارشات بر اساس:
        </span>
      </div>
      <div className='flex items-center gap-2'>
        {orderSortData.map((sort) => (
          <button
            key={sort.param}
            type='button'
            onClick={() => onChange(sort.param)}
            className={clsx(
              'font-medium border rounded-xl px-4 py-1 cursor-pointer effect truncate',
              value === sort.param
                ? 'border-primary bg-primary text-background hover:text-background active:text-background'
                : 'text-foreground border-foreground/30 hover:text-primary active:text-primary hover:border-primary active:border-primary'
            )}
          >
            {sort.label}
          </button>
        ))}
      </div>
    </div>
  );
}
