import React, { useState } from "react";
import axios from "axios"; // Uncomment if you have axios installed
import LabelEditor from "../components/LabelEditor";
import BottleScene from "../components/BottleScene";
import Navbar from "../components/Navbar";

const DesignTool = () => {
  // --- STATE MANAGEMENT ---
  const [capColor, setCapColor] = useState("#020f1b"); // Default Black
  const [textureData, setTextureData] = useState(null);
  const [quantity, setQuantity] = useState(48);

  // --- CONFIGURATION ---
  const colors = [
    { name: "Black", hex: "#020f1b" },
    { name: "Blue", hex: "#0055aa" },
    { name: "Red", hex: "#cc0000" },
    { name: "Green", hex: "#006600" },
    { name: "White", hex: "#ffffff" },
    { name: "Purple", hex: "#6600cc" },
    { name: "Pink", hex: "#ff66b2" },
    { name: "Yellow", hex: "#ffcc00" },
  ];

  // Pricing Logic
  const PRICE_PER_12 = 420;
  const DELIVERY_PER_BOX = 250;
  const boxes = Math.ceil(quantity / 12);
  const bottleCost = (quantity / 12) * PRICE_PER_12;
  const deliveryCost = boxes * DELIVERY_PER_BOX;
  const totalCost = bottleCost + deliveryCost;

  // Cloudinary Config
  const CLOUD_NAME = "dxrdqk8om";
  const UPLOAD_PRESET = "bottleCraftUploads";

  // --- HANDLERS ---
  const handleOrder = async () => {
    if (!textureData) return alert("Please design your label first!");
    
    // Check if axios is available
    if (typeof axios === 'undefined') {
        alert("Axios is missing. Please install it or ensure it is imported.");
        return;
    }

    const btn = document.getElementById('order-btn');
    btn.innerText = "Uploading...";
    btn.disabled = true;

    try {
      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", textureData);
      formData.append("upload_preset", UPLOAD_PRESET);
      
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      
      // 2. Save Order to Backend
      btn.innerText = "Saving Order...";
      const response = await axios.post('http://localhost:5000/api/orders', {
        designImage: uploadRes.data.secure_url,
        quantity,
        totalCost,
        capColor, // Save the selected cap color!
        customerName: "Test User", 
        customerPhone: "03001234567"
      });

      alert("Order Placed Successfully!");
      window.location.reload(); 

    } catch (error) {
      console.error(error);
      alert("Order Failed");
    } finally {
      btn.innerText = "Place Order";
      btn.disabled = false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- LEFT COLUMN: EDITOR --- */}
        <div className="space-y-6">
          
          {/* 1. Label Editor */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Design Label
            </h2>
            <LabelEditor onUpdatePreview={setTextureData} />
          </div>

          {/* 2. Quantity Input */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Quantity
            </h2>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                step="12"
                min="48"
                className="border-2 border-gray-200 p-3 rounded-lg w-32 text-center text-xl font-bold focus:border-brand-blue outline-none"
              />
              <span className="text-gray-500 font-medium">bottles (Min 48)</span>
            </div>
            <div className="mt-2 text-sm text-gray-400">
                {boxes} boxes (12 bottles per box)
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: PREVIEW & CHECKOUT --- */}
        <div className="space-y-6">
          
          {/* 3. 3D Preview */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Live Preview
            </h2>
            {/* Pass capColor state to the Scene */}
            <BottleScene textureData={textureData} capColor={capColor} />
            
            {/* CAP COLOR PICKER */}
            <div className="mt-6">
                <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Select Cap Color</p>
                <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setCapColor(color.hex)}
                            className={`
                                w-10 h-10 rounded-full border-2 shadow-sm transition transform hover:scale-110
                                ${capColor === color.hex ? "border-gray-800 ring-2 ring-gray-300 scale-110" : "border-gray-200"}
                            `}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                        />
                    ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">Selected: <span className="font-bold text-gray-600">{colors.find((c) => c.hex === capColor)?.name}</span></p>
            </div>
          </div>

          {/* 4. Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow-xl border border-brand-blue/20">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
            
            <div className="space-y-3 mb-6 text-gray-600">
                <div className="flex justify-between">
                    <span>Bottles ({quantity})</span>
                    <span>{bottleCost.toLocaleString()} PKR</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery ({boxes} boxes)</span>
                    <span>{deliveryCost.toLocaleString()} PKR</span>
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
                <div className="flex justify-between font-bold text-2xl text-brand-blue">
                    <span>Total</span>
                    <span>{totalCost.toLocaleString()} PKR</span>
                </div>
            </div>

            <button
              id="order-btn"
              onClick={handleOrder}
              className="w-full bg-brand-blue hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Place Order Now
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">Secure checkout via WhatsApp/Bank Transfer</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DesignTool;