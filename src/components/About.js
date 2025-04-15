import React from 'react';
import './about.css';  // Import custom CSS for the animations

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Hi, I'm Stuti</h1>
        <p className="text-xl mt-4">Software Engineer | Game Developer</p>
        <p className="mt-2 text-lg text-gray-600">
          Currently in 3rd Year, CSE Integrated M.Tech at Jaypee Institute of Information Technology
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Skills</h2>
        <div className="flex justify-around items-center space-x-8">
          <div className="skill-icon rotate-infinite">
            <img src="/path/to/react-icon.svg" alt="React" className="w-16 h-16 hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="skill-icon rotate-infinite">
            <img src="/path/to/js-icon.svg" alt="JavaScript" className="w-16 h-16 hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="skill-icon rotate-infinite">
            <img src="/path/to/python-icon.svg" alt="Python" className="w-16 h-16 hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="skill-icon rotate-infinite">
            <img src="/path/to/cplusplus-icon.svg" alt="C++" className="w-16 h-16 hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
