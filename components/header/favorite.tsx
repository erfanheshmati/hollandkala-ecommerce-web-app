import { Heart } from "lucide-react";
import Link from "next/link";

export default function Favorite() {
  return (
    <Link
      href="/favorite"
      className="hidden md:block p-3 rounded-xl bg-[#f7f7f7] hover:bg-[#e8e8e8] effect"
    >
      <Heart size={24} className="text-secondary" />
    </Link>
  );
}
