"use client";
import { useLayout } from "@/hooks/use-layout";
import { useLayoutStore } from "@/store/layout";
import React, { PropsWithChildren, useEffect } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

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
  const layoutState = useLayoutStore((state) => state);
  const { size } = useLayout();

  // resize by screen
  useEffect(() => {
    if (size === "MOBILE") {
      return layoutState.setSidebarOpen(false);
    }
    return layoutState.setSidebarOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div
        className={`transition-[margin] motion-reduce:transition-none ${layoutState.sidebarOpen && "ml-[257px]"} mt-[76px]`}
      >
        {children}
      </div>
    </div>
  );
}
