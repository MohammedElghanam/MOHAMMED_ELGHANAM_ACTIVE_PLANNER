import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/forms/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index="/" element={ <Login /> } />
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
