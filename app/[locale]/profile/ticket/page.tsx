'use client';

import TicketCard from '@/components/profile/ticket-card';
import TicketSort, { TicketSortValue } from '@/components/profile/ticket-sort';
import { profileTickets } from '@/lib/data';
import { useState, useMemo } from 'react';
import TicketFormModal from '@/components/profile/ticket-form-modal';
import { useTranslations } from 'next-intl';

export default function ProfileTicketPage() {
  const t = useTranslations();
  const [statusFilter, setStatusFilter] = useState<TicketSortValue>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTickets = useMemo(() => {
    return profileTickets.filter((ticket) => {
      if (statusFilter === 'all') {
        return true;
      }
      return ticket.status === statusFilter;
    });
  }, [statusFilter]);

  return (
    <section className='flex flex-col gap-6 py-4 md:p-4 lg:p-6 xl:p-8'>
      <div className='flex flex-col lg:flex-row items-start md:items-center justify-between gap-6'>
        {/* Sort Bar */}
        <TicketSort value={statusFilter} onChange={setStatusFilter} />
        {/* Add New Ticket Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className='btn-primary min-w-max rounded-2xl py-3 md:py-2 w-full sm:w-fit sm:self-start font-medium'
        >
          {t('profile.ticket.addNewTicket')}
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} />
          ))
        ) : (
          <div className='text-center py-8 text-foreground/60'>
            {t('common.empty.noTickets')}
          </div>
        )}
      </div>

      {/* New Ticket Form Modal */}
      <TicketFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}


