import Breadcrumb from '@/components/shared/breadcrumb';
import ProductSlider from '@/components/product/product-slider';
import ProductGallery from '@/components/product/product-gallery';
import ProductInfo from '@/components/product/product-info';
import ProductBadge from '@/components/product/product-badge';
import ProductComparison from '@/components/product/price-comparison';
import ProductTabs from '@/components/product/product-tabs';
import BannerImage from '@/components/home/banner-image';
import { shoesProducts, bannerImages } from '@/lib/data';
import { notFound } from 'next/navigation';
import Share from '@/components/shared/share';
import { getTranslations, getLocale } from 'next-intl/server';
import { localizeProduct, localizeProducts } from '@/lib/data-localization';

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = await getTranslations();
  const locale = (await getLocale()) as 'fa' | 'en';
  const { id } = await params;
  const rawProduct = shoesProducts.find((pro) => pro.id === id);
  if (!rawProduct) notFound();

  // Localize product data based on current locale
  const product = localizeProduct(rawProduct, locale);

  // Localize related products for the slider
  const localizedProducts = localizeProducts(shoesProducts, locale);

  return (
    <main className='container pt-24 md:pt-36'>
      {/* Breadcrumb & Share */}
      <div className='flex items-center justify-between gap-4 mb-7'>
        {/* Breadcrumbs */}
        <Breadcrumb
          items={[
            { label: t('nav.home'), href: '/' },
            {
              label: t('nav.retail'),
              href: {
                pathname: '/products/[segment]/[category]',
                params: { segment: 'retail', category: 'sports' },
              },
            },
            { label: product.title },
          ]}
        />
        {/* Share */}
        <Share />
      </div>

      {/* Product */}
      <section className='flex flex-col xl:flex-row gap-10 mb-10'>
        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Gallery */}
          <ProductGallery images={product.gallery ?? []} alt={product.title} />
          {/*  Info */}
          <ProductInfo product={product} />
        </div>
        {/* Badge */}
        <ProductBadge product={product} />
      </section>

      {/* Price Comparison */}
      <ProductComparison product={product} />

      {/* Tabs */}
      <ProductTabs product={product} />

      {/* Related Products Slider */}
      <ProductSlider
        title={t('product.related')}
        products={localizedProducts}
        backgroundColor='#F0F5F9'
        href={{
          pathname: '/products/[segment]/[category]',
          params: { segment: 'wholesale', category: 'all' },
        }}
      />

      {/* Mobile Promotional Banner */}
      <section className='md:hidden'>
        <BannerImage
          title={bannerImages[0].title}
          imageUrl={bannerImages[0].imageUrl}
          href={bannerImages[0].href}
        />
      </section>

      {/* Desktop Promotional Banner */}
      <section className='my-14 md:my-20 hidden md:block'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {bannerImages.map((banner) => (
            <BannerImage key={banner.title} {...banner} />
          ))}
        </div>
      </section>
    </main>
  );
}
