import React, { useState, useEffect } from 'react';

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Directory</h1>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button
          onClick={() => setSearchTerm('')}
          style={styles.clearButton}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        >
          Clear Filter
        </button>
      </div>

      <p style={styles.countText}>Showing {filteredUsers.length} users</p>

      <div style={styles.grid}>
        {filteredUsers.map(user => (
          <div key={user.id} style={styles.card}>
            <h3 style={styles.cardName}>{user.name}</h3>
            <p style={styles.cardEmail}>📧 {user.email}</p>
            <p style={styles.cardCompany}>🏢 {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '"Outfit", "Inter", sans-serif',
    color: '#f8fafc',
    boxSizing: 'border-box'
  },
  title: {
    fontSize: '44px',
    fontWeight: '800',
    marginBottom: '30px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #60a5fa, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  controls: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  searchInput: {
    padding: '14px 20px',
    fontSize: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    width: '100%',
    maxWidth: '400px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  clearButton: {
    padding: '14px 24px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  countText: {
    textAlign: 'center',
    color: '#cbd5e1',
    marginBottom: '40px',
    fontSize: '16px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  cardName: {
    marginTop: 0,
    marginBottom: '12px',
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
  },
  cardEmail: {
    margin: '8px 0',
    fontSize: '14px',
    color: '#cbd5e1',
  },
  cardCompany: {
    margin: '8px 0',
    fontSize: '14px',
    color: '#94a3b8',
    fontStyle: 'italic'
  }
};

export default UserDirectory;
