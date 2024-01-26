"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  TabsContentProps,
  TabsListProps,
  TabsTriggerProps,
} from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";

// state
type indicatorState = {
  indicator: {
    left: number;
    width: number;
  };
  setIndicator: Dispatch<SetStateAction<{ left: number; width: number }>>;
};

type ContextType = indicatorState;

const Context = createContext<ContextType | null>(null);
const Provider = Context.Provider;

// indicator variant
const indicatorVariants = cva(
  "absolute bottom-0 h-[3px] w-full rounded-full bg-black",
  {
    variants: {
      variant: {
        primary: "bg-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const Store = ({ children }: React.PropsWithChildren) => {
  const [indicator, setIndicator] = useState<indicatorState["indicator"]>({
    left: 0,
    width: 0,
  });

  return <Provider value={{ indicator, setIndicator }}>{children}</Provider>;
};

type INDICATOR_COLOR = VariantProps<typeof indicatorVariants>["variant"];

interface listProps extends TabsListProps {
  indicatorColor?: INDICATOR_COLOR;
}
const List = ({
  className,
  children,
  indicatorColor = "primary",
  ...props
}: listProps) => {
  return (
    <Store>
      <TabsList
        className={cn(
          `relative w-full justify-start bg-transparent p-0`,
          className,
        )}
      >
        <div className="relative flex h-full w-full items-center justify-start">
          {children}
          <Indicator variant={indicatorColor} />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 h-[1px] bg-black opacity-10 dark:bg-white" />
      </TabsList>
    </Store>
  );
};

interface indicatorProps extends VariantProps<typeof indicatorVariants> {}
const Indicator = ({ variant }: indicatorProps) => {
  const { indicator } = useContext(Context) as ContextType;

  return (
    <motion.div
      initial={{ left: 0, width: 0 }}
      animate={{ left: indicator.left, width: indicator.width }}
      transition={{ bounce: 0, type: "spring", duration: 0.3 }}
      className={cn(indicatorVariants({ variant }))}
    />
  );
};

interface itemProps extends TabsTriggerProps {
  label: string;
  value: string;
}
const Item = ({
  className,
  children,
  label,
  value,
  onClick,
  ...props
}: itemProps) => {
  const [isChange, setChange] = useState(false);
  const { setIndicator } = useContext(Context) as ContextType;
  const triggerRef = useRef<null | HTMLButtonElement>(null);

  useEffect(() => {
    const currentTab = triggerRef?.current;
    const isActive =
      triggerRef?.current?.getAttribute("data-state") === "active";

    if (isActive && currentTab) {
      setIndicator({
        left: currentTab?.offsetLeft as number,
        width: currentTab?.clientWidth as number,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChange]);

  return (
    <>
      <TabsTrigger
        ref={triggerRef}
        className={cn(
          `border-none capitalize shadow-none outline-none data-[state=active]:bg-transparent`,
          className,
        )}
        value={value}
        onClick={() => {
          setChange((state) => !state);
          onClick;
        }}
        {...props}
      >
        {label}
      </TabsTrigger>
    </>
  );
};

interface ContentProps extends TabsContentProps {}
const Content = ({ value, className, children, ...props }: ContentProps) => {
  return (
    <TabsContent className={cn("mt-5", className)} value={value} {...props}>
      {children}
    </TabsContent>
  );
};

export const TabUnderLine = {
  List,
  Tabs,
  Item,
  Content,
};
