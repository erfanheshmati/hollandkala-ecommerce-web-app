import Header from "@/components/header/index";
import FeatureCard from "@/components/FeatureCard";
import { reviewsByFilter } from "@/lib/data";
import Footer from "@/components/footer";
import Slider from "@/components/home/slider";
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

export default function HomePage() {
  const features = [
    {
      title: "ارسال رایگان",
      description: "ارسال رایگان برای سفارشات بالای ۱۲۰ دلار",
      backgroundColor: "#E3F2FD",
    },
    {
      title: "مرجوعی ۱۴ روزه",
      description: "تا ۳۰ روز برای تعویض",
      backgroundColor: "#FFF3E0",
    },
    {
      title: "پرداخت انعطاف پذیر",
      description: "پرداخت با کارت های اعتباری مختلف",
      backgroundColor: "#E8F5E9",
    },
    {
      title: "پشتیبانی ممتاز",
      description: "پشتیلانی عالی و ممتاز",
      backgroundColor: "#F3E5F5",
    },
  ];

  return (
    <div className="container bg-background min-h-screen py-20 md:py-32">
      {/* Header */}
      <Header />

      {/* Hero Slider */}
      <Slider />

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

      {/* Features Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
