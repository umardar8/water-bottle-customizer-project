import React, { useState } from 'react';
import LabelEditor from './components/LabelEditor';
import BottleScene from './components/BottleScene';
import axios from 'axios';

function App() {
  const [textureData, setTextureData] = useState(null);
  const [quantity, setQuantity] = useState(48);
  
  // Pricing Constants
  const PRICE_PER_12 = 420;
  const DELIVERY_PER_BOX = 250;

  const boxes = Math.ceil(quantity / 12);
  const bottleCost = (quantity / 12) * PRICE_PER_12;
  const deliveryCost = boxes * DELIVERY_PER_BOX;
  const totalCost = bottleCost + deliveryCost;

  const handleOrder = async () => {
    if (!textureData) return alert("Please design your label first!");
    
    try {
      const response = await axios.post('http://localhost:5000/api/orders', {
        designImage: textureData, // In real app, upload this to Cloudinary first
        quantity,
        totalCost,
        customerName: "Test User", // Replace with form input
        customerPhone: "03001234567"
      });
      alert(`Order Placed! Order ID: ${response.data.order._id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-blue">BottleCraft PK</h1>
        <p className="text-gray-600">Design your own label in 3D</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Editor */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">1. Design Label</h2>
          <LabelEditor onUpdatePreview={setTextureData} />
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">2. Select Quantity</h2>
            <div className="flex items-center gap-4">
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                step="12" min="48"
                className="border p-2 rounded w-24 text-center"
              />
              <span className="text-gray-500">bottles (Min 48)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Preview & Cart */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">3. 3D Preview</h2>
            <BottleScene textureData={textureData} />
            <p className="text-sm text-gray-400 mt-2 text-center">Rotate to view all sides</p>
          </div>

          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Bottles ({quantity})</span>
              <span>{bottleCost} PKR</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery ({boxes} boxes)</span>
              <span>{deliveryCost} PKR</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-brand-blue mb-4">
              <span>Total</span>
              <span>{totalCost} PKR</span>
            </div>
            
            <button 
              onClick={handleOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg"
            >
              Place Order via WhatsApp/Bank
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;