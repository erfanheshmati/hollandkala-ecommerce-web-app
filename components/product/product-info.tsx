'use client';

import { useEffect, useMemo, useState } from 'react';
import { ProductProps } from '@/types';
import { GoGift, GoStarFill } from 'react-icons/go';
import { IoCheckmark } from 'react-icons/io5';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { toPersianDigits } from '@/lib/utils';
import ImageModal from '../shared/image-modal';

const COLOR_HEX_MAP: Record<string, string> = {
  قرمز: '#CF0221',
  red: '#CF0221',
  آبی: '#21468B',
  blue: '#21468B',
  سبز: '#2B9B2B',
  green: '#2B9B2B',
  صورتی: '#FF9BBC',
  pink: '#FF9BBC',
  مشکی: '#000000',
  black: '#000000',
};

const DEFAULT_SWATCH_HEX = '#6B7280';

function resolveColorHex(color?: string) {
  if (!color) return DEFAULT_SWATCH_HEX;
  const trimmed = color.trim();
  if (trimmed.startsWith('#')) return trimmed;
  const lookupKey = trimmed.toLowerCase();
  return (
    COLOR_HEX_MAP[lookupKey] ?? COLOR_HEX_MAP[trimmed] ?? DEFAULT_SWATCH_HEX
  );
}

