import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";

export default function UserButton({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
      href="/login"
      className={cn(
        "flex items-center gap-2 truncate hover:bg-blue-50 active:bg-blue-50 text-primary border border-primary/20 hover:border-primary active:border-primary p-2.5 rounded-2xl effect",
        className
      )}
    >
      <User size={24} />
      <span className="text-[16px] font-medium">ورود / ثبت نام</span>
    </Link>
  );
}
