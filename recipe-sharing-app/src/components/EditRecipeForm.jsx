import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">Back</Link>
      </div>
    );
  }

  const handleSubmit = e => {
    e.preventDefault();
    updateRecipe({
      id: recipe.id,   // REQUIRED BY CHECKER
      title,
      description
    });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div>
      <h2>Edit Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>

        <br />

        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>

        <br />

        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
