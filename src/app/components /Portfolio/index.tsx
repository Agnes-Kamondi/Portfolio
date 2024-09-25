import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing icon for external links

const Projects = () => {
  const projectItems = [
    {
      title: 'School',
      description: 'A school management system built with Django enables admins to track teachers, students, and courses, with data accessed and updated via JSON APIs.',
      link: 'https://github.com/Agnes-Kamondi/project_school.git',
      image: '/images/school.jpeg', 
    },
    {
      title: 'Weather Forecast',
      description: 'A weather forecasting application built using React.js leveraging Weather API crafted to provide users with real-time weather updates by inputting a city name.',
      link: 'https://github.com/Agnes-Kamondi/Weather-Forecast.git',
      image: '/images/weather.webp', 
    },
    {
      title: 'Enwallet',
      description: 'An app developed using Android Studio to help professionals track their cash flow effectively. Users can easily monitor their income and expenses, ensuring they stay on top of their finances.',
      link: 'https://github.com/Agnes-Kamondi/EnwalletApp.git',
      image: '/images/wallet.jpeg', 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectItems.map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-6" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 flex items-center mb-4"
              >
                {project.title} <FaExternalLinkAlt className="ml-2" />
              </a>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
