import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (id === "staff" && password === "smart123") {
      localStorage.setItem("staff-auth", "true");
      navigate("/staff");
    } else {
      setError("Invalid login ID or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Staff Login</h2>
        <input
          type="text"
          placeholder="Login ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 text-blue-600 hover:underline text-sm"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default StaffLogin;
