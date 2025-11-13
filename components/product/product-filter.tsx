'use client';

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  startTransition,
} from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { GiSettingsKnobs } from 'react-icons/gi';
import { useLocale, useTranslations } from 'next-intl';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

// Accordion Item
function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) {
  return (
    <div className='border-b border-foreground/22 last:border-0'>
      <button
        onClick={onToggle}
        className='flex items-center justify-between w-full py-3 text-right cursor-pointer'
      >
        <span className='text-xl font-medium text-foreground'>{title}</span>
        {isOpen ? (
          <ChevronUp className='w-4 h-4 text-foreground' />
        ) : (
          <ChevronDown className='w-4 h-4 text-foreground' />
        )}
      </button>
      {isOpen && <div className='pb-3'>{children}</div>}
    </div>
  );
}

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// Toggle Switch
function ToggleSwitch({ label, checked, onChange }: ToggleSwitchProps) {
  return (
    <label className='flex items-center justify-between w-full cursor-pointer py-1'>
      <span className='text-foreground font-medium text-xl'>{label}</span>
      <div className='relative' dir='ltr'>
        <input
          type='checkbox'
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className='sr-only'
        />
        <div
          className={`w-11 h-6 pt-0.5 rounded-full effect ${
            checked ? 'bg-primary' : 'bg-foreground/20'
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full transform effect ${
              checked ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </div>
      </div>
    </label>
  );
}

interface CheckboxOption {
  id: string;
  label: string;
}

interface FilterOptionConfig {
  id: string;
  defaultLabel: string;
}

const GENDER_OPTIONS: FilterOptionConfig[] = [
  { id: 'men', defaultLabel: 'Men' },
  { id: 'women', defaultLabel: 'Women' },
];

const BRAND_OPTIONS: FilterOptionConfig[] = [
  { id: 'adidas', defaultLabel: 'Adidas' },
  { id: 'nike', defaultLabel: 'Nike' },
];

const COLOR_OPTIONS: FilterOptionConfig[] = [
  { id: 'black', defaultLabel: 'Black' },
  { id: 'white', defaultLabel: 'White' },
  { id: 'red', defaultLabel: 'Red' },
];

const CATEGORY_OPTIONS: FilterOptionConfig[] = [
  { id: 'shoes', defaultLabel: 'Shoes & Bags' },
  { id: 'clothing', defaultLabel: 'Clothing' },
  { id: 'sports', defaultLabel: 'Sports' },
];

interface CheckboxGroupProps {
  options: CheckboxOption[];
  selected: string[];
  onChange: (id: string) => void;
}

// Checkbox Group
function CheckboxGroup({ options, selected, onChange }: CheckboxGroupProps) {
  return (
    <div className='flex flex-col gap-2 py-2'>
      {options.map((option, idx) => (
        <label
          key={option.id}
          className='flex items-center gap-2 cursor-pointer group'
        >
          <input
            type='checkbox'
            checked={selected.includes(option.id)}
            onChange={() => onChange(option.id)}
            className='w-5 h-5 accent-primary cursor-pointer mb-2'
          />
          <span
            className={`font-medium text-foreground/70 group-hover:text-foreground w-full py-4 pr-1 effect ${
              idx !== options.length - 1 && 'border-b border-foreground/22'
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}

interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

// Range Slider
function RangeSlider({ min, max, value, onChange }: RangeSliderProps) {
  const t = useTranslations();
  const [minValue, maxValue] = value;
  const range = max - min;
  const minPercent = ((minValue - min) / range) * 100;
  const maxPercent = ((maxValue - min) / range) * 100;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const isRtl =
    typeof document !== 'undefined' &&
    document?.documentElement?.dir?.toLowerCase() === 'rtl';

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const percent = isRtl ? 100 - xPercent : xPercent;
      const newValue = Math.round(min + (percent / 100) * range);
      const clampedValue = Math.max(min, Math.min(max, newValue));

      if (isDragging === 'min') {
        onChange([Math.min(clampedValue, maxValue), maxValue]);
      } else {
        onChange([minValue, Math.max(clampedValue, minValue)]);
      }
    },
    [isDragging, minValue, maxValue, min, max, range, onChange, isRtl]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !sliderRef.current) return;
      if (e.touches.length === 0) return;

      const touch = e.touches[0];
      const rect = sliderRef.current.getBoundingClientRect();
      const xPercent = ((touch.clientX - rect.left) / rect.width) * 100;
      const percent = isRtl ? 100 - xPercent : xPercent;
      const newValue = Math.round(min + (percent / 100) * range);
      const clampedValue = Math.max(min, Math.min(max, newValue));

      // Prevent the page from scrolling while dragging
      e.preventDefault();

      if (isDragging === 'min') {
        onChange([Math.min(clampedValue, maxValue), maxValue]);
      } else {
        onChange([minValue, Math.max(clampedValue, minValue)]);
      }
    },
    [isDragging, minValue, maxValue, min, max, range, onChange, isRtl]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      document.addEventListener('touchend', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp]);

  const handleMouseDown = (type: 'min' | 'max') => {
    setIsDragging(type);
  };

  return (
    <div className='flex flex-col gap-6'>
      {/* Price Inputs */}
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center justify-between gap-2 w-full bg-secondary rounded-2xl p-2'>
          <span className='text-foreground/60 font-medium'>
            {t('product.range.from')}
          </span>
          <input
            type='number'
            value={minValue}
            onChange={(e) => {
              const newMin = Math.max(
                min,
                Math.min(Number(e.target.value), maxValue)
              );
              onChange([newMin, maxValue]);
            }}
            className='rounded-lg bg-background w-40 py-1.5 text-lg font-bold outline-none text-center'
          />
          <span className='text-foreground/60 font-medium'>
            {t('product.range.currency')}
          </span>
        </div>
        <div className='flex items-center justify-between gap-2 w-full bg-secondary rounded-2xl p-2'>
          <span className='text-foreground/60 font-medium'>
            {t('product.range.to')}
          </span>
          <input
            type='number'
            value={maxValue}
            onChange={(e) => {
              const newMax = Math.min(
                max,
                Math.max(Number(e.target.value), minValue)
              );
              onChange([minValue, newMax]);
            }}
            className='rounded-lg bg-background w-40 py-1.5 text-lg font-bold outline-none text-center'
          />
          <span className='text-foreground/60 font-medium'>
            {t('product.range.currency')}
          </span>
        </div>
      </div>
      {/* Price Range Slider */}
      <div
        ref={sliderRef}
        className='relative h-2 bg-secondary rounded-full cursor-pointer'
        onMouseDown={(e) => {
          if (!sliderRef.current) return;
          const rect = sliderRef.current.getBoundingClientRect();
          const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
          const percent = isRtl ? 100 - xPercent : xPercent;
          const newValue = Math.round(min + (percent / 100) * range);
          const clampedValue = Math.max(min, Math.min(max, newValue));

          // Move the nearest thumb on track click
          const distToMin = Math.abs(clampedValue - minValue);
          const distToMax = Math.abs(clampedValue - maxValue);
          if (distToMin <= distToMax) {
            onChange([Math.min(clampedValue, maxValue), maxValue]);
          } else {
            onChange([minValue, Math.max(clampedValue, minValue)]);
          }
        }}
        onTouchStart={(e) => {
          if (!sliderRef.current) return;
          if (e.touches.length === 0) return;
          const touch = e.touches[0];
          const rect = sliderRef.current.getBoundingClientRect();
          const xPercent = ((touch.clientX - rect.left) / rect.width) * 100;
          const percent = isRtl ? 100 - xPercent : xPercent;
          const newValue = Math.round(min + (percent / 100) * range);
          const clampedValue = Math.max(min, Math.min(max, newValue));

          // Prevent scroll on tap and move the nearest thumb
          e.preventDefault();
          const distToMin = Math.abs(clampedValue - minValue);
          const distToMax = Math.abs(clampedValue - maxValue);
          if (distToMin <= distToMax) {
            onChange([Math.min(clampedValue, maxValue), maxValue]);
            setIsDragging('min');
          } else {
            onChange([minValue, Math.max(clampedValue, minValue)]);
            setIsDragging('max');
          }
        }}
      >
        <div
          className='absolute h-2 bg-primary rounded-full'
          style={
            isRtl
              ? {
                  right: `${minPercent}%`,
                  width: `${maxPercent - minPercent}%`,
                }
              : { left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }
          }
        />
        <div
          className='absolute w-4 h-4 bg-primary rounded-full cursor-grab active:cursor-grabbing transform -translate-y-1 touch-none'
          style={
            isRtl
              ? { right: `calc(${minPercent}% - 8px)` }
              : { left: `calc(${minPercent}% - 8px)` }
          }
          onMouseDown={(e) => {
            e.preventDefault();
            handleMouseDown('min');
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            handleMouseDown('min');
          }}
        />
        <div
          className='absolute w-4 h-4 bg-primary rounded-full cursor-grab active:cursor-grabbing transform -translate-y-1 touch-none'
          style={
            isRtl
              ? { right: `calc(${maxPercent}% - 8px)` }
              : { left: `calc(${maxPercent}% - 8px)` }
          }
          onMouseDown={(e) => {
            e.preventDefault();
            handleMouseDown('max');
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            handleMouseDown('max');
          }}
        />
      </div>
      <div
        className='flex items-center justify-between text-foreground/60 font-medium -mt-2'
        dir='rtl'
      >
        <span>{t('product.range.cheapest')}</span>
        <span>{t('product.range.mostExpensive')}</span>
      </div>
    </div>
  );
}

