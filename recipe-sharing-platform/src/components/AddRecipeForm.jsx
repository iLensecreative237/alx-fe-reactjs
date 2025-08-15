// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Include at least 2 ingredients.";
    }
    if (!instructions.trim()) newErrors.instructions = "Instructions are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      summary: instructions.substring(0, 100) + "...",
      ingredients: ingredients.split("\n"),
      steps: instructions.split("\n"),
      image: "https://via.placeholder.com/150",
    };

    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = [...existingRecipes, newRecipe];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-6">
          📝 Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="E.g., Spaghetti Bolognese"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={4}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="List each ingredient on a new line"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows={6}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring ${
                errors.instructions ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="List each step on a new line"
            />
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}