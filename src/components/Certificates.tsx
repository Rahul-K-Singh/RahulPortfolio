import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: 'Visualization with Excel',
      issuer: 'Coursera',
      date: 'April 2024',
      url: 'https://www.coursera.org/account/accomplishments/specialization/QFELBJ6J7K2F',
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera',
      date: 'October 2024',
      url: 'https://www.coursera.org/account/accomplishments/verify/1USQV1LER220',
    },
    {
      title: 'Data Structures and Algorithms - Self paced',
      issuer: 'Geeks for Geeks',
      date: 'July 2024',
      url: 'https://media.geeksforgeeks.org/courses/certificates/e80e1f728a797ae2b8f40a2dbe93e123.pdf',
    },
    {
      title: 'R Programming',
      issuer: 'Coursera',
      date: 'April 2024',
      url: 'https://www.coursera.org/account/accomplishments/specialization/2KDQATMQ3DSG',
    },
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md border-t-4 border-blue-500 transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">
                {certificate.title}
              </h3>
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300">{certificate.issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{certificate.date}</p>
                {certificate.url && (
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 mt-3 hover:underline"
                  >
                    Verify <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;