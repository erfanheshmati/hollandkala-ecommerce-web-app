import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function Favorite() {
  return (
    <Link
      href='/favorites'
      className='hidden md:block p-3 rounded-xl bg-secondary hover:bg-[#e8e8e8] effect'
    >
      <Heart size={24} className='text-foreground' />
    </Link>
  );
}
