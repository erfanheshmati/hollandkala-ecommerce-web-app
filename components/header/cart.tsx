import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  return (
    <Link
      href="/cart"
      className="hidden md:block p-3 rounded-xl bg-secondary hover:bg-[#e8e8e8] effect"
    >
      <ShoppingCart size={24} className="text-foreground" />
    </Link>
  );
}
