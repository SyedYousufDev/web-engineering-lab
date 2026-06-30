import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Dashboard!</h1>
      <p>You have successfully logged in.</p>
      
      <div style={styles.productLinks}>
        <h3>Try our dynamic product routing:</h3>
        <Link to="/product/101" style={styles.link}>View Product 101</Link><br />
        <Link to="/product/202" style={styles.link}>View Product 202</Link><br />
        <Link to="/product/303" style={styles.link}>View Product 303</Link>
      </div>
      
      <Link to="/" style={styles.backLink}>Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  productLinks: {
    margin: '30px 0',
    padding: '20px',
    backgroundColor: '#e8f4f8',
    borderRadius: '5px'
  },
  link: {
    display: 'inline-block',
    margin: '10px',
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px'
  },
  backLink: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#007bff',
    textDecoration: 'none'
  }
};

export default Dashboard;