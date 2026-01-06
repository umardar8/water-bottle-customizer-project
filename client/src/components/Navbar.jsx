import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiWhatsappLogoFill } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Helper to highlight active links
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-brand-blue font-bold transition" 
      : "text-gray-500 hover:text-brand-blue transition";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo */}
          <Link to="/" className="text-2xl font-bold text-brand-blue tracking-tighter flex-shrink-0">
            BottleCraft <span className="text-green-600">PK</span>
          </Link>

          {/* 2. Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Logic: If on Home, scroll to section. If not, go to Home/#section */}
            <a href={isHomePage ? "#features" : "/#features"} className="text-gray-500 hover:text-brand-blue transition">Features</a>
            <a href={isHomePage ? "#gallery" : "/#gallery"} className="text-gray-500 hover:text-brand-blue transition">Gallery</a>
            
            <Link to="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
            <Link to="/career" className={getLinkClass('/career')}>Careers</Link>
            <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
          </div>

          {/* 3. Right Side Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Login / Signup */}
            <Link 
              to="/login" 
              className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-brand-blue hover:text-brand-blue transition"
            >
              Login / Signup
            </Link>

            {/* Start Designing */}
            <Link 
              to="/design" 
              className="bg-brand-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg transform hover:scale-105 duration-200"
            >
              Start Designing
            </Link>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/message/LBK7LVG2OJB3C1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition transform hover:scale-110"
              title="Chat on WhatsApp"
            >
              <PiWhatsappLogoFill size={'2.4rem'} />
            </a>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 focus:outline-none p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pt-2 pb-6 space-y-3 shadow-lg flex flex-col">
          <a href={isHomePage ? "#features" : "/#features"} onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">Features</a>
          <a href={isHomePage ? "#gallery" : "/#gallery"} onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">Gallery</a>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">Pricing</Link>
          <Link to="/career" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">Careers</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium">About Us</Link>
          
          <hr className="border-gray-100 my-2"/>

          <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 border border-gray-300 rounded-full font-semibold text-gray-700">
            Login / Signup
          </Link>
          <Link to="/design" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-brand-blue text-white rounded-full font-semibold shadow-md">
            Start Designing
          </Link>
          
          <div className="flex justify-center pt-2">
             <a href="https://wa.me/message/LBK7LVG2OJB3C1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 font-bold">
               <PiWhatsappLogoFill size={'2rem'} /> Chat on WhatsApp
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;