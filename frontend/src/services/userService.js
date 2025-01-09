// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend API URL

// User login function
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // Assuming the response contains user info
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};
