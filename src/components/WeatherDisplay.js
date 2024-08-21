import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  // Conditional styling based on temperature
  const tempStyle = {
    backgroundColor: temperature > 20 ? 'red' : 'blue',
    color: 'red',
  };

  return (
    <div>
      
      <p style={tempStyle}>Temperature: {temperature}</p>
      <p><span></span>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
