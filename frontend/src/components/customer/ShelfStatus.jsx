import React from "react";
import { toast } from "react-toastify";

const ShelfStatus = () => {
  const handleFlag = () => {
    // You’d also call backend API here
    toast.success("✅ Thanks! 3 more flags needed to alert staff.");
  };

  return (
    <div className="border p-4 rounded-xl shadow animate-fadeIn">
      <h2 className="text-lg font-medium mb-2">Is this item missing on the shelf?</h2>
      <button
        onClick={handleFlag}
        className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
      >
        Yes, Flag it
      </button>
    </div>
  );
};

export default ShelfStatus;
