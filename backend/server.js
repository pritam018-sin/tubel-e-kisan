require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

// Initialize Express app
const app = express();

// MongoDB connection
const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI; // Securely fetch the MongoDB URI from .env file
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the application if the connection fails
  }
};

// Call the connectDB function to establish the database connection
connectDB();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/auth', authRoutes); // Route for authentication API

// Define server port
const PORT = process.env.PORT || 5000; // Use the PORT from .env or default to 5000

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
