import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import "../styles/custom.css";
import MobileBottomNav from "@/components/mobile-bottom-nav";
import PromotionalPopup from "@/components/promotional-popup";

const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakh-FaEn-01-Hairline.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-FaEn-02-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-FaEn-03-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-FaEn-04-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-FaEn-05-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-FaEn-06-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-FaEn-07-Heavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-FaEn-08-Fat.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
});

export const metadata: Metadata = {
  title: "هلندکالا - فروشگاه آنلاین",
  description: "به فروشگاه هلندکالا خوش آمدید",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning
        className={`${yekanBakh.variable} antialiased`}
      >
        <div className="pb-20 md:pb-0">{children}</div>
        <MobileBottomNav />
        <PromotionalPopup />
      </body>
    </html>
  );
}
