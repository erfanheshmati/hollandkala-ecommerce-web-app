/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef, startTransition } from 'react';
import { createPortal } from 'react-dom';
import { Link, useRouter } from '@/i18n/routing';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { menuData } from '@/lib/data';
import { useTranslations } from 'next-intl';

function mapMenuTitle(
  t: ReturnType<typeof useTranslations>,
  fallback: string,
  href?: string
) {
  if (!href) return fallback;
  if (href === '/') return t('nav.home');
  if (href.startsWith('/products/wholesale')) return t('nav.wholesale');
  if (href.startsWith('/products/retail')) return t('nav.retail');
  if (href.startsWith('/blog')) return t('nav.blog');
  if (href.startsWith('/about')) return t('nav.about');
  if (href.startsWith('/contact')) return t('contact.title');
  if (href.startsWith('/gifts')) return t('nav.gifts');
  if (href.startsWith('/reviews')) return t('nav.reviews');
  if (href.startsWith('/favorites')) return t('nav.favorites');
  if (href.startsWith('/cart')) return t('nav.cart');
  return fallback;
}

export default function Menu() {
  const t = useTranslations();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const openDropdown = (index: string) => {
    setActiveDropdown(index);
    setActiveSubmenu(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const openSubmenu = (key: string) => {
    setActiveSubmenu(key);
  };

  const closeSubmenu = () => {
    setActiveSubmenu(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    if (activeDropdown !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Disable background scroll when dropdown is open
  useEffect(() => {
    if (activeDropdown !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeDropdown]);

  const hasActiveDropdown = activeDropdown !== null;

  const overlay = (
    <div
      className={`fixed top-32 left-0 right-0 bottom-0 bg-black/50 z-99 transition-opacity duration-300 ${
        hasActiveDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }}
    />
  );

  return (
    <>
      {/* Desktop Overlay - rendered via portal */}
      {mounted && createPortal(overlay, document.body)}

      {/* Desktop Menu */}
      <nav ref={menuRef} className='hidden md:flex items-center relative z-10'>
        {menuData.map((item, index) => (
          <div
            key={index}
            className='relative'
            onMouseLeave={() => item.hasDropdown && closeDropdown()}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!item.hasDropdown) {
                  router.push(item.href as any);
                } else {
                  openDropdown(index.toString());
                }
              }}
              onMouseEnter={() =>
                item.hasDropdown && openDropdown(index.toString())
              }
              className={`flex items-center gap-1 px-3 pb-3 hover:text-primary hover:font-medium cursor-pointer transition-colors group ${
                item.hasDropdown && activeDropdown === index.toString()
                  ? 'text-primary font-medium'
                  : 'text-foreground'
              }`}
            >
              {mapMenuTitle(t, item.title, item.href)}
              {item.hasDropdown && <ChevronDown size={16} />}
              {/* Rounded bottom border indicator */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 rounded-tl-lg rounded-tr-lg effect ${
                  activeDropdown === index.toString()
                    ? 'bg-primary'
                    : 'bg-transparent group-hover:bg-primary'
                }`}
              ></div>
            </button>

            {/* Dropdown Menu */}
            {item.hasDropdown &&
              item.children &&
              activeDropdown === index.toString() && (
                <div className='absolute top-full rtl:right-0 ltr:left-0 pt-2 w-64 bg-transparent z-110'>
                  <div className='bg-white rounded-2xl border border-gray-200 p-4 animate-fade-in'>
                    {item.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className='relative'
                        onMouseEnter={() =>
                          child.hasDropdown &&
                          openSubmenu(`${index}-${childIndex}`)
                        }
                        onMouseLeave={() => child.hasDropdown && closeSubmenu()}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (!child.hasDropdown) {
                              router.push(child.href as any);
                            }
                          }}
                          className='flex items-center justify-between text-right w-full px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-medium cursor-pointer transition-colors'
                        >
                          <span>
                            {(() => {
                              if (
                                child.href.startsWith(
                                  '/products/wholesale/shoes'
                                )
                              )
                                return t('data.menu.shoesBags');
                              if (
                                child.href.startsWith(
                                  '/products/wholesale/clothing'
                                )
                              )
                                return t('data.menu.womenClothing');
                              if (
                                child.href.startsWith(
                                  '/products/wholesale/sports'
                                )
                              )
                                return t('data.menu.sports');
                              if (
                                child.href.startsWith(
                                  '/products/wholesale/accessories'
                                )
                              )
                                return t('data.menu.accessories');
                              if (
                                child.href.startsWith('/products/retail/shoes')
                              )
                                return t('data.menu.shoesBags');
                              if (
                                child.href.startsWith(
                                  '/products/retail/clothing'
                                )
                              )
                                return t('data.menu.womenClothing');
                              if (
                                child.href.startsWith('/products/retail/sports')
                              )
                                return t('data.menu.sports');
                              return child.title;
                            })()}
                          </span>
                          {child.hasDropdown && (
                            <ChevronLeft size={14} className='ltr:rotate-180' />
                          )}
                        </button>

                        {/* Nested Dropdown */}
                        {child.hasDropdown &&
                          child.children &&
                          activeSubmenu === `${index}-${childIndex}` && (
                            <div className='absolute -top-4 rtl:right-full ltr:left-full rtl:pr-6 ltr:pl-6 w-56 bg-transparent z-120'>
                              <div
                                className='bg-white rounded-2xl border border-gray-200 p-4 transition-colors animate-fade-in'
                                onMouseEnter={() =>
                                  openSubmenu(`${index}-${childIndex}`)
                                }
                                onMouseLeave={() => closeSubmenu()}
                              >
                                {child.children.map((nested, nestedIndex) => (
                                  <Link
                                    key={nestedIndex}
                                    href={nested.href as any}
                                    className='block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-medium transition-colors'
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveSubmenu(null);
                                    }}
                                  >
                                    {(() => {
                                      if (
                                        child.href.startsWith(
                                          '/products/wholesale/shoes'
                                        )
                                      ) {
                                        if (nestedIndex === 0)
                                          return t('data.menu.shoes.classic');
                                        if (nestedIndex === 1)
                                          return t('data.menu.shoes.formal');
                                        if (nestedIndex === 2)
                                          return t('data.menu.shoes.sport');
                                      }
                                      return nested.title;
                                    })()}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </nav>
    </>
  );
}
