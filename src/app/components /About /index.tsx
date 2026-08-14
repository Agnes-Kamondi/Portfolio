import React from 'react';
import Image from 'next/image'; 

const About = () => {
  return (
    <section id="about" className="py-8 bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-10">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-black-500">About Me</h2>
          <p className="text-black-500 text-xl mt-2">
                Passionate About Technology & Continuous Learning
          </p>
          <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image Section */}
          <div className="md:w-1/2 relative mb-8 md:mb-0">
            <div className="absolute -inset-4 border-4 border-pink-500 rounded-lg"></div>
            <Image
              src="/images/laptop.jpeg"
              alt="About Me"
              className="relative rounded-lg shadow-lg w-full h-[500px] object-cover"
              width={630} 
              height={630} 
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-4xl font-bold text-blue-900 text-center md:text-left">
                  Building Digital Solutions That Make an Impact
            </h3>
            <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
              I am a technology and digital professional with experience across software
              development, product management, UI/UX design, data, and social media
              management. I enjoy combining technical thinking, creativity, and
              problem-solving to build digital experiences that are practical, engaging,
               and user-focused.
            </p>

            <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
               My experience spans developing responsive web and mobile applications,
               designing user-centered interfaces, working with data and APIs, supporting
               product development, and managing digital content and social media
               platforms. I approach every project with a focus on understanding the
               problem first, creating thoughtful solutions, and continuously improving
               the end result.
            </p>

            <a href="#contact" className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 shadow-md">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;