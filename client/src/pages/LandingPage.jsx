import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BottleScene from '../components/BottleScene';
import SampleBottle1 from '../assets/images/sampleBottles/sampleBottle1.png'
import SampleBottle1Hover from '../assets/images/sampleBottles/sampleBottle1Hover.png'
import SampleBottle2 from '../assets/images/sampleBottles/sampleBottle2.png'
import SampleBottle2Hover from '../assets/images/sampleBottles/sampleBottle2Hover.png'
import SampleBottle3 from '../assets/images/sampleBottles/sampleBottle3.png'
import SampleBottle3Hover from '../assets/images/sampleBottles/sampleBottle3Hover.png'
import SampleBottle4 from '../assets/images/sampleBottles/sampleBottle4.png'
import SampleBottle4Hover from '../assets/images/sampleBottles/sampleBottle4Hover.png'

const LandingPage = () => {

    // Mock Data for the Gallery
  const portfolioItems = [
    { id: 1, brand: "Roti Palace", type: "Restaurant", img: SampleBottle1, imgHover: SampleBottle1Hover },
    { id: 2, brand: "Ahmed's Walima", type: "Wedding Event", img: SampleBottle2, imgHover: SampleBottle2Hover },
    { id: 3, brand: "Gym Fit", type: "Fitness", img: SampleBottle3, imgHover: SampleBottle3Hover },
    { id: 4, brand: "Jal the Band", type: "Concert Event", img: SampleBottle4, imgHover: SampleBottle4Hover }
  ];

  return (
    <div className="font-sans text-gray-800">
      
      {/* --- Navigation --- */}
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="z-10">
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              🇵🇰 Pakistan's #1 Custom Bottle Platform
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight text-gray-900">
              Your Brand, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-green-500">
                On Every Sip.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Design custom labeled water bottles for corporate events, parties, weddings, and restaurants in minutes. 3D preview of label design, Urdu/English label support, and fast delivery.
            </p>
            
            <div className="mt-10 flex gap-4">
              <Link 
                to="/design" 
                className="px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-xl hover:bg-gray-800 transition shadow-2xl transform hover:-translate-y-1"
              >
                Design Now &rarr;
              </Link>
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 text-lg font-bold rounded-xl hover:bg-gray-50 transition"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Right: 3D Animation (Reusing your component!) */}
          <div className="relative h-[500px] w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
              Preview your Label Design Live
            </div>
            {/* We pass null so it loads the default placeholder texture */}
            <BottleScene textureData={null} />
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BottleCraft?</h2>
            <p className="text-gray-600">Built for Pakistani Businesses & Events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition border border-gray-100">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">User-friendly Label Editor</h3>
              <p className="text-gray-600">Drag & drop your logo, add your brand name in Urdu & English, and customize colors effortlessly.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-green-50 transition border border-gray-100">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
              <p className="text-gray-600">We ship via Daewoo Cargo to all major cities and offer local delivery in Jamshoro/Hyderabad.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-purple-50 transition border border-gray-100">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-2">Eco-Conscious</h3>
              <p className="text-gray-600">Premium quality labels on recyclable bottles. Reduce waste & maximize impact of your brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: GALLERY SECTION --- */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Trusted by Local Brands</h2>
            <p className="text-gray-500 mt-2">See what others are crafting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group relative w-full h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={item.img} 
                  alt={item.brand} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <img
                  src={item.imgHover}
                  alt={item.brand}
                  className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'
                />
                <div className="absolute bottom-4 left-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white font-bold text-lg">{item.brand}</h3>
                  <p className="text-green-300 text-sm">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: PRICING TEASER --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-12">No hidden fees. Just bottles, labels, and delivery.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Pack */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-800">Starter Pack</h3>
              <div className="text-4xl font-bold text-brand-blue my-4">2,680 <span className="text-sm text-gray-500 font-normal">PKR</span></div>
              <p className="text-gray-500 mb-6">Perfect for small parties.</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                <li>✅ 48 Bottles (330ml)</li>
                <li>✅ Custom Waterproof Labels</li>
                <li>✅ Includes Delivery Cost</li>
              </ul>
              <Link to="/design" className="block w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition">
                Start Design
              </Link>
            </div>

            {/* Standard Pack */}
            <div className="border-2 border-brand-blue rounded-2xl p-8 shadow-2xl relative">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              <h3 className="text-xl font-bold text-gray-800">Event Pack</h3>
              <div className="text-4xl font-bold text-brand-blue my-4">5,000 <span className="text-sm text-gray-500 font-normal">PKR</span></div>
              <p className="text-gray-500 mb-6">For weddings & corporate.</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                <li>✅ 120 Bottles (330ml)</li>
                <li>✅ Premium Print Quality</li>
                <li>✅ Priority Delivery</li>
              </ul>
              <Link to="/design" className="block w-full py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-800 transition">
                Start Design
              </Link>
            </div>

            {/* Bulk */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-800">Business Bulk</h3>
              <div className="text-4xl font-bold text-brand-blue my-4">Custom</div>
              <p className="text-gray-500 mb-6">Restaurants & Hotels.</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                <li>✅ 500+ Bottles</li>
                <li>✅ Recurring Discounts</li>
                <li>✅ Dedicated Account Manager</li>
              </ul>
              <Link to="/pricing" className="block w-full py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">
                See Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-xl">BottleCraft PK</h4>
            <p className="text-gray-400 text-sm">Made with ❤️ in Jamshoro, Pakistan</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/design" className="hover:text-white">Label Designer</Link>
            <Link to="/careers" className="hover:text-white">Careers</Link>
            <span><a href='https://wa.me/message/LBK7LVG2OJB3C1'>WhatsApp</a></span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;