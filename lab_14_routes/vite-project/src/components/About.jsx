import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>This is the About page. Learn more about our company.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  }
};

export default About;