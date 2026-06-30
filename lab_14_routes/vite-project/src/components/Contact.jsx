import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>Email: contact@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  }
};

export default Contact;