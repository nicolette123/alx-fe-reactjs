// src/App.jsx
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import { useRecipeStore } from './components/recipeStore'

const App = () => {
  // optional: seed some sample data once for convenience (remove in production)
  const setRecipes = useRecipeStore((s) => s.setRecipes)
  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Sample Pancakes', description: 'Tasty pancakes' },
      { id: 2, title: 'Avocado Toast', description: 'Simple & healthy' },
    ])
  }, [setRecipes])

  return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Recipe Sharing App</Link></h1>
          <nav>
            <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <hr style={{ margin: '1.5rem 0' }} />
                  <RecipeList />
                </>
              }
            />

            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />

            {/* fallback route */}
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
