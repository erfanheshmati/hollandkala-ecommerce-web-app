import { ProductProps, PriceComparisonProps, ReviewProps, BlogProps } from '@/types';

/**
 * Color mapping for localization
 */
const COLOR_MAP: Record<string, { fa: string; en: string }> = {
  قرمز: { fa: 'قرمز', en: 'Red' },
  آبی: { fa: 'آبی', en: 'Blue' },
  سبز: { fa: 'سبز', en: 'Green' },
  صورتی: { fa: 'صورتی', en: 'Pink' },
  مشکی: { fa: 'مشکی', en: 'Black' },
  سفید: { fa: 'سفید', en: 'White' },
  red: { fa: 'قرمز', en: 'Red' },
  blue: { fa: 'آبی', en: 'Blue' },
  green: { fa: 'سبز', en: 'Green' },
  pink: { fa: 'صورتی', en: 'Pink' },
  black: { fa: 'مشکی', en: 'Black' },
  white: { fa: 'سفید', en: 'White' },
};

/**
 * Badge mapping for localization
 */
const BADGE_MAP: Record<string, { fa: string; en: string }> = {
  'تعداد عمده': { fa: 'تعداد عمده', en: 'Wholesale quantity' },
  'ورزشکاران حرفه ای': {
    fa: 'ورزشکاران حرفه ای',
    en: 'Professional athletes',
  },
  'Wholesale quantity': { fa: 'تعداد عمده', en: 'Wholesale quantity' },
  'Professional athletes': {
    fa: 'ورزشکاران حرفه ای',
    en: 'Professional athletes',
  },
  // Review badges
  'نقص عضو': { fa: 'نقص عضو', en: 'Disability' },
  'دستکش مخصوص ویلچر': {
    fa: 'دستکش مخصوص ویلچر',
    en: 'Special wheelchair gloves',
  },
  disability: { fa: 'نقص عضو', en: 'Disability' },
  wheelchairGloves: {
    fa: 'دستکش مخصوص ویلچر',
    en: 'Special wheelchair gloves',
  },
};

/**
 * Purchase mode mapping
 */
const PURCHASE_MODE_MAP: Record<string, { fa: string; en: string }> = {
  تکی: { fa: 'تکی', en: 'Retail' },
  عمده: { fa: 'عمده', en: 'Wholesale' },
  single: { fa: 'تکی', en: 'Retail' },
  wholesale: { fa: 'عمده', en: 'Wholesale' },
  Retail: { fa: 'تکی', en: 'Retail' },
  Wholesale: { fa: 'عمده', en: 'Wholesale' },
};

/**
 * Material mapping
 */
const MATERIAL_MAP: Record<string, { fa: string; en: string }> = {
  چرم: { fa: 'چرم', en: 'Leather' },
  پارچه: { fa: 'پارچه', en: 'Fabric' },
  فوم: { fa: 'فوم', en: 'Foam' },
  'پارچه، فوم': { fa: 'پارچه، فوم', en: 'Fabric, Foam' },
  Leather: { fa: 'چرم', en: 'Leather' },
  Fabric: { fa: 'پارچه', en: 'Fabric' },
  Foam: { fa: 'فوم', en: 'Foam' },
  'Fabric, Foam': { fa: 'پارچه، فوم', en: 'Fabric, Foam' },
};

/**
 * Type/Category mapping
 */
const TYPE_MAP: Record<string, { fa: string; en: string }> = {
  کفش: { fa: 'کفش', en: 'Shoes' },
  'اسپرت / روزمره': { fa: 'اسپرت / روزمره', en: 'Sport / Casual' },
  Shoes: { fa: 'کفش', en: 'Shoes' },
  'Sport / Casual': { fa: 'اسپرت / روزمره', en: 'Sport / Casual' },
};

/**
 * Price comparison title mapping
 */
const PRICE_COMPARISON_TITLE_MAP: Record<string, { fa: string; en: string }> =
  {
    آمازون: { fa: 'آمازون', en: 'Amazon' },
    Amazon: { fa: 'آمازون', en: 'Amazon' },
  };

/**
 * Review comment mapping for localization
 */
