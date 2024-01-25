"use client";
import Image from "next/image";
import React from "react";

export default function HeaderPage() {
  return (
    <div className="relative h-[120px]">
      <div className="pointer-events-none absolute left-0 right-0 top-0 -z-50 lg:h-[180px] 2xl:h-[234px]">
        <Image
          alt="graphic"
          src={"/graphic-side.png"}
          fill
          priority={true}
          quality={100}
          className="h-full w-full"
        />
      </div>

      <div className="container relative pb-6 pt-9 text-white">
        <h3 className="text-2xl font-bold 2xl:text-4xl">TitlePage</h3>
        <p className="text-base">
          We are on a mission to help developers like you to build beautiful
          projects for free.
        </p>
      </div>
    </div>
  );
}
