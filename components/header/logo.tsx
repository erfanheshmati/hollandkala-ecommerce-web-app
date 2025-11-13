import Image from 'next/image';
import LogoIcon from '@/public/icons/logo.svg';
import { Link } from '@/i18n/routing';

export default function Logo() {
  return (
    <Link href='/' className='flex items-center'>
      <Image src={LogoIcon} alt='logo' className='w-12 h-12 md:w-14 md:h-14' />
    </Link>
  );
}
