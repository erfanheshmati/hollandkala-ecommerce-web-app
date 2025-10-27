import Image from "next/image";
import NotFoundImage from "@/public/images/404.svg";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col gap-8 items-center justify-center flex-1 px-4 pt-48 pb-16">
        <Image
          src={NotFoundImage}
          alt="Not Found"
          className="w-full max-w-3xl h-auto"
        />
        <h1 className="text-xl font-bold text-primary">
          صفحه ی مورد نظر یافت نشد!
        </h1>
      </div>
      <Footer />
    </div>
  );
}
