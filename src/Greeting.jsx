import React from 'react';

function Greeting({ username, onLogout }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>
        Hello there, {username}! <span role="img" aria-label="wave">👋</span>
      </h2>
      <p style={{ fontSize: '24px', marginBottom: '40px' }}>
        You have successfully logged in.
      </p>
      <button 
        onClick={onLogout}
        style={{
          padding: '15px 40px',
          fontSize: '20px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #999',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Greeting;
