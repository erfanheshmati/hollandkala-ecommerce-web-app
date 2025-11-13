'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ProfileCollaborationPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    fullName: 'محمد رمضانی',
    gender: '',
    email: '',
    socialMediaLink: '',
    audienceRegion: '',
    country: '',
  });

  const [acceptPublisherTerms, setAcceptPublisherTerms] = useState(false);
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with API endpoint
    console.log('Collaboration form submitted:', {
      ...formData,
      acceptPublisherTerms,
      acceptPrivacyPolicy,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className='flex flex-col gap-6 py-4 md:p-6 lg:p-8'>
      {/* Title */}
      <h1 className='hidden md:flex text-xl font-bold text-foreground'>{t('profile.collaboration.title')}</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        {/* Fields Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Full Name */}
          <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
            <label className='text-foreground/44'>{t('profile.collaboration.fullName')}: </label>
            <input
              type='text'
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className='bg-transparent text-xl font-medium text-primary outline-none'
            />
          </div>

          {/* Email */}
          <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
            <label className='text-base font-normal text-foreground opacity-44'>
              {t('profile.collaboration.email')}:{' '}
            </label>
            <input
              type='email'
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className='bg-transparent text-xl font-medium text-primary outline-none'
            />
          </div>

          {/* Gender */}
          <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
            <label className='text-base font-normal text-foreground opacity-44'>
              {t('profile.collaboration.gender')}:{' '}
            </label>
            <input
              type='text'
              value={formData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className='bg-transparent text-xl font-medium text-primary outline-none'
            />
          </div>

          {/* Country */}
          <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
            <label className='text-base font-normal text-foreground opacity-44'>
              {t('profile.collaboration.country')}:{' '}
            </label>
            <input
              type='text'
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className='bg-transparent text-xl font-medium text-primary outline-none'
            />
          </div>

          {/* Audience Region */}
          <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
            <label className='text-base font-normal text-foreground opacity-44'>
              {t('profile.collaboration.audienceRegion')}:{' '}
            </label>
            <input
              type='text'
              value={formData.audienceRegion}
              onChange={(e) =>
                handleInputChange('audienceRegion', e.target.value)
              }
              className='bg-transparent text-xl font-medium text-primary outline-none'
            />
          </div>

          {/* Social Media Link */}
          <div className='bg-secondary rounded-2xl p-4 flex flex-col gap-1 h-[72px] justify-center'>
            <label className='text-base font-normal text-foreground opacity-44'>
              {t('profile.collaboration.socialMediaLink')}:{' '}
            </label>
            <input
              type='url'
              value={formData.socialMediaLink}
              onChange={(e) =>
                handleInputChange('socialMediaLink', e.target.value)
              }
              className='bg-transparent text-xl font-medium text-primary outline-none'
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className='flex flex-col gap-4'>
          {/* Publisher Terms Checkbox */}
          <div className='flex items-center gap-2'>
            <input
              id='publisher-terms'
              type='checkbox'
              checked={acceptPublisherTerms}
              onChange={(e) => setAcceptPublisherTerms(e.target.checked)}
              className='w-4 h-4 accent-primary cursor-pointer shrink-0 mb-1'
            />
            <label
              htmlFor='publisher-terms'
              className='font-medium text-foreground cursor-pointer'
            >
              {t('profile.collaboration.acceptPublisherTerms')}
            </label>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className='flex gap-2'>
            <input
              id='privacy-policy'
              type='checkbox'
              checked={acceptPrivacyPolicy}
              onChange={(e) => setAcceptPrivacyPolicy(e.target.checked)}
              className='w-4 h-4 accent-primary cursor-pointer shrink-0 mt-1'
            />
            <label
              htmlFor='privacy-policy'
              className='font-medium text-foreground cursor-pointer text-justify'
            >
              {t('profile.collaboration.acceptPrivacyPolicy')}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='btn-tertiary w-fit py-3 px-10 rounded-2xl text-foreground/60 mx-auto md:mx-0'
        >
          {t('profile.collaboration.submitRequest')}
        </button>
      </form>
    </div>
  );
}


