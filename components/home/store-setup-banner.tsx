import Image from "next/image";
import Link from "next/link";

export default function StoreSetupBanner() {
  return (
    <section className="my-4 md:my-10">
      <Link
        href="#"
        className="relative block w-full h-36 sm:h-44 md:h-48 lg:h-60 xl:h-80 rounded-lg md:rounded-2xl overflow-hidden"
      >
        <Image
          src="/images/store-setup-banner.svg"
          alt="Store setup promotional banner"
          fill
          priority
          className="w-full object-contain md:object-cover rounded-lg md:rounded-2xl"
          sizes="(min-width: 1024px) 100vw, 100vw"
        />
      </Link>
    </section>
  );
}
