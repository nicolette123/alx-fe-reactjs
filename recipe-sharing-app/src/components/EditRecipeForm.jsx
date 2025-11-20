// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId))
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to recipes</Link>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      alert('Title is required')
      return
    }

    updateRecipe({ id: recipeId, title: title.trim(), description: description.trim() })
    navigate(`/recipes/${recipeId}`)
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label>
          Description
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: 8 }}>Cancel</button>
      </form>
    </div>
  )
}

export default EditRecipeForm
