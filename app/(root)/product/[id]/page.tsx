import Breadcrumb from '@/components/breadcrumb';
import ProductSlider from '@/components/product/product-slider';
import ProductGallery from '@/components/product/product-gallery';
import ProductInfo from '@/components/product/product-info';
import ProductBadge from '@/components/product/product-badge';
import ProductComparison from '@/components/product/price-comparison';
import ProductTabs from '@/components/product/product-tabs';
import BannerImage from '@/components/home/banner-image';
import { shoesProducts, bannerImages } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = shoesProducts.find((pro) => pro.id === id);
  if (!product) notFound();

  return (
    <main className='container pt-24 md:pt-36'>
      {/* Breadcrumbs */}
      <div className='mb-7'>
        <Breadcrumb
          items={[
            { label: 'خانه', href: '/' },
            { label: 'محصولات ورزشی', href: '/products/retail/sports' },
            { label: product.title },
          ]}
        />
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
        title='محصولات مرتبط'
        products={shoesProducts}
        backgroundColor='#F0F5F9'
        href={`/products/wholesale/all`}
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
