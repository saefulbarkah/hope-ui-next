import { useLayoutStore } from "@/store/layout";
import { useEffect } from "react";

export const useLayout = () => {
  const { screentype, setScreenType } = useLayoutStore((state) => state);

  const deviceChecking = () => {
    const width = window.innerWidth;
    if (width <= 1024) {
      return setScreenType("MOBILE");
    }
    setScreenType("DESKTOP");
  };

  useEffect(() => {
    window.addEventListener("resize", deviceChecking);
    return () => {
      window.removeEventListener("resize", deviceChecking);
    };
  });

  useEffect(() => {
    deviceChecking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { size: screentype };
};
