import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { Suspense } from 'react';
import MobileBottomNav from '@/components/shared/mobile-bottom-nav';
import PromotionalPopup from '@/components/shared/promotional-popup';

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dir = (messages as any)?.common?.dir ?? (locale === 'fa' ? 'rtl' : 'ltr');

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div dir={dir}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Suspense fallback={null}>
          <MobileBottomNav />
        </Suspense>
        <Suspense fallback={null}>
          <PromotionalPopup />
        </Suspense>
      </div>
    </NextIntlClientProvider>
  );
}


