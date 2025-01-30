// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 px-10  text-black flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-11" />
      </div>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </div>
      <div className={`absolute md:static top-16 left-0 w-full md:flex md:items-center md:w-auto md:space-x-4 ${isOpen ? "block" : "hidden"}`}>
        <Link className="block px-3 py-2 md:inline-block" to="/">Home</Link>
        <Link className="block px-3 py-2 md:inline-block" to="/about">About</Link>
        <Link className="block px-3 py-2 md:inline-block" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
