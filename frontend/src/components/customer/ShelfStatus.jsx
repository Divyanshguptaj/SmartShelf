// src/components/customer/ShelfStatus.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import PointsCard from "./PointsCard";

const ShelfStatus = () => {
  const [flagged, setFlagged] = useState(false);

  const handleFlag = () => {
    toast.success("✅ Thanks! 3 more flags needed to alert staff.");
    setFlagged(true);
  };

  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-lg font-medium mb-2">Is this item missing on the shelf?</h2>
      <button
        onClick={handleFlag}
        className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
      >
        Yes, Flag it
      </button>
      {flagged && (
        <div className="mt-3 text-green-600 font-medium">
          ✅ Thanks! 3 more flags needed to alert staff.
        </div>
      )}
    </div>
  );
};

export default ShelfStatus;
