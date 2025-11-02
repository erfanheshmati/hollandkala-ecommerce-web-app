import { ProductProps } from "@/types";
import Link from "next/link";

export default function ProductDescription({
  product,
}: {
  product: ProductProps;
}) {
  return (
    <div className="rounded-2xl bg-secondary p-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          معرفی محصول
        </h3>
        <p className="leading-6 text-foreground/80">{product.description}</p>
        <Link
          href="/products/wholesale/all"
          className="btn-primary w-fit rounded-xl py-2"
        >
          مشاهده ی همه
        </Link>
      </div>
    </div>
  );
}
