import React, { useReducer, useState } from 'react';

const initialState = {
  items: [
    { id: 1, name: 'Pen' },
    { id: 2, name: 'Diary' }
  ]
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'EMPTY_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export default function CartApp() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), name: inputValue.trim() } });
      setInputValue('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Web Tech Lab - <span style={styles.highlight}>Exp 10</span></h1>

      <div style={styles.summaryCard}>
        <div style={styles.summaryLeft}>
          <span style={styles.summaryText}>Total Items in Cart:</span>
          <span style={styles.itemCount}>{state.items.length}</span>
        </div>
        <button 
          style={styles.emptyBtn} 
          onClick={() => dispatch({ type: 'EMPTY_CART' })}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#e2e8f0'}
        >
          Empty Cart
        </button>
      </div>

      <div style={styles.cartCard}>
        <form onSubmit={handleAddItem} style={styles.inputGroup}>
          <input 
            type="text" 
            placeholder="Enter item name..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={styles.input}
          />
          <button 
            type="submit" 
            style={styles.addBtn}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Add Item
          </button>
        </form>

        <ul style={styles.itemList}>
          {state.items.map((item, index) => (
            <li 
              key={item.id} 
              style={{
                ...styles.itemRow, 
                borderBottom: index === state.items.length - 1 ? 'none' : '1px dashed rgba(255, 255, 255, 0.15)'
              }}
            >
              <span style={styles.itemName}>{item.name}</span>
              <button 
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                style={styles.removeBtn}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                  e.target.style.border = '1px solid rgba(239, 68, 68, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.border = '1px solid rgba(239, 68, 68, 0.2)';
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '650px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '"Outfit", "Inter", sans-serif',
  },
  heading: {
    fontSize: '44px',
    fontWeight: '800',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#ffffff',
  },
  highlight: {
    background: 'linear-gradient(to right, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  summaryCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px 30px',
    marginBottom: '24px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  summaryLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  summaryText: {
    fontSize: '20px',
    color: '#e2e8f0',
  },
  itemCount: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#ffffff',
  },
  emptyBtn: {
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#1e293b',
    backgroundColor: '#e2e8f0',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  cartCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  inputGroup: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
  },
  input: {
    flex: 1,
    padding: '14px 20px',
    fontSize: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  addBtn: {
    padding: '0 28px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
  },
  itemName: {
    fontSize: '18px',
    color: '#f8fafc',
    fontWeight: '500'
  },
  removeBtn: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fca5a5',
    backgroundColor: 'transparent',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  }
};
