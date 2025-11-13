import Image from 'next/image';
import NotFoundImage from '@/public/images/404.svg';
import Header from '@/components/header';
import Footer from '@/components/shared/footer';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default async function NotFound() {
  const t = await getTranslations('notFoundPage');

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-col gap-6 items-center justify-center flex-1 px-4 text-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-4rem)]'>
        <Image
          src={NotFoundImage}
          alt={t('alt')}
          className='w-full max-w-xl h-auto'
        />
        <h1 className='text-xl font-bold text-primary'>{t('title')}</h1>
        <p className='max-w-xl text-muted-foreground'>{t('description')}</p>
        <Link href='/' className='btn-primary py-2 px-6'>
          {t('backHome')}
        </Link>
      </div>
      <Footer />
    </div>
  );
}


