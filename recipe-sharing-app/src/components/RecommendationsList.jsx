import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  // Select raw store data
  const recommendedIds = useRecipeStore((state) => state.recommendations);
  const recipes = useRecipeStore((state) => state.recipes);

  // Map IDs to recipe objects safely
  const recommendations = recommendedIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean); // remove undefined if recipe not found

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