export default function ProductInfo({
  product,
  onImageClick,
}: {
  product: ProductProps;
  onImageClick?: (imageUrl: string) => void;
}) {
  const t = useTranslations();
  const locale = useLocale();
  const sizes = useMemo(() => product.sizes ?? [], [product.sizes]);
  const colors = useMemo(() => product.colors ?? [], [product.colors]);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Format numbers based on locale
  const formatNumber = (value?: string | number | null) => {
    if (value === undefined || value === null) return undefined;
    return locale === 'fa' ? toPersianDigits(value) : value.toString();
  };

  const normalizedIndex = useMemo(() => {
    if (!sizes.length) return -1;
    return Math.min(activeSizeIndex, sizes.length - 1);
  }, [activeSizeIndex, sizes]);

  const normalizedColorIndex = useMemo(() => {
    if (!colors.length) return -1;
    return Math.min(activeColorIndex, colors.length - 1);
  }, [activeColorIndex, colors]);

  const colorSwatches = useMemo(
    () =>
      colors.map((color) => {
        const label = color?.trim() ?? '';
        return {
          label,
          hex: resolveColorHex(color),
        };
      }),
    [colors]
  );

  const selectedColorLabel =
    normalizedColorIndex === -1
      ? undefined
      : colorSwatches[normalizedColorIndex]?.label;

  const featureEntries = useMemo(() => {
    const base: { label: string; value?: string | null }[] = [
      { label: t('product.specLabels.material'), value: product.materials },
      { label: t('product.specLabels.dimensions'), value: product.dimensions },
      { label: t('product.specLabels.weight'), value: product.weight },
    ];

    return base
      .filter((feature): feature is { label: string; value: string } =>
        Boolean(feature.value && feature.value.trim())
      )
      .map((feature) => ({
        label: feature.label,
        value: feature.value.trim(),
      }));
  }, [t, product.dimensions, product.materials, product.weight]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleImageClick = (img: string) => {
    if (onImageClick) {
      onImageClick(img);
    } else {
      setSelectedImage(img);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='flex-1 flex flex-col justify-between gap-6'>
      {/* Header */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-2'>
          <h1 className='text-2xl font-bold text-foreground line-clamp-1'>
            {product.title}
          </h1>
          <span className='text-foreground/50 line-clamp-1 text-left'>
            {product.enTitle}
          </span>
        </div>

        <div className='flex flex-wrap items-center gap-4'>
          <div className='flex items-start gap-1'>
            <GoStarFill size={20} className='text-yellow-500 pt-0.5' />
            <div className='flex items-center gap-1'>
              <span className='font-bold'>{formatNumber(product.rating)}</span>
              <span className='text-sm text-foreground/70'>
                ({t('product.buyerRating')})
              </span>
            </div>
          </div>
          <div className='font-medium'>
            {formatNumber(product.comment)} {t('product.comments')}
          </div>
          {/* Barcode */}
          <div className='bg-foreground/5 rounded-full px-2 py-1 text-xs sm:text-sm font-bold text-foreground/50 mr-auto'>
            <span>{t('product.barcode')}</span> {formatNumber(product.barcode)}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className='border-b border-foreground/10'></div>

      {/* Sizes */}
      {sizes.length > 0 && (
        <div className='flex items-center gap-4'>
          <span className='text-lg font-semibold text-foreground'>
            {t('product.size')}
          </span>
          <div className='flex flex-wrap gap-2'>
            {sizes.map((size, index) => {
              const isSelected = normalizedIndex === index;
              return (
                <button
                  key={size}
                  type='button'
                  onClick={() => setActiveSizeIndex(index)}
                  aria-pressed={isSelected}
                  className={`relative flex items-center justify-center rounded-xl border px-6 py-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/60 focus-visible:ring-offset-background cursor-pointer effect ${
                    isSelected
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-foreground/20 text-foreground/80 hover:border-foreground/50'
                  }`}
                >
                  <span>{size}</span>
                  {isSelected && (
                    <span className='absolute rtl:right-1 ltr:left-1 h-4 w-4 flex items-center justify-center rounded-md bg-primary text-background'>
                      <IoCheckmark size={14} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Colors */}
      {colorSwatches.length > 0 && (
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 text-lg'>
            <span className='font-semibold text-foreground'>
              {t('product.colorLabel')}:
            </span>
            <span className='text-foreground/80'>
              {selectedColorLabel ?? t('product.notSelected')}
            </span>
          </div>
          <div className='flex flex-wrap gap-2'>
            {colorSwatches.map((swatch, index) => {
              const isSelected = normalizedColorIndex === index;

              return (
                <button
                  key={`${swatch.label || 'color'}-${index}`}
                  type='button'
                  onClick={() => setActiveColorIndex(index)}
                  aria-pressed={isSelected}
                  aria-label={`${t('product.selectColor')} ${
                    swatch.label || index + 1
                  }`}
                  className={`relative h-9 w-9 flex items-center justify-center rounded-full bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/60 cursor-pointer effect ${
                    isSelected
                      ? 'ring-2 ring-primary ring-offset-background'
                      : 'border border-foreground/20 hover:border-foreground/50'
                  }`}
                >
                  <span className='sr-only'>{swatch.label}</span>
                  <span
                    aria-hidden='true'
                    className='h-7 w-7 rounded-full shadow-sm'
                    style={{ backgroundColor: swatch.hex }}
                  />
                  {isSelected && (
                    <span className='absolute inset-0 flex items-center justify-center'>
                      <IoCheckmark size={18} className='text-background' />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Gifts */}
      <div className='flex flex-wrap items-center gap-2'>
        <GoGift size={24} />
        <p className='font-bold'>{t('product.productGifts')}</p>
        <div className='flex items-center gap-2'>
          {product.gifts.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={t('common.gift')}
              width={45}
              height={45}
              className='w-12 h-10 bg-background border border-foreground/20 rounded-xl object-cover cursor-pointer hover:opacity-80 effect'
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {mounted && !onImageClick && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={handleClose}
          alt='Review image'
        />
      )}

      {/* Separator */}
      <div className='border-b border-foreground/10'></div>

      {/* Features */}
      {featureEntries.length > 0 && (
        <section className='flex flex-col gap-2'>
          <h2 className='font-semibold text-foreground text-lg'>
            {t('product.features')}
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
            {featureEntries.map((feature) => (
              <div
                key={feature.label}
                className='flex flex-col items-start justify-center rounded-xl bg-secondary px-4 py-2'
              >
                <span className='text-foreground/60'>{feature.label}</span>
                <span className='font-medium text-foreground'>
                  {feature.value}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
