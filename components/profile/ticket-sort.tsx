import { ticketSortData } from '@/lib/data';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';

export type TicketSortValue = (typeof ticketSortData)[number]['param'];

interface TicketSortProps {
  value: TicketSortValue;
  onChange: (value: TicketSortValue) => void;
}

export default function TicketSort({ value, onChange }: TicketSortProps) {
  const t = useTranslations();
  return (
    <div className='flex items-center gap-2 w-full lg:h-full'>
      <div className='hidden sm:flex md:hidden xl:flex items-center gap-2 shrink-0'>
        <span className='text-foreground font-bold text-xl'>
          {t('ui.sortedBy.tickets')}
        </span>
      </div>
      <div
        className='flex items-center gap-2 flex-nowrap overflow-x-auto -ml-4 pl-4'
        style={{ scrollbarWidth: 'none' }}
      >
        {ticketSortData.map((sort) => (
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
            {t(`data.sort.tickets.${sort.param}`, { defaultValue: sort.label })}
          </button>
        ))}
      </div>
    </div>
  );
}
