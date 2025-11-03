import Pagination from '@/components/shared/pagination';
import ProductCard from '@/components/product/product-card';
import { shoesProducts } from '@/lib/data';

interface PageProps {
  searchParams?:
    | Promise<Record<string, string | string[] | undefined>>
    | Record<string, string | string[] | undefined>;
}

export default async function FavoritesPage({ searchParams }: PageProps) {
  const awaitedSearch = (await searchParams) as
    | Record<string, string | string[] | undefined>
    | undefined;

  const currentPage = (() => {
    const raw = awaitedSearch?.['page'];
    const val = Array.isArray(raw) ? raw[0] : raw;
    const num = Number(val || '1');
    return Number.isFinite(num) && num > 0 ? num : 1;
  })();

  const PER_PAGE = 12;
  const allProducts = [...shoesProducts, ...shoesProducts, ...shoesProducts];
  const totalItems = allProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const pagedProducts = allProducts.slice(start, end);

  return (
    <div className='container flex flex-col gap-10 pt-28 md:pt-40'>
      <div className='flex flex-col gap-4'>
        {/* Header */}
        <h1 className='font-bold text-foreground text-xl md:text-2xl'>
          علاقه مندی ها
        </h1>
        {/* Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {pagedProducts.map((product, idx) => (
            <ProductCard
              key={`${product.id}-${idx}`}
              product={product}
              isFavorite
            />
          ))}
        </div>
      </div>
      {/* Pagination */}
      <Pagination totalItems={totalItems} perPage={PER_PAGE} />
    </div>
  );
}
