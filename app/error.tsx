"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col gap-4 items-center justify-center flex-1 px-4 min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-4rem)]">
        <h1 className="text-xl font-bold text-primary">خطایی رخ داده است!</h1>
        <button className="btn-primary py-2" onClick={() => reset()}>
          تلاش مجدد
        </button>
      </div>
      <Footer />
    </div>
  );
}
