import React, { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title.trim()) {
      alert('Please provide a title')
      return
    }

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    })

    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label="add-recipe-form">
      <h2>Add a recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        aria-label="recipe-title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={4}
        aria-label="recipe-description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
