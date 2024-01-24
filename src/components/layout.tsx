"use client";
import { useLayout } from "@/hooks/use-layout";
import { useLayoutStore } from "@/store/layout";
import React, { PropsWithChildren, useEffect } from "react";

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
  return <div>{children}</div>;
}
