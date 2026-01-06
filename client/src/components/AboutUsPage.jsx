import React from 'react';
import Navbar from './Navbar';

const AboutUsPage = () => {
  return (
    <div className="font-sans text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80" 
          alt="Team working" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">Our Story</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-brand-blue">"Apna Brand, Apni Pehchan."</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          BottleCraft PK started in 2024 with a simple observation: Small businesses in Pakistan—whether a home-based juice startup in Lahore or a wedding planner in Karachi—struggled to get custom-branded packaging. The minimum orders were too high, and the design process was too complicated.
        </p>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          We decided to change that. By combining modern 3D web technology with local printing logistics, we built a platform where anyone can design a professional label in minutes and get it delivered to their doorstep.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">10k+</div>
            <div className="text-sm text-gray-500">Bottles Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-sm text-gray-500">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-500">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">24h</div>
            <div className="text-sm text-gray-500">Support Response</div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
             {/* Replace with actual founder image later */}
             <img src="https://via.placeholder.com/200" alt="Umar Farooq Dar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Umar Farooq Dar</h3>
            <p className="text-brand-blue font-medium mb-4">Founder & CEO</p>
            <p className="text-gray-600 italic">
              "We believe that every Pakistani entrepreneur deserves to look like a global brand. BottleCraft is our contribution to the local ecosystem."
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Footer */}
      <div className="bg-gray-50 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
        <a href="/design" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 transition">
          Design Your First Bottle
        </a>
      </div>

    </div>
  );
};

export default AboutUsPage;