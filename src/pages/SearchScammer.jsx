import React, { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";


const SearchScammer = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const { data } = await API.get(`scammer/search/${input}`);
      setResult(data);
    } catch (err) {
      setResult("No record found.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-center">Search Scammer</h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter Phone or ID Number"
            className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Search
          </button>
        </div>
        
        {result && (
          <div className="mt-6">
            {typeof result === "string" ? (
              <div className="text-center text-red-500">{result}</div>
            ) : (
              <div className="border p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">Scammer Details</h2>
                <div className="mb-2">
                  <strong>Full Name:</strong> {result.fullName}
                </div>
                <div className="mb-2">
                  <strong>Phone Number:</strong> {result.phoneNumber}
                </div>
                <div className="mb-2">
                  <strong>ID Number:</strong> {result.idNumber}
                </div>
                <div className="mb-2">
                  <strong>Address:</strong> {result.address}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchScammer;
