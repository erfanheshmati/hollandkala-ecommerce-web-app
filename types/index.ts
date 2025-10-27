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
