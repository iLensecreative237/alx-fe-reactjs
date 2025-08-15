// src/components/RecipeDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipeData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-gray-200"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📝 Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">👨‍🍳 Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
