import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Security: Simple Hardcoded Password
  const ADMIN_PASS = "admin123"; 

  const handleLogin = () => {
    if (password === ADMIN_PASS) {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      alert("Wrong Password");
    }
  };

  // Allow login with "Enter" key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/orders');
      // Sort by newest first
      const sortedOrders = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setOrders(sortedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
        setLoading(false);
    }
  };

  // --- 1. LOGIN VIEW (Shown if not authenticated) ---
  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="border p-3 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            onClick={handleLogin} 
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold px-4 py-3 rounded w-full transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // --- 2. DASHBOARD VIEW (Shown if authenticated) ---
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">BottleCraft Admin</h1>
            <div className="flex gap-4">
                <button 
                  onClick={fetchOrders} 
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium shadow-sm transition"
                >
                  Refresh Data
                </button>
                <button 
                  onClick={() => setIsAuthenticated(false)} 
                  className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg font-medium transition"
                >
                  Logout
                </button>
            </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {loading ? (
              <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-2"></div>
                 Loading orders...
              </div>
          ) : orders.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No orders found.</div>
          ) : (
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Date</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Customer</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Order Details</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Cap Color</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Design</th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50 transition border-b border-gray-100">
                  
                  {/* Date */}
                  <td className="px-5 py-5 bg-white text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                    <br/>
                    <span className="text-xs">{new Date(order.createdAt).toLocaleTimeString()}</span>
                  </td>

                  {/* Customer */}
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 font-bold">{order.customerName || "Guest"}</p>
                    <p className="text-gray-500">{order.customerPhone}</p>
                  </td>

                  {/* Qty / Price */}
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="font-medium text-gray-900">{order.quantity} Bottles</div>
                    <div className="text-green-600 font-bold">{order.totalCost?.toLocaleString()} PKR</div>
                  </td>

                  {/* Cap Color (NEW) */}
                  <td className="px-5 py-5 bg-white text-sm">
                     <div className="flex items-center gap-3">
                        <div 
                            className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                            style={{ backgroundColor: order.capColor || '#020f1b' }}
                            title={order.capColor}
                        />
                        <span className="font-mono text-xs text-gray-500 uppercase">
                            {order.capColor || '#020f1b'}
                        </span>
                     </div>
                  </td>

                  {/* Design Preview */}
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex items-center gap-3">
                        <img 
                            src={order.designImage} 
                            alt="Label Design" 
                            className="h-12 w-20 object-cover rounded border border-gray-200 shadow-sm bg-gray-50" 
                        />
                        <a 
                            href={order.designImage} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-xs font-bold"
                        >
                        View Full
                        </a>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-5 bg-white text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold 
                        ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                      {order.status || 'Pending'}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;