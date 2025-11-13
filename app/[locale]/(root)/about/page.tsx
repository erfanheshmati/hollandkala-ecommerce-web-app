import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations();
  return (
    <div className='container flex flex-col gap-10 pt-28 md:pt-40'>
      {/* Page Title */}
      <h1 className='text-2xl md:text-3xl font-bold'>{t('about.title')}</h1>

      {/* Intro Section */}
      <section className='flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        <div className='flex flex-col gap-4 w-full lg:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary'>
            {t('about.weAreHollandkala')}
          </h2>
          <p className='text-lg font-bold text-foreground/90 text-justify'>
            {t('about.description')}
          </p>
          <p className='text-base md:text-lg leading-7 text-foreground/90 text-justify'>
            {t('about.lorem')}
          </p>
        </div>
        <div className='flex items-center justify-center w-full lg:w-1/2'>
          <Image
            src='/images/about-1.svg'
            alt='about-1'
            width={500}
            height={500}
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Mission and Stats */}
      <section className='flex flex-col lg:flex-row-reverse gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 my-10'>
        <div className='flex flex-col gap-4 w-full lg:w-1/2'>
          <h3 className='text-3xl md:text-4xl font-bold text-primary'>
            {t('about.mission')}
          </h3>
          <p className='text-base md:text-lg font-bold leading-8 text-foreground/90 text-justify'>
            {t('about.missionDescription')}
          </p>
          <p className='text-sm md:text-base text-foreground/80'>
            {t('about.missionSubtitle')}
          </p>
          <div className='flex flex-wrap items-center justify-between gap-1 mt-4'>
            <div className='rounded-full border border-foreground/20 p-4 text-center'>
              <div className='text-sm text-foreground/80 mb-2'>{t('about.stats.sellers')}</div>
              <div className='text-2xl font-bold text-primary'>+3734</div>
            </div>
            <div className='rounded-full border border-foreground/20 p-4 text-center'>
              <div className='text-sm text-foreground/80 mb-2'>{t('about.stats.registrations')}</div>
              <div className='text-2xl font-bold text-primary'>+3834</div>
            </div>
            <div className='rounded-full border border-foreground/20 p-4 text-center'>
              <div className='text-sm text-foreground/80 mb-2 line-clamp-1'>
                {t('about.stats.dailySales')}
              </div>
              <div className='text-2xl font-bold text-primary'>+3734</div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full lg:w-1/2'>
          <Image
            src='/images/about-2.svg'
            alt='about-1'
            width={500}
            height={500}
            className='w-full h-auto object-cover'
          />
        </div>
      </section>
    </div>
  );
}


