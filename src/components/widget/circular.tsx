import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { Variants, motion } from "framer-motion";

const circularVariants = cva("", {
  variants: {
    variant: {
      blue: "stroke-primary",
      red: "stroke-danger",
      warn: "stroke-warning",
      cyan: "stroke-info",
    },
  },
  defaultVariants: {
    variant: "blue",
  },
});

export type circularColor = VariantProps<typeof circularVariants>["variant"];

type props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof circularVariants> & {
    percentage: number;
    animation?: boolean;
  };

const MAX_CIRCLE_VALUE = 160;

const calculatePercentage = (percentage: number) => {
  const results = MAX_CIRCLE_VALUE * (1 - percentage / 100);
  return results;
};

export default function CircularWidget({
  variant,
  children,
  className,
  percentage = 0,
  animation = true,
}: props) {
  const animateVariant: Variants = {
    initial: {
      strokeDashoffset: calculatePercentage(0),
    },
    animate: {
      strokeDashoffset: calculatePercentage(percentage),
    },
  };

  return (
    <div>
      <svg
        width={65}
        height={65}
        className={cn("mr-2 -rotate-[95deg]", className)}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle
          cx="30"
          cy="30"
          r="25"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`160,160`}
          className={"stroke-black/10"}
        />
        <motion.circle
          initial={animation ? "initial" : ""}
          animate={animation ? "animate" : ""}
          variants={animateVariant}
          cx="30"
          cy="30"
          r="25"
          strokeWidth="3"
          strokeLinecap={"round"}
          fill="none"
          strokeDasharray={MAX_CIRCLE_VALUE}
          strokeDashoffset={
            animation ? undefined : calculatePercentage(percentage)
          }
          className={cn(circularVariants({ variant }))}
        />
      </svg>
      {children}
    </div>
  );
}
