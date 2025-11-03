"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, ChevronLeft, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  totalItems: number;
  perPage?: number;
  siblingCount?: number;
  className?: string;
}

const DEFAULT_PER_PAGE = 9;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function Pagination({
  totalItems,
  perPage = DEFAULT_PER_PAGE,
  siblingCount = 1,
  className,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = useMemo(() => {
    const raw = Number(searchParams.get("page") || "1");
    return Number.isFinite(raw) && raw > 0 ? raw : 1;
  }, [searchParams]);

  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const safeCurrent = clamp(currentPage, 1, totalPages);

  const createQueryString = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) params.delete("page");
    else params.set("page", String(page));
    return `${pathname}?${params.toString()}`.replace(/\?$/, "");
  };

  const goTo = (page: number) => {
    router.push(createQueryString(page));
  };

  if (totalPages <= 1) return null;

  const firstPage = 1;
  const lastPage = totalPages;
  const leftSibling = Math.max(safeCurrent - siblingCount, firstPage);
  const rightSibling = Math.min(safeCurrent + siblingCount, lastPage);

  const pages: (number | "ellipsis-left" | "ellipsis-right")[] = [];

  // Always show first page
  pages.push(firstPage);

  // Left ellipsis
  if (leftSibling > firstPage + 1) pages.push("ellipsis-left");

  // Middle range
  for (let p = leftSibling; p <= rightSibling; p++) {
    if (p !== firstPage && p !== lastPage) pages.push(p);
  }

  // Right ellipsis
  if (rightSibling < lastPage - 1) pages.push("ellipsis-right");

  // Always show last page
  if (lastPage !== firstPage) pages.push(lastPage);

  const btnBase =
    "min-w-10 h-10 md:min-w-11 md:h-11 flex items-center justify-center rounded-xl border effect text-foreground border-foreground/30 hover:border-primary hover:text-primary cursor-pointer";
  const activeBtn = "bg-primary text-background! border-primary cursor-pointer";

  return (
    <nav
      className={`w-full flex flex-row-reverse items-center justify-center gap-2 md:gap-3 select-none ${
        className || ""
      }`}
      aria-label="pagination"
    >
      {/* Next/Prev */}
      <button
        className={`${btnBase} disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={() => goTo(safeCurrent - 1)}
        disabled={safeCurrent <= 1}
        aria-label="previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((item, idx) => {
        if (item === "ellipsis-left" || item === "ellipsis-right") {
          return (
            <span
              key={`${item}-${idx}`}
              className="min-w-10 h-10 md:min-w-11 md:h-11 flex items-center justify-center text-foreground/60"
            >
              <MoreHorizontal className="w-4 h-4" />
            </span>
          );
        }

        const pageNum = item as number;
        const isActive = pageNum === safeCurrent;
        return (
          <button
            key={pageNum}
            className={`${btnBase} ${isActive ? activeBtn : "bg-background"}`}
            onClick={() => goTo(pageNum)}
            aria-current={isActive ? "page" : undefined}
            aria-label={`page ${pageNum}`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        className={`${btnBase} disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={() => goTo(safeCurrent + 1)}
        disabled={safeCurrent >= totalPages}
        aria-label="next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
