
// src/components/InputField.js
import React from 'react';
import '../styles/InputField.css'; // Importing input field styles

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
