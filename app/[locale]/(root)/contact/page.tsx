import ContactInfo from '@/components/shared/contact-info';
import ContactForm from './contact-form';
import {getTranslations} from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations();
  return (
    <div className='container flex flex-col gap-8 pt-28 md:pt-40'>
      {/* Page Title */}
      <h1 className='text-2xl md:text-3xl font-bold'>{t('contact.title')}</h1>

      {/* Contact Info */}
      <ContactInfo />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}


