'use client';

import Link from 'next/link';
import { ChevronLeft, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { footerLinks, socialNetworks } from '@/lib/data';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const year = new Date().getFullYear();

  return (
    <footer className='bg-background mt-16 max-md:mb-14 border-t border-foreground/20'>
      <div className='container py-8'>
        {/* Main Footer Content */}
        <div className='flex flex-col lg:flex-row justify-between gap-6'>
          {/* Right Column - Contact Info */}
          <div className='flex flex-col gap-4 w-full lg:max-w-sm bg-secondary rounded-xl p-4'>
            {/* Address Box */}
            <div className='flex items-center justify-between gap-3 bg-background rounded-2xl p-4'>
              <span className='text-foreground'>
                {t('footer.address', { address: 'Netherlands, Laleh' })}
              </span>
              <Link
                href='#'
                className='btn-primary flex items-center gap-2 px-2 py-1 shrink-0'
              >
                <span className='text-sm '>{t('common.getDirection')}</span>
                <ChevronLeft className='w-4 h-4 ltr:rotate-180' />
              </Link>
            </div>

            {/* Contact Box */}
            <div className='flex flex-col gap-4 bg-background rounded-2xl p-4'>
              {/* Title */}
              <h4 className='text-foreground text-center'>
                {t('contact.title')}
              </h4>

              {/* Email */}
              <Link
                href='mailto:info@hollandkala.com'
                dir='rtl'
                className='flex items-center justify-end gap-3 p-3.5 bg-secondary hover:bg-foreground/10 effect rounded-xl'
              >
                <span className='text-foreground font-medium'>
                  info@hollandkala.com
                </span>
                <span className='h-6 w-px bg-gray-400'></span>
                <Mail className='w-5 h-5 text-foreground' />
              </Link>

              {/* Phone */}
              <Link
                href='tel:31616009009'
                dir='rtl'
                className='flex items-center justify-end gap-3 p-3.5 bg-secondary hover:bg-foreground/10 effect rounded-xl'
              >
                <span className='text-foreground font-medium' dir='ltr'>
                  +31616009009
                </span>
                <span className='h-6 w-px bg-gray-400'></span>
                <Phone className='w-5 h-5 text-foreground' />
              </Link>
            </div>
          </div>

          {/* Middle Column - Popular Pages */}
          <div className='w-full lg:max-w-2xs bg-secondary rounded-xl p-3'>
            <div className='flex flex-col gap-6 rounded-xl lg:p-4'>
              {/* Accordion Header - Clickable on mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center justify-between w-full md:cursor-default'
              >
                <h3 className='font-bold text-foreground'>
                  {t('common.viewAll')}
                </h3>
                {/* Toggle Icon - Only visible on mobile */}
                <span className='lg:hidden'>
                  {isOpen ? (
                    <ChevronUp className='w-4 h-4 text-foreground' />
                  ) : (
                    <ChevronDown className='w-4 h-4 text-foreground' />
                  )}
                </span>
              </button>
              {/* Accordion Content - Hidden on mobile when closed */}
              <nav
                className={`space-y-0 ${isOpen ? 'block' : 'hidden lg:block'}`}
              >
                {footerLinks.map((link, idx) => (
                  <div key={link.href || idx}>
                    <Link
                      href={link.href}
                      className='block py-1 my-2 text-foreground font-medium hover:text-primary active:text-primary effect'
                    >
                      {(() => {
                        if (link.href === '/') return t('nav.home');
                        if (link.href.startsWith('/products/wholesale'))
                          return t('nav.wholesale');
                        if (link.href.startsWith('/products/retail'))
                          return t('nav.retail');
                        if (link.href.startsWith('/blog')) return t('nav.blog');
                        if (link.href.startsWith('/about'))
                          return t('nav.about');
                        if (link.href.startsWith('/contact'))
                          return t('nav.contact');
                        return link.title;
                      })()}
                    </Link>
                    {idx !== footerLinks.length - 1 && (
                      <div className='border-b w-full text-foreground/20'></div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Separator */}
          <div className='md:hidden border-b w-full text-foreground/20'></div>

          {/* Left Column - Logo, Newsletter & Social */}
          <div className='flex flex-col gap-4 w-full lg:max-w-md'>
            {/* Logo */}
            <div className='hidden lg:flex justify-center items-center'>
              <Image
                src='/icons/logo.svg'
                alt='Hollandkala Logo'
                width={114}
                height={114}
              />
            </div>

            {/* Email Subscription */}
            <div className='space-y-8'>
              <h3 className='font-medium md:text-xl text-foreground md:text-center'>
                {t('footer.subscribeTitle')}
              </h3>
              <form className='flex items-center justify-between input py-2'>
                <input
                  type='email'
                  placeholder={t('contact.form.email')}
                  className='outline-none w-full'
                  required
                />
                <button
                  type='submit'
                  className='btn-primary px-8 py-2 rounded-2xl'
                >
                  {t('common.submit')}
                </button>
              </form>
              {/* Social Media Icons */}
              <div className='flex items-center justify-center gap-4 lg:justify-between'>
                {socialNetworks.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    className='flex items-center justify-center w-12 h-12 rounded-full bg-white border border-primary hover:bg-primary effect group'
                  >
                    <span className='text-primary group-hover:text-white text-sm font-bold'>
                      {typeof social.icon === 'function' ? (
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
      <div className='bg-background border-t border-foreground/20'>
        <div className='container flex flex-col lg:flex-row items-center justify-between gap-2 py-4'>
          <p className='text-foreground/66 text-sm text-center'>
            {t('footer.rights')}
          </p>
          <p className='text-foreground/66 text-sm'>
            Copyright © 2021 - {year} hollandkala.com
          </p>
        </div>
      </div>
    </footer>
  );
}
