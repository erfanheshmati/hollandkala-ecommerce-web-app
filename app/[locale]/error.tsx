'use client';

import Footer from '@/components/shared/footer';
import Header from '@/components/header';
import { useTranslations } from 'next-intl';

export default function ErrorPage({ reset }: { reset: () => void }) {
  const t = useTranslations('errorPage');

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-col gap-4 items-center justify-center flex-1 px-4 min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-4rem)]'>
        <h1 className='text-xl font-bold text-primary'>{t('title')}</h1>
        <button className='btn-primary py-2' onClick={() => reset()}>
          {t('retry')}
        </button>
      </div>
      <Footer />
    </div>
  );
}


