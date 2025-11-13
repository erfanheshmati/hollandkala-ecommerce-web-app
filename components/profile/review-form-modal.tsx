'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CgCloseR } from 'react-icons/cg';
import { HiOutlineFolderOpen } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { GoStar, GoStarFill } from 'react-icons/go';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ReviewFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  productImage: string;
  productName: string;
}

export default function ReviewFormModal({
  isOpen,
  onClose,
  productImage,
  productName,
}: ReviewFormModalProps) {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Handle render state for smooth transitions
  useEffect(() => {
    if (isOpen) {
      // Use requestAnimationFrame to avoid synchronous setState
      requestAnimationFrame(() => {
        setShouldRender(true);
      });
    } else {
      // Delay unmounting to allow exit animation to complete
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (rating === 0 || !description.trim()) {
      alert(t('common.errors.ratingRequired'));
      return;
    }
    // Handle review submission
    console.log('Review submitted:', { rating, description, selectedFile });
    // Reset form
    setRating(0);
    setDescription('');
    setSelectedFile(null);
    onClose();
  };

  const handleClose = () => {
    setRating(0);
    setDescription('');
    setSelectedFile(null);
    onClose();
  };

  if (!mounted || !shouldRender) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-200 effect ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 effect ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleOverlayClick}
      />

      {/* Modal Container */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-201 effect ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleOverlayClick}
      >
        {/* Modal Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col gap-4 w-full max-w-sm max-h-full overflow-y-auto bg-background rounded-2xl p-6 pointer-events-auto relative effect ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
          style={{ scrollbarWidth: 'none' }}
        >
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h2 className='font-medium text-xl'>{t('profile.review.submitReview')}</h2>
            <button
              onClick={handleClose}
              className='flex items-center gap-2 cursor-pointer group'
            >
              <CgCloseR className='w-6 h-6 opacity-80 group-hover:opacity-100 group-active:opacity-100 effect' />
            </button>
          </div>

          {/* Product Image */}
          <div className='flex justify-center'>
            <div className='relative w-32 h-32 rounded-xl overflow-hidden'>
              <Image
                src={productImage}
                alt={productName}
                fill
                className='object-cover'
                sizes='128px'
              />
            </div>
          </div>

          {/* Rating Section */}
          <div className='flex items-center justify-between bg-secondary p-4 rounded-2xl'>
            <label className='text-sm font-medium text-foreground/80'>
              {t('profile.review.rate')}
            </label>
            <div className='flex items-center gap-1 justify-center' dir='ltr'>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type='button'
                  onClick={() => setRating(star)}
                  className='focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 rounded cursor-pointer effect'
                  aria-label={t('profile.review.ratingOf', { rating: star })}
                >
                  {star <= rating ? (
                    <GoStarFill
                      size={24}
                      className='text-yellow-500 transition-colors'
                    />
                  ) : (
                    <GoStar
                      size={24}
                      className='text-yellow-500 transition-colors'
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description Textarea */}
          <div className='flex flex-col gap-2'>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t('profile.review.description') + ':'}
              rows={5}
              className='input rounded-2xl min-h-max resize-none'
            />
          </div>

          {/* File Upload Box */}
          <div className='flex flex-col gap-4'>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border border-dashed border-primary rounded-2xl p-4 effect ${
                isDragging ? 'bg-primary/10' : 'bg-background'
              }`}
            >
              <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-1 flex-1 min-w-0'>
                  <HiOutlineFolderOpen className='w-7 h-7 text-primary pb-1 shrink-0' />
                  <span className='text-sm font-bold truncate'>
                    {selectedFile
                      ? selectedFile.name
                      : t('profile.review.dragDropFile')}
                  </span>
                  {selectedFile && (
                    <button
                      type='button'
                      onClick={() => setSelectedFile(null)}
                      className='text-red-500 hover:text-red-700 cursor-pointer effect shrink-0 pb-1'
                    >
                      <IoMdClose className='w-5 h-5' />
                    </button>
                  )}
                </div>
                <input
                  type='file'
                  id='file-upload-review'
                  onChange={handleFileChange}
                  className='hidden'
                />
                <label
                  htmlFor='file-upload-review'
                  className='btn-secondary px-3 py-2 rounded-lg text-sm font-bold text-primary border border-primary shrink-0 cursor-pointer effect'
                >
                  {t('profile.review.uploadFile')}
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={rating === 0 || !description.trim()}
            className='btn-primary rounded-2xl py-3'
          >
            {t('profile.review.submitReviewButton')}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
