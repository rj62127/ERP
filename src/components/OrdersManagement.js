import React, { useState } from 'react';
import ordersData from '../data/ordersData';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrdersManagement = () => {
  const [orders, setOrders] = useState(ordersData);
  const [selectedDate, setSelectedDate] = useState(null);

  const styles = `
    .orders-management-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      display: flex;
      justify-content: space-between;
    }

    .order-list {
      list-style: none;
      padding: 0;
      width: 40%;
    }

    .order-item {
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 10px;
      cursor: pointer;
    }

    .order-details {
      margin-bottom: 10px;
    }

    .order-actions {
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

    .update-status-button {
      background-color: #007bff;
      color: #fff;
    }

    .delete-button {
      background-color: #dc3545;
      color: #fff;
    }

    .calendar-container {
      width: 50%;
    }
  `;

  const handleUpdateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="orders-management-container" style={{ margin: '50px auto' }}>
      <style>{styles}</style>
      <div className="order-list">
        <h2>Orders Management</h2>
        <ul>
          {orders.map(order => (
            <li key={order.id} className="order-item">
              <div className="order-details">
                <p>Order ID: {order.id}</p>
                <p>Customer: {order.customer}</p>
                <p>Order Date: {order.date}</p>
                <p>Status: {order.status}</p>
              </div>
              <div className="order-actions">
                <button className="action-button update-status-button" onClick={() => handleUpdateStatus(order.id, 'Updated Status')}>Update Status</button>
                <button className="action-button delete-button" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="calendar-container">
        <h2>Orders Calendar View</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
    </div>
  );
};

export default OrdersManagement;
