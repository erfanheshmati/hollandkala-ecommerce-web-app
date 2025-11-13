'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { IoShareSocialOutline } from 'react-icons/io5';

type ShareProps = {
  className?: string;
};

export default function Share({ className }: ShareProps) {
  const t = useTranslations();
  const [currentUrl] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.href : ''
  );
  const [copied, setCopied] = useState<boolean>(false);
  const shareUrl = useMemo(() => currentUrl, [currentUrl]);

  const shareData = useMemo(() => {
    const title = typeof document !== 'undefined' ? document.title : '';
    return { title, text: '', url: shareUrl };
  }, [shareUrl]);

  const handleNativeShare = async () => {
    const nav = navigator as Navigator & {
      share?: (data: ShareData) => Promise<void>;
    };
    if (typeof nav !== 'undefined' && nav.share) {
      try {
        await nav.share(shareData);
      } catch {
        // ignored (user cancelled)
      }
    } else {
      handleCopy();
    }
  };

  const promptFallback = () => {
    if (typeof window === 'undefined') return;
    try {
      window.prompt(t('common.share'), shareUrl);
    } catch {
      // ignored
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      promptFallback();
    }
  };

  return (
    <div className={`flex ${className ?? ''}`}>
      <button
        type='button'
        onClick={handleNativeShare}
        className='flex items-center gap-1 px-3 py-2 rounded-2xl bg-secondary hover:bg-foreground/10 active:bg-foreground/10 cursor-pointer effect truncate'
        aria-label={t('common.share')}
      >
        <IoShareSocialOutline size={18} />
        <span className='hidden sm:block text-sm font-medium'>
          {copied ? t('common.copied') : t('common.share')}
        </span>
      </button>
    </div>
  );
}