const REVIEW_COMMENT_MAP: Record<string, { fa: string; en: string }> = {
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...': {
    fa: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه...',
    en: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Printers and texts but newspapers...',
  },
  'به عنوان ورزشکار، کیفیت محصولات خیلی خوب بود و ارسال سریع انجام شد.': {
    fa: 'به عنوان ورزشکار، کیفیت محصولات خیلی خوب بود و ارسال سریع انجام شد.',
    en: 'As an athlete, the product quality was very good and shipping was fast.',
  },
  'پشتیبانی حرفه‌ای و قیمت‌ها مناسب. تجربه خرید خوبی داشتم.': {
    fa: 'پشتیبانی حرفه‌ای و قیمت‌ها مناسب. تجربه خرید خوبی داشتم.',
    en: 'Professional support and reasonable prices. I had a good shopping experience.',
  },
  'برای اردو تجهیزات خریدیم، همه چیز عالی بود.': {
    fa: 'برای اردو تجهیزات خریدیم، همه چیز عالی بود.',
    en: 'We bought equipment for the camp, everything was great.',
  },
  'بسته‌بندی مرتب و تحویل به‌موقع بود.': {
    fa: 'بسته‌بندی مرتب و تحویل به‌موقع بود.',
    en: 'The packaging was neat and delivery was on time.',
  },
  'کیفیت کالا دقیقا مطابق توضیحات سایت بود.': {
    fa: 'کیفیت کالا دقیقا مطابق توضیحات سایت بود.',
    en: 'The product quality was exactly as described on the website.',
  },
  'از تخفیف‌ها و پیشنهادها راضی بودم.': {
    fa: 'از تخفیف‌ها و پیشنهادها راضی بودم.',
    en: 'I was satisfied with the discounts and offers.',
  },
};

/**
 * Converts Persian digits to English digits
 */
function toEnglishDigits(str: string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return str
    .split('')
    .map((char) => {
      const index = persianDigits.indexOf(char);
      return index !== -1 ? englishDigits[index] : char;
    })
    .join('');
}

/**
 * Converts English digits to Persian digits
 */
function toPersianDigits(str: string): string {
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str
    .split('')
    .map((char) => {
      const index = englishDigits.indexOf(char);
      return index !== -1 ? persianDigits[index] : char;
    })
    .join('');
}

/**
 * Localizes a product based on locale
 */
