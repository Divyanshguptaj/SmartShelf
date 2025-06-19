import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 text-gray-900 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Welcome to SmartShelf</h1>
      <p className="mb-6 text-center max-w-md">
        Helping customers flag empty shelves and ensuring faster restocking by staff. Choose your role to get started.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/customer")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          I’m a Customer
        </button>
        <button
          onClick={() => navigate("/staff")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        >
          I’m Staff
        </button>
      </div>
    </div>
  );
};

export default Home;
