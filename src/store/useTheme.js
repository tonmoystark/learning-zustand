import { create } from "zustand";
import { persist } from "zustand/middleware";

// export const useTheme = create((set) => ({
//   theme: "light",

//   handleTheme: () =>
//     set((state) => ({
//       theme:
//         state.theme === "light"
//           ? (state.theme = "dark")
//           : (state.theme = "light"),
//     })),
// }));

//learning persist

export const useTheme = create(
    persist((set) => ({
        theme: "light",

        handleTheme: () => set(state => ({
            theme: state.theme === "light" ? "dark" : "light"
        }))
    }))
)