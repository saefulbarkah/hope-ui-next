"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";

const progressVariant = cva(
  "relative h-4 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",
  {
    variants: {
      variant: {
        default: "bg-slate-100",
        primary: "bg-primary/20",
        danger: "bg-danger/20",
        warning: "bg-warning/20",
        info: "bg-info/20",
      },
      size: {
        sm: "h-2",
      },
      rounded: {
        default: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      rounded: "default",
    },
  },
);

const progressIndicatorVariant = cva("h-full w-full flex-1", {
  variants: {
    variant: {
      default: "bg-slate-800",
      primary: "bg-primary",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ProgressVariantType = VariantProps<typeof progressVariant>;

interface progressType
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    ProgressVariantType {
  noAnimation?: boolean;
}

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  progressType
>(
  (
    { className, value, variant, size, noAnimation, rounded, ...props },
    ref,
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(progressVariant({ className, variant, size, rounded }))}
      {...props}
    >
      <ProgressPrimitive.Indicator asChild>
        <motion.div
          initial={noAnimation ? "noAnimation" : "initial"}
          animate={{ x: `-${Math.round(100 - (value as number))}%` }}
          variants={{
            noAnimation: {
              x: `-${Math.round(100 - (value as number))}%`,
            },
            initial: {
              x: `-${Math.round(100 - 0)}%`,
            },
          }}
          className={cn(progressIndicatorVariant({ variant }))}
          transition={{ type: "spring", bounce: 0 }}
        />
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  ),
);
ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export { ProgressBar };
