import {
  BannerImageProps,
  BlogProps,
  FeatureCardProps,
  FooterLinkProps,
  MenuItemProps,
  MobileNavItemProps,
  ProductProps,
  ProductCategoryProps,
  PromotionalTextProps,
  ReviewProps,
  SlideImageProps,
  SocialMediaProps,
  SortProps,
  StoreLocationProps,
  CartProps,
  ProfileNavItemProps,
} from '@/types';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { PiHeart, PiShoppingCartSimple } from 'react-icons/pi';
import { TbSmartHome } from 'react-icons/tb';

export const menuData: MenuItemProps[] = [
  {
    title: 'صفحه اصلی',
    href: '/',
  },
  {
    title: 'عمده فروشی',
    href: '/products/wholesale/all',
    hasDropdown: true,
    children: [
      {
        title: 'کیف و کفش',
        href: '/products/wholesale/shoes',
        hasDropdown: true,
        children: [
          { title: 'کلاسیک', href: '/products/wholesale/shoes' },
          { title: 'مجلسی', href: '/products/wholesale/shoes' },
          { title: 'ورزشی', href: '/products/wholesale/sports' },
        ],
      },
      { title: 'پوشاک زنانه', href: '/products/wholesale/clothing' },
      { title: 'محصولات ورزشی', href: '/products/wholesale/sports' },
      { title: 'اکسسوری', href: '/products/wholesale/accessories' },
    ],
  },
  {
    title: 'خرده فروشی',
    href: '/products/retail/all',
    hasDropdown: true,
    children: [
      { title: 'کفش', href: '/products/retail/shoes' },
      { title: 'پوشاک', href: '/products/retail/clothing' },
      { title: 'ورزشی', href: '/products/retail/sports' },
    ],
  },
  {
    title: 'بلاگ',
    href: '/blog',
  },
  {
    title: 'درباره ی ما',
    href: '/about',
  },
  {
    title: 'تماس با ما',
    href: '/contact',
  },
  {
    title: 'هدایا',
    href: '/gifts',
  },
  {
    title: 'نظرات کاربران',
    href: '/reviews',
  },
];

export const footerLinks: FooterLinkProps[] = [
  {
    title: ' عمده فروشی',
    href: '/products/wholesale/all',
  },
  {
    title: 'خرده فروشی',
    href: '/products/retail/all',
  },
  {
    title: 'بلاگ',
    href: '/blog',
  },
  {
    title: 'درباره ی ما',
    href: '/about',
  },
  {
    title: 'تماس با ما',
    href: '/contact',
  },
];

export const socialNetworks: SocialMediaProps[] = [
  {
    href: '#',
    icon: FaLinkedin,
  },
  {
    href: '#',
    icon: BsTwitter,
  },
  {
    href: '#',
    icon: AiFillInstagram,
  },
  {
    href: '#',
    icon: IoLogoWhatsapp,
  },
];

export const mobileNavItems: MobileNavItemProps[] = [
  {
    href: '/',
    label: 'صفحه اصلی',
    icon: TbSmartHome,
  },
  {
    href: '/favorites',
    label: 'علاقه مندی',
    icon: PiHeart,
  },
  {
    href: '/cart',
    label: 'سبد خرید',
    icon: PiShoppingCartSimple,
  },
  {
    href: '/profile',
    label: 'پروفایل',
    icon: HiOutlineUserCircle,
  },
];

export const slideImages: SlideImageProps[] = [
  {
    title: 'slide-1',
    src: '/images/slide-1.jpg',
  },
  {
    title: 'slide-2',
    src: '/images/slide-2.jpg',
  },
  {
    title: 'slide-3',
    src: '/images/slide-3.jpg',
  },
  {
    title: 'slide-1',
    src: '/images/slide-1.jpg',
  },
  {
    title: 'slide-2',
    src: '/images/slide-2.jpg',
  },
];

export const productCategories: ProductCategoryProps[] = [
  {
    title: 'محصولات عمده نو',
    imageUrl: '/images/category-1.png',
    href: '/products/wholesale/shoes',
  },
  {
    title: 'محصولات عمده دست دوم',
    imageUrl: '/images/category-2.png',
    href: '/products/wholesale/clothing',
  },
  {
    title: 'خرده فروشی نو',
    imageUrl: '/images/category-3.png',
    href: '/products/retail/sports',
  },
  {
    title: 'خرده فروشی دست دوم',
    imageUrl: '/images/category-4.png',
    href: '/products/retails/shoes',
  },
];

