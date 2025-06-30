// src/pages/StaffDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StaffDashboard = () => {
  const navigate = useNavigate();

  const mockAlerts = [
    {
      productName: 'Shampoo',
      location: 'Aisle 5 - Ground Floor - Section B',
      time: '10:30 AM',
      count: 4,
      image: ''
    },
    {
      productName: 'Sugar',
      location: 'Aisle 3 - First Floor - Section D',
      time: '9:15 AM',
      count: 7,
      image: ''
    },
    {
      productName: 'Milk',
      location: 'Aisle 6 - First Floor - Section C',
      time: '11:45 AM',
      count: 1,
      image: ''
    }
  ];

  const [filter, setFilter] = useState('all');

  const getPriority = (count) => {
    if (count >= 5) return 'high';
    if (count >= 2) return 'medium';
    return 'low';
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-700',
  };

  const filteredAlerts = mockAlerts.filter((alert) => {
    const priority = getPriority(alert.count);
    return filter === 'all' || filter === priority;
  });

  const handleLogout = () => {
    localStorage.removeItem('staff-auth');
    navigate('/staff-login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800">Staff Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Filter */}
      <div className="flex justify-end mb-6">
        <select
          className="border rounded-md p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Alerts</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      {/* Alert Cards */}
      <div className="space-y-6">
        {filteredAlerts.map((alert, index) => {
          const priority = getPriority(alert.count);
          return (
            <div
              key={index}
              className="flex justify-between items-center bg-white rounded-xl shadow-md p-6"
            >
              <div>
                <h2 className="text-xl font-bold">{alert.productName}</h2>
                <p className="text-gray-700">{alert.location}</p>
                <p className="text-sm text-gray-500">Flagged at: {alert.time}</p>
                <p className="text-sm font-medium text-gray-800">Flags: {alert.count}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${priorityColors[priority]}`}
                >
                  Priority: {priority}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-1 rounded">
                  Mark as Refilled
                </button>
                <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-1 rounded">
                  Ignore
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StaffDashboard;
