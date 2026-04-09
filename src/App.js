import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [stepSize, setStepSize] = useState(1);

  const handleIncrement = () => {
    setCount(count + stepSize);
  };

  const handleDecrement = () => {
    setCount(count - stepSize);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStepSize(isNaN(value) ? 0 : value);
  };

  return (
    <div className="counter-card">
      <h1>Counter App</h1>
      <hr />
      <h2>Count: {count}</h2>
      
      <div className="step-container">
        <span>Step Size:</span>
        <input 
          type="number" 
          value={stepSize} 
          onChange={handleStepChange} 
        />
      </div>

      <div className="btn-group">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