interface FilterContentProps {
  openAccordions: Record<string, boolean>;
  genderSelected: string[];
  brandSelected: string[];
  colorSelected: string[];
  categorySelected: string[];
  priceRange: [number, number];
  onlyAvailable: boolean;
  fastShipping: boolean;
  onToggleAccordion: (key: string) => void;
  onToggleGender: (id: string) => void;
  onToggleBrand: (id: string) => void;
  onToggleColor: (id: string) => void;
  onToggleCategory: (id: string) => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onOnlyAvailableChange: (checked: boolean) => void;
  onFastShippingChange: (checked: boolean) => void;
  onClose?: () => void;
  genders: CheckboxOption[];
  brands: CheckboxOption[];
  colors: CheckboxOption[];
  categories: CheckboxOption[];
}

// Filter Content
function FilterContent({
  openAccordions,
  genderSelected,
  brandSelected,
  colorSelected,
  categorySelected,
  priceRange,
  onlyAvailable,
  fastShipping,
  onToggleAccordion,
  onToggleGender,
  onToggleBrand,
  onToggleColor,
  onToggleCategory,
  onPriceRangeChange,
  onOnlyAvailableChange,
  onFastShippingChange,
  onClose,
  genders,
  brands,
  colors,
  categories,
}: FilterContentProps) {
  const t = useTranslations();

  return (
    <div className='flex flex-col gap-4 bg-background lg:border border-foreground/40 rounded-2xl p-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold text-foreground'>
          {t('product.filters')}
        </h3>
        {/* Close button for mobile modal */}
        {onClose && (
          <button
            onClick={onClose}
            className='p-2 rounded-xl border border-foreground/50 hover:border-foreground active:border-foreground cursor-pointer effect group'
            aria-label={t('common.close')}
          >
            <X
              size={20}
              className='text-foreground/50 group-hover:text-foreground group-active:text-foreground effect'
            />
          </button>
        )}
      </div>

      {/* جنس (Gender) Accordion */}
      <AccordionItem
        title={t('product.filterHeadings.material')}
        isOpen={openAccordions.gender}
        onToggle={() => onToggleAccordion('gender')}
      >
        <CheckboxGroup
          options={genders}
          selected={genderSelected}
          onChange={onToggleGender}
        />
      </AccordionItem>

      {/* برند (Brand) Accordion */}
      <AccordionItem
        title={t('product.filterHeadings.brand')}
        isOpen={openAccordions.brand}
        onToggle={() => onToggleAccordion('brand')}
      >
        <CheckboxGroup
          options={brands}
          selected={brandSelected}
          onChange={onToggleBrand}
        />
      </AccordionItem>

      {/* رنگ (Color) Accordion */}
      <AccordionItem
        title={t('product.filterHeadings.color')}
        isOpen={openAccordions.color}
        onToggle={() => onToggleAccordion('color')}
      >
        <CheckboxGroup
          options={colors}
          selected={colorSelected}
          onChange={onToggleColor}
        />
      </AccordionItem>

      {/* دسته بندی (Category) Accordion */}
      <AccordionItem
        title={t('product.filterHeadings.category')}
        isOpen={openAccordions.category}
        onToggle={() => onToggleAccordion('category')}
      >
        <CheckboxGroup
          options={categories}
          selected={categorySelected}
          onChange={onToggleCategory}
        />
      </AccordionItem>

      {/* قیمت (Price Range) Accordion */}
      <AccordionItem
        title={t('product.filterHeadings.priceRange')}
        isOpen={openAccordions.price}
        onToggle={() => onToggleAccordion('price')}
      >
        <RangeSlider
          min={0}
          max={1000000}
          value={priceRange}
          onChange={onPriceRangeChange}
        />
      </AccordionItem>

      {/* فقط کالاهای موجود (Only Available) */}
      <div className='border-b border-foreground/22 pb-3'>
        <ToggleSwitch
          label={t('product.filterToggles.onlyAvailable')}
          checked={onlyAvailable}
          onChange={onOnlyAvailableChange}
        />
      </div>

      {/* ارسال فوری (Fast Shipping) */}
      <div className='pb-2'>
        <ToggleSwitch
          label={t('product.filterToggles.fastShipping')}
          checked={fastShipping}
          onChange={onFastShippingChange}
        />
      </div>
    </div>
  );
}

