import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Or 'a' tag if not using React Router
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Signup = () => {
    const navigate = useNavigate(); // Hook for navigation

    const [loading, setLoading] = useState(false); // State for loading animation

    const handleSignup = async () => {
        setLoading(true); // Start loading

        // Simulate an asynchronous signup process (replace with your actual signup logic)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setLoading(false); // Stop loading

        // Redirect to another page after successful signup
        navigate('/'); // Redirect to the home page, replace '/' with your desired route
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
                {/* Left Side: Welcome Back! */}
                <div className="w-2/5 bg-purple-600 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12 relative">
                    <div className="absolute top-0 left-0 w-full h-full rounded-tl-2xl rounded-bl-2xl bg-gradient-to-b from-purple-500 to-purple-700 opacity-50"></div>
                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                        <p className="mb-6">Enter your personal details to use all of site features</p>
                        <Link to="/login" className="border border-white rounded-md py-2 px-4 hover:bg-white hover:text-purple-700 transition duration-300 font-bold">
                            SIGN IN
                        </Link>
                    </div>
                </div>

                {/* Right Side: Create Account Form */}
                <div className="w-3/5 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Account</h2>
                    <div className="flex space-x-4 mb-6">
                        <Link to="#" className="border rounded-full p-2 hover:bg-gray-50">
                            <FaGoogle className="text-red-500" />
                        </Link>
                        <Link to="#" className="border rounded-full p-2 hover:bg-gray-50">
                            <FaFacebook className="text-blue-500" />
                        </Link>
                        <Link to="#" className="border rounded-full p-2 hover:bg-gray-50">
                            <FaGithub className="text-gray-800" />
                        </Link>
                        <Link to="#" className="border rounded-full p-2 hover:bg-gray-50">
                            <FaLinkedin className="text-blue-700" />
                        </Link>
                    </div>
                    <p className="text-gray-600 mb-6">or use your email for registration</p>

                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4 focus:outline-none focus:border-blue-500"
                    />

                    <button
                        onClick={handleSignup}
                        className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mx-auto"></div> : 'SIGN UP'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;

