import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import NavbarWithoutLogin from "../components/NavbarWithoutLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/search-scammer");
    }
  });
  

  const handleLogin = async () => {
    try {
      const { data } = await API.post("auth/login", { email, password });
      localStorage.setItem("token", data.token);
      navigate("/search-scammer");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
    <NavbarWithoutLogin/>
    <div className="min-h-screen flex items-center justify-center text-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 w-full max-w-md border border-green-500 border-2">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-500 mt-2">
            Log in to your account to continue.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="mt-8"
        >
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-400 focus:outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg hover:from-green-600 hover:to-green-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-green-500 font-bold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );

};

export default Login;
