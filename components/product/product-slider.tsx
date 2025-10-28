/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import ProductCard from "./product-card";
import { ProductSliderProps } from "@/types";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { useState } from "react";

export default function ProductSlider({
  title,
  products,
  backgroundColor,
}: ProductSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [lastSlide, setLastSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    slides: {
      perView: 1.4,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 860px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
    created(slider) {
      setLoaded(true);
      setLastSlide(slider.track.details.maxIdx);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    updated(slider) {
      setLastSlide(slider.track.details.maxIdx);
    },
  });

  return (
    <section
      className="my-14 md:my-20 rounded-3xl p-6"
      style={{ backgroundColor }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="flex items-center justify-center bg-background/90 hover:bg-background active:bg-background px-4 py-2 rounded-xl text-foreground hover:text-black active:text-black cursor-pointer effect"
          >
            مشاهده همه
          </Link>
        </div>
      </div>

      {/* Products Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((product, index) => (
          <div key={index} className="keen-slider__slide">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
