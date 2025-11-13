"use client";

import { useState } from "react";
import clsx from "clsx";
import { ProductProps } from "@/types";
import { useTranslations } from "next-intl";
import ProductDescription from "./product-description";
import ProductSpecification from "./product-specification";
import ProductReview from "./product-review";

type TabKey = "description" | "specification" | "review";

const buildTabs = (t: ReturnType<typeof useTranslations>): { key: TabKey; label: string }[] => [
  { key: "description", label: t("product.description") },
  { key: "specification", label: t("product.specifications") },
  { key: "review", label: t("product.reviews") },
];

export default function ProductTabs({ product }: { product: ProductProps }) {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const TAB_ITEMS = buildTabs(t);

  return (
    <section className="flex flex-col gap-4 my-10 md:my-16">
      {/* Tabs Header */}
      <div className="rounded-2xl bg-secondary px-4 pt-4">
        <nav className="relative flex items-center justify-between md:justify-start md:gap-8 overflow-x-hidden">
          {TAB_ITEMS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={clsx(
                "relative pb-4 font-medium cursor-pointer effect",
                activeTab === tab.key
                  ? "text-primary font-semibold"
                  : "text-foreground/60 hover:text-primary/80"
              )}
            >
              <span>{tab.label}</span>
              {/* Rounded bottom border indicator */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 rounded-tl-lg rounded-tr-lg effect ${
                  activeTab === tab.key
                    ? "bg-primary"
                    : "bg-transparent group-hover:bg-primary"
                }`}
              ></div>
            </button>
          ))}
        </nav>
      </div>

      {/* Description Content */}
      {activeTab === "description" && <ProductDescription product={product} />}

      {/* Specifications Content */}
      {activeTab === "specification" && (
        <ProductSpecification product={product} />
      )}

      {/* Reviews Content */}
      {activeTab === "review" && <ProductReview product={product} />}
    </section>
  );
}
