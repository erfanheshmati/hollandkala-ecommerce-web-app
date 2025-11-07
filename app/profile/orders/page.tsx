'use client';

import OrderCard from '@/components/profile/order-card';
import OrderSearch from '@/components/profile/order-search';
import OrderSort, { OrderSortValue } from '@/components/profile/order-sort';
import { profileOrders } from '@/lib/data';
import { useState, useMemo } from 'react';

export default function ProfileOrdersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderSortValue>('all');

  const filteredOrders = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return profileOrders.filter((order) => {
      const matchesStatus =
        statusFilter === 'all' ? true : order.status === statusFilter;
      if (!query) {
        return matchesStatus;
      }

      const matchesQuery =
        order.title.toLowerCase().includes(query) ||
        order.code.toLowerCase().includes(query) ||
        order.id.toLowerCase().includes(query);

      return matchesStatus && matchesQuery;
    });
  }, [searchQuery, statusFilter]);

  return (
    <section className='flex flex-col gap-6 py-4 md:p-4 lg:p-6 xl:p-8'>
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6'>
        {/* Sort Bar */}
        <OrderSort value={statusFilter} onChange={setStatusFilter} />
        {/* Search Box */}
        <OrderSearch value={searchQuery} onChange={setSearchQuery} />
      </div>
      <div className='flex flex-col gap-4'>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, idx) => <OrderCard key={idx} {...order} />)
        ) : (
          <div className='text-center py-8 text-foreground/60'>
            سفارشی یافت نشد
          </div>
        )}
      </div>
    </section>
  );
}
