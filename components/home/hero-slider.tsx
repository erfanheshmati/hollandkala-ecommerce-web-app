"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { slideImages } from "@/lib/data";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<{
    moveToIdx: (idx: number, skip?: boolean) => void;
    next: () => void;
  } | null>(null);

  const timeoutRef = useRef<number | null>(null);

  const [ref] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    slideChanged(slider) {
      // Use relative index which is better for loop mode
      const relativeIndex = slider.track.details.rel;
      setCurrentSlide(relativeIndex);
      // Restart autoplay timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        slider.next();
      }, 4000);
    },
    created(slider) {
      sliderRef.current = slider;
      // Start autoplay
      timeoutRef.current = window.setTimeout(() => {
        slider.next();
      }, 4000);
    },
  });

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="my-6 md:my-10">
      <div ref={ref} className="keen-slider">
        {slideImages.map((img) => (
          <div
            key={img.title}
            className="keen-slider__slide relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              sizes="100vw"
              className="object-cover rounded-2xl"
              style={{ objectPosition: "center" }}
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              const slider = sliderRef.current;
              if (slider) {
                // Move to the target slide
                slider.moveToIdx(idx);
                // Restart autoplay after clicking
                timeoutRef.current = window.setTimeout(() => {
                  slider.next();
                }, 4000);
              }
            }}
            className={`h-2 rounded-full cursor-pointer effect ${
              idx === currentSlide
                ? "bg-primary w-8"
                : "bg-gray-300 hover:bg-gray-400 active:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
