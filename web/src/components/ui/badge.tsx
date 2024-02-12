"use client";

import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { theme } from "../../theme/index";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "select-none px-2 py-1 text-xs font-medium inline-flex items-center",
  {
    variants: {
      variant: {
        ...theme.colors,
      },
      rounded: {
        full: "rounded-full",
        sm: "rounded",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      rounded: "full",
    },
  },
);

interface badge<T extends React.ElementType = "div">
  extends React.HTMLAttributes<T>,
    VariantProps<typeof badgeVariants> {
  as?: React.ElementType;
}

export const Badge = ({
  className,
  variant,
  children,
  as,
  rounded,
  ...props
}: badge) => {
  const Comp = as ? as : "div";
  return (
    <Comp
      className={cn(badgeVariants({ variant, className, rounded }))}
      {...props}
    >
      {children}
    </Comp>
  );
};
