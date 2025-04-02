import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarWithoutLogin from "../components/NavbarWithoutLogin";


const Home = () => {
  const navigate = useNavigate();
  
  const handleStart = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <>
    <NavbarWithoutLogin/>
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Section (Description) */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Welcome to Courier Scam Finder
            </h1>
            <p className="text-lg text-white mb-6">
            Courier Scam Finder helps courier companies quickly identify suspicious customers, allowing businesses to protect themselves and ensure they are working with trusted and reliable clients.
            </p>
            <button
              onClick={handleStart}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:from-green-600 hover:to-green-700 transition duration-300"
            >
              Start Using It
            </button>
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-center lg:w-1/2">
          <img
            src="Marketing-bro.png" // Replace with your actual image URL
            alt="Courier Scam Finder"
            
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
