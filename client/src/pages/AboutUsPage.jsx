import React from 'react';
import Navbar from '../components/Navbar';
import Founder1 from '../assets/images/founders/founder1.png';
import Founder2 from '../assets/images/founders/founder2.jpg';
import Founder3 from '../assets/images/founders/founder3.jpeg';

const AboutUsPage = () => {
  return (
    <div className="font-sans text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
          alt="Team collaborating" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-tight">Our Story</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-brand-blue">Engineered for Creativity.</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          BottleCraft PK wasn't started by traditional printers. It was founded by **three software engineers** who saw a gap in the market. We realized that while Pakistan's tech sector was booming, the physical branding industry for small businesses was still stuck in the past—manual processes, high minimums, and confusing pricing.
        </p>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          We decided to solve this using code. By combining advanced 3D web rendering with logistics optimization, we built a platform where a home chef in Lahore or a beverage startup in Karachi can design world-class custom labels in minutes, not weeks.
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
            <div className="text-4xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-500">Custom Code</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">24h</div>
            <div className="text-sm text-gray-500">Support Response</div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Founder 1: Aqib */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
                 <img src={Founder2} alt="Aib Gaho" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Aib Gaho</h3>
              <p className="text-brand-blue font-bold mb-3">Co-Founder & Software Engineer</p>
              <p className="text-gray-600 text-sm px-4">
                "Bridging the gap between tech and Pakistani heritage. We're not just another ecommerce platform; we're crafting a digital ecosystem."
              </p>
            </div>

            {/* Founder 2: Zain */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
                 <img src={Founder3} alt="Zayn ul Abideen" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Zayn Soomro</h3>
              <p className="text-brand-blue font-bold mb-3">Co-Founder & Software Engineer</p>
              <p className="text-gray-600 text-sm px-4">
                "We are merging silicon valley tech with Pakistani craftsmanship. Every feature we build is designed to empower local entrepreneurs."
              </p>
            </div>

            {/* Founder 3: Umar */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
                 <img src={Founder1} alt="Umar Farooq Dar" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Umar Farooq Dar</h3>
              <p className="text-brand-blue font-bold mb-3">Co-Founder & Software Engineer</p>
              <p className="text-gray-600 text-sm px-4">
                "With global tech standards our mission is to allow entrepreneurs to build their own branding and compete on a different level."
              </p>
            </div>
            

          </div>
        </div>
      </div>
      
      {/* CTA Footer */}
      <div className="bg-gray-50 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to brand your water bottles?</h2>
        <a href="/design" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 transition">
          Design Your First Bottle
        </a>
      </div>

    </div>
  );
};

export default AboutUsPage;