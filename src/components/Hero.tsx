import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rahul Kumar Singh</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
            Computer Science Engineer & Data Enthusiast
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-5 pt-2">
            <a
              href="https://www.linkedin.com/in/rahul-s-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Rahul-K-Singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a
              href="mailto:rahul.kumarsingh911r@gmail.com"
              className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGK-yU1M7bXGA/profile-displayphoto-shrink_400_400/B56ZZxLfCMGoAg-/0/1745655558806?e=1750896000&v=beta&t=KD45Eh7Laz3NLEpmiF9AGlpZKbE-6l-TkrckNh1g0Co"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;