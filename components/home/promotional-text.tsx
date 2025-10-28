"use client";

import { promotionalText } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function PromotionalText() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="my-6 md:my-10">
      <div className="bg-[#f7f7f7] rounded-2xl overflow-hidden">
        <div
          className="py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex items-center gap-6 whitespace-nowrap"
              style={{
                animation: "marqueeScroll 15s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
                willChange: "transform",
              }}
            >
              {promotionalText.map((text, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-3">
                    <Link
                      href={text.href}
                      className="text-foreground/66 hover:text-foreground effect"
                    >
                      {text.title}
                    </Link>
                  </div>
                  {idx !== promotionalText.length - 1 && (
                    <ChevronLeft size={20} className="text-primary" />
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
