// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend API URL

// Get the list of machines from the backend
export const getMachines = async () => {
  try {
    const response = await axios.get(`${API_URL}/machines`);
    return response.data;
  } catch (error) {
    console.error("Error fetching machines:", error);
  }
};
