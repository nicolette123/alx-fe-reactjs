import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites ❤️</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
