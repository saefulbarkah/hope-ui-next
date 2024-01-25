import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

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
  VariantProps<typeof circularVariants> & { percentage: number };

export default function CircularWidget({
  variant,
  children,
  percentage = 0,
}: props) {
  const MAX_CIRCLE_VALUE = 160;

  const calculatePercentage = (percentage: number) => {
    // Calculate the dasharray value based on the normalized percentage
    const results = (percentage / 100) * MAX_CIRCLE_VALUE;
    return results;
  };

  return (
    <div>
      <svg
        width={65}
        height={65}
        className="mr-2 -rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle
          cx="30"
          cy="30"
          r="25"
          stroke-width="1"
          fill="none"
          strokeLinecap="round"
          stroke-dasharray={`160,160`}
          className={"stroke-black/10"}
        />
        <circle
          cx="30"
          cy="30"
          r="25"
          stroke-width="3"
          fill="none"
          strokeLinecap="round"
          stroke-dasharray={`${calculatePercentage(percentage)},${MAX_CIRCLE_VALUE}`}
          className={cn(circularVariants({ variant }))}
        />
      </svg>
      {children}
    </div>
  );
}
