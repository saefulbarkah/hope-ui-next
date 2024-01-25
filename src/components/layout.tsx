/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useLayout } from "@/hooks/use-layout";
import { useLayoutStore } from "@/store/layout";
import React, { PropsWithChildren, useEffect } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { LoadingPage } from "./loader/loading-page";

export const MainContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <main className={cn(`container`, className)} {...props}>
      {children}
    </main>
  );
};

export default function Layout({ children }: PropsWithChildren) {
  const { sidebarOpen, screentype } = useLayoutStore((state) => state);

  const layoutVariant: Variants = {
    open:
      screentype === "DESKTOP"
        ? {
            marginLeft: "257px",
          }
        : {
            marginLeft: 0,
          },
  };

  return (
    <LoadingPage>
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
        variants={layoutVariant}
        className={`mt-[76px]`}
      >
        {children}
      </motion.div>
    </LoadingPage>
  );
}
