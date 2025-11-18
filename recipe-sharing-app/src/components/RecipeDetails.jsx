import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
