'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string | null;
  onClose: () => void;
  alt?: string;
}

export default function ImageModal({
  imageUrl,
  onClose,
  alt = 'Fullscreen image',
}: ImageModalProps) {
  // Handle Escape key to close
  useEffect(() => {
    if (!imageUrl) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [imageUrl, onClose]);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (imageUrl) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [imageUrl]);

  if (!imageUrl) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div className='fixed inset-0 z-999'>
      {/* Full Background Overlay */}
      <div className='absolute inset-0 bg-black/90' onClick={onClose} />

      {/* Modal Container */}
      <div
        className='absolute inset-0 flex items-center justify-center p-4'
        onClick={handleOverlayClick}
      >
        {/* Image Content */}
        <div
          className='relative w-full h-full flex items-center justify-center'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute top-0 right-0 flex items-center justify-center w-10 h-10 rounded-lg bg-black/60 hover:bg-black/70 text-white z-10 cursor-pointer effect'
            aria-label='Close image'
          >
            <X className='w-6 h-6' />
          </button>

          {/* Fullscreen Image */}
          <div className='relative w-full h-full flex items-center justify-center max-w-[95vw] max-h-[95vh]'>
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes='95vw'
              className='object-contain'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
