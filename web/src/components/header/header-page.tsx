"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

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
    <div className="relative">
      {withBanner && (
        <div className="pointer-events-none absolute left-0 right-0 top-0 -z-50 hidden h-[150px] w-full lg:inline lg:h-[180px] 2xl:h-[234px]">
          <Image
            alt="graphic"
            src={"/graphic-side.png"}
            fill
            sizes="100%"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div
        className={cn(
          "container relative pb-6 pt-9",
          withBanner ? "text-black lg:text-white" : "text-black lg:text-white",
        )}
      >
        <h3 className="text-2xl font-bold 2xl:text-4xl">{title}</h3>
        {description && <p className="text-base">{description}</p>}
      </div>
    </div>
  );
}
