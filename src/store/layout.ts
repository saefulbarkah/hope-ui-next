import { create } from "zustand";

type State = {
  sidebarOpen: boolean;
};
type Action = {
  setSidebarOpen: (val: State["sidebarOpen"]) => void;
  toggleSidebar: () => void;
};

export const useLayoutStore = create<State & Action>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (val) => set({ sidebarOpen: val }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
