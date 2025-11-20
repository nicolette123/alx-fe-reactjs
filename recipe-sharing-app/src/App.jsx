// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: 900,
          margin: '2rem auto',
          padding: '1rem',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Recipe Sharing App
            </Link>
          </h1>
          <nav>
            <Link to="/" style={{ marginRight: 12 }}>
              Home
            </Link>
          </nav>
        </header>

        {/* Search bar */}
        <SearchBar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <hr style={{ margin: '1.5rem 0' }} />
                  <RecipeList />
                  <hr style={{ margin: '1.5rem 0' }} />
                  <FavoritesList />
                  <RecommendationsList />
                </>
              }
            />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
