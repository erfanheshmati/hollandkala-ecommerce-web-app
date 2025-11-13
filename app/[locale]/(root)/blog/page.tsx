import BlogCard from '@/components/blog/blog-card';
import Pagination from '@/components/shared/pagination';
import { relatedArticles } from '@/lib/data';
import { PageProps } from '@/types';
import {getTranslations} from 'next-intl/server';

export default async function BlogPage({ searchParams }: PageProps) {
  const t = await getTranslations();
  const awaitedSearch = (await searchParams) as
    | Record<string, string | string[] | undefined>
    | undefined;

  const currentPage = (() => {
    const raw = awaitedSearch?.['page'];
    const val = Array.isArray(raw) ? raw[0] : raw;
    const num = Number(val || '1');
    return Number.isFinite(num) && num > 0 ? num : 1;
  })();

  const PER_PAGE = 6;
  const allBlog = [...relatedArticles, ...relatedArticles, ...relatedArticles];
  const totalItems = allBlog.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const pagedBlog = allBlog.slice(start, end);

  return (
    <main className='container flex flex-col gap-10 pt-28 md:pt-40'>
      <div className='flex flex-col gap-4'>
        {/* Header */}
        <h1 className='font-bold text-foreground text-xl md:text-2xl'>{t('nav.blog')}</h1>
        {/* Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {pagedBlog.map((blog, idx) => (
            <BlogCard key={`${blog.id}-${idx}`} blog={blog} />
          ))}
        </div>
      </div>
      {/* Pagination */}
      <Pagination totalItems={totalItems} perPage={PER_PAGE} />
    </main>
  );
}


