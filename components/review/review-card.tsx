'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ReviewProps } from '@/types';
import ImageModal from '@/components/shared/image-modal';

export default function ReviewCard({
  name,
  avatarUrl,
  comment,
  badges = [],
  images = [],
  onImageClick,
}: ReviewProps & {
  onImageClick?: (imageUrl: string) => void;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleImageClick = (img: string) => {
    if (onImageClick) {
      onImageClick(img);
    } else {
      setSelectedImage(img);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className='flex flex-col bg-background border border-foreground/44 rounded-xl p-4 h-60'>
        {/* User Info */}
        <div className='flex items-center gap-4 mb-4'>
          <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary'>
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                width={55}
                height={55}
                className='rounded-full'
              />
            ) : (
              <span className='text-white font-bold'>
                {name.split(' ').length > 1
                  ? `${name.split(' ')[0][0]} ${name.split(' ')[1][0]}`
                  : name[0]}
              </span>
            )}
          </div>
          <div className='flex flex-col items-start gap-0'>
            <h4 className='font-medium text-foreground text-sm md:text-base'>
              {name}
            </h4>
            <div className='flex gap-2 mt-1'>
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className='bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full'
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Comment */}
        <p className='text-foreground font-medium text-sm'>{comment}</p>

        {/* Rating Images */}
        <div className='flex items-center justify-start gap-2 mt-auto w-16 h-16'>
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={''}
              width={64}
              height={64}
              className='object-cover rounded-lg w-16 h-16 cursor-pointer hover:opacity-80 effect'
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {mounted && !onImageClick && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={handleClose}
          alt='Review image'
        />
      )}
    </>
  );
}
