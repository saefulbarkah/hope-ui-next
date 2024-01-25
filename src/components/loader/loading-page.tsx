"use client";
import { useLayout } from "@/hooks/use-layout";
import { useLayoutStore } from "@/store/layout";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const LoadingPage = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [isRender] = useDebounce(loading, 500);
  const { setSidebarOpen } = useLayoutStore((state) => state);

  const { size } = useLayout();
  // resize by screen
  useEffect(() => {
    if (size === "MOBILE") {
      return setSidebarOpen(false);
    }
    return setSidebarOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isRender ? (
          <motion.div
            key="page-loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-white"
          >
            <div className="flex h-full w-full items-center justify-center">
              <Loader2 className="h-14 w-14 animate-spin text-primary" />
            </div>
          </motion.div>
        ) : (
          <div className="relative">{children}</div>
        )}
      </AnimatePresence>
    </div>
  );
};
