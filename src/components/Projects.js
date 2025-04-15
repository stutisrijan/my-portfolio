// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Project 1</h3>
            <p className="mt-2 text-gray-700">Description of the project goes here.</p>
          </div>
          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Project 2</h3>
            <p className="mt-2 text-gray-700">Description of the project goes here.</p>
          </div>
          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Project 3</h3>
            <p className="mt-2 text-gray-700">Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
