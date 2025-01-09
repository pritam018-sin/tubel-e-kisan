// src/components/Button.js
import React from 'react';
import '../styles/Button.css'; // Importing button styles

const Button = ({ label, onClick, type = 'primary' }) => {
  return (
    <button
      className={`button ${type === 'secondary' ? 'secondary' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
