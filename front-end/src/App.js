import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/forms/login";
import Dashboard from "./pages/dashboard";
import Protected from "./hooks/useProtected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index="/" element={ <Login /> } />
          <Route path="/dashboard" element={ 
            <Protected >
              <Dashboard /> 
            </Protected>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;