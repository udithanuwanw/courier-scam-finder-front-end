import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddScammer from "./pages/AddScammer";
import SearchScammer from "./pages/SearchScammer";
import Home from "./pages/Home";
import NavbarWithoutLogin from "./components/NavbarWithoutLogin";

const App = () => {
  return (
    <Router>
      <NavbarWithoutLogin/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-scammer" element={<AddScammer />} />
        <Route path="/search-scammer" element={<SearchScammer />} />
      </Routes>
    </Router>
  );
};

export default App;
