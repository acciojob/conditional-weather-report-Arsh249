import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  // Conditional styling based on temperature
  const tempStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <h2>Current Weather</h2>
      <p style={tempStyle}>Temperature: {temperature}</p>
      <span>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
