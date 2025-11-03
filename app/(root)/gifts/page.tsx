import ProductCard from '@/components/product/product-card';
import Pagination from '@/components/shared/pagination';
import { shoesProducts } from '@/lib/data';

export default function GiftsPage() {
  return (
    <div className='container flex flex-col gap-10 pt-28 md:pt-40'>
      {/* Header */}
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl md:text-3xl font-bold'>هدایا به جانبازان</h1>
        <p className='text-lg font-bold text-primary max-w-lg text-center'>
          «قدم دوباره» فقط یک پروژه نیست؛ حرکتی است برای بازگرداندن ایمان به
          انسانیت. باهم می‌توانیم کاری کنیم تا خیلی‌ها دوباره قدم بردارند... با
          لبخند.
        </p>
      </div>

      {/* Content */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {[...shoesProducts, ...shoesProducts].map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination totalItems={shoesProducts.length} perPage={4} />
    </div>
  );
}
