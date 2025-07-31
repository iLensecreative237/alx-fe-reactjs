import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description.substring(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;