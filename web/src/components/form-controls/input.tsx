"use client";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";

const inputVariants = cva("", {
  variants: {
    sizes: {
      default: "h-10 text-sm",
      lg: "h-12 text-md",
      md: "h-8 text-sm",
      sm: "h-6 text-xs",
    },
  },
  defaultVariants: {
    sizes: "default",
  },
});

export interface InputProps
  extends React.ComponentPropsWithRef<"input">,
    VariantProps<typeof inputVariants> {
  Icon?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, sizes, Icon, placeholder, children, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            `place peer flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300`,
            inputVariants({ className, sizes }),
            `${Icon && "pl-10"}`,
            `placeholder-transparent`,
          )}
          ref={ref}
          {...props}
        />
        {placeholder && (
          <label
            className={cn(
              `pointer-events-none invisible absolute inset-y-0 flex items-center text-gray-500 placeholder-shown:visible ${Icon ? "left-10" : "left-3"}`,
              inputVariants({ sizes }),
            )}
          >
            {placeholder}
          </label>
        )}
        {Icon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-black transition peer-placeholder-shown:text-gray-500 peer-focus:text-black">
            {Icon}
          </div>
        )}
        {children}
      </div>
    );
  },
);
Input.displayName = "Input";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [isShow, setShow] = React.useState(false);

    return (
      <>
        <Input
          type={isShow ? "text" : "password"}
          className={cn(`pr-4`, className)}
          ref={ref}
          {...props}
        >
          <div className="absolute inset-y-0 right-4 flex items-center">
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => {
                return setShow((state) => !state);
              }}
            >
              {isShow ? (
                <EyeOff className="h-6 w-6" />
              ) : (
                <Eye className="h-6 w-6" />
              )}
            </Button>
          </div>
        </Input>
      </>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { Input, PasswordInput };
