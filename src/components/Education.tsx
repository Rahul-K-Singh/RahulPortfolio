// // // import React from 'react';
// // // import { GraduationCap } from 'lucide-react';

// // // interface TimelineItem {
// // //   title: string;
// // //   institution: string;
// // //   location: string;
// // //   period: string;
// // //   details: string;
// // //   icon: React.ReactNode;
// // // }

// // // const Education: React.FC = () => {
// // //   const timelineItems: TimelineItem[] = [
// // //     {
// // //       title: 'Bachelor of Technology',
// // //       institution: 'Lovely Professional University',
// // //       location: 'Punjab, India',
// // //       period: 'Since August 2022',
// // //       details: 'Computer Science and Engineering | CGPA: 7.4',
// // //       icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
// // //     },
// // //     {
// // //       title: 'Intermediate',
// // //       institution: 'Kendriya Vidyalaya Sukna',
// // //       location: 'Siliguri, West Bengal',
// // //       period: 'April 2019 - March 2020',
// // //       details: 'Percentage: 84%',
// // //       icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
// // //     },
// // //   ];

// // //   return (
// // //     <section id="education" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
// // //           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
// // //         </div>

// // //         <div className="relative">
// // //           {/* Timeline line */}
// // //           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

// // //           {/* Timeline items */}
// // //           <div className="space-y-12">
// // //             {timelineItems.map((item, index) => (
// // //               <div key={index} className="relative">
// // //                 {/* Timeline dot */}
// // //                 <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>

// // //                 <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
// // //                   {/* Date for mobile */}
// // //                   <div className="md:hidden mb-4 flex items-center">
// // //                     <div className="mr-4 p-2 rounded-full bg-blue-100 dark:bg-blue-900">
// // //                       {item.icon}
// // //                     </div>
// // //                     <div>
// // //                       <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
// // //                       <p className="text-sm text-gray-600 dark:text-gray-400">{item.period}</p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Content */}
// // //                   <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
// // //                     <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
// // //                       <div className="hidden md:block mb-2">
// // //                         <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
// // //                           <div className={`p-2 rounded-full bg-blue-100 dark:bg-blue-900 ${index % 2 === 0 ? 'ml-2' : 'mr-2'}`}>
// // //                             {item.icon}
// // //                           </div>
// // //                           <h3 className={`text-lg font-bold text-gray-900 dark:text-white ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
// // //                             {item.title}
// // //                           </h3>
// // //                         </div>
// // //                       </div>

// // //                       <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.institution}</h4>
// // //                       <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
// // //                       <div className="hidden md:block mt-1 text-sm text-gray-500 dark:text-gray-500">{item.period}</div>
// // //                       <p className="mt-2 text-gray-700 dark:text-gray-300">{item.details}</p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Empty div for alignment on desktop */}
// // //                   <div className="hidden md:block md:w-5/12"></div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Education;



// // import React from 'react';
// // import { GraduationCap } from 'lucide-react';

// // interface TimelineItem {
// //   title: string;
// //   institution: string;
// //   location: string;
// //   period: string;
// //   details: string;
// //   icon: React.ReactNode;
// // }

// // const Education: React.FC = () => {
// //   const timelineItems: TimelineItem[] = [
// //     {
// //       title: 'Bachelor of Technology',
// //       institution: 'Lovely Professional University',
// //       location: 'Punjab, India',
// //       period: 'Since August 2022',
// //       details: 'Computer Science and Engineering | CGPA: 7.4',
// //       icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
// //     },
// //     {
// //       title: 'Intermediate',
// //       institution: 'Kendriya Vidyalaya Sukna',
// //       location: 'Siliguri, West Bengal',
// //       period: 'April 2019 - March 2020',
// //       details: 'Percentage: 84%',
// //       icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
// //     },
// //   ];

// //   return (
// //     <section id="education" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
// //           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
// //         </div>

// //         <div className="relative">
// //           {/* Timeline line in center */}
// //           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

// //           {/* Timeline items */}
// //           <div className="flex flex-col space-y-12">
// //             {timelineItems.map((item, index) => (
// //               <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} items-center relative`}>
// //                 {/* Dot */}
// //                 <div className={`absolute ${index % 2 === 0 ? 'md:left-0' : 'md:right-0'} top-0 w-4 h-4 bg-blue-600 rounded-full z-10`}></div>

// //                 {/* Content box */}
// //                 <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:w-5/12">
// //                   <div className="flex items-center mb-2">
// //                     <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-2">
// //                       {item.icon}
// //                     </div>
// //                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
// //                   </div>
// //                   <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.institution}</h4>
// //                   <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
// //                   <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.period}</div>
// //                   <p className="mt-2 text-gray-700 dark:text-gray-300">{item.details}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Education;





// import React from 'react';
// import { GraduationCap } from 'lucide-react';

// interface TimelineItem {
//   title: string;
//   institution: string;
//   location: string;
//   period: string;
//   details: string;
//   icon: React.ReactNode;
// }

// const Education: React.FC = () => {
//   const timelineItems: TimelineItem[] = [
//     {
//       title: 'Bachelor of Technology',
//       institution: 'Lovely Professional University',
//       location: 'Punjab, India',
//       period: 'Since August 2022',
//       details: 'Computer Science and Engineering | CGPA: 7.4',
//       icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
//     },
//     {
//       title: 'Intermediate',
//       institution: 'Kendriya Vidyalaya Sukna',
//       location: 'Siliguri, West Bengal',
//       period: 'April 2019 - March 2020',
//       details: 'Percentage: 84%',
//       icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
//     },
//   ];

//   return (
//     <section id="education" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="relative">
//           {/* Center line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

//           <div className="space-y-16">
//             {timelineItems.map((item, index) => (
//               <div key={index} className="relative flex flex-col md:flex-row md:items-center">

//                 {/* Content */}
//                 <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} md:order-${index % 2 === 0 ? '1' : '2'}`}>
//                   <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//                     <div className="flex items-center mb-2 justify-center md:justify-start">
//                       <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-2">
//                         {item.icon}
//                       </div>
//                       <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
//                     </div>
//                     <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.institution}</h4>
//                     <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
//                     <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.period}</div>
//                     <p className="mt-2 text-gray-700 dark:text-gray-300">{item.details}</p>
//                   </div>
//                 </div>

//                 {/* Dot */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10"></div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;




import React from 'react';
import { GraduationCap } from 'lucide-react';

interface TimelineItem {
  title: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  icon: React.ReactNode;
}

const Education: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      title: 'Bachelor of Technology',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      period: 'Since August 2022',
      details: 'Computer Science and Engineering | CGPA: 7.4',
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Intermediate',
      institution: 'Kendriya Vidyalaya Sukna',
      location: 'Siliguri, West Bengal',
      period: 'April 2019 - March 2020',
      details: 'Percentage: 84%',
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative md:flex md:items-center md:justify-between">
                {/* Dot in center */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10"></div>

                {/* Left or right card */}
                <div
                  className={`
                    md:w-5/12 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800
                    ${index % 2 === 0 ? 'md:ml-0 md:mr-auto text-right' : 'md:mr-0 md:ml-auto text-left'}
                  `}
                >
                  <div className="flex items-center mb-2 justify-center md:justify-start">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-2">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.institution}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.period}</div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
