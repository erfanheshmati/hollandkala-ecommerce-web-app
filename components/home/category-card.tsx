import { ProductCategory } from "@/types";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  title,
  imageUrl,
  href,
}: ProductCategory) {
  return (
    <div className="relative rounded-3xl overflow-hidden group transition-transform hover:scale-105">
      {imageUrl && (
        <div className="absolute inset-0">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col justify-between relative p-4 h-full min-h-[160px] md:min-h-[200px]">
        <div className="text-white font-bold text-2xl">
          {title.includes(" ") ? (
            <>
              {title.substring(0, title.indexOf(" "))}
              <br />
              {title.substring(title.indexOf(" ") + 1)}
            </>
          ) : (
            title
          )}
        </div>
        <Link
          href={href}
          className="self-start bg-white/20 backdrop-blur-md text-white rounded-2xl px-4 py-2 flex items-center gap-2 hover:bg-white/40 cursor-pointer effect"
        >
          <span className="text-lg font-medium">مشاهده</span>
          <ArrowLeft size={20} />
        </Link>
      </div>
    </div>
  );
}
