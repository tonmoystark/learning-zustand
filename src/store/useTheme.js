import { create } from "zustand";

export const useTheme = create((set) => ({
  theme: "light",

  handleTheme: () =>
    set((state) => ({
      theme:
        state.theme === "light"
          ? (state.theme = "dark")
          : (state.theme = "light"),
    })),
}));
