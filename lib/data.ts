import { FooterLink, MenuItem, SocialMedia } from "@/types";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

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
