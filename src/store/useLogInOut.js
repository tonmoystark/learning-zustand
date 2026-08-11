import { create } from "zustand";

export const useLogInOut = create((set) => ({
  name: "example",
  email: "example@email.co",
  isLoggedIn: false,


  logIn: (name, email) => set({
    name,
    email,
    isLoggedIn: true
  }),

  logOut: () => set({
    name: 'example',
    email: 'example@email.co',
    isLoggedIn: false
  })
}));
