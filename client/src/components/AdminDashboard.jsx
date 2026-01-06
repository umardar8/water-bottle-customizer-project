import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Simple "Hardcoded" security for MVP
  const ADMIN_PASS = "admin123"; 

  const handleLogin = () => {
    if (password === ADMIN_PASS) {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      alert("Wrong Password");
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders');
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="border p-2 w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">BottleCraft Admin</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold uppercase tracking-wider">Date</th>
                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold uppercase tracking-wider">Customer</th>
                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold uppercase tracking-wider">Qty / Price</th>
                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold uppercase tracking-wider">Design</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-100">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap font-bold">{order.customerName}</p>
                    <p className="text-gray-600 whitespace-no-wrap">{order.customerPhone}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{order.quantity} Bottles</p>
                    <p className="text-green-600 whitespace-no-wrap font-bold">{order.totalCost} PKR</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                      <span className="relative">{order.status}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {/* View Design Link */}
                    <a 
                      href={order.designImage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-900 underline"
                    >
                      View Label
                    </a>
                    {/* Tiny Thumbnail */}
                    <img src={order.designImage} alt="Label" className="h-10 w-20 object-cover mt-1 border" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;