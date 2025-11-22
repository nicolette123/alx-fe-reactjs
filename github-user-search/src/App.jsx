// src/App.jsx
import React from "react";
import Search from "./components/Search";
import AdvancedSearch from "./components/AdvancedSearch";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        GitHub User Search
      </h1>
      <Search />
       <AdvancedSearch />
    </div>
    
  );
};

export default App;
