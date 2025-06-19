// src/pages/Staff.jsx
import React from "react";
import AlertsList from "../components/staff/AlertsList";

const Staff = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">Staff Dashboard</h1>
      <AlertsList />
    </div>
  );
};

export default Staff;
