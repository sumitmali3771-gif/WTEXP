import React, { useEffect } from 'react';
import CartApp from './CartApp';

function App() {
  // Remove default body margins for the full screen gradient
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#0f172a'; // fallback
  }, []);

  return (
    <div style={styles.appWrapper}>
      <div style={styles.fixedBg}></div>
      <div style={styles.content}>
        <CartApp />
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

export default App;
