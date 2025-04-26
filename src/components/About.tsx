import React from 'react';
import { CodeIcon, GraduationCap, Database, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <CodeIcon className="h-8 w-8 text-blue-500" />,
      value: '3+',
      label: 'Programming Languages'
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-500" />,
      value: '2+',
      label: 'Projects Completed'
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
      value: '7.4',
      label: 'CGPA'
    },
  ];

  //   return (
  //     <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
  //       <div className="max-w-7xl mx-auto">
  //         <div className="text-center mb-16">
  //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
  //           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
  //         </div>

  //         <div className="mb-12 max-w-3xl mx-auto text-center">
  //           <p className="text-lg text-gray-600 dark:text-gray-300">
  //             I am a B.Tech CSE student with a strong foundation in Data Science, passionate about transforming raw data into meaningful insights. Proficient in R, Tableau, and SQL, I have hands-on experience with real-world datasets and am committed to continuous learning through self-driven projects. I look forward to growing and exploring more in this field, with the goal of making a positive impact on society.
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
  //           {stats.map((stat, index) => (
  //             <div 
  //               key={index} 
  //               className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center transform transition-transform hover:scale-105 shadow-md"
  //             >
  //               <div className="flex justify-center mb-3">
  //                 {stat.icon}
  //               </div>
  //               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
  //               <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  // export default About;

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I am a B.Tech CSE student with a strong foundation in Data Science, passionate about transforming raw data into meaningful insights. Proficient in R, Tableau, and SQL, I have hands-on experience with real-world datasets and am committed to continuous learning through self-driven projects. I look forward to growing and exploring more in this field, with the goal of making a positive impact on society.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center transform transition-transform hover:scale-105 shadow-md"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;