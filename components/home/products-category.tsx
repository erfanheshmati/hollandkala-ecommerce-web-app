import { productsCategory } from "@/lib/data";
import CategoryCard from "./category-card";

export default function ProductsCategory() {
  return (
    <section className="container my-12 md:my-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl font-bold text-secondary">
            دسته بندی محصولات ما
          </h2>
          <p className="text-secondary/66">
            شما میتوانید مابقی دسته بندی را از منو مشاهده کنید
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {productsCategory.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
