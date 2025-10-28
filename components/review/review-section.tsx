"use client";

import { useMemo, useState } from "react";
import { ReviewSectionProps } from "@/types";
import "keen-slider/keen-slider.min.css";

import ReviewSlider from "./review-slider";
import Link from "next/link";

export default function ReviewSection({
  title = "نظرات کاربران",
  subtitle = 'بخشی از درآمد "هلند کالا" صرف امور خیریه می شود',
  reviews,
  filters,
  dataByFilter,
}: ReviewSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>(
    filters?.[0] ?? (dataByFilter ? Object.keys(dataByFilter)[0] : "همه")
  );

  const derivedFilters = useMemo(() => {
    if (dataByFilter) {
      if (filters && filters.length > 0) return [...filters];
      return Object.keys(dataByFilter);
    }
    if (filters && filters.length > 0) return ["همه", ...filters];
    const set = new Set<string>();
    reviews.forEach((r) => r.badges?.forEach((c) => set.add(c)));
    return ["همه", ...Array.from(set)];
  }, [filters, reviews, dataByFilter]);

  const visibleReviews = useMemo(() => {
    if (dataByFilter) {
      return dataByFilter[activeFilter] ?? [];
    }
    if (activeFilter === "همه") return reviews;
    return reviews.filter((r) => r.badges?.includes(activeFilter));
  }, [reviews, activeFilter, dataByFilter]);

  return (
    <section className="flex flex-col gap-4 my-8 md:my-12 -mx-4 md:mx-0">
      {/* Header */}
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-foreground/66 font-medium text-base md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Navbar */}
      <div className="flex gap-4 w-fit mx-auto bg-[#f7f7f7] p-2 rounded-3xl">
        {derivedFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-6 md:px-8 py-2 cursor-pointer effect ${
              f === activeFilter && "bg-primary text-background rounded-full"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Review Slider */}
      <ReviewSlider reviews={visibleReviews} />

      {/* Link to see all */}
      <Link
        href="/reviews"
        className="btn-primary w-fit mx-auto rounded-xl font-medium text-sm md:text-base px-8 py-3 mt-2"
      >
        مشاهده همه
      </Link>
    </section>
  );
}
