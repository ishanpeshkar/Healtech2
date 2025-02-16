import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 px-6 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">AI-Driven Smart Healthcare: Diagnose, Connect, Heal.</h1>
          <p className="text-lg mb-6">
            HEALTECH revolutionizes healthcare with AI-powered diagnostics, seamless doctor consultations, and pharmacy linkages.  Experience accessible and efficient medical care.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Get Started
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* Replace with an actual image later */}
          <img src="/Images/HeroSectionImage.jpg" alt="Healthcare AI Concept" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;