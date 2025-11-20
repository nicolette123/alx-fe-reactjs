// src/components/RecipeList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet. Add one above!</p>
  }

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0.2rem 0' }}>{recipe.title}</h3>
            <p style={{ margin: 0 }}>{recipe.description}</p>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <Link to={`/recipes/${recipe.id}`} aria-label={`view-${recipe.id}`}>View</Link>
            <Link to={`/recipes/${recipe.id}/edit`} aria-label={`edit-${recipe.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
