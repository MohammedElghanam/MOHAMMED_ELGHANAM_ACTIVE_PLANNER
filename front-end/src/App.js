import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/forms/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index="/" element={ <Login /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
