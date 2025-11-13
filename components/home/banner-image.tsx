import { BannerImageProps } from "@/types";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function BannerImage({
  title,
  imageUrl,
  href,
}: BannerImageProps) {
  return (
    <Link
      href={href}
      className="relative block w-full h-28 md:h-48 rounded-lg overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover rounded-lg"
        sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
      />
    </Link>
  );
}
