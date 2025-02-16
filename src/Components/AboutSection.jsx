import React from 'react';
import { FaRobot, FaUserMd, FaHospital } from 'react-icons/fa'; // Import icons

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-6 md:px-24">
      <div className="container mx-auto text-white">
        <h2 className="text-4xl font-semibold mb-6 text-center animate__animated animate__fadeInDown">About HEALTECH</h2>
        <p className="text-lg mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">
          HEALTECH is an ML-powered healthcare platform designed to enhance accessibility and efficiency in medical care. We provide AI-driven disease detection, doctor consultations, and pharmacy linkages in one seamless system. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all hover:shadow-xl hover:-translate-y-2 animate__animated animate__zoomIn">
            <FaRobot size={60} className="text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">ML-Driven Solutions</h3>
            <p className="text-gray-600">Utilizing the latest ML technologies to provide accurate diagnoses and recommendations.</p>
          </div>  
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all hover:shadow-xl hover:-translate-y-2 animate__animated animate__zoomIn">
            <FaUserMd size={60} className="text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Consultations</h3>
            <p className="text-gray-600">Connecting patients with healthcare professionals for timely consultations.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all hover:shadow-xl hover:-translate-y-2 animate__animated animate__zoomIn">
            <FaHospital size={60} className="text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Seamless Integration</h3>
            <p className="text-gray-600">Linking pharmacies and medical services for a holistic healthcare experience.</p>
          </div>
        </div>
        <p className="text-lg mt-8 text-center animate__animated animate__fadeIn animate__delay-2s">
          Our mission is to make quality healthcare available to everyone, regardless of location or socio-economic status.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
