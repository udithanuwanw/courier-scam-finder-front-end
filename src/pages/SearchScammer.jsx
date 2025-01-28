import React, { useState } from "react";
import API from "../services/api";

const SearchScammer = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const { data } = await API.get(`scammers/${input}`);
      setResult(data);
    } catch (err) {
      setResult("No record found.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Search Scammer</h1>
      <input
        type="text"
        placeholder="Enter Phone or ID Number"
        className="border p-2 w-full mb-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">
        Search
      </button>
      {result && <div className="mt-4">{typeof result === "string" ? result : JSON.stringify(result)}</div>}
    </div>
  );
};

export default SearchScammer;
