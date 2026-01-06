import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import LabelEditor from './components/LabelEditor';
import BottleScene from './components/BottleScene';
import AdminDashboard from './components/AdminDashboard';
import LandingPage from './components/LandingPage'; // Import the new page
import PricingPage from './components/PricingPage';
import LoginPage from './components/LoginPage';
import MemberDashboard from './components/MemberDashboard';
import CareersPage from './components/CareersPage';
import AboutUsPage from './components/AboutUsPage';

// --- 1. THE DESIGN TOOL (Formerly Home) ---
const DesignTool = () => {
  const [textureData, setTextureData] = useState(null);
  const [quantity, setQuantity] = useState(48);
  
  // Pricing
  const PRICE_PER_12 = 420;
  const DELIVERY_PER_BOX = 250;
  const boxes = Math.ceil(quantity / 12);
  const bottleCost = (quantity / 12) * PRICE_PER_12;
  const deliveryCost = boxes * DELIVERY_PER_BOX;
  const totalCost = bottleCost + deliveryCost;

  // Cloudinary Config (Fill these in!)
  const CLOUD_NAME = "dxrdqk8om"; 
  const UPLOAD_PRESET = "bottleCraftUploads"; 

  const handleOrder = async () => {
    // ... (Keep your existing order logic here exactly as it was) ...
    // For brevity, I am not repeating the handleOrder code block here 
    // but ensure you keep the full logic you wrote previously!
    alert("This is where your handleOrder logic goes");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Simple Header for the App View */}
      <header className="bg-white shadow-sm p-4 mb-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-brand-blue">
          &larr; Back to Home
        </Link>
        <h1 className="font-bold text-gray-700">Design Studio</h1>
        <div className="w-20"></div> {/* Spacer for centering */}
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 pb-12">
        {/* Editor Side */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">1. Design Label</h2>
          <LabelEditor onUpdatePreview={setTextureData} />
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">2. Quantity</h2>
            <div className="flex items-center gap-4">
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                step="12" min="48"
                className="border p-2 rounded w-24 text-center"
              />
              <span className="text-gray-500">bottles</span>
            </div>
          </div>
        </div>

        {/* Preview Side */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">3. Preview</h2>
            <BottleScene textureData={textureData} />
          </div>

          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between font-bold text-xl text-brand-blue mb-4">
              <span>Total</span>
              <span>{totalCost} PKR</span>
            </div>
            <button 
              id="order-btn"
              onClick={handleOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. THE ROUTER SETUP ---
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/design" element={<DesignTool />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/career" element={<CareersPage />} />
      <Route path="/about" element={<AboutUsPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<MemberDashboard />} />
    </Routes>
  );
}

export default App;