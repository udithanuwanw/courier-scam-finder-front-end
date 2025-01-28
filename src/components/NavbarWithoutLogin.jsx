import React from 'react';
import { Link } from 'react-router-dom';

const NavbarWithoutLogin = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 pr-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-extrabold">
          <Link to="/" className="hover:text-gray-200">
            Courier Scam Finder
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="space-x-10 text-white font-semibold">
          <Link
            to="/register"
            className="hover:text-green-200 transition duration-300 ease-in-out"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="hover:text-green-200 transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/about"
            className="hover:text-green-200 transition duration-300 ease-in-out"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-200 transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWithoutLogin;
