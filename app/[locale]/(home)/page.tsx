import { reviewsByFilter } from '@/lib/data';
import ProductsCategory from '@/components/home/products-category';
import ProductSlider from '@/components/product/product-slider';
import {
  bannerImages,
  clothingProducts,
  shoesProducts,
  sportsProducts,
} from '@/lib/data';
import PromotionalText from '@/components/home/promotional-text';
import BannerImage from '@/components/home/banner-image';
import StoreSetupBanner from '@/components/home/store-setup-banner';
import ReviewSection from '@/components/review/review-section';
import RelatedArticles from '@/components/home/related-articles';
import FeatureSection from '@/components/home/feature-section';
import HeroSlider from '@/components/home/hero-slider';
import ContactInfo from '@/components/shared/contact-info';
import { getTranslations, getLocale } from 'next-intl/server';
import { localizeReviewsByFilter } from '@/lib/data-localization';

export default async function HomePage() {
  const t = await getTranslations();
  const locale = (await getLocale()) as 'fa' | 'en';
  const localizedReviewsByFilter = localizeReviewsByFilter(
    reviewsByFilter,
    locale
  );
  const localizedFeatures = [
    {
      title: t('features.items.0.title'),
      description: t('features.items.0.description'),
      iconUrl: '/icons/feature-1.svg',
    },
    {
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
      iconUrl: '/icons/feature-2.svg',
    },
    {
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
      iconUrl: '/icons/feature-3.svg',
    },
    {
      title: t('features.items.3.title'),
      description: t('features.items.3.description'),
      iconUrl: '/icons/feature-4.svg',
    },
  ];
  const promoItems = [
    { title: t('promotions.items.0') },
    { title: t('promotions.items.1') },
    { title: t('promotions.items.2') },
    { title: t('promotions.items.3') },
  ];

  return (
    <div className='container bg-background pt-20 md:pt-32'>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Promotional Text */}
      <PromotionalText items={promoItems} />

      {/* Products Category */}
      <ProductsCategory />

      {/* Mobile Promotional Banner */}
      <section className='md:hidden'>
        <BannerImage
          title={bannerImages[0].title}
          imageUrl={bannerImages[0].imageUrl}
          href={bannerImages[0].href}
        />
      </section>

      {/* Product Slider */}
      <ProductSlider
        title={t('home.shoes')}
        products={shoesProducts}
        backgroundColor='#F0F5F9'
        href={{
          pathname: '/products/[segment]/[category]',
          params: { segment: 'retail', category: 'all' },
        }}
      />

      {/* Mobile Promotional Banner */}
      <section className='md:hidden'>
        <BannerImage
          title={bannerImages[1].title}
          imageUrl={bannerImages[1].imageUrl}
          href={bannerImages[1].href}
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

      {/* Product Slider */}
      <ProductSlider
        title={t('home.clothing')}
        products={clothingProducts}
        backgroundColor='#E2DEDD'
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

      {/* Product Slider */}
      <ProductSlider
        title={t('home.sports')}
        products={sportsProducts}
        backgroundColor='#D64327'
        href={{
          pathname: '/products/[segment]/[category]',
          params: { segment: 'wholesale', category: 'all' },
        }}
      />

      {/* Store Setup Banner */}
      <StoreSetupBanner />

      {/* Reviews Slider */}
      <ReviewSection
        filters={Object.keys(reviewsByFilter)}
        reviews={[]}
        dataByFilter={localizedReviewsByFilter}
      />

      {/* Contact Info */}
      <section className='my-12 md:my-16'>
        <ContactInfo />
      </section>

      {/* Related Articles */}
      <RelatedArticles />

      {/* Features Section */}
      <FeatureSection features={localizedFeatures} />
    </div>
  );
}
