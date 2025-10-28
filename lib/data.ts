import {
  BannerImageProps,
  FooterLink,
  MenuItem,
  MobileNavItem,
  ProductCardProps,
  ProductCategory,
  PromotionalTextProps,
  SlideImage,
  SocialMedia,
} from "@/types";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiHeart, PiShoppingCartSimple } from "react-icons/pi";
import { TbSmartHome } from "react-icons/tb";

export const menuData: MenuItem[] = [
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

export const footerLinks: FooterLink[] = [
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

export const socialNetworks: SocialMedia[] = [
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

export const mobileNavItems: MobileNavItem[] = [
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

export const slideImages: SlideImage[] = [
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

export const productsCategory: ProductCategory[] = [
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
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#F0F5F9",
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
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#E2DEDD",
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
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
  },
  {
    title: "کفش آدیداس لایت ریسر آداپت",
    discountedPrice: "۸۷ یورو",
    badges: ["تعداد عمده", "ورزشکاران حرفه ای"],
    imageUrl: "/images/slide-1.jpg",
    backgroundColor: "#D64327",
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
];
