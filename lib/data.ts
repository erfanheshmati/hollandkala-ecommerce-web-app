import {
  BannerImageProps,
  BlogCardProps,
  FooterLinkProps,
  MenuItemProps,
  MobileNavItemProps,
  ProductCardProps,
  ProductCategoryProps,
  PromotionalTextProps,
  ReviewProps,
  SlideImageProps,
  SocialMediaProps,
  StoreLocationProps,
} from "@/types";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiHeart, PiShoppingCartSimple } from "react-icons/pi";
import { TbSmartHome } from "react-icons/tb";

export const menuData: MenuItemProps[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "عمده فروشی",
    href: "/wholesale",
    hasDropdown: true,
    children: [
      {
        title: "کیف و کفش",
        href: "/wholesale/shoes",
        hasDropdown: true,
        children: [
          { title: "کلاسیک", href: "/wholesale/shoes/classic" },
          { title: "مجلسی", href: "/wholesale/shoes/parliamentary" },
          { title: "ورزشی", href: "/wholesale/shoes/sports" },
        ],
      },
      { title: "پوشاک زنانه", href: "/wholesale/female-shoes" },
    ],
  },
  {
    title: "خرده فروشی",
    href: "/retail",
    hasDropdown: true,
    children: [
      { title: "عمده فروشی", href: "/retail/wholesale" },
      { title: "خرده فروشی", href: "/retail/retail" },
      { title: "خدمات پس از فروش", href: "/retail/support" },
    ],
  },
  {
    title: "بلاگ",
    href: "/blog",
  },
  {
    title: "درباره ی ما",
    href: "/about",
  },
  {
    title: "تماس با ما",
    href: "/contact",
  },
  {
    title: "هدایا و نظرات کاربران",
    href: "/gift",
  },
];

export const footerLinks: FooterLinkProps[] = [
  {
    title: " عمده فروشی",
    href: "/wholesale",
  },
  {
    title: "خرده فروشی",
    href: "/retail",
  },
  {
    title: "بلاگ",
    href: "/blog",
  },
  {
    title: "درباره ی ما",
    href: "/about",
  },
  {
    title: "تماس با ما",
    href: "/contact",
  },
];

export const socialNetworks: SocialMediaProps[] = [
  {
    href: "#",
    icon: FaLinkedin,
  },
  {
    href: "#",
    icon: BsTwitter,
  },
  {
    href: "#",
    icon: AiFillInstagram,
  },
  {
    href: "#",
    icon: IoLogoWhatsapp,
  },
];

export const mobileNavItems: MobileNavItemProps[] = [
  {
    href: "/",
    label: "صفحه اصلی",
    icon: TbSmartHome,
  },
  {
    href: "/favorite",
    label: "علاقه مندی",
    icon: PiHeart,
  },
  {
    href: "/cart",
    label: "سبد خرید",
    icon: PiShoppingCartSimple,
  },
  {
    href: "/profile",
    label: "پروفایل",
    icon: HiOutlineUserCircle,
  },
];

export const slideImages: SlideImageProps[] = [
  {
    title: "slide-1",
    src: "/images/slide-1.jpg",
  },
  {
    title: "slide-2",
    src: "/images/slide-2.jpg",
  },
  {
    title: "slide-3",
    src: "/images/slide-3.jpg",
  },
];

export const productsCategory: ProductCategoryProps[] = [
  {
    title: "محصولات عمده ی نو",
    imageUrl: "/images/category-1.png",
    href: "#",
  },
  {
    title: "محصولات عمده ی دست دوم",
    imageUrl: "/images/category-2.png",
    href: "#",
  },
  {
    title: "محصولات عمده ی نو",
    imageUrl: "/images/category-3.png",
    href: "#",
  },
  {
    title: "محصولات عمده ی نو",
    imageUrl: "/images/category-4.png",
    href: "#",
  },
  {
    title: "محصولات عمده ی نو",
    imageUrl: "/images/category-4.png",
    href: "#",
  },
  {
    title: "محصولات عمده ی نو",
    imageUrl: "/images/category-3.png",
    href: "#",
  },
  {
    title: "محصولات عمده ی دست دوم",
    imageUrl: "/images/category-2.png",
    href: "#",
  },
  {
    title: "محصولات عمده ی نو",
    imageUrl: "/images/category-1.png",
    href: "#",
  },
];

export const shoesProducts: ProductCardProps[] = [
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    originalPrice: "۹۵ یورو",
    discount: "9%",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
    href: "#",
  },
];

export const clothingProducts: ProductCardProps[] = [
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    originalPrice: "۹۵ یورو",
    discount: "9%",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
    href: "#",
  },
];

export const sportsProducts: ProductCardProps[] = [
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    originalPrice: "۹۵ یورو",
    discount: "9%",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
    href: "#",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
    href: "#",
  },
];

