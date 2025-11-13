import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
