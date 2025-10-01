import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Products from "../pages/Products";
import Distributer from "../pages/Distributer";
import Contact from "../pages/Contact";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "../Pages/Home";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Sliding underline effect
  const linkClasses = ({ isActive }) =>
    `relative pb-1 transition-all duration-700 
     ${isActive ? "text-[#FF0000]" : "text-gray-700 hover:text-[#FF0000]"} 
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] 
     after:bg-[#FF0000] after:transition-all after:duration-700 
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

    const linkClassesMobile = ({ isActive }) =>
  `relative text-center w-full px-4 py-2 border-b border-gray-300
   ${isActive ? "text-white bg-[#FF0000] border-[#FF0000] after:w-full" : "text-gray-700 hover:text-[#FF0000]"}
   after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#FF0000]
   ${isActive ? "" : "after:w-0 hover:after:w-full after:transition-all after:duration-700"} 
   ${isActive ? "transition-none" : "transition-colors duration-700"}`;

  

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-around p-4 bg-white shadow">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src="/images/Voltbull.png" alt="Logo" className="h-20" />
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About Us</NavLink>
          <NavLink to="/products" className={linkClasses}>Our Products</NavLink>
          <NavLink to="/distributer" className={linkClasses}>Become Distributor</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaBars size={24} className="text-[#FF0000]" /> : <FaBars size={24} className="text-gray-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-4 bg-white shadow flex flex-col items-center font-medium">
          <NavLink to="/" className={linkClassesMobile} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClassesMobile} onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/products" className={linkClassesMobile} onClick={() => setIsOpen(false)}>Our Products</NavLink>
          <NavLink to="/distributer" className={linkClassesMobile} onClick={() => setIsOpen(false)}>Become Distributor</NavLink>
          <NavLink to="/contact" className={linkClassesMobile} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/distributer" element={<Distributer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Navbar;
