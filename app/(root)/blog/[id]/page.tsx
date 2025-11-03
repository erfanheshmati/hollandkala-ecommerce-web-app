import { bannerImages, relatedArticles } from '@/lib/data';
import { notFound } from 'next/navigation';
import BlogReview from '@/components/blog/blog-review';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { AiOutlineComment } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import Breadcrumb from '@/components/shared/breadcrumb';
import BannerImage from '@/components/home/banner-image';
import LikeButton from '@/components/blog/like-button';

export default async function BlogSinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = relatedArticles.find((article) => article.id === id);
  if (!blog) notFound();

  // Get related articles (exclude current blog)
  const relatedPosts = relatedArticles.filter((article) => article.id !== id);

  return (
    <main className='container pt-24 md:pt-36'>
      {/* Breadcrumb */}
      <div className='mb-7 flex justify-end'>
        <Breadcrumb
          items={[
            { label: 'صفحه اصلی', href: '/' },
            { label: 'مقالات', href: '/blog' },
            { label: blog.title, href: `/blog/${blog.id}` },
          ]}
        />
      </div>

      {/* Blog */}
      <div className='flex flex-col-reverse lg:flex-row gap-6'>
        {/* Sidebar - Related Articles */}
        {/* <aside className='w-full lg:max-w-xs lg:sticky lg:top-36 self-start'> */}
        <aside className='w-full lg:max-w-xs'>
          <div className='flex flex-col gap-6 bg-secondary rounded-2xl p-4'>
            {/* Header */}
            <h2 className='text-xl md:text-2xl font-medium'>
              جدول مقالات مرتبط
            </h2>
            {/* Items */}
            <div className='flex flex-col gap-3'>
              {relatedPosts.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className='group'
                >
                  <div className='flex items-center justify-between gap-4 bg-background rounded-2xl p-3 hover:shadow-md effect'>
                    <span className='font-light line-clamp-1 group-hover:text-primary effect'>
                      {article.title}
                    </span>
                    <ChevronLeft size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className='w-full flex flex-col gap-6'>
          {/* Hero Section */}
          <div className='relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden'>
            {/* Background Image */}
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className='object-cover'
              priority
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-linear-to-t from-black/69 to-transparent' />
            {/* Content Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-4 md:p-6'>
              <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                {/* Title */}
                <h1 className='flex items-center text-2xl md:text-4xl font-bold text-background'>
                  {blog.title}
                </h1>
                {/* Meta Info */}
                <div className='flex flex-wrap items-center justify-between gap-4 w-full md:w-fit md:min-w-2xs bg-background p-4 rounded-3xl'>
                  {/* Date */}
                  <div className='flex items-center gap-2 text-foreground/60'>
                    <IoCalendarOutline size={20} />
                    <span className='text-sm font-medium'>{blog.date}</span>
                  </div>
                  {/* Comments & Likes */}
                  <div className='flex items-center gap-3'>
                    <LikeButton blogId={blog.id} initialLikes={blog.likes} />
                    <div className='flex items-center gap-1'>
                      <span className='text-sm font-medium pt-1'>
                        {blog.comments}
                      </span>
                      <AiOutlineComment size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <p className='text-foreground text-lg md:text-xl leading-8 font-light text-justify'>
            {blog.content}
          </p>

          {/* Promotional Banner */}
          <BannerImage
            title={bannerImages[0].title}
            imageUrl={bannerImages[0].imageUrl}
            href={bannerImages[0].href}
          />

          {/* Comments Section */}
          <BlogReview blog={blog} />
        </div>
      </div>

      {/* Promotional Banner */}
      <section className='mt-10 md:mt-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {bannerImages.map((banner) => (
            <BannerImage key={banner.title} {...banner} />
          ))}
        </div>
      </section>
    </main>
  );
}
