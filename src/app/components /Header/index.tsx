"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-100 pt-8 shadow-sm">
      <div className="container mx-auto flex justify-between items-center relative px-4 md:px-8">
        {/* Name with curvy font */}
        <div className="text-lg font-bold">
          <p
            className="text-3xl text-pink-500 font-serif"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Agnes A. Kamondi
          </p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose size={30} className="text-pink-500" />
          ) : (
            <MdMenu size={30} className="text-pink-500" />
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out z-10 ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0">
            <li>
              <a href="#about" className="hover:text-pink-500 text-xl">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-pink-500 text-xl">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-pink-500 text-xl">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500 text-xl">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
