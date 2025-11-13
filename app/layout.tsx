import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import '../styles/custom.css';
import { Suspense } from 'react';
import { getLocale, getTranslations } from 'next-intl/server';
import { getDirection } from '@/i18n-config';

const yekanBakh = localFont({
  src: [
    {
      path: '../public/fonts/YekanBakh-FaEn-01-Hairline.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/YekanBakh-FaEn-02-Thin.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/YekanBakh-FaEn-03-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/YekanBakh-FaEn-04-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/YekanBakh-FaEn-05-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/YekanBakh-FaEn-06-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/YekanBakh-FaEn-07-Heavy.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/YekanBakh-FaEn-08-Fat.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-yekan-bakh',
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <body
        suppressHydrationWarning
        className={`${yekanBakh.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
