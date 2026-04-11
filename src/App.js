import React, { useState, useEffect } from 'react';
import Login from './Login';
import Greeting from './Greeting';

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Remove default body margins for the full screen gradient
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#0f172a'; // fallback
  }, []);

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <div style={styles.appWrapper}>
      <div style={styles.fixedBg}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>
          <span style={styles.titleHighlight}>React Lab</span> Exp 8
        </h1>
        {isLoggedIn ? (
          <Greeting username={username} onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

const styles = {
  appWrapper: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    fontFamily: '"Outfit", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#f8fafc',
    position: 'relative',
    overflow: 'hidden'
  },
  fixedBg: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  content: {
    zIndex: 1,
    width: '100%',
    maxWidth: '1200px',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box'
  },
  title: {
    fontSize: '44px',
    fontWeight: '800',
    letterSpacing: '-1px',
    marginBottom: '50px',
    textAlign: 'center',
    color: '#e2e8f0',
  },
  titleHighlight: {
    background: 'linear-gradient(to right, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  }
};

export default App;
