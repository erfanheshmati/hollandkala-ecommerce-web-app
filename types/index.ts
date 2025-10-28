import { IconType } from "react-icons";

export interface MenuItemChild {
  title: string;
  href: string;
  hasDropdown?: boolean;
  children?: MenuItemChild[];
}

export interface MenuItem {
  title: string;
  href: string;
  hasDropdown?: boolean;
  children?: MenuItemChild[];
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialMedia {
  href: string;
  icon: IconType;
}

export interface MobileNavItem {
  href: string;
  label: string;
  icon: IconType;
}

export interface SlideImage {
  title: string;
  src: string;
}

export interface ProductCategory {
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
}

export interface ProductSliderProps {
  title: string;
  products: ProductCardProps[];
  backgroundColor?: string;
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

export interface Review {
  name: string;
  avatarUrl?: string;
  comment: string;
  badges: string[];
  images: string[];
}

export interface ReviewSectionProps {
  title?: string;
  subtitle?: string;
  reviews: Review[];
  filters?: string[];
  dataByFilter?: Record<string, Review[]>;
}

export interface StoreLocation {
  name: string;
  address: string;
  email: string;
  phone: string;
  workingHours: string[];
  closedDays: string[];
}
