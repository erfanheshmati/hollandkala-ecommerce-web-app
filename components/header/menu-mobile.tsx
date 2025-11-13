/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef, startTransition } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@/i18n/routing';
import { ChevronLeft, Menu as MenuIcon, X } from 'lucide-react';
import { menuData } from '@/lib/data';
import { useTranslations } from 'next-intl';
import { MenuItemChildProps, MenuItemProps } from '@/types';
import UserButton from './user-button';

export default function MobileMenu() {
  const t = useTranslations();
  const common = useTranslations('common');
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isRTL = common('dir') === 'rtl';

  const getMenuLabel = (
    item: MenuItemProps | MenuItemChildProps,
    level: number,
    parent?: MenuItemProps | MenuItemChildProps,
    childIndex?: number
  ) => {
    if (level === 0) {
      if (item.href === '/') return t('data.menu.home');
      if (item.href.startsWith('/products/wholesale'))
        return t('data.menu.wholesale');
      if (item.href.startsWith('/products/retail'))
        return t('data.menu.retail');
      if (item.href.startsWith('/blog')) return t('data.menu.blog');
      if (item.href.startsWith('/about')) return t('data.menu.about');
      if (item.href.startsWith('/contact')) return t('data.menu.contact');
      if (item.href.startsWith('/gifts')) return t('data.menu.gifts');
      if (item.href.startsWith('/reviews')) return t('data.menu.reviews');
    }

    if (parent?.href.startsWith('/products/wholesale/shoes') && level >= 2) {
      if (childIndex === 0) return t('data.menu.shoes.classic');
      if (childIndex === 1) return t('data.menu.shoes.formal');
      return t('data.menu.shoes.sport');
    }

    if (item.href.startsWith('/products/wholesale/shoes'))
      return t('data.menu.shoesBags');
    if (item.href.startsWith('/products/wholesale/clothing'))
      return t('data.menu.womenClothing');
    if (item.href.startsWith('/products/wholesale/sports'))
      return t('data.menu.sports');
    if (item.href.startsWith('/products/wholesale/accessories'))
      return t('data.menu.accessories');
    if (item.href.startsWith('/products/retail/shoes'))
      return t('data.menu.shoesBags');
    if (item.href.startsWith('/products/retail/clothing'))
      return t('data.menu.womenClothing');
    if (item.href.startsWith('/products/retail/sports'))
      return t('data.menu.sports');

    return item.title;
  };

  const mobileMenu = (
    <div
      ref={mobileMenuRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`md:hidden fixed top-0 ${
        isRTL ? 'right-0' : 'left-0'
      } h-screen overflow-y-auto w-80 max-w-[70vw] bg-background z-120 effect ${
        isMobileMenuOpen
          ? 'translate-x-0'
          : isRTL
          ? 'translate-x-full'
          : '-translate-x-full'
      }`}
    >
      <div className='flex flex-col gap-4'>
        {/* Mobile Menu Top */}
        <div className='flex items-center justify-between p-4'>
          {/* Menu Button */}
          <div className='flex items-center gap-2 md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='p-2.5 rounded-xl border border-primary bg-primary'
              aria-label='Toggle menu'
            >
              <MenuIcon size={24} className='text-background' />
            </button>
            <span className='text-primary text-sm font-medium pt-1'>
              {t('ui.menu')}
            </span>
          </div>
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className='p-2.5 rounded-xl bg-background text-primary border border-primary'
            aria-label='Close menu'
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu User Button */}
        <div className='flex px-4'>
          <UserButton className='w-full justify-center' />
        </div>

        {/* Mobile Menu Items */}
        <nav className='flex-1 h-full overflow-y-auto py-4'>
          {menuData.map((item, index) => renderMobileMenuItem(item, index))}
        </nav>
      </div>
    </div>
  );

  const mobileOverlay = (
    <div
      className={`fixed inset-0 bg-black/50 z-110 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    />
  );

  // Render menu items recursively for mobile
  function renderMobileMenuItem(
    item: MenuItemProps | MenuItemChildProps,
    index: number,
    level: number = 0,
    parent?: MenuItemProps | MenuItemChildProps
  ) {
    const itemKey =
      level === 0 ? index.toString() : `${openMobileDropdown}-${index}`;
    const submenuKey = `${itemKey}-${index}`;
    const isDropdownOpen =
      level === 0
        ? openMobileDropdown === itemKey
        : openMobileSubmenu === submenuKey;

    return (
      <div key={index} className='mx-4'>
        {item.hasDropdown ? (
          <div
            className={`${
              isDropdownOpen && level === 0
                ? 'border border-foreground/22 rounded-2xl'
                : ''
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
              className={`flex items-center justify-between w-full rounded-lg p-4 text-foreground transition-colors cursor-pointer ${
                isDropdownOpen ? 'font-bold' : ''
              } `}
            >
              <span className='text-lg'>
                {getMenuLabel(item, level, parent, index)}
              </span>
              <ChevronLeft
                size={20}
                className={`transition-transform duration-300 ${
                  isDropdownOpen
                    ? `${isRTL ? '-rotate-90' : 'rotate-270'}`
                    : `${isRTL ? '' : 'rotate-180'}`
                }`}
              />
            </button>

            {isDropdownOpen && item.children && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isDropdownOpen ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div
                  className={`${level > 0 ? 'bg-[#f5f5f5] rounded-xl' : ''}`}
                >
                  {item.children.map(
                    (child: MenuItemChildProps, childIndex: number) =>
                      child.hasDropdown ? (
                        renderMobileMenuItem(child, childIndex, level + 1, item)
                      ) : (
                        <Link
                          key={childIndex}
                          href={child.href as any}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenMobileDropdown(null);
                            setOpenMobileSubmenu(null);
                          }}
                          className='block p-4 mx-2 text-foreground transition-colors rounded-lg'
                        >
                          {getMenuLabel(child, level + 1, item, childIndex)}
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href={item.href as any}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileDropdown(null);
              setOpenMobileSubmenu(null);
            }}
            className='block p-4 text-foreground active:text-white active:bg-primary rounded-2xl transition-colors'
          >
            <span className='text-lg'>
              {getMenuLabel(item, level, parent, index)}
            </span>
          </Link>
        )}
      </div>
    );
  }

  return (
    <>
      {/* Mobile Overlay - rendered via portal */}
      {mounted && createPortal(mobileOverlay, document.body)}

      {/* Mobile Menu Button */}
      <div className='flex items-center gap-2 md:hidden min-w-28 min-[380px]:min-w-36'>
        <button
          onClick={toggleMobileMenu}
          className='p-2.5 rounded-xl border border-primary bg-background'
          aria-label='Toggle menu'
        >
          <MenuIcon size={24} className='text-primary' />
        </button>
        <span className='text-primary text-sm font-medium pt-1'>
          {t('ui.menu')}
        </span>
      </div>

      {/* Mobile Menu - rendered via portal to escape header stacking context */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
