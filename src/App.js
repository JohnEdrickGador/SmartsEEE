import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Dashboard />}/>
            <Route path = "/login" element = {<Login />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
