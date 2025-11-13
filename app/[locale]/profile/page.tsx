'use client';

import { useEffect } from 'react';
import { useRouter } from '@/i18n/routing';

export default function ProfilePage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) {
      router.replace('/profile/info' as Parameters<typeof router.replace>[0]);
    }
  }, [router]);

  return null;
}


