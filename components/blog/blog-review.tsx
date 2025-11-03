'use client';

import { BlogProps } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { ImReply } from 'react-icons/im';

export default function BlogReview({ blog }: { blog: BlogProps }) {
  const visibleReviews = blog.reviews || [];
  const [comment, setComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});

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
                  <h3 className='font-semibold text-primary'>{review.name}</h3>
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
