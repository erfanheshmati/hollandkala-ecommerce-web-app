"use client";

import Link from "next/link";
import { ChevronLeft, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { footerLinks, socialNetworks } from "@/lib/data";
import { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const year = new Date().getFullYear();

  return (
    <footer className="bg-background mt-16 border-t border-secondary/20">
      <div className="container py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Right Column - Contact Info */}
          <div className="flex flex-col gap-4 w-full lg:max-w-sm bg-[#f7f7f7] rounded-xl p-4">
            {/* Address Box */}
            <div className="flex items-center justify-between gap-3 bg-background rounded-2xl p-4">
              <span className="text-secondary text-base md:text-xl">
                ادرس: هلند، لاله
              </span>
              <div className="btn-primary flex items-center gap-2 px-2 py-1">
                <span className="text-sm md:text-base">دریافت مسیر</span>
                <ChevronLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Contact Box */}
            <div className="flex flex-col gap-4 bg-background rounded-2xl p-4">
              {/* Title */}
              <h4 className="text-secondary text-center">تماس با ما:</h4>

              {/* Email */}
              <Link
                href="mailto:info@hollandkala.com"
                className="flex items-center justify-end gap-3 p-3.5 bg-[#F7F7F7] hover:bg-secondary/10 effect rounded-xl"
              >
                <span className="text-secondary text-base font-medium">
                  info@hollandkala.com
                </span>
                <span className="h-6 w-px bg-gray-400"></span>
                <Mail className="w-5 h-5 text-secondary" />
              </Link>

              {/* Phone */}
              <Link
                href="tel:31616009009"
                className="flex items-center justify-end gap-3 p-3.5 bg-[#F7F7F7] hover:bg-secondary/10 effect rounded-xl"
              >
                <span className="text-secondary text-lg font-medium" dir="ltr">
                  +31616009009
                </span>
                <span className="h-6 w-px bg-gray-400"></span>
                <Phone className="w-5 h-5 text-secondary" />
              </Link>
            </div>
          </div>

          {/* Middle Column - Popular Pages */}
          <div className="w-full lg:max-w-2xs bg-[#f7f7f7] rounded-xl p-3">
            <div className="flex flex-col gap-6 rounded-xl lg:p-4">
              {/* Accordion Header - Clickable on mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full md:cursor-default"
              >
                <h3 className="font-bold text-secondary">صفحات پرکاربرد</h3>
                {/* Toggle Icon - Only visible on mobile */}
                <span className="lg:hidden">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-secondary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-secondary" />
                  )}
                </span>
              </button>
              {/* Accordion Content - Hidden on mobile when closed */}
              <nav
                className={`space-y-0 ${isOpen ? "block" : "hidden lg:block"}`}
              >
                {footerLinks.map((link, idx) => (
                  <div key={link.href || idx}>
                    <Link
                      href={link.href}
                      className="block py-1 my-2 text-secondary font-medium hover:text-primary active:text-primary effect"
                    >
                      {link.title}
                    </Link>
                    {idx !== footerLinks.length - 1 && (
                      <div className="border-b w-full text-secondary/20"></div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Separator */}
          <div className="md:hidden border-b w-full text-secondary/20"></div>

          {/* Left Column - Logo, Newsletter & Social */}
          <div className="flex flex-col gap-4 w-full lg:max-w-md">
            {/* Logo */}
            <div className="hidden lg:flex justify-center items-center">
              <Image
                src="/icons/logo.svg"
                alt="Hollandkala Logo"
                width={114}
                height={114}
              />
            </div>

            {/* Email Subscription */}
            <div className="space-y-8">
              <h3 className="font-medium md:text-xl text-secondary text-right md:text-center">
                با ثبت ایمیل خود، با ما در ارتباط باشید
              </h3>
              <form className="flex items-center justify-between input py-2">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="outline-none w-full"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-2 rounded-2xl"
                >
                  ثبت
                </button>
              </form>
              {/* Social Media Icons */}
              <div className="flex items-center justify-between">
                {socialNetworks.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-primary hover:bg-primary effect group"
                  >
                    <span className="text-primary group-hover:text-white text-sm font-bold">
                      {typeof social.icon === "function" ? (
                        <social.icon size={16} />
                      ) : (
                        social.icon
                      )}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-background border-t border-secondary/20">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-2 py-4">
          <p className="text-secondary/66 text-sm text-center">
            استفاده از مطالب فروشگاه اینترنتی هلندکالا فقط برای مقاصد غیرتجاری و
            با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به هلندکالا
            می‌باشد.
          </p>
          <p className="text-secondary/66 text-sm">
            Copyright © 2021 - {year} hollandkala.com
          </p>
        </div>
      </div>
    </footer>
  );
}
