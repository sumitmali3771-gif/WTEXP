import React, { useState } from 'react';
import Login from './Login';
import Greeting from './Greeting';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      {/* 
        This div is just to make the header match the screenshots provided. 
        It could be moved to a separate Header component if needed. 
      */}
      <div style={{ padding: '20px 40px' }}>
         <h1 style={{ fontSize: '48px', margin: 0 }}>Web Technology Lab - Exp 8</h1>
      </div>

      {isLoggedIn ? (
        <Greeting username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
