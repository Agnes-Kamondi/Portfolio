import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://x.com/Agnes_Kamondi" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com/Agnes-Kamondi" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/agnes-auma-356a4b2b1/" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} />
            </a>
            <a href="mailto:kamondiagnesauma@gmail.com" className="text-white hover:text-pink-500 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
          {/* Email Address */}
          <p className="text-lg text-gray-300 mb-4">kamondiagnesauma@gmail.com</p>
          {/* Footer Text */}
          <p className="text-gray-500 text-sm">&copy; 2024 Personal Portfolio</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
