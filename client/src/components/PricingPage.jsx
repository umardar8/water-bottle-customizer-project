import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const PricingPage = () => {
  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gray-50">
      
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <div className="bg-brand-blue text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Transparent Pricing for Everyone</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Whether you need 48 bottles for a birthday or 1000 for a restaurant, 
          our pricing is simple. No hidden setup fees.
        </p>
      </div>

      {/* Breakdown Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: The Math */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How We Calculate Cost</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-700 font-bold text-xl">1</div>
                <div>
                  <h3 className="font-bold text-lg">Base Price</h3>
                  <p className="text-gray-600">35 PKR per bottle (includes water, plastic bottle, and custom printing).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700 font-bold text-xl">2</div>
                <div>
                  <h3 className="font-bold text-lg">Packaging</h3>
                  <p className="text-gray-600">Sold in boxes of 12. Minimum order is 4 boxes (48 bottles).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-700 font-bold text-xl">3</div>
                <div>
                  <h3 className="font-bold text-lg">Delivery</h3>
                  <p className="text-gray-600">250 PKR per box. This covers secure shipping via Daewoo Cargo or Local Hyderabad Courier.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Calculator Example */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-500 uppercase tracking-wider text-sm">Example Invoice</h3>
            <div className="text-3xl font-bold mb-6">48 Bottles <span className="text-lg font-normal text-gray-400">(Minimum Order)</span></div>
            
            <div className="space-y-3 mb-6 border-b pb-6">
              <div className="flex justify-between">
                <span>48 Bottles x 35 PKR</span>
                <span className="font-bold">1,680 PKR</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery (4 Boxes x 250)</span>
                <span className="font-bold">1,000 PKR</span>
              </div>
            </div>
            
            <div className="flex justify-between text-xl font-bold text-brand-blue">
              <span>Total</span>
              <span>2,680 PKR</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-6 py-12 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-lg mb-2">Can I order less than 48 bottles?</h4>
            <p className="text-gray-600">Currently, our manufacturing process requires a minimum run of 48 labels to keep costs low for you.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-lg mb-2">Do you offer discounts for bulk orders?</h4>
            <p className="text-gray-600">Yes! For orders over 500 bottles, please contact us on WhatsApp for special wholesale rates.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-lg mb-2">What happens if the bottles are damaged?</h4>
            <p className="text-gray-600">We pack specifically for cargo. If any breakage occurs, share a photo within 24 hours for a refund on the damaged units.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PricingPage;