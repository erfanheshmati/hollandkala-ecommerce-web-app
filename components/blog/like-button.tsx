'use client';

import { LikeButtonProps } from '@/types';
import { useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useTranslations } from 'next-intl';

export default function LikeButton({
  blogId,
  initialLikes,
  onSubmitLike,
}: LikeButtonProps) {
  const t = useTranslations();
  const [likes, setLikes] = useState<number>(initialLikes);
  const [isLiking, setIsLiking] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = async () => {
    if (isLiking) return;
    setIsLiking(true);

    // Optimistic toggle
    setLikes((prev) => {
      const next = isLiked ? Math.max(0, prev - 1) : prev + 1;
      return next;
    });
    setIsLiked((prev) => !prev);

    try {
      if (onSubmitLike) {
        await onSubmitLike(blogId);
      }
      // TODO: use api to submit
    } catch (err) {
      console.log(err);
      // Revert optimistic update on error
      setLikes((prev) => (isLiked ? prev + 1 : Math.max(0, prev - 1)));
      setIsLiked((prev) => !prev);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <button
      type='button'
      onClick={handleLikeClick}
      className='flex items-center gap-1 cursor-pointer disabled:opacity-60'
      disabled={isLiking}
      aria-label={t('blog.likePost')}
      aria-pressed={isLiked}
    >
      <span className='text-sm font-medium pt-1'>{likes}</span>
      {isLiked ? (
        <IoMdHeart size={20} className='text-red-500' />
      ) : (
        <IoMdHeartEmpty size={20} />
      )}
    </button>
  );
}
