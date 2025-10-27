"use client";

import { useState, useEffect, useRef, startTransition } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { menuData } from "@/lib/data";

export default function Menu() {
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
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Disable background scroll when dropdown is open
  useEffect(() => {
    if (activeDropdown !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeDropdown]);

  const hasActiveDropdown = activeDropdown !== null;

  const overlay = (
    <div
      className={`fixed top-[128px] left-0 right-0 bottom-0 bg-black/50 z-99 transition-opacity duration-300 ${
        hasActiveDropdown ? "opacity-100" : "opacity-0 pointer-events-none"
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
      <nav ref={menuRef} className="hidden md:flex items-center relative z-10">
        {menuData.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseLeave={() => item.hasDropdown && closeDropdown()}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!item.hasDropdown) {
                  router.push(item.href);
                } else {
                  openDropdown(index.toString());
                }
              }}
              onMouseEnter={() =>
                item.hasDropdown && openDropdown(index.toString())
              }
              className={`flex items-center gap-1 px-3 pb-3 hover:text-primary hover:font-medium cursor-pointer transition-colors group ${
                item.hasDropdown && activeDropdown === index.toString()
                  ? "text-primary font-medium"
                  : "text-secondary"
              }`}
            >
              {item.title}
              {item.hasDropdown && <ChevronDown size={16} />}
              {/* Rounded bottom border indicator */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 rounded-tl-lg rounded-tr-lg effect ${
                  activeDropdown === index.toString()
                    ? "bg-primary"
                    : "bg-transparent group-hover:bg-primary"
                }`}
              ></div>
            </button>

            {/* Dropdown Menu */}
            {item.hasDropdown &&
              item.children &&
              activeDropdown === index.toString() && (
                <div className="absolute top-full right-0 pt-2 w-64 bg-transparent z-110">
                  <div className="bg-white rounded-2xl border border-gray-200 p-4 animate-fade-in">
                    {item.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className="relative"
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
                              router.push(child.href);
                            }
                          }}
                          className="flex items-center justify-between text-right w-full px-2 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-medium cursor-pointer transition-colors"
                        >
                          <span>{child.title}</span>
                          {child.hasDropdown && (
                            <ChevronDown size={14} className="mr-1 rotate-90" />
                          )}
                        </button>

                        {/* Nested Dropdown */}
                        {child.hasDropdown &&
                          child.children &&
                          activeSubmenu === `${index}-${childIndex}` && (
                            <div className="absolute -top-4 right-full pr-6 w-56 bg-transparent z-120">
                              <div
                                className="bg-white rounded-2xl border border-gray-200 p-4 transition-colors animate-fade-in"
                                onMouseEnter={() =>
                                  openSubmenu(`${index}-${childIndex}`)
                                }
                                onMouseLeave={() => closeSubmenu()}
                              >
                                {child.children.map((nested, nestedIndex) => (
                                  <Link
                                    key={nestedIndex}
                                    href={nested.href}
                                    className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-medium transition-colors"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveSubmenu(null);
                                    }}
                                  >
                                    {nested.title}
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
