"use client";
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const WorkProcess = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); 
  const [isPlaying, setIsPlaying] = useState(false); 

  const handlePlayPause = () => {
    if (videoRef.current) { 
      if (isPlaying) {
        videoRef.current.pause(); 
        setIsPlaying(false); 
      } else {
        videoRef.current.play(); 
        setIsPlaying(true); 
      }
    }
  };

  return (
    <section id="workprocess" className="py-20">
      <div className="relative w-full h-[60vh] md:h-[600px] overflow-hidden">
        {/* Video Embed */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/workprocess.mp4" 
          ref={videoRef} 
          muted
          loop
          controls={false}
          playsInline 
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          {/* Play/Pause Button */}
          <div className="mb-6">
            <button
              onClick={handlePlayPause}
              className="inline-block bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition duration-300"
            >
              {isPlaying ? <FaPause size={36} /> : <FaPlay size={36} />}
            </button>
          </div>
          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Working Process</h3>
          {/* Description */}
          <p className="text-white text-base md:text-lg max-w-lg mx-auto">
            This video walks you through the process of creating applications from concept to deployment. Discover how ideas turn into scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;