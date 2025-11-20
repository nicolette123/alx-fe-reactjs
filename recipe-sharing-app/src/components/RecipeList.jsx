import React from 'react'
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
        <div key={recipe.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
          <h3 style={{ margin: '0.2rem 0' }}>{recipe.title}</h3>
          <p style={{ margin: 0 }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
