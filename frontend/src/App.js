import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';  // Import DashboardPage

const App = () => {
  return (
    <div>
      <Header />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />  {/* Add DashboardPage */}
      </Routes>
    </div>
  );
};

export default App;
