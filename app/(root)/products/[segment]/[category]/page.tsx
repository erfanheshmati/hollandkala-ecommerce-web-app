import {
  wholesaleCategorySlugToProducts,
  retailCategorySlugToProducts,
  allProductsMock,
  bannerImages,
  sortData,
} from '@/lib/data';
import ProductCard from '@/components/product/product-card';
import Breadcrumb from '@/components/breadcrumb';
import Pagination from '@/components/pagination';
import ProductFilter from '@/components/product/product-filter';
import NotFound from '@/app/not-found';
import BannerImage from '@/components/home/banner-image';
import { FiBarChart2 } from 'react-icons/fi';
import { PageProps } from '@/types';

export default async function ProductsSegmentCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ segment: string; category: string }>;
  searchParams: PageProps;
}) {
  const awaited = await params;
  const rawSegment = (awaited.segment || '').toLowerCase();
  const category = (awaited.category || '').toLowerCase();
  const wholesaleAliases = ['wholesale', 'عمده', 'عمده-فروشی', 'عمده فروشی'];
  const retailAliases = ['retail', 'خرده', 'خرده-فروشی', 'خرده فروشی'];
  const isWholesale = wholesaleAliases.includes(rawSegment);
  const isRetail = retailAliases.includes(rawSegment);
  // canonicalSegment removed since segment index pages are not used

  if (!isWholesale && !isRetail) NotFound();

  const products = (() => {
    if (category === 'all') {
      return (
        (isWholesale
          ? Object.values(wholesaleCategorySlugToProducts).flat()
          : Object.values(retailCategorySlugToProducts).flat()) ||
        allProductsMock
      );
    }
    return (
      (isWholesale
        ? wholesaleCategorySlugToProducts[category]
        : retailCategorySlugToProducts[category]) ?? allProductsMock
    );
  })();

  const awaitedSearch = (await searchParams) as
    | Record<string, string | string[] | undefined>
    | undefined;
  const currentPage = (() => {
    const raw = awaitedSearch?.['page'];
    const val = Array.isArray(raw) ? raw[0] : raw;
    const num = Number(val || '1');
    return Number.isFinite(num) && num > 0 ? num : 1;
  })();
  const PER_PAGE = 4;
  const totalItems = products.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const pagedProducts = products.slice(start, end);

  return (
    <main className='container pt-24 md:pt-40'>
      <div className='flex flex-col gap-6'>
        {/* Breadcrumbs */}
        <Breadcrumb
          items={[
            { label: 'خانه', href: '/' },
            { label: isWholesale ? 'محصولات عمده' : 'محصولات خرده' },
            { label: category },
          ]}
        />

        {/* Desktop Promotional Banner */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 '>
          {bannerImages.map((banner) => (
            <BannerImage key={banner.title} {...banner} />
          ))}
        </div>

        {/* Content */}
        <div className='flex justify-between gap-6 mt-4'>
          {/* Desktop sidebar filter + Title */}
          <div className='hidden lg:flex flex-col gap-7 w-full lg:w-1/3 xl:w-1/4'>
            <h1 className='text-2xl font-bold text-foreground'>
              محصولات {isWholesale ? 'عمده' : 'خرده'}
            </h1>
            <ProductFilter />
          </div>
          {/* Products + Sort */}
          <div className='flex flex-col gap-6 w-full lg:w-2/3 xl:w-3/4'>
            {/* Mobile modal filter + Button */}
            <div className='lg:hidden flex items-center justify-between'>
              <h1 className='text-xl font-bold text-foreground'>
                محصولات {isWholesale ? 'عمده' : 'خرده'}
              </h1>
              <ProductFilter />
            </div>
            {/* Sort bar */}
            <div className='flex items-center gap-4'>
              <div className='hidden md:flex items-center gap-2'>
                <FiBarChart2
                  size={18}
                  className='border rounded-md text-foreground border-foreground'
                />
                <span className='text-foreground font-bold text-xl'>
                  مرتب سازی:
                </span>
              </div>
              <div className='flex items-center gap-2'>
                {sortData.map((sort, idx) => (
                  <button
                    key={idx}
                    className='font-medium text-foreground hover:text-primary active:text-primary border border-foreground/30 hover:border-primary active:border-primary rounded-xl px-6 py-1 cursor-pointer effect'
                  >
                    {sort.label}
                  </button>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5'>
              {pagedProducts.map((p, idx) => (
                <ProductCard key={idx} {...p} />
              ))}
            </div>
            <div className='mt-auto'>
              <Pagination totalItems={totalItems} perPage={PER_PAGE} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
