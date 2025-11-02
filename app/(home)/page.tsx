import { reviewsByFilter } from "@/lib/data";
import ProductsCategory from "@/components/home/products-category";
import ProductSlider from "@/components/product/product-slider";
import {
  bannerImages,
  clothingProducts,
  shoesProducts,
  sportsProducts,
} from "@/lib/data";
import PromotionalText from "@/components/home/promotional-text";
import BannerImage from "@/components/home/banner-image";
import StoreSetupBanner from "@/components/home/store-setup-banner";
import ReviewSection from "@/components/review/review-section";
import StoreLocation from "@/components/home/store-location";
import RelatedArticles from "@/components/home/related-articles";
import FeatureSection from "@/components/home/feature-section";
import HeroSlider from "@/components/home/hero-slider";

export default function HomePage() {
  return (
    <div className="container bg-background pt-20 md:pt-32">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Promotional Text */}
      <PromotionalText />

      {/* Products Category */}
      <ProductsCategory />

      {/* Mobile Promotional Banner */}
      <section className="md:hidden">
        <BannerImage
          title={bannerImages[0].title}
          imageUrl={bannerImages[0].imageUrl}
          href={bannerImages[0].href}
        />
      </section>

      {/* Product Slider */}
      <ProductSlider
        title="کفش اسپرت و کتانی"
        products={shoesProducts}
        backgroundColor="#F0F5F9"
        href={`/products/retail/all`}
      />

      {/* Mobile Promotional Banner */}
      <section className="md:hidden">
        <BannerImage
          title={bannerImages[1].title}
          imageUrl={bannerImages[1].imageUrl}
          href={bannerImages[1].href}
        />
      </section>

      {/* Desktop Promotional Banner */}
      <section className="my-14 md:my-20 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bannerImages.map((banner) => (
            <BannerImage key={banner.title} {...banner} />
          ))}
        </div>
      </section>

      {/* Product Slider */}
      <ProductSlider
        title="پوشاک"
        products={clothingProducts}
        backgroundColor="#E2DEDD"
        href={`/products/wholesale/all`}
      />

      {/* Mobile Promotional Banner */}
      <section className="md:hidden">
        <BannerImage
          title={bannerImages[0].title}
          imageUrl={bannerImages[0].imageUrl}
          href={bannerImages[0].href}
        />
      </section>

      {/* Product Slider */}
      <ProductSlider
        title="محصولات ورزشی"
        products={sportsProducts}
        backgroundColor="#D64327"
        href={`/products/wholesale/all`}
      />

      {/* Store Setup Banner */}
      <StoreSetupBanner />

      {/* Reviews Slider */}
      <ReviewSection
        filters={Object.keys(reviewsByFilter)}
        reviews={[]}
        dataByFilter={reviewsByFilter}
      />

      {/* Store Location */}
      <StoreLocation />

      {/* Related Articles */}
      <RelatedArticles />

      {/* Features Section */}
      <FeatureSection />
    </div>
  );
}
