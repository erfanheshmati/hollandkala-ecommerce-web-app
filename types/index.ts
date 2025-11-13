import { IconType } from 'react-icons';
import type { Link } from '@/i18n/routing';
import type { ComponentProps } from 'react';

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
  href: ComponentProps<typeof Link>['href'];
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

export interface PriceComparisonProps {
  title: string;
  price: string;
  href: string;
}

export interface ProductProps {
  id?: string;
  code?: number;
  barcode?: string;
  title: string;
  enTitle?: string;
  description?: string;
  enDescription?: string;
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
  href: ComponentProps<typeof Link>['href'];
}

export interface BannerImageProps {
  title: string;
  imageUrl: string;
  href: ComponentProps<typeof Link>['href'];
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
  avatarUrl?: string;
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

export interface BlogProps {
  id: string;
  title: string;
  description: string;
  content?: string;
  date: string;
  likes: number;
  comments: number;
  imageUrl: string;
  reviews?: ReviewProps[];
}

export interface FeatureCardProps {
  title: string;
  description: string;
  iconUrl: string;
}

export interface ProductSortProps {
  label: string;
  param: string;
}

export interface BreadcrumbProps {
  label: string;
  href?: ComponentProps<typeof Link>['href'];
}

export interface PageProps {
  searchParams?:
    | Promise<Record<string, string | string[] | undefined>>
    | Record<string, string | string[] | undefined>;
}

export interface LikeButtonProps {
  blogId: string;
  initialLikes: number;
  onSubmitLike?: (blogId: string) => Promise<void> | void;
}

export interface CartProps {
  id: string;
  title: string;
  code: string;
  price: number;
  quantity: number;
  date: string;
  image: string;
}

export interface ProfileNavItemProps {
  href: ComponentProps<typeof Link>['href'];
  label: string;
}

export type OrderStatusProps = 'shipped' | 'processing' | 'cancelled';

export interface ProfileOrderProps {
  id: string;
  title: string;
  code: string;
  date: string;
  status: OrderStatusProps;
  total: string;
  count: number;
  thumbnail: string;
  href: ComponentProps<typeof Link>['href'];
}

export interface OderSortProps {
  label: string;
  param: string;
}

export interface TicketSortProps {
  label: string;
  param: string;
}

export type TicketStatusProps = 'answered' | 'reviewing' | 'closed';

export interface SupportResponseProps {
  name: string;
  text: string;
  date?: string;
  hasFileUpload?: boolean;
}

export interface ProfileTicketProps {
  id: string;
  title: string;
  date: string;
  status: TicketStatusProps;
  description: string;
  supportResponse?: SupportResponseProps;
  href?: string;
}

export interface ProfileReviewProps {
  id: string;
  code: string;
  name: string;
  image: string;
  rating: number;
}
