import { Heart } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Favorite() {
  const t = useTranslations();
  return (
    <Link
      href='/favorites'
      className='hidden md:block p-3 rounded-xl bg-secondary hover:bg-[#e8e8e8] effect'
      aria-label={t('nav.favorites')}
    >
      <Heart size={24} className='text-foreground' />
    </Link>
  );
}
