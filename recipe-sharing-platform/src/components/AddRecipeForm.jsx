import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split("\n").length < 2)
      newErrors.ingredients = "Include at least 2 ingredients.";

    if (!instructions.trim())
      newErrors.instructions = "Instructions are required.";
    else if (instructions.split("\n").length < 2)
      newErrors.instructions = "Include at least 2 preparation steps.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n"),
      instructions: instructions.split("\n"),
    };

    console.log("Recipe submitted:", newRecipe);

    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-10 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea
            className="w-full border border-gray-300 p-3 rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Write each ingredient on a new line"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 p-3 rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Write each step on a new line"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-600 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
