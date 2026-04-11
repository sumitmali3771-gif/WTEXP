import React, { useState } from 'react';

function Login({ onLogin }) {
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onLogin(inputValue);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.glassCard}>
        <h2 style={styles.heading}>Sign In</h2>
        <p style={styles.subText}>Welcome to webtech Lab.</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={styles.input}
              placeholder="Enter your username"
            />
          </div>
          <button
            type="submit"
            style={{ ...styles.button, ...(isHovered ? styles.buttonHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Authenticate
          </button>
        </form>
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
    boxSizing: 'border-box'
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
    boxSizing: 'border-box'
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
  subText: {
    marginTop: 0,
    marginBottom: '32px',
    fontSize: '15px',
    color: '#94a3b8',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#cbd5e1',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)',
  }
};

export default Login;
