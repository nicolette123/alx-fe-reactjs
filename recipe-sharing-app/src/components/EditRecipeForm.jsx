import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditRecipeForm = ({ recipes, onEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === parseInt(id));

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(parseInt(id), { title, description });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
