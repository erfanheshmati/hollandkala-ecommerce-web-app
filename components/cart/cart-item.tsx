'use client';

import { CartProps } from '@/types';
import { Plus, Trash2, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CartItemProps {
  item: CartProps;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) {
  return (
    <li className='flex flex-col gap-2 relative rounded-2xl border border-primary/20 p-2'>
      {/* Product Info Group */}
      <div className='flex gap-2'>
        {/* Image */}
        <div className='flex items-center justify-center w-16 h-16 rounded-xl overflow-hidden bg-secondary'>
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              width={68}
              height={68}
              className='w-full h-full object-cover'
            />
          ) : (
            <div className='text-xs text-foreground/50'>No Image</div>
          )}
        </div>

        {/* Details */}
        <div className='flex flex-col gap-1 pt-2'>
          {/* Title */}
          <div className='font-bold'>{item.title}</div>
          {/* Code */}
          <div className='flex items-center gap-1'>
            <span className='font-medium text-foreground/60 line-clamp-1'>
              کد سفارش:
            </span>
            <span className='font-medium'>{item.code}</span>
          </div>
        </div>

        {/* Date */}
        <div className='flex items-start gap-1 mr-auto'>
          <span className='text-sm font-medium text-foreground/60'>تاریخ:</span>
          <span className='text-sm font-medium'>{item.date}</span>
        </div>
      </div>

      {/* Price */}
      <div className='min-[390px]:hidden flex items-center gap-1'>
        <span className='font-medium text-foreground/60'>مبلغ:</span>
        <span className='font-bold'>{item.price} یورو</span>
      </div>

      {/* Bottom Section: Price, Quantity, Order Button */}
      <div className='flex items-center justify-between gap-2'>
        {/* Price */}
        <div className='hidden min-[390px]:flex items-center gap-1'>
          <span className='font-medium text-foreground/60'>مبلغ:</span>
          <span className='font-bold'>{item.price} یورو</span>
        </div>
        {/* Quantity Controls */}
        <div className='flex items-center gap-2 bg-secondary rounded-xl px-2 py-1 min-[390px]:mr-auto'>
          {/* Plus Button */}
          <button
            className='text-foreground/90 hover:text-black cursor-pointer effect'
            aria-label='increase quantity'
            onClick={() => onIncrement(item.id)}
          >
            <Plus className='w-4 h-4' />
          </button>
          {/* Quantity Display */}
          <div className='flex items-center justify-center px-8 py-1 bg-background rounded-xl'>
            <span className='font-bold'>{item.quantity}</span>
          </div>
          {/* Minus or Delete Button */}
          {item.quantity > 1 ? (
            <button
              className='text-foreground/90 hover:text-black cursor-pointer effect'
              aria-label='decrease quantity'
              onClick={() => onDecrement(item.id)}
            >
              <Minus className='w-4 h-4' />
            </button>
          ) : (
            <button
              className='cursor-pointer effect group'
              aria-label='remove item'
              onClick={() => onRemove(item.id)}
            >
              <Trash2 className='w-5 h-5 text-red-500 group-hover:text-red-600 effect' />
            </button>
          )}
        </div>
        {/*  Order Button */}
        <Link href='/cart' className='btn-accent py-2 rounded-xl'>
          ثبت سفارش
        </Link>
      </div>
    </li>
  );
}
