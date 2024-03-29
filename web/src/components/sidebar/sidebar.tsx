/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Dot } from "lucide-react";
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
import { routeMenus } from "@/config/route";

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useLayoutStore((state) => state);
  const [isCollapsed, setCollapsed] = useState("");
  const router = usePathname();

  const sidebarVariant: Variants = {
    open: {
      x: "var(--sidebar-open)",
    },
    close: {
      x: "var(--sidebar-closed)",
    },
  };

  useEffect(() => {
    routeMenus.flatMap((menu) =>
      menu.items
        .filter((item) => (item.child ? item.child : undefined))
        .flatMap((item) =>
          item.child
            ? item.child?.map((child) => {
                if (`${item.prefix}${child.url}` === router) {
                  return setCollapsed(`example`);
                }
              })
            : null,
        ),
    );
  }, []);

  return (
    <div className="relative px-5">
      <motion.div
        key={"sidebar-layout"}
        initial={sidebarOpen ? "open" : "close"}
        animate={sidebarOpen ? "open" : "close"}
        transition={{
          bounce: 0,
          type: "spring",
          duration: 0.5,
        }}
        variants={sidebarVariant}
        className={`sidebar-scrollbar fixed bottom-0 left-0 top-0 z-[60] h-screen w-sidebar-mobile transform-gpu overflow-auto overflow-y-scroll bg-white will-change-transform [--sidebar-closed:0px] [--sidebar-open:-100%] lg:z-10 lg:w-sidebar-desktop lg:[--sidebar-closed:-100%] lg:[--sidebar-open:-0px]`}
      >
        <div className="relative flex items-center justify-center gap-2 pb-4 pt-6">
          <Logo />
          <h2 className="text-3xl">Hope UI</h2>
        </div>
        <Separator />
        <div className="mt-5 px-2">
          {routeMenus.map((menu, menuIndex) => (
            <div key={menuIndex} className="mt-2">
              <MenuTitle>{menu.pageTitle}</MenuTitle>
              <Accordion
                type="single"
                collapsible
                value={isCollapsed}
                defaultValue={isCollapsed}
                onValueChange={setCollapsed}
              >
                {menu.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <>
                      {!item.child && (
                        <MenuItem
                          href={item.url ? `${item.url}` : "#"}
                          label={item.label}
                          icon={item.icon}
                        />
                      )}
                      {item.child && (
                        <MenuItemChild
                          prefix={item.prefix}
                          as={item.as}
                          icon={item.icon}
                          label={item.label}
                          data={item.child}
                        />
                      )}
                    </>
                  </React.Fragment>
                ))}
              </Accordion>
              <div className="px-5">
                <Separator />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {!sidebarOpen && (
          <motion.div
            initial={"closed"}
            key={"sidebar-outsidde"}
            animate={"open"}
            exit={"closed"}
            variants={{
              open: {
                opacity: "var(--sidebar-open-opacity)",
                pointerEvents: "auto",
              },
              closed: {
                opacity: "var(--sidebar-closed-opacity)",
                pointerEvents: "none",
              },
            }}
            transition={{ type: "spring", duration: 0.2 }}
            className={cn(
              "fixed inset-0 z-[55] block cursor-pointer bg-black/60 [--sidebar-closed-opacity:0%] [--sidebar-open-opacity:100%] lg:hidden",
            )}
            onClick={() => {
              // this mean closed on mobile
              setSidebarOpen(true);
            }}
          />
        )}
      </AnimatePresence>
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
  return (
    <>
      <AccordionItem
        value={as as string}
        className="border-0 text-gray-500 data-[state=open]:text-black"
      >
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
    </>
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
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);
  return (
    <Link href={href} {...props}>
      <Button
        size={"default"}
        variant={router === href ? "primary" : "ghost"}
        className={cn(
          `flex w-full items-center justify-start px-6 py-2.5 text-start capitalize shadow-none motion-reduce:transition-none ${router === href ? "text-white" : "text-gray-500"}`,
          className,
        )}
        onClick={() => {
          if (window.innerWidth < 1024) {
            toggleSidebar();
          }
        }}
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
