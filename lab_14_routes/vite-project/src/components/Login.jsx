import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation (in real app, you'd check with backend)
    if (username === 'user' && password === 'password') {
      // Redirect to dashboard on successful login
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        
        {error && <p style={styles.error}>{error}</p>}
        
        <button type="submit" style={styles.button}>
          Login
        </button>
        
        <p style={styles.hint}>
          Hint: Use username: "user" and password: "password"
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  form: {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  },
  hint: {
    marginTop: '15px',
    fontSize: '12px',
    color: '#666'
  }
};

export default Login;