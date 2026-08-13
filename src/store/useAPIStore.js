import { create } from "zustand";


export const useAPIStore = create((set) => ({
    posts: [],
    error: null,
    loading: false,

    fetchData: async () => {
        set({error: null, loading:true})
        try {
            const res = (await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"))
            const URLData = await res.json()
            set({posts: URLData, loading: false})
        } catch (error) {
            set({error: "failed to load data", loading:false})
        }
    }
}))