export const wholesaleCategories: ProductCategoryProps[] = [
  {
    title: 'کیف و کفش',
    imageUrl: '/images/category-1.png',
    href: '/products/wholesale/shoes',
  },
  {
    title: 'پوشاک',
    imageUrl: '/images/category-2.png',
    href: '/products/wholesale/clothing',
  },
  {
    title: 'ورزشی',
    imageUrl: '/images/category-3.png',
    href: '/products/wholesale/sports',
  },
];

export const retailCategories: ProductCategoryProps[] = [
  {
    title: 'کیف و کفش',
    imageUrl: '/images/category-4.png',
    href: '/products/retails/shoes',
  },
  {
    title: 'پوشاک',
    imageUrl: '/images/category-3.png',
    href: '/products/retails/clothing',
  },
  {
    title: 'ورزشی',
    imageUrl: '/images/category-2.png',
    href: '/products/retails/sports',
  },
];

export const shoesProducts: ProductProps[] = [
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    comment: 10,
    stock: 100,
    availability: true,
    reviews: [
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
        rating: 4,
        reply: {
          name: 'محمد حسینی',
          avatarUrl: '/images/avatar.png',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
        },
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-en.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
        rating: 4,
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
        rating: 4,
      },
    ],
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰',
    weight: '۱۰۰ گرم',
    purchaseMode: 'تکی',
    originalPrice: '۹۵',
    discountedPrice: '۸۷',
    discountPercentage: '۹',
    retailPrice: '87',
    wholesalePrice: '80',
    priceComparison: [
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
      {
        title: 'آمازون',
        price: '338',
        href: '#',
      },
    ],
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#F0F5F9',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷',
    originalPrice: '۹۵',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#F0F5F9',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷',
    originalPrice: '۹۵',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#F0F5F9',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷',
    originalPrice: '۹۵',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#F0F5F9',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#F0F5F9',
    href: '#',
  },
];

export const clothingProducts: ProductProps[] = [
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    originalPrice: '۹۵ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#E2DEDD',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#E2DEDD',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#E2DEDD',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#E2DEDD',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#E2DEDD',
    href: '#',
  },
];

export const sportsProducts: ProductProps[] = [
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    originalPrice: '۹۵ ',
    discountPercentage: '9',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#D64327',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#D64327',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#D64327',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#D64327',
    href: '#',
  },
  {
    id: 'adidas-light-rise-adapt',
    title: 'کفش آدیداس لایت ریسر آداپت',
    enTitle: 'Adidas Light Rise Adapt Shoes',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف..',
    code: 1234567890,
    barcode: '1234567890',
    rating: 4.5,
    stock: 100,
    availability: true,
    tags: ['کفش', 'آدیداس', 'لایت ریسر آداپت'],
    colors: ['قرمز', 'آبی', 'سبز'],
    sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'],
    gifts: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    materials: 'چرم',
    dimensions: '۲۰۰×۱۰۰×۵۰ میلیمتر',
    weight: '۱۰۰ گرم',
    type: 'کفش',
    discountedPrice: '۸۷ ',
    badges: ['تعداد عمده', 'ورزشکاران حرفه ای'],
    imageUrl: '/images/slide-1.jpg',
    gallery: [
      '/images/slide-1.jpg',
      '/images/slide-2.jpg',
      '/images/slide-3.jpg',
    ],
    backgroundColor: '#D64327',
    href: '#',
  },
];

export const wholesaleCategorySlugToProducts: Record<string, ProductProps[]> = {
  shoes: shoesProducts,
  clothing: clothingProducts,
  sports: sportsProducts,
};

const withRetailVariant = (
  items: ProductProps[],
  variant: Partial<ProductProps>
): ProductProps[] =>
  items.map((p, i) => ({
    ...p,
    discountedPrice: p.discountedPrice ? p.discountedPrice : '۷۵ ',
    backgroundColor: p.backgroundColor
      ? p.backgroundColor
      : i % 2 === 0
      ? '#F7F7F7'
      : '#EFEFEF',
    href: p.href && p.href !== '#' ? p.href : '#',
    ...variant,
  }));

export const retailCategorySlugToProducts: Record<string, ProductProps[]> = {
  shoes: withRetailVariant(shoesProducts, {}),
  clothing: withRetailVariant(clothingProducts, {}),
  sports: withRetailVariant(sportsProducts, {}),
};

export const allProductsMock: ProductProps[] = [
  ...shoesProducts,
  ...clothingProducts,
  ...sportsProducts,
];

export const bannerImages: BannerImageProps[] = [
  {
    title: 'banner-1',
    imageUrl: '/images/banner-1.svg',
    href: '#',
  },
  {
    title: 'banner-2',
    imageUrl: '/images/banner-2.svg',
    href: '#',
  },
];

