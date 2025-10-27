import { ChevronLeft } from "lucide-react";
import React from "react";

export default function Banner() {
  return (
    <section className="container my-6 md:my-10">
      <div className="flex items-center justify-center gap-3 bg-[#f7f7f7] rounded-2xl p-4 cursor-pointer hover:bg-gray-100 effect">
        <span className="text-gray-600">متن تستی تبلیغات برای کاربر یا...</span>
        <ChevronLeft size={20} />
      </div>
    </section>
  );
}
