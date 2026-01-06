import React from 'react';
import Navbar from '../components/Navbar';

const CareersPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Labeling & Packaging Supervisor",
      department: "Worker / Staff",
      location: "Jamshoro (On-site)",
      type: "Full-time",
      description: "We are looking for someone who is fast and responsible with their work, who can neatly apply labels to the water bottles and pack them properly in boxes before handing them over to the transport supervisor."
    },
    {
      id: 2,
      title: "Delivery Operations Manager",
      department: "Logistics",
      location: "Jamshoro (On-site)",
      type: "Full-time",
      description: "Manage our Daewoo Cargo relationships and ensure every bottle reaches its destination safely."
    },
    {
      id: 3,
      title: "Accounts Manager",
      department: "Administration Operations",
      location: "Jamshoro (On-site)",
      type: "Full-time",
      description: "Keep track of expenses, profits, and costs while ensuring availability of stocks and accounts management."
    },
    {
      id: 4,
      title: "Admin & Security In-charge",
      department: "Security",
      location: "Jamshoro (On-site)",
      type: "Contract",
      description: "Take full charge of security and admin operations to ensure that no unauthorized personnel can disrupt the operations."
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="bg-gray-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Build the Future of Custom Labeled Bottles</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Join a team that is democratizing branding for thousands of Pakistani businesses.
        </p>
      </div>

      {/* Values */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-blue-50 rounded-2xl">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-bold text-xl mb-2">Innovation First</h3>
            <p className="text-gray-600">We don't just print labels; we build technology that makes design accessible to everyone.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="font-bold text-xl mb-2">Eco-Conscious</h3>
            <p className="text-gray-600">We are committed to reducing plastic waste by promoting reusable bottles and sustainable inks.</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-2xl">
            <div className="text-4xl mb-4">🇵🇰</div>
            <h3 className="font-bold text-xl mb-2">Proudly Local</h3>
            <p className="text-gray-600">From Karachi to Peshawar, we empower local businesses to look world-class.</p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500 mt-2 mb-4 md:mb-0">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                    <span className="flex items-center gap-1">📍 {job.location}</span>
                    <span className="flex items-center gap-1">⏰ {job.type}</span>
                  </div>
                  <p className="text-gray-600 mt-2 md:hidden">{job.description}</p>
                </div>
                <a 
                  href={`mailto:careers@bottlecraft.pk?subject=Application for ${job.title}`}
                  className="px-6 py-2 border border-brand-blue text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-gray-600">
            Don't see your role? Email us at <a href="mailto:careers@bottlecraft.pk" className="text-brand-blue font-bold underline">careers@bottlecraft.pk</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CareersPage;