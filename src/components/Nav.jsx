import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">MyPortfolio</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded md:inline-block md:mt-0 md:ml-4 transition duration-300 ease-in-out hover:bg-gray-200  hover:opacity-60 hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white block px-3 py-2 rounded md:inline-block md:mt-0 md:ml-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:opacity-60 hover:text-black"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white block px-3 py-2 rounded md:inline-block md:mt-0 md:ml-4 transition duration-300 ease-in-out hover:bg-gray-200  hover:opacity-60 hover:text-black"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white block px-3 py-2 rounded md:inline-block md:mt-0 md:ml-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:opacity-60 hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
