"use client"
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Importing play/pause icons

const WorkProcess = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track video play/pause

  const handlePlayPause = () => {
    if (videoRef.current) { // Check if videoRef.current is not null
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
        setIsPlaying(false); // Update state to show it's paused
      } else {
        videoRef.current.play(); // Play the video
        setIsPlaying(true); // Update state to show it's playing
      }
    }
  };

  return (
    <section id="workprocess" className="py-20">
      {/* Full Width Container */}
      <div className="w-full relative h-[600px] overflow-hidden">
        {/* Video Embed */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/workprocess.mp4" // Updated video path
          ref={videoRef} // Attach ref to video
          muted
          loop
          controls={false} // No default controls
          playsInline // Ensure the video works across different browsers without autoplay
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
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
          <h3 className="text-5xl font-bold text-white mb-4">Working Process</h3>
          {/* Description */}
          <p className="text-white text-lg max-w-lg mx-auto">
            In this video, I walk you through the process of creating applications—from concept to deployment. Discover how ideas turn into scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
