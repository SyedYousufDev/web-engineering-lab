import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  // Extract the productId parameter from the URL
  const { productId } = useParams();

  return (
    <div style={styles.container}>
      <h1>Product Details</h1>
      <div style={styles.productCard}>
        <h2>Product ID: {productId}</h2>
        <p>Showing details for product number {productId}</p>
        <p>Product Name: Sample Product {productId}</p>
        <p>Price: ${productId * 10}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9'
  }
};

export default Product;