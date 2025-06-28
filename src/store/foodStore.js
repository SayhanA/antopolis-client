import { create } from "zustand";

export const useFoodStore = create((set) => ({
  categories: [],
  foods: [],
  loadingFoods: false,

  setCategories: (categories) => set({ categories }),
  setFoods: (foods) => set({ foods }),

  fetchCategories: async () => {
    try {
      const res = await fetch(
        "https://antopolis-backend-du9t.onrender.com/api/categories"
      );
      const data = await res.json();
      set({ categories: data });
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  },

  fetchFoods: async (category = "All") => {
    set({ loadingFoods: true });
    try {
      let url = "https://antopolis-backend-du9t.onrender.com/api/foods";
      if (category !== "All")
        url += `?category=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      const data = await res.json();
      set({ foods: data });
    } catch (err) {
      console.error("Error fetching foods:", err);
    } finally {
      set({ loadingFoods: false });
    }
  },
}));
