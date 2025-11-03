import ContactInfo from '@/components/shared/contact-info';
import ContactForm from '@/app/(root)/contact/contact-form';

export default function ContactPage() {
  return (
    <div className='container flex flex-col gap-8 pt-28 md:pt-40'>
      {/* Page Title */}
      <h1 className='text-2xl md:text-3xl font-bold'>تماس با ما</h1>

      {/* Contact Info */}
      <ContactInfo />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
