import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle Login vs Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- MOCK AUTHENTICATION LOGIC ---
    // In a real app, you would send a POST request to your backend here.
    
    if (email === "admin@bottlecraft.pk" && password === "admin123") {
      // Admin Login
      localStorage.setItem("userRole", "admin");
      navigate('/admin');
    } else {
      // Member Login (Simulated)
      if(email && password) {
        localStorage.setItem("userRole", "member");
        localStorage.setItem("userEmail", email);
        navigate('/dashboard'); // Go to Member Dashboard
      } else {
        alert("Please enter valid credentials");
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Side: Visuals */}
      <div className="hidden lg:flex w-1/2 bg-brand-blue items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-900 opacity-90"></div>
        <div className="z-10 text-white text-center px-12">
          <h1 className="text-5xl font-bold mb-6">BottleCraft PK</h1>
          <p className="text-xl text-blue-100 mb-8">
            {isLogin 
              ? "Welcome back! Ready to design your next masterpiece?" 
              : "Join Pakistan's largest growing custom label community."}
          </p>
          <div className="w-64 h-64 mx-auto bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center">
            <span className="text-6xl">💧</span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
          
          {/* Toggle Tabs */}
          <div className="flex mb-8 border-b">
            <button 
              className={`w-1/2 pb-4 font-bold text-lg ${isLogin ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-400'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`w-1/2 pb-4 font-bold text-lg ${!isLogin ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-400'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="Ali Khan" />
              </div>
            )}
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition" 
                placeholder="name@example.com" 
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition" 
                placeholder="••••••••" 
                required
              />
            </div>

            <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <Link to="/" className="text-brand-blue hover:underline">← Back to Home</Link>
            {/* {isLogin && (
              <p className="mt-4">
                Admin? Use <span className="font-mono bg-gray-100 p-1 rounded">admin@bottlecraft.pk</span>
              </p>
            )} */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;