import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="flex justify-between items-center px-6 py-4 bg-[#0071dc] text-white shadow-md">
        <h1 className="text-2xl font-bold">SmartShelf</h1>
        <button className="bg-white text-[#0071dc] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
          Login
        </button>
      </nav>

      <div className="flex flex-col items-center justify-center px-6 text-center mt-16 space-y-8">
        <h2 className="text-3xl font-bold max-w-2xl">
          Helping customers flag empty shelves and ensuring faster restocking by staff.
        </h2>
        <p className="text-lg text-gray-600 max-w-md">
          Choose your role to get started.
        </p>

        <div className="flex space-x-6">
          <button
            onClick={() => navigate("/customer")}
            className="bg-[#0071dc] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#005bb5] transition"
          >
            I’m a Customer
          </button>
          <button
            onClick={() => navigate("/staff")}
            className="bg-[#ffc220] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition"
          >
            I’m Staff
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          SmartShelf helps Walmart ensure real-time shelf updates for better customer satisfaction.
        </div>
      </div>
    </div>
  );
};

export default Home;
