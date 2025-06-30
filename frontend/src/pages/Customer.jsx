// src/pages/Customer.jsx
import React, { useState } from "react";
import ProductSearch from "../components/customer/ProductSearch";
import ShelfStatus from "../components/customer/ShelfStatus";
import PointsCard from "../components/customer/PointsCard";

const Customer = () => {
  const [hasContributed, setHasContributed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-lg shadow-md mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">🛒 SmartShelf by Walmart</h1>
        <span className="text-sm font-medium">📍 Bengaluru #1293</span>
      </div>

      {/* Promo */}
      <div className="max-w-4xl mx-auto bg-blue-100 text-blue-900 border-l-4 border-blue-500 p-4 rounded shadow mb-6">
        🏆 Flag empty shelves and earn <span className="font-bold text-green-700">Green Points</span>! Redeem for discounts
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow p-6 space-y-6">
        <ProductSearch />
        <ShelfStatus onFlag={() => setHasContributed(true)} />
        {hasContributed && <PointsCard />}
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-12">
        Need help? Visit the <a href="#" className="text-blue-600 underline">Help Center</a> or call support at 1-800-WALMART.
      </div>
    </div>
  );
};

export default Customer;
