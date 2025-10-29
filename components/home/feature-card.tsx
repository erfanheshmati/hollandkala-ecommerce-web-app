import { FeatureCardProps } from "@/types";
import Image from "next/image";

export default function FeatureCard({
  title,
  description,
  iconUrl,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-secondary rounded-2xl py-4 md:py-8">
      <div className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center">
        {iconUrl && <Image src={iconUrl} alt={title} width={40} height={40} />}
      </div>
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm font-medium text-foreground/66">{description}</p>
    </div>
  );
}