export const promotionalText: PromotionalTextProps[] = [
  {
    title: 'ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان',
    href: '#',
  },
  {
    title: 'تا ۳۰٪ تخفیف ویژه آخر هفته',
    href: '#',
  },
  {
    title: 'ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان',
    href: '#',
  },
  {
    title: 'تا ۳۰٪ تخفیف ویژه آخر هفته',
    href: '#',
  },
  {
    title: 'ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان',
    href: '#',
  },
  {
    title: 'تا ۳۰٪ تخفیف ویژه آخر هفته',
    href: '#',
  },
  {
    title: 'ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان',
    href: '#',
  },
  {
    title: 'تا ۳۰٪ تخفیف ویژه آخر هفته',
    href: '#',
  },
];

export const charityReviews: ReviewProps[] = [
  {
    name: 'لیلا حسینی',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'لیلا حسینی',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-fa.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'لیلا حسینی',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'لیلا حسینی',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'لیلا حسینی',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'لیلا حسینی',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
];

export const athletesReviews: ReviewProps[] = [
  {
    name: 'آرش کاوه',
    comment:
      'به عنوان ورزشکار، کیفیت محصولات خیلی خوب بود و ارسال سریع انجام شد.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'سارا احمدی',
    comment: 'پشتیبانی حرفه‌ای و قیمت‌ها مناسب. تجربه خرید خوبی داشتم.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'مانی رستگار',
    comment: 'برای اردو تجهیزات خریدیم، همه چیز عالی بود.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'آرش کاوه',
    comment:
      'به عنوان ورزشکار، کیفیت محصولات خیلی خوب بود و ارسال سریع انجام شد.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'سارا احمدی',
    comment: 'پشتیبانی حرفه‌ای و قیمت‌ها مناسب. تجربه خرید خوبی داشتم.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'مانی رستگار',
    comment: 'برای اردو تجهیزات خریدیم، همه چیز عالی بود.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
];

export const buyersReviews: ReviewProps[] = [
  {
    name: 'زهرا محمدی',
    comment: 'بسته‌بندی مرتب و تحویل به‌موقع بود.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'حمید رضایی',
    comment: 'کیفیت کالا دقیقا مطابق توضیحات سایت بود.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'مریم سرمدی',
    comment: 'از تخفیف‌ها و پیشنهادها راضی بودم.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'زهرا محمدی',
    comment: 'بسته‌بندی مرتب و تحویل به‌موقع بود.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'حمید رضایی',
    comment: 'کیفیت کالا دقیقا مطابق توضیحات سایت بود.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
  {
    name: 'مریم سرمدی',
    comment: 'از تخفیف‌ها و پیشنهادها راضی بودم.',
    badges: ['نقص عضو', 'دستکش مخصوص ویلچر'],
    avatarUrl: '/icons/flag-en.svg',
    images: ['/images/slide-1.jpg', '/images/slide-2.jpg'],
  },
];

export const reviewsByFilter: Record<string, ReviewProps[]> = {
  خیریه: charityReviews,
  ورزشکاران: athletesReviews,
  خریداران: buyersReviews,
};

export const storeLocations: Record<string, StoreLocationProps> = {
  London: {
    name: 'London',
    address: '40 Baker Street, London, W1U 7AJ',
    email: 'london@hollandkala.com',
    phone: '(08) 8942 1299',
    workingHours: ['Mon - Fri, 8:30AM - 10:30PM', 'Saturday, 8:30Am - 10:30PM'],
    closedDays: ['Sunday'],
  },
  Paris: {
    name: 'Paris',
    address: '125 Avenue des Champs-Élysées, 75008 Paris',
    email: 'paris@hollandkala.com',
    phone: '(08) 8942 1299',
    workingHours: ['Mon - Fri, 8:30AM - 10:30PM', 'Saturday, 8:30Am - 10:30PM'],
    closedDays: ['Sunday', 'Saturday'],
  },
  HongKong: {
    name: 'HongKong',
    address: 'Shop 234, Festival Walk, Kowloon Tong',
    email: 'hongkong@hollandkala.com',
    phone: '(08) 8942 1299',
    workingHours: ['Mon - Fri, 8:30AM - 10:30PM', 'Saturday, 8:30Am - 10:30PM'],
    closedDays: ['Sunday'],
  },
};

export const relatedArticles: BlogProps[] = [
  {
    id: 'herh45h6gsfhhfyh',
    title: 'ایا هلندکالا را میشناسید؟',
    description: ' ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    content:
      'هلند کالا در حقیقت یک پلاتفرم قوی خرید محصولات برند از هلند و ارسال به هر نقطه‌ای از جهان است. در هلند کالا هیچ واسطه‌ای وجود ندارد؛ بنابراین تمامی فروشگاه‌های لاکچری و مزون‌داران می‌توانند به‌راحتی و مستقیماً خرید خود را از هلند انجام دهند. شما در هر نقطه‌ای که حضور دارید، می‌توانید با هر بودجه‌ای از هلند کالا خرید کرده و آن را در فروشگاه، مزون، شبکه‌های اجتماعی و مارکت‌پلیس‌های محلی (مانند سایت دیوار) در هر نقطه‌ای از دنیا مستقیماً به فروش برسانید. کارکنان هلند کالا هر نوع خریدی را که مشکل حقوقی نداشته باشد، می‌توانند برای شما در هلند و اروپا انجام دهند. برای تجار بزرگ ایرانی که قصد صادرات کالاهای خود به اتحادیه اروپا و به‌ویژه هلند را دارند، هلند کالا اقامت تجاری هلند را مهیا می‌کند. شما همواره و به سادگی می‌توانید با شماره‌های 0031616009009 و 0031640001511 در تماس باشید',
    date: 'دو روز قبل',
    likes: 33,
    comments: 121,
    imageUrl: '/images/blog.png',
    reviews: [
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
        reply: {
          name: 'محمد حسینی',
          avatarUrl: '/images/avatar.png',
          text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
        },
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-en.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
      },
      {
        name: 'سامان جعفری',
        avatarUrl: '/icons/flag-fa.svg',
        comment:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،الخصوص طراحان خلاقی ',
      },
    ],
  },
  {
    id: 'herh45h6gdfhhfyh',
    title: 'ایا هلندکالا را میشناسید؟',
    description:
      'ایپسوم متن ساختگی با تولید سادگی نامفهوم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    date: 'دو روز قبل',
    likes: 330,
    comments: 121,
    imageUrl: '/images/blog.png',
  },
  {
    id: 'herh45h6t44hhfyh',
    title: 'ایا هلندکالا را میشناسید؟',
    description:
      'ایپسوم متن ساختگی با تولید سادگی نامفهوم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    date: 'دو روز قبل',
    likes: 330,
    comments: 121,
    imageUrl: '/images/blog.png',
  },
  {
    id: 'herh45h6fdsfhhfyh',
    title: 'ایا هلندکالا را میشناسید؟',
    description:
      'ایپسوم متن ساختگی با تولید سادگی نامفهوم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    date: 'دو روز قبل',
    likes: 330,
    comments: 121,
    imageUrl: '/images/blog.png',
  },
];

export const features: FeatureCardProps[] = [
  {
    title: 'ارسال رایگان',
    description: 'ارسال رایگان برای سفارشات بالای ۱۲۰ دلار',
    iconUrl: '/icons/feature-1.svg',
  },
  {
    title: 'مرجوعی ۱۴ روزه',
    description: 'تا ۳۰ روز برای تعویض',
    iconUrl: '/icons/feature-2.svg',
  },
  {
    title: 'پرداخت انعطاف پذیر',
    description: 'پرداخت با کارت های اعتباری مختلف',
    iconUrl: '/icons/feature-3.svg',
  },
  {
    title: 'پشتیبانی ممتاز',
    description: 'پشتیلانی عالی و ممتاز',
    iconUrl: '/icons/feature-4.svg',
  },
];

export const sortData: SortProps[] = [
  {
    label: 'جدید ترین',
    param: 'newest',
  },
  {
    label: 'پرفروش ترین',
    param: 'bestseller',
  },
];

export const cartItems: CartProps[] = [
  {
    id: '1',
    title: 'محصول نمونه ۱',
    code: '543565',
    price: 35,
    quantity: 1,
    date: '۰۴/۲/۲',
    image: '/images/slide-1.jpg',
  },
  {
    id: '2',
    title: 'محصول نمونه ۲',
    code: '354466',
    price: 22,
    quantity: 2,
    date: '۰۴/۲/۲',
    image: '',
  },
  {
    id: '3',
    title: 'محصول نمونه ۲',
    code: '456565',
    price: 22,
    quantity: 3,
    date: '۰۴/۲/۲',
    image: '/images/slide-1.jpg',
  },
  {
    id: '4',
    title: 'محصول نمونه ۲',
    code: '534535',
    price: 22,
    quantity: 4,
    date: '۰۴/۲/۲',
    image: '/images/slide-1.jpg',
  },
];

export const profileNavItems: ProfileNavItemProps[] = [
  {
    href: '/profile/info',
    label: 'اطلاعات فردی',
  },
  {
    href: '/profile/orders',
    label: 'لیست سفارشات',
  },
  {
    href: '/profile/ticket',
    label: 'ارسال تیکت',
  },
  {
    href: '/profile/collaboration',
    label: 'درخواست همکاری',
  },
  {
    href: '/profile/reviews',
    label: 'دیدگاه ها',
  },
];
