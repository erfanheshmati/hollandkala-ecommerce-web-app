import Header from "@/components/header/index";
import CategoryCard from "@/components/CategoryCard";
import ProductSection from "@/components/ProductSection";
import FeatureCard from "@/components/FeatureCard";
import CustomerReview from "@/components/CustomerReview";
import Footer from "@/components/Footer";

export default function HomePage() {
  // Category data
  const categories = [
    {
      title: "محصولات عمده ی نو",
      backgroundColor: "#4A90E2",
    },
    {
      title: "محصولات عمده ی دست دوم",
      backgroundColor: "#E94B3C",
    },
    {
      title: "محصولات عمده ی نو",
      backgroundColor: "#27AE60",
    },
    {
      title: "محصولات عمده ی نو",
      backgroundColor: "#F39C12",
    },
  ];

  // Product data
  const sportsProducts = [
    {
      title: "کفش آدیداس لایت ریسر آداپت",
      price: "۸۷ یورو",
      originalPrice: "۹۵ یورو",
      discount: "9%",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
    {
      title: "کفش آدیداس لایت ریسر آداپت",
      price: "۸۷ یورو",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
    {
      title: "کفش آدیداس لایت ریسر آداپت",
      price: "۸۷ یورو",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
    {
      title: "کفش آدیداس لایت ریسر آداپت",
      price: "۸۷ یورو",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
  ];

  const clothingProducts = [
    {
      title: "ست تاپ و شلوارک مردانه",
      price: "۸۷ یورو",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
    {
      title: "ست تاپ و شلوارک مردانه",
      price: "۸۷ یورو",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
    {
      title: "ست تاپ و شلوارک مردانه",
      price: "۸۷ یورو",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
    {
      title: "ست تاپ و شلوارک مردانه",
      price: "۸۷ یورو",
      badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    },
  ];

  const reviews = [
    {
      name: "لیلا حسینی",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
      categories: ["دستکش مخصوص ویلچر", "نقض عضو"],
    },
    {
      name: "لیلا حسینی",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
      categories: ["دستکش مخصوص ویلچر", "نقض عضو"],
    },
    {
      name: "لیلا حسینی",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
      categories: ["دستکش مخصوص ویلچر", "نقض عضو"],
    },
    {
      name: "لیلا حسینی",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
      categories: ["دستکش مخصوص ویلچر", "نقض عضو"],
    },
  ];

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
    <div className="min-h-screen bg-white pt-[128px]">
      <Header />

      {/* Hero Banner */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <span className="text-gray-600">
            متن تستی برای کاربر تیبلیغات یا....
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M7.5 18.75L3.75 15M3.75 15L7.5 11.25M3.75 15H20.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Hero Carousel Placeholder */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">هلندکالا</h2>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            دسته بندی محصولات ما
          </h2>
          <p className="text-gray-600">
            شما میتوانید مابقی دسته بندی را از منو مشاهده کنید
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </section>

      {/* Product Sections */}
      <section className="container mx-auto px-4 py-8">
        <ProductSection title="کفش اسپرت و کتانی" products={sportsProducts} />
        <ProductSection
          title="پوشاک"
          products={clothingProducts}
          backgroundColor="#E2DEDD"
        />
        <ProductSection
          title="محصولات ورزشی"
          products={sportsProducts}
          backgroundColor="#D64327"
        />
      </section>

      {/* Promotional Banners */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-56 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">
              بنر های تبلیغات و جوایز
            </h3>
          </div>
          <div className="h-56 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">
              بنر های تبلیغات و جوایز
            </h3>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            نظرات کاربران
          </h2>
          <p className="text-gray-600">
            بخشی از درآمد &quot;هلند کالا&quot; صرف امور خیریه می شود
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-3xl hover:bg-gray-200 transition-colors">
            خیریه
          </button>
          <button className="bg-gray-50 text-gray-600 px-4 py-2 rounded-3xl hover:bg-gray-100 transition-colors">
            ورزشکاران
          </button>
          <button className="bg-gray-50 text-gray-600 px-4 py-2 rounded-3xl hover:bg-gray-100 transition-colors">
            خریداران
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <CustomerReview key={index} {...review} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Store Location Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              از فروشگاه ما دیدن کنید
            </h3>
            <div className="flex gap-3 mb-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-medium">
                London
              </button>
              <button className="bg-white text-gray-600 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-gray-50">
                Hong Kong
              </button>
              <button className="bg-white text-gray-600 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-gray-50">
                Paris
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 8.33333C2 12.665 6.665 17.5 10 17.5C13.335 17.5 18 12.665 18 8.33333C18 4.00167 13.335 2.5 10 2.5C6.665 2.5 2 4.00167 2 8.33333Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">ادرس: هلند، لاله</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 10C2.5 13.45 5.55 16.5 9 16.5C9.775 16.5 10.525 16.375 11.225 16.15L15.5 16.5L13.775 12.725C14.325 12.175 14.825 11.575 15.25 10.925"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 9.99996C2.5 6.54996 5.55 3.49996 9 3.49996C12.45 3.49996 15.5 6.54996 15.5 9.99996"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">info@hollandkala.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 14.5833V16.6666C17.5 17.325 16.9917 17.8333 16.3333 17.8333H5.66667C5.00833 17.8333 4.5 17.325 4.5 16.6666V14.5833"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 5.83331H4.5V14.5833H17.5V5.83331Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33333 3.33331H5.66667C5.00833 3.33331 4.5 3.84165 4.5 4.49998V5.83331H17.5V4.49998C17.5 3.84165 16.9917 3.33331 16.3333 3.33331H13.6667"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">+31616009009</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl h-full min-h-[400px]"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
