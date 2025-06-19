// src/components/customer/PointsCard.jsx
import React from "react";

const PointsCard = () => {
  const points = 12; // Later fetched dynamically per user

  return (
    <div className="bg-yellow-100 p-4 rounded-xl text-center shadow">
      <h3 className="text-lg font-semibold text-yellow-700">Your Contribution</h3>
      <p className="text-3xl font-bold mt-2">{points} pts</p>
      <p className="text-sm text-gray-600">Earn points by flagging empty shelves</p>
    </div>
  );
};

export default PointsCard;
