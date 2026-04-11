import React, { useState } from 'react';

function Greeting({ username, onLogout }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.glassCard}>
        <div style={styles.iconWrapper}>
          <div style={styles.avatarCircle}>
            {username ? username.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>
        <h2 style={styles.heading}>Welcome, {username}!</h2>
        <p style={styles.text}>You have securely Logged In.</p>
        <button
          onClick={onLogout}
          style={{ ...styles.button, ...(isHovered ? styles.buttonHover : {}) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Disconnect
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    textAlign: 'center',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  avatarCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
  },
  heading: {
    marginTop: 0,
    marginBottom: '8px',
    fontSize: '32px',
    fontWeight: '700',
    background: 'linear-gradient(to right, #ffffff, #94a3b8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  text: {
    marginTop: 0,
    marginBottom: '40px',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#94a3b8',
  },
  button: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0 10px 15px -3px rgba(255, 255, 255, 0.05)'
  }
};

export default Greeting;
