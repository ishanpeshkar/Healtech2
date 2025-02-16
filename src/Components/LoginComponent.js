import React from 'react';
import { Link } from 'react-router-dom'; // Or 'a' tag if not using React Router
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
                {/* Left Side: Sign-In Form */}
                <div className="w-3/5 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign In</h2>
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
                    <p className="text-gray-600 mb-6">or use your email password</p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2 focus:outline-none focus:border-blue-500"
                    />
                    <div className="flex justify-between items-center mb-6">
                        <Link to="#" className="text-gray-600 hover:text-gray-800">Forget Your Password?</Link>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full transition duration-300">
                        SIGN-IN
                    </button>
                </div>

                {/* Right Side: "Hello, Friend!" Section */}
                <div className="w-2/5 bg-purple-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 relative">
                    <div className="absolute top-0 left-0 w-full h-full rounded-tr-2xl rounded-br-2xl bg-gradient-to-b from-purple-500 to-purple-700 opacity-50"></div>
                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                        <p className="mb-6">Register with your personal details to use all of site features</p>
                        <Link to="/signup" className="border border-white rounded-md py-2 px-4 hover:bg-white hover:text-purple-700 transition duration-300 font-bold">
                            SIGN UP
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
