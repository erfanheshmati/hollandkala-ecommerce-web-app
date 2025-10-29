import { BlogCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineComment } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

export default function BlogCard({
  title,
  description,
  date,
  likes,
  comments,
  imageUrl,
  href,
}: BlogCardProps) {
  return (
    <div className="flex flex-row md:flex-col gap-2 bg-secondary rounded-xl overflow-hidden p-2">
      {/* Product Image */}
      <div className="w-full max-w-20 md:max-w-full h-20 md:h-56 rounded-xl relative">
        {imageUrl && (
          <Link
            href={href}
            className="relative block w-full h-full rounded-xl hover:opacity-80 active:opacity-80 effect"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(min-width: 1024px) 100vw, 100vw"
              className="object-cover rounded-xl"
            />
          </Link>
        )}
      </div>

      {/* Product Info */}
      <div className="p-1 w-full">
        <Link
          href={href}
          className="text-base md:text-xl font-medium text-foreground line-clamp-1 hover:text-primary active:text-primary effect"
        >
          {title}
        </Link>
        <p className="text-foreground/66 text-sm font-medium line-clamp-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <IoCalendarOutline className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-foreground/80 text-sm pt-1">{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-foreground/80 text-sm pt-1">{likes}</span>
              <IoMdHeartEmpty className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-foreground/80 text-sm pt-1">
                {comments}
              </span>
              <AiOutlineComment className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
