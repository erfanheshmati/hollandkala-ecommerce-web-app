export default function ProfileInfoPage() {
  return (
    <div className='py-4 md:p-8'>
      <form className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        {/* Name */}
        <div className='relative lg:col-span-6'>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='نام و نام خانوادگی'
            value='محمد رمضانی'
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='name'
            className='pointer-events-none absolute right-4 top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs'
          >
            نام و نام خانوادگی
          </label>
        </div>

        {/* Phone */}
        <div className='relative lg:col-span-6'>
          <input
            id='phone'
            name='phone'
            type='number'
            placeholder='شماره تماس'
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='phone'
            className='pointer-events-none absolute right-4 top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs'
          >
            شماره تماس
          </label>
        </div>

        {/* Province */}
        <div className='relative lg:col-span-4'>
          <input
            id='province'
            name='province'
            type='text'
            placeholder='استان'
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='province'
            className='pointer-events-none absolute right-4 top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs'
          >
            استان
          </label>
        </div>

        {/* City */}
        <div className='relative lg:col-span-4'>
          <input
            id='city'
            name='city'
            type='text'
            placeholder='شهرستان'
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='city'
            className='pointer-events-none absolute right-4 top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs'
          >
            شهرستان
          </label>
        </div>

        {/* Zip Code */}
        <div className='relative lg:col-span-4'>
          <input
            id='zipCode'
            name='zipCode'
            type='number'
            placeholder='کد پستی'
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='zipCode'
            className='pointer-events-none absolute right-4 top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs'
          >
            کد پستی
          </label>
        </div>

        {/* Address */}
        <div className='relative lg:col-span-12'>
          <input
            id='address'
            name='address'
            type='text'
            placeholder='آدرس محل سکونت'
            className='peer h-11 w-full rounded-xl border border-foreground/20 bg-background text-primary placeholder:text-foreground/50 text-lg placeholder:text-base font-medium placeholder:font-normal px-4 py-7 md:py-6 outline-none focus:border-primary/60 focus:placeholder-transparent'
          />
          <label
            htmlFor='address'
            className='pointer-events-none absolute right-4 top-0 -translate-y-1/2 bg-background font-medium px-2 text-foreground/60 effect opacity-0 peer-focus:opacity-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs'
          >
            آدرس محل سکونت
          </label>
        </div>
      </form>
    </div>
  );
}
