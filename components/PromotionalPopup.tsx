"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function PromotionalPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem("hasSeenPromotionalPopup");

    if (!hasSeenPopup) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenPromotionalPopup", "true");
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Popup Content */}
      <div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden"
        style={{
          background:
            "linear-gradient(223deg, rgba(76, 70, 255, 1) 10%, rgba(144, 0, 255, 1) 98%)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-7 right-7 flex items-center gap-2 text-white z-10 cursor-pointer group"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg border group-hover:bg-white/20 effect">
            <X className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-medium">بستن</span>
        </button>

        {/* Decorative Circles */}
        <Image
          src="/images/decorative-circle-1.svg"
          alt=""
          width={176}
          height={176}
          className="absolute -top-28 -left-14 w-[176px] h-[176px] opacity-40"
        />
        <Image
          src="/images/decorative-circle-2.svg"
          alt=""
          width={183}
          height={183}
          className="absolute -bottom-20 -right-20 w-[183px] h-[183px] opacity-43"
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full p-6 relative mt-14">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <h2 className="text-4xl font-bold text-white">با خرید عمده</h2>
            <p className="text-2xl font-normal text-white">
              زیر قیمت بازار خرید کن
            </p>
            {/* CTA Button */}
            <button
              onClick={() => {
                handleClose();
                // Optional: Navigate to products page or trigger scroll
                window.location.href = "#";
              }}
              className="bg-white text-secondary px-4 py-3 rounded-2xl font-medium text-xl hover:bg-white/70 cursor-pointer effect"
            >
              مشاهده ی همه محصولات
            </button>
          </div>

          {/* Product Illustration */}
          <div className="flex items-center justify-center w-[286px] h-[227px] relative">
            <Image
              src="/images/product-illustration.svg"
              alt="Product illustration"
              width={286}
              height={227}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
