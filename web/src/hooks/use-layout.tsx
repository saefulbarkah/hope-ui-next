import { useLayoutStore } from "@/store/layout";
import { useEffect } from "react";

export const useLayout = () => {
  const { screentype, setScreenType, setSidebarOpen } = useLayoutStore(
    (state) => state,
  );

  const deviceChecking = () => {
    const width = window.innerWidth;
    if (width > 1024) {
      setSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", deviceChecking);
    return () => {
      window.removeEventListener("resize", deviceChecking);
    };
  });

  return { size: screentype };
};
