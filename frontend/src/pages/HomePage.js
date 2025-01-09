
// src/pages/HomePage.js
import React from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import '../styles/HomePage.css'; // Importing homepage styles

const HomePage = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="home-page">
      <h2>Welcome to Tubel E-Kisan</h2>
      <InputField type="text" placeholder="Enter your location" />
      <div className="btn-container">
        <Button label="Register" onClick={handleButtonClick} />
        <Button label="Login" onClick={handleButtonClick} type="secondary" />
      </div>
    </div>
  );
};

export default HomePage;
