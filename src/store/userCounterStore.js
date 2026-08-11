import { create } from "zustand";


export const useCounterStore = create((set) => ({
    counter: 0,
    increase: () => set(state => ({counter: state.counter + 1})),
    decrease: () => set(state => ({counter: state.counter - 1})),
    reset: () => set({counter:0})
}))