import React, { useState } from 'react';

function Login({ onLogin }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onLogin(inputValue);
    }
  };

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '40px', 
      width: '350px', 
      margin: '50px auto',
      boxShadow: '0px 0px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0, marginBottom: '20px', fontSize: '28px' }}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '20px', marginBottom: '8px' }}>Username:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '18px', 
              border: '2px solid black', 
              boxSizing: 'border-box',
              borderRadius: '4px'
            }}
          />
        </div>
        <button type="submit" style={{ 
          width: '100%', 
          padding: '15px', 
          fontSize: '18px', 
          backgroundColor: '#f0f0f0', 
          border: '1px solid #999', 
          cursor: 'pointer',
          borderRadius: '4px'
        }}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
