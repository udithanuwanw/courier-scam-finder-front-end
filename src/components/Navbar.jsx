import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/add-scammer" className="mr-4">Add Scammer</Link>
        <Link to="/search-scammer" className="mr-4">Search Scammer</Link>
      </div>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded">Logout</button>
    </nav>
  );
};

export default Navbar;
