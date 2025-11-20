// src/components/DeleteRecipeButton.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  const handle = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(id)
      navigate('/')
    }
  }

  return <button onClick={handle}>Delete</button>
}

export default DeleteRecipeButton
