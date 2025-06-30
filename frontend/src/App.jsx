// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import StaffDashboard from "./pages/StaffDashboard";
import StaffLogin from "./pages/StaffLogin";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("staff-auth") === "true";
  return isAuthenticated ? children : <Navigate to="/staff-login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route
          path="/staff"
          element={
            <PrivateRoute>
              <StaffDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
