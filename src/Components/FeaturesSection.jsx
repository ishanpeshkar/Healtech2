import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { MdLocalHospital, MdCalendarMonth, MdLocalPharmacy, MdAttachMoney } from 'react-icons/md'; 

const FeaturesSection = () => {
  const features = [
    {
      icon: <MdLocalHospital size={40} />,
      title: 'AI Disease Prediction',
      description: 'Input symptoms and get instant AI-driven analysis for potential conditions.',
      path: '/disease-detection', // Add path for Disease Detection
      buttonLabel: 'Learn More', // Button label
    },
    {
      icon: <MdCalendarMonth size={40} />,
      title: 'Appointment Booking',
      description: 'Find and consult with doctors online, based on your needs.',
      path: '/consultation', // Add path for Consultation
      buttonLabel: 'Book Now', // Button label
    },
    {
      icon: <MdLocalPharmacy size={40} />,
      title: 'Pharmacy Linkage',
      description: 'Locate the nearest and most affordable medicines in your area.',
      path: '#', // Can provide a route or leave as #
      buttonLabel: 'Find Medicines', // Button label
    },
    {
      icon: <MdAttachMoney size={40} />,
      title: 'Medical Tourism & Cost Estimation',
      description: 'Compare treatment costs and explore medical tourism options.',
      path: '#', // Can provide a route or leave as #
      buttonLabel: 'Explore Options', // Button label
    },
  ];

  return (
    <div className="py-16 px-6 md:px-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.path || '#'} className="no-underline">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {/* Button added here */}
                <Link to={feature.path || '#'} className="mt-4 inline-block bg-blue-500 text-white rounded-lg py-2 px-4 text-center transition duration-300 hover:bg-blue-600">
                  {feature.buttonLabel}
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
