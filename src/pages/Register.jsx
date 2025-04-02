import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import NavbarWithoutLogin from "../components/NavbarWithoutLogin";
const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      if (localStorage.getItem("token")) {
        navigate("/search-scammer");
      }
    });

    const handleRegister = async () => {
      try {
          const response = await fetch(`${API_URL}/api/auth/register`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ name, email, password })
          });
  
          if (response.ok) {
              alert("Registration successful! Please log in.");
              navigate("/login");
          } else {
              const errorData = await response.json(); // Try to get error message
              alert(errorData.message || "Error registering user.");
          }
      } catch (err) {
          alert("Network error. Please try again.");
      }
  };
  

  return (
    <>
    <NavbarWithoutLogin/>
    <div className="min-h-screen flex items-center justify-center text-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 w-full max-w-md  border border-green-500 border-2">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">Create an Account</h1>
          <p className="text-gray-500 mt-2">
            Fill in the details below to create your account.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="mt-8"
        >
          <div className="mb-6">
            <input
              type="name"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg hover:from-green-600 hover:to-green-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 font-bold hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
