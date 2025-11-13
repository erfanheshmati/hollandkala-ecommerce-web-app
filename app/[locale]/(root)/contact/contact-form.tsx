'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with API endpoint
    console.log('Contact form submitted:', { fullName, email, message });
  };

  const isSubmitDisabled = !fullName.trim() || !email.trim() || !message.trim();

  return (
    <section className='flex flex-col items-center gap-4 mt-10'>
      {/* Title & Subtitle */}
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl md:text-2xl font-bold text-center'>
          {t('contact.form.title')}
        </h2>
        <p className='text-sm md:text-base text-foreground'>
          {t('contact.form.subtitle')}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 w-full md:max-w-2xl'
      >
        {/* Name & Email */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder={t('contactPlaceholders.name')}
            className='input'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder={t('contactPlaceholders.email')}
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        <textarea
          placeholder={t('contactPlaceholders.message')}
          rows={5}
          className='input resize-none'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Submit */}
        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='btn-primary px-10 w-full md:max-w-2xs'
            disabled={isSubmitDisabled}
          >
            {t('contact.form.send')}
          </button>
        </div>
      </form>
    </section>
  );
}

