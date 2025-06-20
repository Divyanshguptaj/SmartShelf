import React, { useState } from "react";

const PointsCard = () => {
  const [points, setPoints] = useState(12); // Placeholder – replace with dynamic points later

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-yellow-800 mb-1">
        🎉 Thanks for contributing!
      </h2>
      <p className="text-gray-800 text-base">
        You've earned{" "}
        <span className="font-bold text-yellow-700">{points}</span> points for helping today.
      </p>
    </div>
  );
};

export default PointsCard;
