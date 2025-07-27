import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  // ✅ Updated to match test expectations
  updateRecipe: (id, updatedData) => {
    const updatedRecipes = get().recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedData } : recipe
    );
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  // ✅ Matches test expectation already
  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter(recipe => recipe.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  }
}));