import React from 'react';
import { Link } from 'react-router-dom';

const MemberDashboard = () => {
  const userEmail = localStorage.getItem("userEmail") || "Member";

  // Mock Data (In reality, you'd fetch this from API filtered by email)
  const myOrders = [
    { id: "ORD-1024", date: "2024-03-10", qty: 48, status: "Processing", cost: 2680 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-brand-blue">BottleCraft PK</Link>
        <div className="flex items-center gap-4">
            <span className="text-gray-600">Hello, {userEmail}</span>
            <Link to="/login" className="text-red-500 text-sm hover:underline" onClick={() => localStorage.clear()}>Logout</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex justify-between items-end mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
            <Link to="/design" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                + New Order
            </Link>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
            {myOrders.length > 0 ? (
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {myOrders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{order.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{order.cost} PKR</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="p-8 text-center text-gray-500">
                    No orders found. <Link to="/design" className="text-brand-blue underline">Create your first design!</Link>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;