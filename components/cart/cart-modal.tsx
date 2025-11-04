'use client';

import { CartProps } from '@/types';
import CartItem from '@/components/cart/cart-item';
import { useEffect, useState, useCallback } from 'react';

export default function CartModal({
  items = [],
  onClose,
}: {
  items?: CartProps[];
  onClose: () => void;
}) {
  // const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  const [localItems, setLocalItems] = useState<CartProps[]>(items);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  // Handle enter animation
  useEffect(() => {
    // Small delay to trigger animation
    const timer = setTimeout(() => setIsOpen(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Handle close with exit animation
  const handleClose = useCallback(() => {
    setIsOpen(false);
    // Wait for exit animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 300); // Match transition duration
  }, [onClose]);

  const incrementQuantity = (id: string) => {
    setLocalItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: it.quantity + 1 } : it
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setLocalItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? {
              ...it,
              quantity: it.quantity > 1 ? it.quantity - 1 : 1,
            }
          : it
      )
    );
  };

  const removeItem = (id: string) => {
    setLocalItems((prev) => prev.filter((it) => it.id !== id));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [handleClose]);

  return (
    <div className='fixed inset-0 z-50'>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      />

      {/* Content */}
      <div
        className={`absolute top-34 left-[25%] w-full max-w-md bg-background rounded-2xl transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        {/* Header */}
        <div className='p-4 border-b border-foreground/10'>
          <h3 className='text-lg font-bold text-center'>سبد خرید</h3>
        </div>

        {/* Items */}
        <div
          className='max-h-[210px] overflow-y-auto p-4'
          style={{ scrollbarWidth: 'thin' }}
        >
          {localItems.length === 0 ? (
            <div className='py-10 text-center text-foreground/60'>
              سبد خرید خالی است
            </div>
          ) : (
            <ul className='space-y-4'>
              {localItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={incrementQuantity}
                  onDecrement={decrementQuantity}
                  onRemove={removeItem}
                />
              ))}
            </ul>
          )}
        </div>

        <div className='p-4 border-t border-foreground/10'>
          {/* <div className='flex items-center justify-between mb-4'>
            <span className='text-foreground/70'>مجموع</span>
            <span className='font-bold text-foreground'>
              {total.toLocaleString()} تومان
            </span>
          </div> */}
          {/* <div className='flex gap-3'>
            <Link
              href='/cart'
              className='btn-accent w-full rounded-xl py-3 text-center'
            >
              ثبت سفارش
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
