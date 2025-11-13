import { productCategories } from "@/lib/data";
import CategoryCard from "./category-card";
import { useTranslations } from "next-intl";

export default function ProductsCategory() {
  const t = useTranslations();
  return (
    <section className="my-12 md:my-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl font-bold text-foreground">
            {t("home.categoryTitle")}
          </h2>
          <p className="text-foreground/66">
            {t("home.categorySubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productCategories.map((category, index) => {
            const title =
              index === 0
                ? t("data.categories.wholesaleNew", { defaultValue: category.title })
                : index === 1
                ? t("data.categories.wholesaleUsed", { defaultValue: category.title })
                : index === 2
                ? t("data.categories.retailNew", { defaultValue: category.title })
                : index === 3
                ? t("data.categories.retailUsed", { defaultValue: category.title })
                : category.title;
            return <CategoryCard key={index} {...category} title={title} />;
          })}
        </div>
      </div>
    </section>
  );
}
