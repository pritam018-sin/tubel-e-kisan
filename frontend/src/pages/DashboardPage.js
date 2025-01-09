// src/pages/DashboardPage.js
import React, { useState, useEffect } from 'react';
import { getMachines } from '../services/api'; // Import the API service to fetch machines
import '../styles/HomePage.css';
const DashboardPage = () => {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    // Fetch machine data when the component mounts
    const fetchMachines = async () => {
      const data = await getMachines();
      setMachines(data);
    };
    fetchMachines();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Your Dashboard</h1>
      <h2>Available Machines</h2>
      <ul>
        {machines.map((machine) => (
          <li key={machine.id}>{machine.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
