import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id, onDelete }) => {
  return (
    <button onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;


