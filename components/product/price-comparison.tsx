"use client";

import { ProductProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

export default function PriceComparison({
  product,
}: {
  product: ProductProps;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="flex flex-col gap-3 bg-primary rounded-2xl px-4 md:px-6 py-6">
      {/* Header */}
      <h3 className="text-background font-bold text-xl">
        مقایسه جهانی قیمت این محصول
      </h3>

      {/* Content */}
      <div className="bg-background rounded-xl overflow-hidden">
        <div
          className="py-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex items-center gap-6 whitespace-nowrap"
              style={{
                animation: "marqueeScroll 12s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
                willChange: "transform",
              }}
            >
              {product.priceComparison?.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-10 bg-secondary px-4 py-2 rounded-lg">
                    <Link
                      href={item.href}
                      className="text-primary hover:underline active:underline effect"
                    >
                      {item.title}: {item.price} یورو
                    </Link>
                  </div>
                  {/* Separator */}
                  {product.priceComparison &&
                    idx !== product.priceComparison.length - 1 && (
                      <div className="block h-6 w-px bg-foreground/20"></div>
                    )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