export function localizeProduct(
  product: ProductProps,
  locale: 'fa' | 'en'
): ProductProps {
  // Helper to get localized value from map
  const getLocalized = <T extends { fa: string; en: string }>(
    value: string,
    map: Record<string, T>
  ): string => {
    const mapping = map[value] || map[value.toLowerCase()];
    if (mapping) {
      return locale === 'fa' ? mapping.fa : mapping.en;
    }
    return value; // Fallback to original if not found
  };

  // Localize colors
  const localizedColors =
    product.colors?.map((color) => getLocalized(color, COLOR_MAP)) || [];

  // Localize badges
  const localizedBadges =
    product.badges?.map((badge) => getLocalized(badge, BADGE_MAP)) || [];

  // Localize purchase mode
  const localizedPurchaseMode = product.purchaseMode
    ? getLocalized(product.purchaseMode, PURCHASE_MODE_MAP)
    : undefined;

  // Localize materials
  const localizedMaterials = product.materials
    ? getLocalized(product.materials, MATERIAL_MAP)
    : undefined;

  // Localize type
  const localizedType = product.type
    ? getLocalized(product.type, TYPE_MAP)
    : undefined;

  // Localize price comparison
  const localizedPriceComparison: PriceComparisonProps[] | undefined =
    product.priceComparison?.map((pc) => ({
      title: getLocalized(pc.title, PRICE_COMPARISON_TITLE_MAP),
      price: pc.price,
      href: pc.href,
    }));

  // Localize sizes - convert digits based on locale
  const localizedSizes =
    product.sizes?.map((size) => {
      if (locale === 'fa') {
        return toPersianDigits(toEnglishDigits(size));
      } else {
        return toEnglishDigits(size);
      }
    }) || [];

  // Localize prices - convert digits based on locale
  const localizePrice = (price: string | undefined): string | undefined => {
    if (!price) return undefined;
    if (locale === 'fa') {
      return toPersianDigits(toEnglishDigits(price));
    } else {
      return toEnglishDigits(price);
    }
  };

  // Localize reviews
  const localizedReviews: ReviewProps[] | undefined = product.reviews?.map(
    (review) => ({
      ...review,
      // For reviews, we'll keep the comment as-is for now since it's user-generated content
      // In a real app, reviews would be stored with both languages or translated
      comment: review.comment,
      reply: review.reply
        ? {
            ...review.reply,
            text: review.reply.text,
          }
        : undefined,
    })
  );

  // Localize tags - map common product tags
  const TAG_MAP: Record<string, { fa: string; en: string }> = {
    کفش: { fa: 'کفش', en: 'Shoes' },
    آدیداس: { fa: 'آدیداس', en: 'Adidas' },
    'لایت ریسر آداپت': { fa: 'لایت ریسر آداپت', en: 'Light Rise Adapt' },
    Shoes: { fa: 'کفش', en: 'Shoes' },
    Adidas: { fa: 'آدیداس', en: 'Adidas' },
    'Light Rise Adapt': { fa: 'لایت ریسر آداپت', en: 'Light Rise Adapt' },
  };
  const localizedTags =
    product.tags?.map((tag) => getLocalized(tag, TAG_MAP)) || [];

  // Get title - use enTitle for English if available, otherwise use title
  const localizedTitle =
    locale === 'en' && product.enTitle
      ? product.enTitle
      : product.title;

  // Get description - use enDescription for English if available
  // In a real app, descriptions would be stored in both languages in the database
  const localizedDescription =
    locale === 'en'
      ? product.enDescription ||
        (product.description &&
        (/[\u0600-\u06FF]/.test(product.description) ||
          product.description.includes('لورم'))
          ? 'High-quality product with excellent craftsmanship and premium materials. Designed for comfort and durability.'
          : product.description) ||
        'Product description'
      : product.description || '';

  // Get weight - convert unit and digits based on locale
  const localizedWeight = product.weight
    ? (() => {
        const weightStr = product.weight;
        if (locale === 'en') {
          // Convert Persian digits to English and Persian unit to English
          let result = toEnglishDigits(weightStr);
          result = result.replace('گرم', 'g').replace(/گرم/g, 'g');
          return result;
        } else {
          // Ensure Persian digits for Farsi
          return toPersianDigits(toEnglishDigits(weightStr));
        }
      })()
    : undefined;

  // Get dimensions - convert digits based on locale
  const localizedDimensions = product.dimensions
    ? locale === 'en'
      ? toEnglishDigits(product.dimensions).replace('میلیمتر', 'mm')
      : toPersianDigits(toEnglishDigits(product.dimensions))
    : undefined;

  return {
    ...product,
    title: localizedTitle,
    enTitle: locale === 'fa' ? product.enTitle : product.title,
    description: localizedDescription,
    colors: localizedColors,
    badges: localizedBadges,
    purchaseMode: localizedPurchaseMode,
    materials: localizedMaterials,
    type: localizedType,
    priceComparison: localizedPriceComparison,
    sizes: localizedSizes,
    originalPrice: localizePrice(product.originalPrice),
    discountedPrice: localizePrice(product.discountedPrice),
    discountPercentage: localizePrice(product.discountPercentage),
    retailPrice: localizePrice(product.retailPrice),
    wholesalePrice: localizePrice(product.wholesalePrice),
    reviews: localizedReviews,
    tags: localizedTags,
    weight: localizedWeight,
    dimensions: localizedDimensions,
  };
}

/**
 * Localizes an array of products
 */
export function localizeProducts(
  products: ProductProps[],
  locale: 'fa' | 'en'
): ProductProps[] {
  return products.map((product) => localizeProduct(product, locale));
}

/**
 * Localizes a review based on locale
 */