export default function ProductFilter() {
  const t = useTranslations();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>(
    {
      gender: true,
      brand: false,
      color: false,
      category: false,
      price: false,
    }
  );

  const [genderSelected, setGenderSelected] = useState<string[]>([]);
  const [brandSelected, setBrandSelected] = useState<string[]>([]);
  const [colorSelected, setColorSelected] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [fastShipping, setFastShipping] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isMobileModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileModalOpen]);

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => {
      const willOpen = !prev[key];
      return {
        gender: false,
        brand: false,
        color: false,
        category: false,
        price: false,
        [key]: willOpen,
      } as Record<string, boolean>;
    });
  };

  const toggleGender = (id: string) => {
    setGenderSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleBrand = (id: string) => {
    setBrandSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleColor = (id: string) => {
    setColorSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleCategory = (id: string) => {
    setCategorySelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const genders: CheckboxOption[] = GENDER_OPTIONS.map((option) => ({
    id: option.id,
    label: t(`product.genders.${option.id}`, {
      defaultValue: option.defaultLabel,
    }),
  }));

  const brands: CheckboxOption[] = BRAND_OPTIONS.map((option) => ({
    id: option.id,
    label: t(`product.brands.${option.id}`, {
      defaultValue: option.defaultLabel,
    }),
  }));

  const colors: CheckboxOption[] = COLOR_OPTIONS.map((option) => ({
    id: option.id,
    label: t(`product.colors.${option.id}`, {
      defaultValue: option.defaultLabel,
    }),
  }));

  const categories: CheckboxOption[] = CATEGORY_OPTIONS.map((option) => ({
    id: option.id,
    label: t(`product.categories.${option.id}`, {
      defaultValue: option.defaultLabel,
    }),
  }));

  return (
    <>
      {/* Mobile Filter Button */}
      <div className='lg:hidden flex items-center gap-2'>
        <button
          onClick={() => setIsMobileModalOpen(true)}
          className='bg-secondary hover:bg-foreground/10 active:bg-foreground/10 p-2 rounded-xl cursor-pointer effect'
          aria-label={t('product.filtersOpen', {
            defaultValue: 'Open filters',
          })}
        >
          <GiSettingsKnobs size={20} className='text-foreground rotate-90' />
        </button>
        <span className='font-bold'>{t('product.filters')}</span>
      </div>

      {/* Desktop Sidebar Filters */}
      <aside className='hidden lg:block w-full'>
        <FilterContent
          openAccordions={openAccordions}
          genderSelected={genderSelected}
          brandSelected={brandSelected}
          colorSelected={colorSelected}
          categorySelected={categorySelected}
          priceRange={priceRange}
          onlyAvailable={onlyAvailable}
          fastShipping={fastShipping}
          onToggleAccordion={toggleAccordion}
          onToggleGender={toggleGender}
          onToggleBrand={toggleBrand}
          onToggleColor={toggleColor}
          onToggleCategory={toggleCategory}
          onPriceRangeChange={setPriceRange}
          onOnlyAvailableChange={setOnlyAvailable}
          onFastShippingChange={setFastShipping}
          genders={genders}
          brands={brands}
          colors={colors}
          categories={categories}
        />
      </aside>

      {/* Mobile Modal Overlay and Modal */}
      {mounted &&
        isMobileModalOpen &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className='lg:hidden fixed inset-0 bg-black/50 z-40 effect'
              onClick={() => setIsMobileModalOpen(false)}
            />
            {/* Modal */}
            <div
              dir={locale === 'fa' ? 'rtl' : 'ltr'}
              className='lg:hidden fixed inset-0 z-50 flex items-center justify-center pointer-events-none'
              onClick={(e) => {
                // Close when clicking outside the modal content
                if (e.target === e.currentTarget) {
                  setIsMobileModalOpen(false);
                }
              }}
            >
              <div
                className='relative w-full max-w-md mx-4 max-h-[calc(100vh-16rem)] md:max-h-[calc(100vh-20rem)] rounded-2xl bg-background shadow-xl overflow-y-auto effect pointer-events-auto opacity-100 scale-100'
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <FilterContent
                    openAccordions={openAccordions}
                    genderSelected={genderSelected}
                    brandSelected={brandSelected}
                    colorSelected={colorSelected}
                    categorySelected={categorySelected}
                    priceRange={priceRange}
                    onlyAvailable={onlyAvailable}
                    fastShipping={fastShipping}
                    onToggleAccordion={toggleAccordion}
                    onToggleGender={toggleGender}
                    onToggleBrand={toggleBrand}
                    onToggleColor={toggleColor}
                    onToggleCategory={toggleCategory}
                    onPriceRangeChange={setPriceRange}
                    onOnlyAvailableChange={setOnlyAvailable}
                    onFastShippingChange={setFastShipping}
                    onClose={() => setIsMobileModalOpen(false)}
                    genders={genders}
                    brands={brands}
                    colors={colors}
                    categories={categories}
                  />
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
