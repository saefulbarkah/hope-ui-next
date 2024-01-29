import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const primaryVariant = {
  primary:
    "bg-primary text-white hover:bg-primary/90 active:bg-primary-light shadow-md shadow-primary/60",
  "semi-primary":
    "bg-primary/20 text-primary font-medium shadow-md shadow-primary/20",
  "outline-primary": "border border-primary text-primary hover:bg-primary/5",
};

const dangerVariant = {
  danger: "bg-danger text-white hover:bg-danger/90 shadow-md shadow-danger/60",
  "outline-danger": "hover:bg-danger/5 border border-danger text-danger",
  "semi-danger":
    "bg-danger/20 text-danger font-medium shadow-md shadow-danger/20",
};

const warningVariant = {
  warning:
    "bg-warning hover:bg-warning/90 active:bg-warning/70 text-white shadow-md shadow-warning/60",
  "outline-warning": "hover:bg-warning/5 border border-warning text-warning",
  "semi-warning":
    "bg-warning/20 text-warning font-medium shadow-md shadow-warning/20",
};

const infoVariant = {
  info: "bg-info hover:bg-info/90 active:bg-info/70 text-white shadow-md shadow-info/60",
  "outline-info": "hover:bg-info/5 border border-info text-info",
  "semi-info": "bg-info/20 text-info font-medium shadow-md shadow-info/20",
};

const darkVariant = {
  dark: "bg-dark hover:bg-dark/90 active:bg-dark/70 text-white shadow-md shadow-dark/60",
  "outline-dark": "hover:bg-dark/5 border border-dark text-dark",
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
        ...infoVariant,
        ...darkVariant,
        ...secondaryVariant,
        ...ghostVariant,
        ...warningVariant,
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
