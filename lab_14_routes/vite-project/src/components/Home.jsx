import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  }
};

export default Home;