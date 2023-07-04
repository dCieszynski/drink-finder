import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import DrinkDetails from "./pages/DrinkDetails";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/drinks/:id" element={<DrinkDetails />} />
    </Routes>
  );
}

export default App;
