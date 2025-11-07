'use client';

import { useState } from 'react';
import CartItem from '@/components/cart/cart-item';
import { cartItems } from '@/lib/data';
import { CartProps } from '@/types';

export default function CartPage() {
  const [items, setItems] = useState<CartProps[]>(cartItems);

  const incrementQuantity = (id: string) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: it.quantity + 1 } : it
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setItems((prev) =>
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
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  //   const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div className='container flex flex-col gap-4 pt-28 md:pt-40 min-h-screen'>
      <h1 className='text-2xl font-bold'>سبد خرید</h1>

      {items.length === 0 ? (
        <div className='py-10 text-center text-foreground/60'>
          سبد خرید خالی است
        </div>
      ) : (
        <ul className='space-y-4'>
          {items.map((item) => (
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
  );
}
