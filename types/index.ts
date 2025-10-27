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
