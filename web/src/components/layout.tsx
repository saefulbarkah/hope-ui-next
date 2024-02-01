/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useLayoutStore } from "@/store/layout";
import React, { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLayout } from "@/hooks/use-layout";

export const MainContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className={cn(`container pb-5`, className)} {...props}>
      {children}
    </main>
  );
};

export default function Layout({ children }: PropsWithChildren) {
  const { sidebarOpen } = useLayoutStore((state) => state);
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
        className={`mt-[76px] will-change-transform [--close-sidebar:var(--w-sidebar-mobile)] [--open-sidebar:0px] lg:[--close-sidebar:0px] lg:[--open-sidebar:var(--w-sidebar-desktop)]`}
      >
        {children}
      </motion.div>
    </div>
  );
}
