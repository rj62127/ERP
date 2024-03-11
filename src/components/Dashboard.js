import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Dashboard = () => {
  const styles = `
    .dashboard-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    h2 {
      text-align: center;
    }

    .summary {
      margin-bottom: 20px;
    }

    .summary p {
      margin: 5px 0;
    }

    .action-buttons {
      display: flex;
      justify-content: center;
    }

    .action-button {
      margin: 0 10px;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .action-button:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <div className="dashboard-container" style={{ margin: '50px auto' }}>
      <style>{styles}</style>
      <h2>Dashboard</h2>
      <div className="summary">
        <p>Total number of products: 100</p>
        <p>Total number of orders: 50</p>
      </div>
      <div className="action-buttons">
        <Link to="/products">
          <button className="action-button">Manage Products</button>
        </Link>
        <Link to="/orders">
          <button className="action-button">Manage Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
