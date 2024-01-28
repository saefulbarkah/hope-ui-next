/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useLayoutStore } from "@/store/layout";
import React, { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { LoadingPage } from "./loader/loading-page";
import { useLayout } from "@/hooks/use-layout";

export const MainContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className={cn(`container`, className)} {...props}>
      {children}
    </main>
  );
};

export default function Layout({ children }: PropsWithChildren) {
  const { sidebarOpen, screentype } = useLayoutStore((state) => state);
  const {} = useLayout();

  return (
    <div>
      <Navbar />
      <Sidebar />
      <motion.div
        initial={false}
        animate={sidebarOpen ? "open" : { marginLeft: 0 }}
        transition={{
          bounce: 0,
          type: "spring",
          duration: 0.5,
        }}
        variants={{
          open: {
            marginLeft: "var(--open-sidebar)",
          },
          closed: {
            marginLeft: "var(--close-sidebar)",
          },
        }}
        className={`mt-[76px] [--close-sidebar:var(--w-sidebar-mobile)] [--open-sidebar:0px] lg:[--close-sidebar:0px] lg:[--open-sidebar:var(--w-sidebar-desktop)]`}
      >
        {children}
      </motion.div>
    </div>
  );
}
