import { toPersianDigits } from '@/lib/utils';
import { OrderStatusProps, ProfileOrderProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { LuTrash2 } from 'react-icons/lu';

const statusText: Record<OrderStatusProps, string> = {
  processing: 'جاری',
  shipped: 'ارسال شده',
  cancelled: 'لغو شده',
};

const statusColor: Record<OrderStatusProps, string> = {
  processing: 'bg-gray-200 text-gray-800',
  shipped: 'bg-green-100 text-green-600',
  cancelled: 'bg-rose-100 text-rose-600',
};

export default function OrderCard(order: ProfileOrderProps) {
  const { title, code, date, status, total, count, thumbnail, href } = order;

  return (
    <div className='flex flex-col gap-4 py-3 p-1 pl-2 sm:p-3 sm:pl-4 border border-primary/20 rounded-xl'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          {/* Image */}
          <div className='w-16 h-16 rounded-xl overflow-hidden bg-background'>
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title ?? 'product'}
                width={56}
                height={56}
                className='w-full h-full object-cover rounded-xl'
              />
            ) : (
              <div className='flex items-center justify-center w-full h-full bg-foreground/10 text-[10px]'>
                No Image
              </div>
            )}
          </div>
          {/* Title */}
          <div className='font-bold text-xl'>{title}</div>
        </div>
        {/* Status */}
        <div
          className={`flex items-center justify-center w-20 px-3 py-1 rounded-full text-sm font-medium ${statusColor[status]}`}
        >
          {statusText[status]}
        </div>
      </div>

      <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-start justify-between gap-4'>
        {/* Details */}
        <div className='flex flex-wrap items-center justify-between sm:justify-start px-1 gap-1 sm:gap-4 w-full'>
          <div className='font-medium text-foreground/60'>
            مبلغ: <span className='text-foreground'>{total} یورو</span>
          </div>
          <span className='text-primary/30'>&#124;</span>
          <div className='font-medium text-foreground/60'>
            کد سفارش: <span className='text-foreground'>{code}</span>
          </div>
          <span className='text-primary/30'>&#124;</span>
          <div className='font-medium text-foreground/60'>
            تاریخ: <span className='text-foreground'>{date}</span>
          </div>
        </div>
        {/* CTA */}
        {status === 'processing' ? (
          <div className='flex items-center justify-between sm:justify-end gap-2 w-full sm:w-fit md:w-full lg:w-fit'>
            <div className='w-full sm:w-fit flex items-center justify-center gap-4 px-4 py-2 rounded-2xl bg-foreground/5 text-sm font-bold text-foreground'>
              <span className='flex items-center justify-center min-w-12 h-8 px-4 rounded-xl bg-background text-base'>
                {toPersianDigits(count)}
              </span>
              <span className='text-foreground font-bold'>عدد</span>
            </div>
            <button
              type='button'
              className='w-full sm:w-fit flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-foreground/5 text-red-500 text-sm font-medium truncate cursor-pointer effect'
            >
              <LuTrash2 className='h-4 w-4' />
              <span>لغو سفارش</span>
            </button>
          </div>
        ) : (
          <Link
            href={href}
            className='text-primary hover:underline active:underline mx-auto sm:mx-0 md:mr-auto lg:mx-0 min-w-max effect'
          >
            دریافت فاکتور
          </Link>
        )}
      </div>
    </div>
  );
}
