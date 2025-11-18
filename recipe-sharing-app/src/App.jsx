import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } 
        />

        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
