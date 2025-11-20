// src/components/RecipeDetails.jsx
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId))
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate()

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    )
  }

  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(recipeId)
      navigate('/')
    }
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipeId}/edit`} style={{ marginRight: 8 }}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/">Back to Recipes</Link>
      </div>
    </div>
  )
}

export default RecipeDetails
