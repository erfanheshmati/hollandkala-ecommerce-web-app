"use client";

import { promotionalText } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PromotionalText() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="my-6 md:my-10">
      <div className="bg-[#f7f7f7] rounded-2xl overflow-hidden">
        <div
          className="p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            <div
              className="flex items-center gap-8 whitespace-nowrap"
              style={{
                width: "max-content",
                animation: "marqueeScroll 5s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {[...promotionalText, ...promotionalText].map((text, idx) => (
                <>
                  <div key={idx} className="flex items-center gap-3">
                    <Link
                      href={text.href}
                      className="text-foreground/66 hover:text-foreground effect"
                    >
                      {text.title}
                    </Link>
                  </div>
                  <ChevronLeft size={20} className="text-primary" />
                </>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes marqueeScroll {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
