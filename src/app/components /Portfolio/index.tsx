import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const projectItems = [
    {
      title : 'SawaTok',
      description : 'A project aimed at empowering Kenyan children aged 4-6 with stuttering speech disorders.',
      link : 'https://drive.google.com/drive/folders/1YAzDQCN-n_jCeh0IMs7uEq74WcZeFS2T?usp=sharing',
      image:'/images/Sawatok.png',
    },
    {
      title: 'Edukeri',
      description : 'This project aims to tackle digital illiteracy among teachers in rural Kenyan schools.',
      link : 'https://drive.google.com/drive/folders/1Lcnlmibqv_-HHkHbjP8BzVZR_8u4ozdZ?usp=sharingo9',
      image :'/images/Teacher.webp',
    },
    {
      title : 'Sentiment Analysis on Movie Reviews',
      description : 'Built an NLP model using Python and NLTK to analyze and classify sentiment in movie reviews.',
      link : 'https://github.com/Agnes-Kamondi/FeatureEngineering-',
      image : '/images/machine.jpg',
    },
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
      description: 'An app developed using Android Studio to help professionals track their cash flow effectively.',
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
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={600} 
                height={300} 
                className="object-cover rounded-md mb-6 h-[200px] w-full"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 flex items-center mb-4"
              >
                {project.title} <FaExternalLinkAlt className="ml-2" />
              </a>
              <p className="text-black-500 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;