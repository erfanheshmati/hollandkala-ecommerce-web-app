"use client";

import { ProductCardProps } from "@/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";

export default function ProductCard({
  title,
  discountedPrice,
  originalPrice,
  discount,
  badges = [],
  imageUrl,
  backgroundColor,
  href,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const badgeColorClasses: Record<string, string> = {
    "تعداد عمده": "bg-primary/10 text-primary",
    "ورزشکاران حرفه ای": "bg-[#E1324E]/10 text-[#E1324E]",
  };

  const getBadgeClasses = (label: string) =>
    badgeColorClasses[label] ?? "bg-blue-100 text-blue-600";

  return (
    <div className="bg-background rounded-xl overflow-hidden p-1">
      {/* Product Image */}
      <div
        className="w-full h-40 md:h-56 rounded-xl relative"
        style={{ backgroundColor }}
      >
        {imageUrl && (
          <Link href={href} className="relative block w-full h-full rounded-xl hover:opacity-80 active:opacity-80 effect">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(min-width: 1024px) 100vw, 100vw"
              className="object-cover rounded-xl"
            />
          </Link>
        )}
        {/* Discount Percentage */}
        {discount && (
          <div className="absolute top-2 left-0 bg-red-500 text-background px-2 pt-1 rounded-r-lg text-sm md:text-xl font-medium">
            {discount}
          </div>
        )}
        {/* Favorite Icon */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 bg-background hover:bg-background/90 rounded-xl p-2 cursor-pointer effect"
        >
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link
          href={href}
          className="text-base md:text-xl font-medium text-foreground line-clamp-1 hover:text-primary active:text-primary effect"
        >
          {title}
        </Link>

        {/* Badges */}
        <div className="flex gap-2 mt-1">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`${getBadgeClasses(
                badge
              )} text-xs md:text-sm px-2 py-1 rounded-full`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-foreground/55 text-sm md:text-base line-through">
                {originalPrice}
              </span>
            )}
            <span className="text-xl md:text-2xl font-medium text-red-500">
              {discountedPrice}
            </span>
          </div>
          <button className="btn-primary p-3 rounded-2xl">
            <BsCart2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
