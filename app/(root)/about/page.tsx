import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='container flex flex-col gap-10 pt-28 md:pt-40'>
      {/* Page Title */}
      <h1 className='text-2xl md:text-3xl font-bold'>درباره ی ما</h1>

      {/* Intro Section */}
      <section className='flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        <div className='flex flex-col gap-4 w-full lg:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary'>
            ما هلندکالا هستیم
          </h2>
          <p className='text-lg font-bold text-foreground/90 text-justify'>
            هلندکالا صادرکننده انواع پوشاک، اورجینال مردانه و زنانه، کیف و کفش و
            لوازم ورزشی و آرایشی و بهداشتی از کشور هلند می‌باشد.
          </p>
          <p className='text-base md:text-lg leading-7 text-foreground/90 text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
        <div className='flex items-center justify-center w-full lg:w-1/2'>
          <Image
            src='/images/about-1.svg'
            alt='about-1'
            width={500}
            height={500}
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Mission and Stats */}
      <section className='flex flex-col lg:flex-row-reverse gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 my-10'>
        <div className='flex flex-col gap-4 w-full lg:w-1/2'>
          <h3 className='text-3xl md:text-4xl font-bold text-primary'>
            ماموریت ما
          </h3>
          <p className='text-base md:text-lg font-bold leading-8 text-foreground/90 text-justify'>
            ماموریت ما ارائه بهترین محصولات اورجینال و باکیفیت از هلند به
            مشتریان عزیز است. ما با فراهم آوردن کیفیت بالا و خدمات مطلوب،
            تجربه‌ای بی‌نظیر از خرید آنلاین را برای شما فراهم می‌کنیم.
          </p>
          <p className='text-sm md:text-base text-foreground/80'>
            ما افتخار ارائه خدمات به هزاران مشتری راضی را داریم
          </p>
          <div className='flex flex-wrap items-center justify-between gap-1 mt-4'>
            <div className='rounded-full border border-foreground/20 p-4 text-center'>
              <div className='text-sm text-foreground/80 mb-2'>فروشنده</div>
              <div className='text-2xl font-bold text-primary'>+3734</div>
            </div>
            <div className='rounded-full border border-foreground/20 p-4 text-center'>
              <div className='text-sm text-foreground/80 mb-2'>ثبت نام</div>
              <div className='text-2xl font-bold text-primary'>+3834</div>
            </div>
            <div className='rounded-full border border-foreground/20 p-4 text-center'>
              <div className='text-sm text-foreground/80 mb-2 line-clamp-1'>
                فروش روزانه
              </div>
              <div className='text-2xl font-bold text-primary'>+3734</div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full lg:w-1/2'>
          <Image
            src='/images/about-2.svg'
            alt='about-1'
            width={500}
            height={500}
            className='w-full h-auto object-cover'
          />
        </div>
      </section>
    </div>
  );
}
