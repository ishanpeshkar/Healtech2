import React from 'react';
import { Link } from 'react-router-dom';

const AIDiseasePrediction = () => {
  return (
    <div className="container mx-auto py-12 px-6 md:px-24">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800 text-center">AI Disease Prediction</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/diabetes" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Diabetes Prediction</h2>
          <p className="text-gray-600">Predict your risk of diabetes based on various parameters.</p>
        </Link>

        <Link to="/heart" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Heart Disease Prediction</h2>
          <p className="text-gray-600">Assess your risk of heart disease using our AI-powered prediction tool.</p>
        </Link>

        {/* ✅ Fixed Route to Match App.js */}
        <Link to="/respiratory" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Pneumonia Prediction</h2>
          <p className="text-gray-600">Upload an X-ray image to detect pneumonia.</p>
        </Link>
      </div>
    </div>
  );
};

export default AIDiseasePrediction;
