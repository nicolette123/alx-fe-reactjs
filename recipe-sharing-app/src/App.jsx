import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';


const App = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
