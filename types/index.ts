import { IconType } from "react-icons";

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

export interface ProductCardProps {
  title: string;
  discountedPrice?: string;
  originalPrice?: string;
  discount?: string;
  badges?: string[];
  imageUrl?: string;
  backgroundColor?: string;
  href: string;
}

export interface ProductSliderProps {
  title: string;
  products: ProductCardProps[];
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

export interface ReviewProps {
  name: string;
  avatarUrl?: string;
  comment: string;
  badges: string[];
  images: string[];
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
