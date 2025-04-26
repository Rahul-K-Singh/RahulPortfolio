import React from 'react';
import { Code, Database, Terminal, LineChart, Users } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: 'C++' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'R' },
      ],
    },
    {
      title: 'Web Development',
      icon: <Terminal className="h-6 w-6 text-purple-500" />,
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
      ],
    },
    {
      title: 'Data Technologies',
      icon: <Database className="h-6 w-6 text-green-500" />,
      skills: [
        { name: 'MySQL' },
        { name: 'Tableau' },
        { name: 'MS Excel' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users className="h-6 w-6 text-orange-500" />,
      skills: [
        { name: 'Adaptability' },
        { name: 'Time Management' },
        { name: 'Problem Solving' },
        { name: 'Active Listening' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-transform hover:shadow-lg">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      {/* <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span> */}
                    </div>
                    {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            <LineChart className="inline-block mr-2 mb-1" size={24} />
            Data Analysis Workflow
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 mt-8">
            {[
              { title: 'Data Collection', desc: 'Gathering relevant data from various sources' },
              { title: 'Data Cleaning', desc: 'Processing and transforming data for analysis' },
              { title: 'Analysis', desc: 'Applying statistical methods to extract insights' },
              { title: 'Visualization', desc: 'Creating visual representations of findings' },
              { title: 'Interpretation', desc: 'Deriving meaningful conclusions from results' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center w-48">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-lg mt-2 text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;