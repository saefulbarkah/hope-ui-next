"use client";
import Image from "next/image";
import React from "react";

type Props = {
  withBanner?: boolean;
  title?: string;
  description?: string;
};

export default function HeaderPage({
  withBanner = true,
  description,
  title,
}: Props) {
  return (
    <div className="relative h-[120px]">
      {withBanner && (
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
      )}

      <div
        className={`container relative pb-6 pt-9 ${withBanner ? "text-white" : "text-black"}`}
      >
        <h3 className="text-2xl font-bold 2xl:text-4xl">{title}</h3>
        {description && <p className="text-base">{description}</p>}
      </div>
    </div>
  );
}
