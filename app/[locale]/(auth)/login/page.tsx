'use client';

import Link from 'next/link';
import LoginForm from './login-form';
import OtpForm from './otp-form';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations();
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <div className='flex flex-col gap-8 w-full sm:min-w-md sm:max-w-md md:max-w-lg sm:border border-foreground/22 rounded-3xl sm:p-10'>
      {/* Header */}
      <div className='flex flex-col gap-1 items-center justify-center'>
        <div className='text-xl text-foreground/44 rtl:pl-16 ltr:pr-40'>
          {t('auth.welcomeTo')}
        </div>
        <Link href='/' className='text-5xl font-bold text-primary'>
          {t('auth.brandName')}
        </Link>
      </div>

      {/* Form */}
      {showOtpForm ? (
        <OtpForm phoneNumber={phoneNumber} emailAddress={emailAddress} />
      ) : (
        <LoginForm
          onFormSubmit={(phone, email) => {
            setPhoneNumber(phone);
            setEmailAddress(email);
            setShowOtpForm(true);
          }}
        />
      )}
    </div>
  );
}