export function localizeReview(
  review: ReviewProps,
  locale: 'fa' | 'en'
): ReviewProps {
  // Helper to get localized value from map
  const getLocalized = <T extends { fa: string; en: string }>(
    value: string,
    map: Record<string, T>
  ): string => {
    const mapping = map[value] || map[value.toLowerCase()];
    if (mapping) {
      return locale === 'fa' ? mapping.fa : mapping.en;
    }
    return value; // Fallback to original if not found
  };

  // Localize comment
  const localizedComment = getLocalized(review.comment, REVIEW_COMMENT_MAP);

  // Localize badges
  const localizedBadges =
    review.badges?.map((badge) => getLocalized(badge, BADGE_MAP)) || [];

  // Localize reply if present
  const localizedReply = review.reply
    ? {
        ...review.reply,
        text: getLocalized(review.reply.text, REVIEW_COMMENT_MAP),
      }
    : undefined;

  return {
    ...review,
    comment: localizedComment,
    badges: localizedBadges,
    reply: localizedReply,
  };
}

/**
 * Localizes an array of reviews
 */
export function localizeReviews(
  reviews: ReviewProps[],
  locale: 'fa' | 'en'
): ReviewProps[] {
  return reviews.map((review) => localizeReview(review, locale));
}

/**
 * Localizes reviews by filter (Record<string, ReviewProps[]>)
 */
export function localizeReviewsByFilter(
  reviewsByFilter: Record<string, ReviewProps[]>,
  locale: 'fa' | 'en'
): Record<string, ReviewProps[]> {
  const localized: Record<string, ReviewProps[]> = {};
  for (const [key, reviews] of Object.entries(reviewsByFilter)) {
    localized[key] = localizeReviews(reviews, locale);
  }
  return localized;
}

/**
 * Blog title mapping for localization
 */
const BLOG_TITLE_MAP: Record<string, { fa: string; en: string }> = {
  'ایا هلندکالا را میشناسید؟': {
    fa: 'ایا هلندکالا را میشناسید؟',
    en: 'Do you know HollandKala?',
  },
  'Do you know HollandKala?': {
    fa: 'ایا هلندکالا را میشناسید؟',
    en: 'Do you know HollandKala?',
  },
};

/**
 * Blog description mapping for localization
 */
const BLOG_DESCRIPTION_MAP: Record<string, { fa: string; en: string }> = {
  ' ایپسوم متن ساختگی با تولید سادگی نامفهوم': {
    fa: ' ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    en: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
  },
  'ایپسوم متن ساختگی با تولید سادگی نامفهوم': {
    fa: 'ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    en: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
  },
  'ایپسوم متن ساختگی با تولید سادگی نامفهوم ایپسوم متن ساختگی با تولید سادگی نامفهوم': {
    fa: 'ایپسوم متن ساختگی با تولید سادگی نامفهوم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    en: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry',
  },
  'Lorem ipsum is simply dummy text of the printing and typesetting industry': {
    fa: 'ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    en: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
  },
};

/**
 * Blog date mapping for localization
 */
const BLOG_DATE_MAP: Record<string, { fa: string; en: string }> = {
  'دو روز قبل': { fa: 'دو روز قبل', en: '2 days ago' },
  '2 days ago': { fa: 'دو روز قبل', en: '2 days ago' },
  'سه روز قبل': { fa: 'سه روز قبل', en: '3 days ago' },
  '3 days ago': { fa: 'سه روز قبل', en: '3 days ago' },
  'یک هفته قبل': { fa: 'یک هفته قبل', en: '1 week ago' },
  '1 week ago': { fa: 'یک هفته قبل', en: '1 week ago' },
  'یک ماه قبل': { fa: 'یک ماه قبل', en: '1 month ago' },
  '1 month ago': { fa: 'یک ماه قبل', en: '1 month ago' },
};

/**
 * Blog content mapping for localization
 */
