import { useState, useEffect } from "react";
import recipeData from "../data.json"; // Direct import from src

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">
            🍳 Recipe Sharing Platform
          </h1>
          <p className="mt-2 text-gray-600 text-center ">
            Discover, cook, and share your favorite recipes.
          </p>
        </div>
      </header>

      {/* Recipe Grid */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
        <div
         key={recipe.id}
         className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center"
            >
              {/* Image */}
              <img
                   src={recipe.image}
                   alt={recipe.title}
                   className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-gray-200"
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {recipe.title}
                  </h2>

                  {/* Summary or Short Description */}
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {recipe.summary}
                  </p>
                </div>

                {/* Link Button */}
                <a
                  href={`/recipe/${recipe.id}`}
                  className="mt-4 inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
