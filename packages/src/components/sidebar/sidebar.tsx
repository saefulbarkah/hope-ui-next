"use client";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Separator } from "../ui/separator";
import { Button, ButtonProps } from "../ui/button";
import { Dot, Layers2, LayoutDashboard, OptionIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useLayoutStore } from "@/store/layout";
import { AnimatePresence, Variants, motion } from "framer-motion";

type menu = {
  pageTitle: string;
  items: {
    label: string;
    icon: React.ReactNode;
    url: LinkProps["href"] | null;
    as?: string;
    prefix?: string;
    child?: {
      label: string;
      icon?: React.ReactNode;
      url: string | URL;
    }[];
  }[];
};

const menus: menu[] = [
  {
    pageTitle: "Home",
    items: [
      {
        label: "Dashboard",
        icon: <LayoutDashboard />,
        url: "/ui/dashboard",
      },
      {
        label: "Menu Style",
        icon: <OptionIcon />,
        url: null,
        as: "menu-style",
        child: [
          {
            label: "Example style 1",
            url: "/#example-1",
          },
          {
            label: "Example style 2",
            url: "/#example-2",
          },
        ],
      },
    ],
  },
  {
    pageTitle: "Home",
    items: [
      {
        label: "Components",
        icon: <Layers2 />,
        url: null,
        as: "example",
        prefix: "/ui/components",
        child: [
          {
            label: "Button",
            url: "/button",
          },
          {
            label: "Tabs",
            url: "/tabs",
          },
        ],
      },
    ],
  },
];

export const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useLayoutStore((state) => state);

  const sidebarVariant: Variants = {
    open: {
      x: "var(--sidebar-open)",
    },
    close: {
      x: "var(--sidebar-closed)",
    },
  };

  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={sidebarOpen ? "open" : "close"}
        transition={{
          bounce: 0,
          type: "spring",
          duration: 0.5,
        }}
        variants={sidebarVariant}
        className={`w-sidebar-mobile lg:w-sidebar-desktop fixed bottom-0 left-0 top-0 z-[60] bg-white ease-in-out [--sidebar-closed:0px] [--sidebar-open:-100%] lg:z-10 lg:[--sidebar-closed:-100%] lg:[--sidebar-open:-0px]`}
      >
        <div className="relative flex items-center justify-center gap-2 px-8 pb-4 pt-6">
          <Logo />
          <h2 className="text-3xl">Hope UI</h2>
        </div>
        <Separator />
        <div className="mt-5 px-2">
          {menus.map((item, i) => {
            return (
              <div key={i} className="mt-2">
                <MenuTitle>Home</MenuTitle>
                {item.items.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.child ? (
                        <MenuItemChild
                          prefix={item.prefix}
                          as={item.as}
                          icon={item.icon}
                          label={item.label}
                          data={item.child}
                        />
                      ) : (
                        <MenuItem
                          href={`${item.url}`}
                          label="Dashboard"
                          icon={<LayoutDashboard />}
                        />
                      )}
                      <div className="px-5">
                        <Separator />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={false}
        key={"sidebar-outsidde"}
        animate={sidebarOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: "var(--sidebar-open-opacity)",
          },
          closed: {
            opacity: "var(--sidebar-closed-opacity)",
          },
        }}
        transition={{ bounce: 0, type: "spring", duration: 0.5 }}
        className={cn(
          "fixed inset-0 z-[55] block cursor-pointer bg-black/20 backdrop-blur-sm [--sidebar-closed-opacity:100%] [--sidebar-open-opacity:0%] lg:hidden",
          `${sidebarOpen ? "pointer-events-none" : "pointer-events-auto"}`,
        )}
        onClick={() => toggleSidebar()}
      />
    </div>
  );
};

const MenuTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className="pb-2 pl-5 pt-4">
      <p className="text-sm font-semibold text-[#ADB5BD]">{children}</p>
    </div>
  );
};

type menuChildProps = {
  as?: string;
  prefix?: string;
  data: {
    label: string;
    icon?: React.ReactNode;
    url: string | URL;
  }[];
  label: string;
  icon?: React.ReactNode;
};
const MenuItemChild = ({ data, icon, label, prefix, as }: menuChildProps) => {
  const [isCollapsed, setCollapsed] = useState([""]);
  const router = usePathname();

  useEffect(() => {
    data.filter((item) => {
      if (item.url === router) {
        setCollapsed([as as string]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Accordion type="multiple" value={isCollapsed} onValueChange={setCollapsed}>
      <AccordionItem value={as as string} className="border-0">
        <AccordionTrigger className="h-0 rounded px-6 py-6 no-underline hover:bg-light/10 hover:no-underline data-[state=closed]:hover:text-black">
          <div className="flex items-center">
            <i className="mr-2">{icon}</i>
            <p className="text-base">{label}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col items-center">
            {data?.map((item, i) => (
              <div className="w-full" key={i}>
                <MenuItem
                  className="pl-10"
                  href={`${prefix}${item.url}`}
                  label={item.label}
                  icon={<Dot />}
                />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

type menuProps = LinkProps &
  React.HTMLAttributes<HTMLAnchorElement> & {
    icon?: React.ReactNode;
    label: string;
  };
const MenuItem = ({
  children,
  href,
  icon,
  label,
  className,
  ...props
}: menuProps) => {
  const router = usePathname();
  return (
    <Link href={href} {...props}>
      <Button
        size={"default"}
        variant={router === href ? "primary" : "ghost"}
        className={cn(
          `flex w-full items-center justify-start py-2.5 text-start capitalize ${router === href ? "text-white" : "text-[#8A92A6]"}`,
          className,
        )}
      >
        <i className="mr-2">{icon}</i>
        {label}
        {children}
      </Button>
    </Link>
  );
};

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <rect
        x="-0.757812"
        y="19.2422"
        width="28"
        height="4"
        rx="2"
        transform="rotate(-45 -0.757812 19.2422)"
        fill="#3A57E8"
      />
      <rect
        x="7.72656"
        y="27.7266"
        width="28"
        height="4"
        rx="2"
        transform="rotate(-45 7.72656 27.7266)"
        fill="#3A57E8"
      />
      <rect
        x="10.5352"
        y="16.3945"
        width="16"
        height="4"
        rx="2"
        transform="rotate(45 10.5352 16.3945)"
        fill="#3A57E8"
      />
      <rect
        x="10.5566"
        y="-0.554688"
        width="28"
        height="4"
        rx="2"
        transform="rotate(45 10.5566 -0.554688)"
        fill="#3A57E8"
      />
    </svg>
  );
};
