"use client";

import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { theme } from "../../theme/index";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "rounded-full select-none px-2 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        ...theme.colors,
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface badge
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, children, ...props }: badge) => {
  return (
    <div className={cn(badgeVariants({ variant, className }))}>{children}</div>
  );
};
