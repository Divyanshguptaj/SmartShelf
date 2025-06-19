// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Staff from "./pages/Staff";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
};

export default App;
