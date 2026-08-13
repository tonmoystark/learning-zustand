import { create } from "zustand";
import { products } from "../data/products";



export const useCart = create(() => ({
    products,
}))