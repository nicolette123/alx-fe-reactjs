import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'

const App = () => {
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '1.5rem 0' }} />
      <RecipeList />
    </div>
  )
}

export default App
