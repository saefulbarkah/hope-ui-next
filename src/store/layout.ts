import { create } from "zustand";
export type DEVICE_TYPE = "MOBILE" | "DESKTOP";

type State = {
  sidebarOpen: boolean;
  screentype: DEVICE_TYPE;
};
type Action = {
  setSidebarOpen: (val: State["sidebarOpen"]) => void;
  toggleSidebar: () => void;
  setScreenType: (val: DEVICE_TYPE) => void;
};

export const useLayoutStore = create<State & Action>((set) => ({
  sidebarOpen: true,
  screentype: "DESKTOP",
  setScreenType: (val) => set({ screentype: val }),
  setSidebarOpen: (val) => set({ sidebarOpen: val }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
