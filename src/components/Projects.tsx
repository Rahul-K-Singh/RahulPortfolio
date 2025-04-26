import React, { useState } from 'react';
import { Code, Database, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  description: string;
  details: string[];
  outcomes: string[];
  tech: string[];
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'EMPLOYEE MANAGEMENT SYSTEM',
      period: 'January 2025',
      description: 'Build a Java-based system to manage employee records.',
      details: [
        'Features include employee data storage, search, update, and deletion.'
      ],
      outcomes: [
        'Improved database management',
        'Java development',
        'CRUD operations understanding'
      ],
      tech: ['Java', 'SQL', 'OOP'],
      icon: <Database className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'CUSTOMER ANALYTICS',
      period: 'November 2024',
      description: 'Analyze customer shipment data to identify key factors affecting on-time deliveries, segment delayed customers, and conduct competitor sentiment analysis.',
      details: [
        'Built classification models to predict on-time deliveries',
        'Visualized shipment patterns',
        'Performed customer segmentation',
        'Conducted competitor sentiment analysis'
      ],
      outcomes: [
        'Identified key shipment delay factors',
        'Developed predictive models',
        'Segmented delayed customers',
        'Analyzed competitor sentiment'
      ],
      tech: ['R', 'Data Analysis', 'Machine Learning', 'Visualization'],
      icon: <LineChart className="h-8 w-8 text-green-500" />
    },
    {
      title: 'N-QUEENS',
      period: 'July 2024',
      description: 'Develop a C++ program to solve the N-Queens problem using backtracking.',
      details: [
        'Implements recursive backtracking to place N-Queens on an N×N chessboard',
        'Ensures no two queens attack each other',
        'Features include solution validation, multiple solution display, and optimized searching'
      ],
      outcomes: [
        'Improved understanding of backtracking algorithms',
        'Enhanced recursion skills in C++',
        'Developed problem-solving skills in constraint-based problems'
      ],
      tech: ['C++', 'Algorithms', 'Backtracking', 'Problem Solving'],
      icon: <Code className="h-8 w-8 text-purple-500" />
    }
  ];

  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div 
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleProject(index)}
              >
                <div className="flex items-start md:items-center">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.period}</p>
                  </div>
                </div>
                <div className="transform transition-transform duration-300" style={{ transform: activeProject === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <ArrowUpRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <div 
                className={`px-6 pb-6 transition-all duration-300 ${
                  activeProject === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Details:</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Outcomes:</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import LineChart that wasn't defined earlier
const LineChart: React.FC<{ className: string }> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
};

export default Projects;