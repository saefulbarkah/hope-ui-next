import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { theme } from "../../theme/index";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm ring-offset-white transition-colors disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 font-normal shadow-md",
  {
    variants: {
      variant: {
        ...theme.buttonTheme,
        link: [
          "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        ],
      },
      size: {
        badge: "px-2 py-1 text-xs rounded-full",
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
  withIcon?: React.ReactNode;
  as?: React.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withIcon, children, as, ...props }, ref) => {
    const Comp = as ? as : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {withIcon ? <i className="mr-1.5">{withIcon}</i> : null}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
