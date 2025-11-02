import { IconType } from 'react-icons';

export interface MenuItemChildProps {
  title: string;
  href: string;
  hasDropdown?: boolean;
  children?: MenuItemChildProps[];
}

export interface MenuItemProps {
  title: string;
  href: string;
  hasDropdown?: boolean;
  children?: MenuItemChildProps[];
}

export interface FooterLinkProps {
  title: string;
  href: string;
}

export interface SocialMediaProps {
  href: string;
  icon: IconType;
}

export interface MobileNavItemProps {
  href: string;
  label: string;
  icon: IconType;
}

export interface SlideImageProps {
  title: string;
  src: string;
}

export interface ProductCategoryProps {
  title: string;
  imageUrl: string;
  href: string;
}

interface PriceComparisonProps {
  title: string;
  price: string;
  href: string;
}

export interface ProductProps {
  slug: string;
  code?: number;
  barcode?: string;
  title: string;
  enTitle?: string;
  description?: string;
  originalPrice?: string;
  discountedPrice?: string;
  discountPercentage?: string;
  purchaseMode?: string;
  retailPrice?: string;
  wholesalePrice?: string;
  priceComparison?: PriceComparisonProps[];
  badges?: string[];
  imageUrl?: string;
  gallery?: string[];
  backgroundColor?: string;
  href?: string;
  rating?: number;
  comment?: number;
  stock?: number;
  availability?: boolean;
  reviews?: ReviewProps[];
  tags?: string[];
  colors?: string[];
  sizes?: string[];
  gifts: string[];
  materials?: string;
  dimensions?: string;
  weight?: string;
  type?: string;
}

export interface ProductSliderProps {
  title: string;
  products: ProductProps[];
  backgroundColor?: string;
  href: string;
}

export interface BannerImageProps {
  title: string;
  imageUrl: string;
  href: string;
}

export interface PromotionalTextProps {
  title: string;
  href: string;
}

export interface ReviewReplyProps {
  name: string;
  avatarUrl?: string;
  text: string;
}

export interface ReviewProps {
  name: string;
  avatarUrl: string;
  comment: string;
  rating?: number;
  badges?: string[];
  images?: string[];
  reply?: ReviewReplyProps;
}

export interface ReviewSectionProps {
  title?: string;
  subtitle?: string;
  reviews: ReviewProps[];
  filters?: string[];
  dataByFilter?: Record<string, ReviewProps[]>;
}

export interface StoreLocationProps {
  name: string;
  address: string;
  email: string;
  phone: string;
  workingHours: string[];
  closedDays: string[];
}

export interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  likes: number;
  comments: number;
  imageUrl?: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  iconUrl: string;
}

export interface SortProps {
  label: string;
  param: string;
}
