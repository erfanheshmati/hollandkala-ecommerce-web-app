'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ShoppingCart } from 'lucide-react';
import CartModal from '@/components/cart/cart-modal';
import { cartItems } from '@/lib/data';

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const itemsCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, mounted]);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='hidden md:block p-3 rounded-xl bg-secondary hover:bg-[#e8e8e8] cursor-pointer effect relative'
        aria-label='Open cart'
      >
        <ShoppingCart size={24} className='text-foreground' />
        {itemsCount > 0 && (
          <span className='absolute -top-2 -right-2 w-5 h-5 p-1 rounded-full bg-primary text-background text-xs font-bold'>
            {itemsCount}
          </span>
        )}
      </button>

      {mounted &&
        open &&
        createPortal(
          <CartModal items={cartItems} onClose={() => setOpen(false)} />,
          document.body
        )}
    </>
  );
}
