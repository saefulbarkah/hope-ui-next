"use client";
import Image from "next/image";
import React from "react";

export default function HeaderPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 right-0 top-0 -z-50">
        <div className="relative h-[150px] w-full">
          <Image
            alt="graphic"
            src={"/graphic-side.png"}
            fill
            className="bg-cover object-cover"
            unoptimized
          />
        </div>
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
