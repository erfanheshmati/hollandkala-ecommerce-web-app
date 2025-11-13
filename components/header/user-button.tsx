import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function UserButton({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const t = useTranslations();
  const isLoggedIn = true;

  return (
    <Link
      href={isLoggedIn ? '/profile' : '/login'}
      className={cn(
        'flex items-center gap-1 truncate hover:bg-blue-50 active:bg-blue-50 text-primary border border-primary/20 hover:border-primary active:border-primary p-2.5 rounded-2xl effect',
        className
      )}
    >
      <User size={24} />
      {isLoggedIn ? (
        <span className='font-medium rtl:pt-1'>{t('profile.title')}</span>
      ) : (
        <span className='font-medium rtl:pt-1'>{t('auth.login')}</span>
      )}
    </Link>
  );
}
