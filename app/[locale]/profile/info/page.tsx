'use client';

import { useLocale, useTranslations } from 'next-intl';

export default function ProfileInfoPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className='py-4 md:p-8'>
      <form className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        {/* Name */}
        <div className='relative lg:col-span-6'>
          <input
            id='name'
            name='name'
            type='text'
            placeholder={t('contactPlaceholders.name')}
            value='محمد رمضانی'
            onChange={() => {}}
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='name'
            className={`pointer-events-none absolute top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs ${
              locale === 'fa' ? 'right-4' : 'left-4'
            }`}
          >
            {t('contact.form.fullName')}
          </label>
        </div>

        {/* Phone */}
        <div className='relative lg:col-span-6'>
          <input
            id='phone'
            name='phone'
            type='number'
            placeholder={t('contact.form.phoneNumber')}
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='phone'
            className={`pointer-events-none absolute top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs ${
              locale === 'fa' ? 'right-4' : 'left-4'
            }`}
          >
            {t('contact.form.phoneNumber')}
          </label>
        </div>

        {/* Province */}
        <div className='relative lg:col-span-4'>
          <input
            id='province'
            name='province'
            type='text'
            placeholder={t('common.province')}
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='province'
            className={`pointer-events-none absolute top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs ${
              locale === 'fa' ? 'right-4' : 'left-4'
            }`}
          >
            {t('common.province')}
          </label>
        </div>

        {/* City */}
        <div className='relative lg:col-span-4'>
          <input
            id='city'
            name='city'
            type='text'
            placeholder={t('common.city')}
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='city'
            className={`pointer-events-none absolute top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs ${
              locale === 'fa' ? 'right-4' : 'left-4'
            }`}
          >
            {t('common.city')}
          </label>
        </div>

        {/* Zip Code */}
        <div className='relative lg:col-span-4'>
          <input
            id='zipCode'
            name='zipCode'
            type='number'
            placeholder={t('common.postalCode')}
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='zipCode'
            className={`pointer-events-none absolute top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs ${
              locale === 'fa' ? 'right-4' : 'left-4'
            }`}
          >
            {t('common.postalCode')}
          </label>
        </div>

        {/* Address */}
        <div className='relative lg:col-span-12'>
          <input
            id='address'
            name='address'
            type='text'
            placeholder={t('common.address')}
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='address'
            className={`pointer-events-none absolute top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs ${
              locale === 'fa' ? 'right-4' : 'left-4'
            }`}
          >
            {t('common.address')}
          </label>
        </div>
      </form>
    </div>
  );
}