const BLOG_CONTENT_MAP: Record<string, { fa: string; en: string }> = {
  'هلند کالا در حقیقت یک پلاتفرم قوی خرید محصولات برند از هلند و ارسال به هر نقطه‌ای از جهان است. در هلند کالا هیچ واسطه‌ای وجود ندارد؛ بنابراین تمامی فروشگاه‌های لاکچری و مزون‌داران می‌توانند به‌راحتی و مستقیماً خرید خود را از هلند انجام دهند. شما در هر نقطه‌ای که حضور دارید، می‌توانید با هر بودجه‌ای از هلند کالا خرید کرده و آن را در فروشگاه، مزون، شبکه‌های اجتماعی و مارکت‌پلیس‌های محلی (مانند سایت دیوار) در هر نقطه‌ای از دنیا مستقیماً به فروش برسانید. کارکنان هلند کالا هر نوع خریدی را که مشکل حقوقی نداشته باشد، می‌توانند برای شما در هلند و اروپا انجام دهند. برای تجار بزرگ ایرانی که قصد صادرات کالاهای خود به اتحادیه اروپا و به‌ویژه هلند را دارند، هلند کالا اقامت تجاری هلند را مهیا می‌کند. شما همواره و به سادگی می‌توانید با شماره‌های 0031616009009 و 0031640001511 در تماس باشید': {
    fa: 'هلند کالا در حقیقت یک پلاتفرم قوی خرید محصولات برند از هلند و ارسال به هر نقطه‌ای از جهان است. در هلند کالا هیچ واسطه‌ای وجود ندارد؛ بنابراین تمامی فروشگاه‌های لاکچری و مزون‌داران می‌توانند به‌راحتی و مستقیماً خرید خود را از هلند انجام دهند. شما در هر نقطه‌ای که حضور دارید، می‌توانید با هر بودجه‌ای از هلند کالا خرید کرده و آن را در فروشگاه، مزون، شبکه‌های اجتماعی و مارکت‌پلیس‌های محلی (مانند سایت دیوار) در هر نقطه‌ای از دنیا مستقیماً به فروش برسانید. کارکنان هلند کالا هر نوع خریدی را که مشکل حقوقی نداشته باشد، می‌توانند برای شما در هلند و اروپا انجام دهند. برای تجار بزرگ ایرانی که قصد صادرات کالاهای خود به اتحادیه اروپا و به‌ویژه هلند را دارند، هلند کالا اقامت تجاری هلند را مهیا می‌کند. شما همواره و به سادگی می‌توانید با شماره‌های 0031616009009 و 0031640001511 در تماس باشید',
    en: 'HollandKala is actually a strong platform for purchasing branded products from the Netherlands and shipping to any point in the world. In HollandKala, there are no intermediaries; therefore, all luxury stores and boutique owners can easily and directly make their purchases from the Netherlands. Wherever you are, you can purchase from HollandKala with any budget and sell it directly in stores, boutiques, social networks, and local marketplaces (such as Divar website) anywhere in the world. HollandKala staff can make any purchase for you in the Netherlands and Europe that has no legal issues. For large Iranian merchants who intend to export their goods to the European Union and especially the Netherlands, HollandKala provides Dutch business residency. You can always and easily contact us at 0031616009009 and 0031640001511',
  },
};

/**
 * Localizes a blog based on locale
 */
export function localizeBlog(blog: BlogProps, locale: 'fa' | 'en'): BlogProps {
  // Helper to get localized value from map
  const getLocalized = <T extends { fa: string; en: string }>(
    value: string,
    map: Record<string, T>
  ): string => {
    const mapping = map[value];
    if (mapping) {
      return locale === 'fa' ? mapping.fa : mapping.en;
    }
    return value; // Fallback to original if not found
  };

  // Localize title
  const localizedTitle = getLocalized(blog.title, BLOG_TITLE_MAP);

  // Localize description
  const localizedDescription = getLocalized(blog.description, BLOG_DESCRIPTION_MAP);

  // Localize date
  const localizedDate = getLocalized(blog.date, BLOG_DATE_MAP);

  // Localize content if present
  const localizedContent = blog.content
    ? getLocalized(blog.content, BLOG_CONTENT_MAP)
    : undefined;

  // Localize reviews if present
  const localizedReviews = blog.reviews
    ? localizeReviews(blog.reviews, locale)
    : undefined;

  return {
    ...blog,
    title: localizedTitle,
    description: localizedDescription,
    date: localizedDate,
    content: localizedContent,
    reviews: localizedReviews,
    // Note: likes and comments are numbers, we format them in the component
    // but we keep them as numbers here for consistency
  };
}

/**
 * Localizes an array of blogs
 */
export function localizeBlogs(
  blogs: BlogProps[],
  locale: 'fa' | 'en'
): BlogProps[] {
  return blogs.map((blog) => localizeBlog(blog, locale));
}
