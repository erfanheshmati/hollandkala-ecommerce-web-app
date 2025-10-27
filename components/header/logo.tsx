import Image from "next/image";
import LogoIcon from "@/public/icons/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="hidden md:flex items-center">
      <Image src={LogoIcon} alt="logo" className="w-12 h-12 md:w-14 md:h-14" />
    </Link>
  );
}
