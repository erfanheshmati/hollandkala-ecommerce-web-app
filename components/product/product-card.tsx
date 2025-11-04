'use client';

import { ProductProps } from '@/types';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BsCart2 } from 'react-icons/bs';
import { toPersianDigits } from '@/lib/utils';

type ProductCardComponentProps =
  | ProductProps
  | {
      product: ProductProps;
      isFavorite?: boolean;
    };

export default function ProductCard(props: ProductCardComponentProps) {
  const product =
    'product' in props && props.product
      ? props.product
      : (props as ProductProps);

  const propIsFavorite =
    'product' in props && typeof props.isFavorite !== 'undefined'
      ? props.isFavorite
      : undefined;

  const [isFavorite, setIsFavorite] = useState(propIsFavorite ?? false);
  const pathname = usePathname();
  const routesWithSecondaryBg = ['/products', '/favorites', 'gifts'];
  const shouldUseSecondaryBg = routesWithSecondaryBg.some((route) =>
    pathname.includes(route)
  );

  const badgeColorClasses: Record<string, string> = {
    'تعداد عمده': 'bg-primary/10 text-primary',
    'ورزشکاران حرفه ای': 'bg-[#E1324E]/10 text-[#E1324E]',
  };

  const getBadgeClasses = (label: string) =>
    badgeColorClasses[label] ?? 'bg-blue-100 text-blue-600';

  return (
    <div
      className={`${
        shouldUseSecondaryBg ? 'bg-secondary' : 'bg-background'
      } rounded-xl overflow-hidden p-1`}
    >
      {/* Product Image */}
      <div
        className='w-full h-40 md:h-56 rounded-xl relative'
        // style={{ backgroundColor }}
      >
        <Link
          href={`/product/${product.id}`}
          className='relative block w-full h-full rounded-xl hover:opacity-80 active:opacity-80 effect'
          target='_blank'
        >
          <Image
            src={product.imageUrl ?? ''}
            alt={product.title}
            fill
            sizes='(min-width: 1024px) 100vw, 100vw'
            className='object-cover rounded-xl'
          />
        </Link>
        {/* Discount Percentage */}
        {product.discountPercentage && (
          <div className='absolute top-2 left-0 bg-red-500 text-background px-2 pt-1 rounded-r-lg text-sm md:text-xl font-medium'>
            {toPersianDigits(product.discountPercentage)}%
          </div>
        )}
        {/* Favorite Icon */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className='absolute top-2 right-2 bg-background hover:bg-background/90 rounded-xl p-2 cursor-pointer effect'
        >
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className='p-1 mt-1'>
        <Link
          href={`/product/${product.id}`}
          className='text-base md:text-xl font-medium text-foreground line-clamp-1 hover:text-primary active:text-primary effect'
          target='_blank'
        >
          {product.title}
        </Link>

        {/* Badges */}
        <div className='flex gap-2 mt-1'>
          {product.badges?.map((badge, index) => (
            <span
              key={index}
              className={`${getBadgeClasses(
                badge
              )} text-xs md:text-sm px-2 py-1 rounded-full`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className='flex items-center justify-between mt-2'>
          <div className='flex items-center gap-1'>
            {product.originalPrice && (
              <span className='text-foreground/55 text-lg font-bold relative inline-block px-1'>
                {toPersianDigits(product.originalPrice)} یورو
                {/* Line Through */}
                <span
                  className='absolute left-0 right-0 border-b-2 border-primary'
                  style={{ bottom: '50%' }}
                />
              </span>
            )}
            <span
              className={`text-xl md:text-2xl font-bold ${
                product.originalPrice?.trim()
                  ? 'text-red-500'
                  : 'text-foreground'
              }`}
            >
              {toPersianDigits(product.discountedPrice)} یورو
            </span>
          </div>
          <button className='btn-primary p-3 rounded-2xl'>
            <BsCart2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
