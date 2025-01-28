import React, { useState } from "react";
import API from "../services/api";

const AddScammer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    idNumber: "",
    address: "",
  });

  const handleSubmit = async () => {
    try {
      await API.post("scammers", formData);
      alert("Scammer added successfully!");
    } catch (err) {
      alert("Error adding scammer.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Add Scammer</h1>
      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 w-full mb-4"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="border p-2 w-full mb-4"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="ID Number"
        className="border p-2 w-full mb-4"
        value={formData.idNumber}
        onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
      />
      <textarea
        placeholder="Address"
        className="border p-2 w-full mb-4"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
        Add Scammer
      </button>
    </div>
  );
};

export default AddScammer;
