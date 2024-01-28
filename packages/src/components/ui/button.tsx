import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const primaryVariant = {
  primary: "bg-primary text-white hover:bg-primary/90 active:bg-primary-light",
  "semi-primary": "bg-primary/20 text-primary",
  "outline-primary": "border border-primary text-primary hover:bg-primary/5",
};

const dangerVariant = {
  danger: "bg-danger text-white hover:bg-danger/90",
};

const darkVariant = {
  "outline-dark": "border border-dark bg-white hover:bg-dark/5 hover:text-dark",
};

const secondaryVariant = {
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
};

const ghostVariant = {
  ghost:
    "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 shadow-none",
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm ring-offset-white transition-colors disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 font-normal shadow-md",
  {
    variants: {
      variant: {
        ...primaryVariant,
        ...dangerVariant,
        ...darkVariant,
        ...secondaryVariant,
        ...ghostVariant,
        link: [
          "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        ],
      },
      size: {
        default: "py-2 px-6 text-base",
        lg: "py-2 px-6 text-[19px] leading-[175%]",
        sm: "px-4 py-1 text-xs",
        xs: "px-2 text-xs",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
