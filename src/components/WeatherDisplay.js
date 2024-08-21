import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  // Conditional styling based on temperature
  const tempStyle = {
    backgroundColor: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <p>Current Weather</p>
      <span style={tempStyle}>Temperature: {temperature}</span>
      <span>Conditions: {conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
