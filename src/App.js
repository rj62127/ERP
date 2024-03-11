import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
// Import other components as needed

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" element={<ProductsManagement/>} />
          <Route path="/orders" element={<OrdersManagement/>} />
          {/* Add more routes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
