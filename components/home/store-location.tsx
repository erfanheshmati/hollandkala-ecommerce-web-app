"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { storeLocations } from "@/lib/data";

export default function StoreLocation() {
  const [selectedLocation, setSelectedLocation] = useState("London");
  const currentLocation = storeLocations[selectedLocation];

  return (
    <section className="my-12 md:my-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-[#f7f7f7] rounded-3xl p-6">
        <div className="flex flex-col md:h-80 justify-between gap-4 w-full lg:w-1/2">
          <h3 className="text-xl md:text-2xl font-bold text-foreground text-center">
            از فروشگاه ما دیدن کنید
          </h3>
          <div className="flex items-center justify-center gap-3 bg-background rounded-xl py-2">
            <button
              onClick={() => setSelectedLocation("Paris")}
              className={`px-4 py-2 rounded-3xl text-sm cursor-pointer effect ${
                selectedLocation === "Paris"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground/44 hover:bg-foreground/5"
              }`}
            >
              Paris
            </button>
            <button
              onClick={() => setSelectedLocation("HongKong")}
              className={`px-4 py-2 rounded-3xl text-sm cursor-pointer effect ${
                selectedLocation === "HongKong"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground/44 hover:bg-foreground/5"
              }`}
            >
              Hong Kong
            </button>
            <button
              onClick={() => setSelectedLocation("London")}
              className={`px-4 py-2 rounded-3xl text-sm cursor-pointer effect ${
                selectedLocation === "London"
                  ? "bg-primary text-white"
                  : "bg-white text-foreground/44 hover:bg-foreground/5"
              }`}
            >
              London
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 bg-background rounded-xl p-4">
            <div className="flex items-center justify-between md:justify-center gap-4 w-full">
              <div className="text-primary font-medium">
                فروشگاه <span>{currentLocation.name}</span>
              </div>
              <span className="text-foreground text-sm font-medium" dir="ltr">
                {currentLocation.phone}
              </span>
            </div>
            <div className="w-full border-b border-foreground/10"></div>
            <div className="flex items-center justify-between md:justify-center gap-4 w-full">
              <span className="text-foreground text-sm">
                {currentLocation.email}
              </span>
              <span className="text-foreground text-sm line-clamp-1">
                {currentLocation.address}
              </span>
            </div>
            <div className="w-full border-b border-foreground/10"></div>
            <div className="flex items-center justify-between md:justify-center gap-4 w-full">
              <div className="text-sm text-red-500 bg-red-500/10 rounded-xl p-2 text-center">
                {currentLocation.closedDays.map((item, idx) => (
                  <span key={idx} className="">
                    {item}
                    {idx !== currentLocation.closedDays.length - 1 && ","}
                  </span>
                ))}{" "}
                Closed
              </div>
              <div className="flex flex-col">
                {currentLocation.workingHours.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-foreground/66 text-sm text-left"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <Link
          href="#"
          className="relative rounded-2xl w-full lg:w-1/2 h-52 md:h-80 bg-red-200"
        >
          <Image
            src="/images/map.svg"
            alt="map"
            fill
            sizes="(min-width: 1024px) 100vw, 100vw"
            className="object-cover rounded-2xl"
          />
        </Link>
      </div>
    </section>
  );
}
