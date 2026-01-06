import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./dashboards/AdminDashboard";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/LoginPage";
import MemberDashboard from "./dashboards/MemberDashboard";
import CareersPage from "./pages/CareersPage";
import AboutUsPage from "./pages/AboutUsPage";
import DesignTool from "./pages/DesignTool";
import LandingPage from "./pages/LandingPage";


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
