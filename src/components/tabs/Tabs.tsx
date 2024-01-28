"use client";
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Tabs as Wrapper,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import {
  TabsContentProps,
  TabsListProps,
  TabsProps,
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
  type?: "underline" | "badge";
};

type ContextType = indicatorState;

const Context = createContext<ContextType | null>(null);
const Provider = Context.Provider;

// indicator variant
const indicatorVariants = cva("absolute", {
  variants: {
    variant: {
      primary: "bg-primary",
    },
    type: {
      underline: "bottom-0 h-[3px] w-full rounded-full",
      badge: "inset-0 h-full rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    type: "underline",
  },
});

type store = React.PropsWithChildren & {
  type?: indicatorState["type"];
};
const Store = ({ children, type = "underline" }: store) => {
  const [indicator, setIndicator] = useState<indicatorState["indicator"]>({
    left: 0,
    width: 0,
  });

  return (
    <Provider value={{ indicator, setIndicator, type }}>{children}</Provider>
  );
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
    <TabsList
      className={cn(
        `relative w-full justify-start bg-transparent p-0`,
        className,
      )}
      {...props}
    >
      <div className="relative flex h-full w-full items-center justify-start">
        <div className="relative z-50">{children}</div>
        <Indicator type={"underline"} variant={indicatorColor} />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-[1px] bg-black opacity-10 dark:bg-white" />
    </TabsList>
  );
};

interface indicatorProps extends VariantProps<typeof indicatorVariants> {}
const Indicator = ({ variant, type = "underline" }: indicatorProps) => {
  const { indicator, type: typeTab } = useContext(Context) as ContextType;

  return (
    <motion.div
      initial={{ left: 0, width: 0 }}
      animate={{ left: indicator.left, width: indicator.width }}
      transition={{ bounce: 0, type: "spring", duration: 0.3 }}
      className={cn(
        indicatorVariants({ variant, type: typeTab as typeof type }),
      )}
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
  const { setIndicator, type } = useContext(Context) as ContextType;
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
        onMouseDown={() => {
          setChange((state) => !state);
        }}
        ref={triggerRef}
        className={cn(
          `border-none capitalize shadow-none outline-none data-[state=active]:bg-transparent ${type === "badge" && "data-[state=active]:text-white"}`,
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

interface Ttabs extends PropsWithChildren, TabsProps {
  type?: indicatorState["type"];
}
const Tabs = ({ children, type = "underline", ...props }: Ttabs) => {
  return (
    <Store type={type}>
      <Wrapper {...props}>{children}</Wrapper>
    </Store>
  );
};

Tabs.Content = Content;
Tabs.Item = Item;
Tabs.List = List;

export { Tabs };
