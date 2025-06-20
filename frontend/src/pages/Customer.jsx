// src/pages/Customer.jsx
import React from "react";
import ProductSearch from "../components/customer/ProductSearch";
import ShelfStatus from "../components/customer/ShelfStatus";
import PointsCard from "../components/customer/PointsCard";

const Customer = () => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-2xl font-semibold mb-6 text-center text-blue-700">Customer Dashboard</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <ProductSearch />
        <ShelfStatus />
        <PointsCard />
      </div>
    </div>  
  );
};

export default Customer;
