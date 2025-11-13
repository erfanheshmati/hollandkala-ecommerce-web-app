import { relatedArticles } from '@/lib/data';
import { Link } from '@/i18n/routing';
import BlogCard from '../blog/blog-card';
import { useTranslations } from 'next-intl';

export default function RelatedArticles() {
  const t = useTranslations();
  return (
    <section className='my-14 md:my-20'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl md:text-2xl font-bold text-foreground'>
          {t('blog.related')}
        </h2>
        <div className='flex items-center gap-3'>
          <Link
            href='/blog'
            className='flex items-center justify-center bg-background px-4 py-2 rounded-xl border border-foreground/40 hover:border-foreground active:border-foreground text-foreground hover:text-black active:text-black cursor-pointer effect'
          >
            {t('common.viewAll')}
          </Link>
        </div>
      </div>

      {/* Article Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {relatedArticles.map((article, index) => (
          <BlogCard key={index} blog={article} />
        ))}
      </div>
    </section>
  );
}