export const bannerImages: BannerImageProps[] = [
  {
    title: "banner-1",
    imageUrl: "/images/banner-1.svg",
    href: "#",
  },
  {
    title: "banner-2",
    imageUrl: "/images/banner-2.svg",
    href: "#",
  },
];

export const promotionalText: PromotionalTextProps[] = [
  {
    title: "ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان",
    href: "#",
  },
  {
    title: "تا ۳۰٪ تخفیف ویژه آخر هفته",
    href: "#",
  },
  {
    title: "ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان",
    href: "#",
  },
  {
    title: "تا ۳۰٪ تخفیف ویژه آخر هفته",
    href: "#",
  },
  {
    title: "ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان",
    href: "#",
  },
  {
    title: "تا ۳۰٪ تخفیف ویژه آخر هفته",
    href: "#",
  },
  {
    title: "ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان",
    href: "#",
  },
  {
    title: "تا ۳۰٪ تخفیف ویژه آخر هفته",
    href: "#",
  },
];

export const charityReviews: ReviewProps[] = [
  {
    name: "لیلا حسینی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "لیلا حسینی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-fa.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "لیلا حسینی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "لیلا حسینی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "لیلا حسینی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "لیلا حسینی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
];

export const athletesReviews: ReviewProps[] = [
  {
    name: "آرش کاوه",
    comment:
      "به عنوان ورزشکار، کیفیت محصولات خیلی خوب بود و ارسال سریع انجام شد.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "سارا احمدی",
    comment: "پشتیبانی حرفه‌ای و قیمت‌ها مناسب. تجربه خرید خوبی داشتم.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "مانی رستگار",
    comment: "برای اردو تجهیزات خریدیم، همه چیز عالی بود.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "آرش کاوه",
    comment:
      "به عنوان ورزشکار، کیفیت محصولات خیلی خوب بود و ارسال سریع انجام شد.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "سارا احمدی",
    comment: "پشتیبانی حرفه‌ای و قیمت‌ها مناسب. تجربه خرید خوبی داشتم.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "مانی رستگار",
    comment: "برای اردو تجهیزات خریدیم، همه چیز عالی بود.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
];

export const buyersReviews: ReviewProps[] = [
  {
    name: "زهرا محمدی",
    comment: "بسته‌بندی مرتب و تحویل به‌موقع بود.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "حمید رضایی",
    comment: "کیفیت کالا دقیقا مطابق توضیحات سایت بود.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "مریم سرمدی",
    comment: "از تخفیف‌ها و پیشنهادها راضی بودم.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "زهرا محمدی",
    comment: "بسته‌بندی مرتب و تحویل به‌موقع بود.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "حمید رضایی",
    comment: "کیفیت کالا دقیقا مطابق توضیحات سایت بود.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
  {
    name: "مریم سرمدی",
    comment: "از تخفیف‌ها و پیشنهادها راضی بودم.",
    badges: ["نقص عضو", "دستکش مخصوص ویلچر"],
    avatarUrl: "/icons/flag-en.svg",
    images: ["/images/slide-1.jpg", "/images/slide-2.jpg"],
  },
];

export const reviewsByFilter: Record<string, ReviewProps[]> = {
  خیریه: charityReviews,
  ورزشکاران: athletesReviews,
  خریداران: buyersReviews,
};

export const storeLocations: Record<string, StoreLocationProps> = {
  London: {
    name: "London",
    address: "40 Baker Street, London, W1U 7AJ",
    email: "london@hollandkala.com",
    phone: "(08) 8942 1299",
    workingHours: ["Mon - Fri, 8:30AM - 10:30PM", "Saturday, 8:30Am - 10:30PM"],
    closedDays: ["Sunday"],
  },
  Paris: {
    name: "Paris",
    address: "125 Avenue des Champs-Élysées, 75008 Paris",
    email: "paris@hollandkala.com",
    phone: "(08) 8942 1299",
    workingHours: ["Mon - Fri, 8:30AM - 10:30PM", "Saturday, 8:30Am - 10:30PM"],
    closedDays: ["Sunday", "Saturday"],
  },
  HongKong: {
    name: "HongKong",
    address: "Shop 234, Festival Walk, Kowloon Tong",
    email: "hongkong@hollandkala.com",
    phone: "(08) 8942 1299",
    workingHours: ["Mon - Fri, 8:30AM - 10:30PM", "Saturday, 8:30Am - 10:30PM"],
    closedDays: ["Sunday"],
  },
};

export const relatedArticles: BlogCardProps[] = [
  {
    title: "ایا هلندکالا را میشناسید؟",
    description:
      "ایپسوم متن ساختگی با تولید سادگی نامفهوم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    date: "دو روز قبل",
    likes: 330,
    comments: 121,
    imageUrl: "/images/blog.png",
    href: "#",
  },
];
