import React, { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddScammer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    idNumber: "",
    address: "",
  });

  const handleSubmit = async () => {
    try {
      await API.post("scammer/add", formData);
      alert("Scammer added successfully!");
      navigate("/search-scammer");
    } catch (err) {
      alert("Error adding scammer.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">Add Scammer</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="idNumber" className="block text-sm font-medium mb-2">ID Number</label>
            <input
              type="text"
              id="idNumber"
              placeholder="Enter ID Number"
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.idNumber}
              onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">Address</label>
            <textarea
              id="address"
              placeholder="Enter Address"
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200"
            >
              Add Scammer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddScammer;
