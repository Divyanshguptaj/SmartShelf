import React, { useEffect, useState } from 'react';
import { fetchAlerts, updateAlertStatus } from '../api/api';
import RefillButton from '../components/RefillButton';
import PhotoViewer from '../components/PhotoViewer';
import Filter from '../components/Filter';

const StaffDashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [filter, setFilter] = useState('New');

  useEffect(() => {
    const getData = async () => {
      const response = await fetchAlerts();
      setAlerts(response.data);
    };
    getData();
  }, []);

  const handleRefill = async (id) => {
    await updateAlertStatus(id, 'Refilled');
    setAlerts(prev =>
      prev.map(alert =>
        alert.id === id ? { ...alert, status: 'Refilled' } : alert
      )
    );
  };

  const filteredAlerts = alerts.filter(alert => alert.status === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-walmartBlue">Staff Dashboard</h1>

      <Filter current={filter} setFilter={setFilter} />

      <div className="grid gap-4 mt-4">
        {filteredAlerts.length === 0 && <p>No alerts in this category.</p>}
        {filteredAlerts.map(alert => (
          <div key={alert.id} className="p-4 border rounded shadow bg-white">
            <h2 className="text-lg font-semibold">{alert.productName}</h2>
            <p>Aisle: {alert.aisle}, Section: {alert.section}, Floor: {alert.floor}</p>
            <p>Flagged: {alert.flagCount} times</p>
            <p className="text-sm text-gray-600">Time: {new Date(alert.timestamp).toLocaleString()}</p>

            {alert.imageUrl && <PhotoViewer imageUrl={alert.imageUrl} />}

            <RefillButton onClick={() => handleRefill(alert.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffDashboard;
