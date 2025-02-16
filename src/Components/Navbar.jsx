import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">

        {/* Logo (Left) */}
        <Link to="/" className="text-2xl font-semibold text-blue-500">
          HEALTECH  {/* Replace with an actual logo image if you have one */}
        </Link>

        {/* Navigation Links (Middle) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/features" className="hover:text-gray-500">Features</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact</Link>
        </div>

        {/* Login/Sign-Up (Right) */}
        <div className="space-x-4">
          <Link to="/login" className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded transition duration-300">
            Login
          </Link>
          <Link to="/signup" className="py-2 px-4 border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 font-semibold rounded transition duration-300">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu (Mobile, optional) */}
        <button className="md:hidden">
          {/* Replace with a hamburger icon (e.g., from react-icons) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
