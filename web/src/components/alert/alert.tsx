import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { X } from "lucide-react";

// variant
const solidVariant = {
  primary: "bg-primary text-white",
  success: "bg-success text-white",
  danger: "bg-danger text-white",
  warning: "bg-warning text-white",
  info: "bg-info text-white",
};

const semiVariant = {
  "semi-primary":
    "bg-primary-light/10 border-[2px] border-primary text-primary",
  "semi-success":
    "bg-success-light/10 border-[2px] border-success text-success",
  "semi-danger": "bg-danger-light/10 border-[2px] border-danger text-danger",
  "semi-warning":
    "bg-warning-light/10 border-[2px] border-warning text-warning",
  "semi-info": "bg-info-light/10 border-[2px] border-info text-info",
};

// single obj variants
const variants = { ...solidVariant, ...semiVariant };

const alertVariants = cva("p-3 rounded-[3px] flex items-center", {
  variants: {
    variant: { ...variants },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface Alert
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: JSX.Element;
  withClose?: boolean;
}

const closeAnimateAlert: Variants = {
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
  },
};

export const Alert = ({
  className,
  variant,
  children,
  icon,
  withClose,
  ...props
}: Alert) => {
  const [closeAlert, setCloseAlert] = useState(false);

  return (
    <AnimatePresence>
      {!closeAlert && (
        <motion.div
          key={"alert-motion"}
          initial={"open"}
          animate={"open"}
          exit={"close"}
          variants={closeAnimateAlert}
        >
          <div className={cn(alertVariants({ className, variant }))} {...props}>
            {icon && <i className="mr-2">{icon}</i>}
            {children}
            {withClose ? (
              <button className="ml-auto" onClick={() => setCloseAlert(true)}>
                <X />
              </button>
            ) : null}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
