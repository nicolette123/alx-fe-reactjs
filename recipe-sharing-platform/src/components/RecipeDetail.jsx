import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-20 text-lg">Loading recipe...</p>;
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:underline text-lg"
      >
        ← Back to Recipes
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      {/* Ingredients Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {recipe.ingredients?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal ml-6 text-gray-700 space-y-2">
          {recipe.steps?.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
