"use client";

import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="hidden md:flex flex-1 md:max-w-3xs lg:max-w-md relative">
      <input
        type="text"
        placeholder="جست و جو کنید..."
        className="input w-full pr-12 rounded-xl h-12"
      />
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <SearchIcon size={24} />
      </span>
    </div>
  );
}
