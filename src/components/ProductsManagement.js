import React, { useState } from 'react';
import productsData from '../data/productsData';

const ProductsManagement = () => {
  const [products, setProducts] = useState(productsData);

  const styles = `
    .products-management-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .product-list {
      list-style: none;
      padding: 0;
    }

    .product-item {
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
    }

    .product-details {
      flex: 1;
    }

    .product-actions {
      display: flex;
      align-items: center;
    }

    .action-button {
      margin-left: 10px;
      padding: 5px 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    .edit-button {
      background-color: #007bff;
      color: #fff;
    }

    .delete-button {
      background-color: #dc3545;
      color: #fff;
    }
  `;

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: 'New Product',
      category: 'New Category',
      price: 0,
      stock: 0
    };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="products-management-container" style={{ margin: '50px auto' }}>
      <style>{styles}</style>
      <h2>Products Management</h2>
      <button className="action-button" onClick={handleAddProduct}>Add Product</button>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
            <div className="product-actions">
              <button className="edit-button action-button" onClick={() => handleEditProduct(product.id, { name: 'Updated Product' })}>Edit</button>
              <button className="delete-button action-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsManagement;
