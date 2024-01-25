"use client";
import { useLayout } from "@/hooks/use-layout";
import { useLayoutStore } from "@/store/layout";
import React, { PropsWithChildren, useEffect } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

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
        className={`transition-[margin] motion-reduce:transition-none ${layoutState.sidebarOpen ? "ml-[278px]" : "ml-10"} mr-10 mt-24`}
      >
        {children}
      </div>
    </div>
  );
}
