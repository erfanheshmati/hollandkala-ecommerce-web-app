"use client";

import { useState, useEffect, useRef, startTransition } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronLeft, Menu as MenuIcon, X } from "lucide-react";
import { menuData } from "@/lib/data";
import { MenuItem, MenuItemChild } from "@/types";
import UserButton from "./user-button";

export default function MobileMenu() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setOpenMobileDropdown(null);
      setOpenMobileSubmenu(null);
    }
  };

  const toggleMobileDropdown = (index: string) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
    setOpenMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (key: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === key ? null : key);
  };

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const mobileOverlay = (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    />
  );

  // Render menu items recursively for mobile
  const renderMobileMenuItem = (
    item: MenuItem | MenuItemChild,
    index: number,
    level: number = 0
  ) => {
    const itemKey =
      level === 0 ? index.toString() : `${openMobileDropdown}-${index}`;
    const submenuKey = `${itemKey}-${index}`;
    const isDropdownOpen =
      level === 0
        ? openMobileDropdown === itemKey
        : openMobileSubmenu === submenuKey;

    return (
      <div key={index} className="mx-4">
        {item.hasDropdown ? (
          <div
            className={`${
              isDropdownOpen && level === 0
                ? "border border-secondary/22 rounded-2xl"
                : ""
            }`}
          >
            <button
              onClick={() => {
                if (level === 0) {
                  toggleMobileDropdown(itemKey);
                } else {
                  toggleMobileSubmenu(submenuKey);
                }
              }}
              className={`flex items-center justify-between w-full rounded-lg p-4 text-secondary transition-colors cursor-pointer ${
                isDropdownOpen ? "font-bold" : ""
              } `}
            >
              <span className="text-lg">{item.title}</span>
              <ChevronLeft
                size={20}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "-rotate-90" : ""
                }`}
              />
            </button>

            {isDropdownOpen && item.children && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isDropdownOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div
                  className={`${level > 0 ? "bg-[#f5f5f5] rounded-xl" : ""}`}
                >
                  {item.children.map(
                    (child: MenuItemChild, childIndex: number) =>
                      child.hasDropdown ? (
                        renderMobileMenuItem(child, childIndex, level + 1)
                      ) : (
                        <Link
                          key={childIndex}
                          href={child.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenMobileDropdown(null);
                            setOpenMobileSubmenu(null);
                          }}
                          className="block p-4 mx-2 text-secondary transition-colors rounded-lg"
                        >
                          {child.title}
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href={item.href}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileDropdown(null);
              setOpenMobileSubmenu(null);
            }}
            className="block p-4 text-secondary active:text-white active:bg-primary rounded-2xl transition-colors"
          >
            <span className="text-lg">{item.title}</span>
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Overlay - rendered via portal */}
      {mounted && createPortal(mobileOverlay, document.body)}

      {/* Mobile Menu Button */}
      {!isMobileMenuOpen && (
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2.5 rounded-xl border border-primary"
            aria-label="Toggle menu"
          >
            <MenuIcon size={24} className="text-primary" />
          </button>
          <span className="text-primary text-sm font-medium">منو</span>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 right-0 h-screen w-80 max-w-[70vw] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          {/* Mobile Menu Close Button */}
          <div className="flex p-4">
            <button
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-xl bg-white text-primary border border-primary"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Mobile Menu Header */}
          <div className="flex px-4">
            <UserButton className="w-full justify-center" />
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 h-full overflow-y-auto py-4">
            {menuData.map((item, index) => renderMobileMenuItem(item, index))}
          </nav>
        </div>
      </div>
    </>
  );
}
