import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

    
      <p>Recipe ID: {recipe.id}</p>

      <Link to={`/recipes/${recipe.id}/edit`}>Edit Recipe</Link>
      <br /><br />

      <DeleteRecipeButton id={recipe.id} />

      <br /><br />
      <Link to="/">Back to all recipes</Link>
    </div>
  );
};

export default RecipeDetails;
