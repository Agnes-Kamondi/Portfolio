import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-pink-50 min-h-screen flex items-center justify-between px-10 md:px-24 py-2"> {/* Reduced padding */}
      <div className="md:w-1/2 space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm Agnes <br />
            <span className="text-6xl text-blue-900">A Fullstack Developer.</span>
          </h1>
          <p className="text-black-500 text-lg">
            I specialize in building responsive web and mobile applications that are scalable and efficient. I focus on delivering quality work that exceeds expectations.
          </p>
        </div>

        <div className="flex space-x-6 mt-6">
          {/* Twitter Icon */}
          <a href="https://x.com/Agnes_Kamondi" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaTwitter size={24} /> 
          </a>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/agnes-auma-356a4b2b1/" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaLinkedinIn size={24} /> 
          </a>
          {/* Gmail (Email) Icon */}
          <a href="mailto:kamondiagnesauma@gmail.com" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaEnvelope size={24} /> 
          </a>
          {/* GitHub Icon */}
          <a href="https://github.com/Agnes-Kamondi" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaGithub size={24} /> 
          </a>
        </div>
        
        {/* Download CV Button */}
        <a 
          href="/images/Agnes%20Auma%20CV.pdf"  // Ensure the correct path with escaped spaces
          download="Agnes_Auma_CV.pdf" 
          className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          Download CV
        </a>
      </div>

      <div className="md:w-1/2 hidden md:block ml-48">
        <Image 
          src="/images/Auma.jpg" 
          alt="Agnes A. Kamondi" 
          className="rounded-2xl w-[600px] h-[600px]" 
          width={1000} 
          height={1000} 
        />
      </div>
      
    </section>
  );
};

export default Hero;
