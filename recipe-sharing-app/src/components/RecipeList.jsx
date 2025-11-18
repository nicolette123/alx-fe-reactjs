import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  // 🔒 Prevent the "undefined.map" error
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div>
      <h2>All Recipes</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <Link to={`/recipe/${recipe.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
