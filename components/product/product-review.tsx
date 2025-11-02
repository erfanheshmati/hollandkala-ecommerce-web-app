'use client';

import { ProductProps } from '@/types';
import { Paperclip, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { GoStar, GoStarFill } from 'react-icons/go';
import { ImReply } from 'react-icons/im';

export default function ProductReview({ product }: { product: ProductProps }) {
  const visibleReviews = product.reviews?.slice(0, 3);
  const [comment, setComment] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
    // Reset file input
    const fileInput = document.getElementById(
      'image-upload'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement review submission
  };

  const handleReplyClick = (reviewIndex: number) => {
    setReplyingTo(replyingTo === reviewIndex ? null : reviewIndex);
  };

  const handleReplySubmit = (
    e: React.FormEvent<HTMLFormElement>,
    reviewIndex: number
  ) => {
    e.preventDefault();
    // TODO: Implement reply submission
    setReplyingTo(null);
    setReplyText({ ...replyText, [reviewIndex]: '' });
  };

  const handleReplyTextChange = (reviewIndex: number, text: string) => {
    setReplyText({ ...replyText, [reviewIndex]: text });
  };

  return (
    <div className='rounded-2xl bg-secondary p-4'>
      <div className='flex flex-col gap-4'>
        {/* Title */}
        <h3 className='text-lg md:text-xl font-bold text-foreground'>
          دیدگاه ها
        </h3>

        {/* Review Form */}
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <textarea
            name='comment'
            placeholder='دیدگاه خود را با ما به اشتراک بگذارید...'
            rows={2}
            required
            className='w-full rounded-2xl border border-primary/20 focus:border-primary bg-background p-4 text-sm sm:text-base text-foreground outline-none resize-none effect'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className='flex flex-wrap items-center justify-between sm:justify-end gap-2'>
            {/* Image Upload */}
            <div className='flex items-center gap-2'>
              <input
                type='file'
                id='image-upload'
                name='image'
                accept='image/*'
                className='hidden'
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <div className='relative h-10 w-10'>
                  <Image
                    src={imagePreview}
                    alt='Preview'
                    fill
                    className='object-cover rounded-lg'
                  />
                  <button
                    type='button'
                    onClick={handleRemoveImage}
                    className='absolute -top-2 -right-2 bg-red-500 text-background rounded-full p-1 hover:bg-red-600 cursor-pointer effect'
                    aria-label='حذف عکس'
                  >
                    <X className='h-3 w-3' />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor='image-upload'
                  className='flex items-center gap-1 btn-tertiary rounded-xl border px-4 py-2 border-foreground/10 text-foreground/50'
                >
                  <Paperclip className='h-4 w-4' />
                  <span className=''>تصویر</span>
                </label>
              )}
            </div>
            {/* Stars */}
            <div
              className='flex items-center justify-center gap-1 border border-foreground/10 rounded-xl bg-secondary px-4 py-2'
              dir='ltr'
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type='button'
                  onClick={() => setRating(star)}
                  className='focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 rounded cursor-pointer effect'
                  aria-label={`امتیاز ${star} از 5`}
                >
                  {star <= rating ? (
                    <GoStarFill
                      size={22}
                      className='text-yellow-500 transition-colors'
                    />
                  ) : (
                    <GoStar
                      size={22}
                      className='text-foreground/20 transition-colors hover:text-yellow-400'
                    />
                  )}
                </button>
              ))}
            </div>
            {/* Submit Btn */}
            <button
              type='submit'
              className='btn-tertiary py-2 rounded-xl border border-foreground/10'
              disabled={!comment?.trim()}
            >
              ارسال
            </button>
          </div>
        </form>

        {/* Review List */}
        <div className='flex flex-col gap-4'>
          {Array.isArray(visibleReviews) && visibleReviews.length > 0 ? (
            visibleReviews.map((review, idx) => (
              <div key={idx} className='flex flex-col gap-4 p-4'>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center rounded-full bg-primary/10'>
                    {review.avatarUrl ? (
                      <Image
                        src={review.avatarUrl}
                        alt={review.name}
                        width={48}
                        height={48}
                        className='h-10 w-10 rounded-full object-cover'
                      />
                    ) : (
                      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary'>
                        {review.name?.at(0) ?? '؟'}
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='font-semibold text-primary'>
                      {review.name}
                    </div>
                    {/* Star Rating */}
                    {review.rating && (
                      <div className='flex items-center gap-1' dir='ltr'>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star}>
                            {star <= review.rating! ? (
                              <GoStarFill
                                size={16}
                                className='text-yellow-500'
                              />
                            ) : (
                              <GoStar
                                size={16}
                                className='text-foreground/20'
                              />
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p className='text-sm sm:text-base leading-6 text-primary'>
                  {review.comment}
                </p>
                <button
                  onClick={() => handleReplyClick(idx)}
                  className='flex items-center justify-end gap-1 cursor-pointer hover:opacity-70 transition-opacity'
                >
                  <ImReply size={16} />
                  <span className='text-sm font-bold text-primary pt-1'>
                    پاسخ
                  </span>
                </button>
                {/* Reply Form */}
                {replyingTo === idx && (
                  <form
                    onSubmit={(e) => handleReplySubmit(e, idx)}
                    className='flex flex-col gap-2 rounded-2xl bg-background p-4'
                  >
                    <textarea
                      placeholder='پاسخ خود را بنویسید...'
                      rows={2}
                      required
                      className='w-full rounded-xl border border-primary/20 focus:border-primary bg-secondary p-3 text-sm text-foreground outline-none resize-none effect'
                      value={replyText[idx] || ''}
                      onChange={(e) =>
                        handleReplyTextChange(idx, e.target.value)
                      }
                    />
                    <div className='flex items-center justify-end gap-2'>
                      <button
                        type='button'
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyText({ ...replyText, [idx]: '' });
                        }}
                        className='px-4 py-2 text-sm text-foreground/60 hover:text-foreground cursor-pointer effect'
                      >
                        انصراف
                      </button>
                      <button
                        type='submit'
                        className='btn-primary py-2 px-4 rounded-xl text-sm'
                        disabled={!replyText[idx]?.trim()}
                      >
                        ارسال پاسخ
                      </button>
                    </div>
                  </form>
                )}
                {/* Existing Reply */}
                {review.reply && (
                  <div className='flex flex-col gap-2 rounded-2xl bg-background p-4'>
                    <div className='flex items-center gap-3'>
                      {review.reply.avatarUrl ? (
                        <Image
                          src={review.reply.avatarUrl}
                          alt={review.reply.name}
                          width={35}
                          height={36}
                          className='h-9 w-9 rounded-full object-cover'
                        />
                      ) : (
                        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary'>
                          {review.reply.name?.at(0) ?? '؟'}
                        </div>
                      )}
                      <span className='font-semibold text-primary'>
                        {review.reply.name}
                      </span>
                    </div>
                    <p className='text-sm sm:text-base leading-6 text-primary'>
                      {review.reply.text}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className='p-4 text-center text-sm text-foreground/60 sm:text-base'>
              نخستین نفری باشید که دیدگاه خود را ثبت می‌کند.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
