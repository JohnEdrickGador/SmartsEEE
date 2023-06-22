import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/login" element = {<Login />}/>
            <Route path = "/dashboard" element = {<Dashboard />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
