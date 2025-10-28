import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  iconUrl?: string;
  backgroundColor?: string;
}

export default function FeatureCard({
  title,
  description,
  iconUrl,
  backgroundColor,
}: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col items-center text-center"
      style={{ backgroundColor }}
    >
      <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
        {iconUrl && <Image src={iconUrl} alt={title} width={40} height={40} />}
      </div>
      <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
