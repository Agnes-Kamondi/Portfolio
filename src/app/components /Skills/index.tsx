import React from 'react';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaDatabase,
  FaProductHunt,
  FaPaintBrush,
  FaSearch,
  FaShareAlt,
} from 'react-icons/fa';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FaLaptopCode size={40} className="text-blue-600" />,
    topics: [
      'DOM Manipulation in JavaScript',
      'Consuming RESTful APIs using Fetch and Axios',
      'Multi-Device Layout Optimization',
      'Responsive Web Development',
    ],
  },

  {
    category: 'Mobile Development',
    icon: <FaMobileAlt size={40} className="text-green-500" />,
    topics: [
      'Manipulating Layouts in Code',
      'Event-Driven Programming',
      'Network Integration with Retrofit',
      'Room Database Management',
    ],
  },

  {
    category: 'Backend Development',
    icon: <FaServer size={40} className="text-purple-600" />,
    topics: [
      'Web Development with Django',
      'Django REST Framework',
      'RESTful API Development',
      'Database Integration',
    ],
  },

  {
    category: 'Cloud Infrastructure',
    icon: <FaCloud size={40} className="text-indigo-500" />,
    topics: [
      'Containerization with Docker',
      'Application Deployment',
      'Cloud Infrastructure Fundamentals',
      'Development & Deployment Workflows',
    ],
  },

  {
    category: 'Data & Software Architecture',
    icon: <FaDatabase size={40} className="text-yellow-600" />,
    topics: [
      'SQL & Database Queries',
      'System Architecture Models',
      'Database Design & Modeling',
      'Data Analysis',
    ],
  },

  {
    category: 'Product Management',
    icon: <FaProductHunt size={40} className="text-pink-500" />,
    topics: [
      'Customer Persona Development',
      'Product Lifecycle Management',
      'Product-Market Fit Analysis',
      'Agile Methodologies',
    ],
  },

  {
    category: 'UI/UX Design',
    icon: <FaPaintBrush size={40} className="text-teal-500" />,
    topics: [
      'Visual Design Principles',
      'Wireframing & Prototyping',
      'Interactive Prototypes',
      'Color Psychology & Mood Boards',
    ],
  },

  {
    category: 'UX Research',
    icon: <FaSearch size={40} className="text-red-500" />,
    topics: [
      'Research Methodologies',
      'Usability Testing',
      'Human-Centered Design',
      'Research Analysis & Synthesis',
    ],
  },

  {
    category: 'Social Media Management',
    icon: <FaShareAlt size={40} className="text-pink-500" />,
    topics: [
      'Social Media Strategy',
      'Content Planning & Creation',
      'Social Media Analytics',
      'Campaign Management',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black-500">
            Skills
          </h2>

          <p className="text-gray-600 text-xl mt-3">
            A combination of technical, creative, product, research, and
            digital marketing skills.
          </p>

          <div className="mt-4 h-1 w-16 bg-pink-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >

              {/* Icon & Category */}
              <div className="flex items-center mb-6">
                {skill.icon}

                <h3 className="text-2xl font-bold ml-4 text-gray-800">
                  {skill.category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="text-gray-700 mb-2 list-disc ml-8">
                {skill.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="text-lg mb-2"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;