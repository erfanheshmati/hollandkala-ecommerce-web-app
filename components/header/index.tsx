"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import Search from "./search";
import { MobileSearch } from "./search-mobile";
import Menu from "./menu";
import MobileMenu from "./menu-mobile";
import UserButton from "./user-button";
import LanguageSwitcher from "./language-switcher";
import Cart from "./cart";
import Favorite from "./favorite";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        // Always show at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        // Scrolling down - added threshold to prevent flicker
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 5) {
        // Scrolling up - added threshold to prevent flicker
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full bg-white shadow z-100 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container relative">
        <div className="flex flex-col gap-5 pt-4 pb-4 md:pb-0">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <MobileMenu />

            {/* Logo & Search */}
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 xl:gap-6 w-full">
              <Logo />
              <Search />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 md:gap-3 lg:gap-4 md:w-full">
              <MobileSearch />
              <Favorite />
              <Cart />
              <LanguageSwitcher />
              <div className="hidden md:block h-8 w-px bg-gray-300"></div>
              <UserButton className="hidden md:flex" />
            </div>
          </div>

          {/* Desktop Menu */}
          <Menu />
        </div>
      </div>
    </header>
  );
}
