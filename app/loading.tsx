import { LoaderCircleIcon } from "lucide-react";

export default async function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LoaderCircleIcon className="w-10 h-10 animate-spin text-primary" />
    </div>
  );
}
