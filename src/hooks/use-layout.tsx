import { useEffect, useState } from "react";

type DEVICES = "MOBILE" | "DESKTOP";

export const useLayout = () => {
  const [size, setSize] = useState<DEVICES>("DESKTOP");
  const deviceChecking = () => {
    const width = window.innerWidth;
    if (width <= 1024) {
      return setSize("MOBILE");
    }
    setSize("DESKTOP");
  };

  useEffect(() => {
    window.addEventListener("resize", deviceChecking);
    return () => {
      window.removeEventListener("resize", deviceChecking);
    };
  });

  return { size };
};
