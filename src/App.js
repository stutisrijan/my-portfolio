import React, { useState } from "react";
import userImage from "./pic.png";
import {
  FaUser,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaReact,
  FaNodeJs,
  FaPython
} from "react-icons/fa";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const themeBg = darkMode ? "bg-black text-white" : "bg-white text-black";
  const buttonBg = darkMode ? "bg-purple-600" : "bg-purple-500";
  const pdfname = "Stuti_Srijan_CV.pdf";
  const pdfPath = `${process.env.PUBLIC_URL}/${pdfname}`; // Adjust the path as necessary

  const skills = [
    <FaReact className="text-blue-500 w-12 h-12" />,
    <FaNodeJs className="text-green-500 w-12 h-12" />,
    <FaPython className="text-yellow-500 w-12 h-12" />,
  ];

  return (
    <BrowserRouter basename="/my-portfolio">
      <div className={`${themeBg} min-h-screen`}>
        {/* Header */}
        <header className="p-4 flex justify-between items-center border-b border-purple-300">
          <div className="overflow-hidden whitespace-nowrap w-1/2">
            <div className="animate-scroll text-2xl font-bold text-purple-500 inline-block">
              Stuti Srijan
            </div>
          </div>
          <button onClick={toggleDarkMode} className="text-purple-500 text-2xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>

        {/* Navigation */}
        <nav className="bg-purple-700 p-4 sticky top-0 z-10 shadow-md">
          <ul className="flex flex-wrap justify-center space-x-6 text-white text-md font-semibold">
            <li><a href="#home" className="flex items-center gap-2 hover:text-purple-200"><FaUser /> Home</a></li>
            <li><a href="#about" className="flex items-center gap-2 hover:text-purple-200"><FaUser /> About</a></li>
            <li><a href="#education" className="flex items-center gap-2 hover:text-purple-200"><FaGraduationCap /> Education</a></li>
            <li><a href="#skills" className="flex items-center gap-2 hover:text-purple-200"><FaTools /> Skills</a></li>
            <li><a href="#projects" className="flex items-center gap-2 hover:text-purple-200"><FaProjectDiagram /> Projects</a></li>
            <li><a href="#certificates" className="flex items-center gap-2 hover:text-purple-200"><FaCertificate /> Certificates</a></li>
            <li><a href="#contact" className="flex items-center gap-2 hover:text-purple-200"><FaEnvelope /> Contact</a></li>
          </ul>
        </nav>

        {/* Main Sections */}
        <main className="container mx-auto p-6 scroll-smooth">
          <section id="home" className="py-16 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:w-1/2 space-y-4">
              <img
                src={userImage}
                alt="Stuti Srijan"
                className="rounded-full w-40 h-40 object-cover border-4 border-purple-500"
              />
              <h1 className="text-3xl font-bold text-purple-600">Stuti Srijan</h1>
              <p className="text-center text-sm">Web Developer, Gen AI Enthusiast, Game Developer</p>
              <p className="text-sm">stutisrijanin@gmail.com</p>
              <p className="text-sm">Noida, India</p>
              <div className="flex space-x-4 text-2xl">
                <a href="https://www.linkedin.com/in/stutisrijan/" target="_blank" rel="noreferrer">🔗</a>
                <a href="https://github.com/stutisrijan" target="_blank" rel="noreferrer">🐙</a>
                <a href="mailto:stutisrijanin@gmail.com">✉️</a>
              </div>
              <a
                href="mailto:stutisrijanin@gmail.com"
                className={`${buttonBg} hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg`}
              >
                Contact Me
              </a>
            </div>

            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Hello There,</h2>
              <h3 className="text-2xl font-semibold mb-4">
                I'm <span className="text-purple-500 font-bold">Stuti Srijan</span>,
              </h3>
              <p className="mb-6">
                I'm currently in my 3rd year of an Integrated M.Tech CSE degree at Jaypee Institute of Information Technology.
                I love building cool stuff with web technologies, exploring generative AI, and designing games that spark minds!
              </p>
              <a
                href={pdfPath}
                download={pdfname}
                className={`${buttonBg} hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-bold`}
              >
                Download CV
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="md:w-1/2 p-4">
              <h2 className="text-4xl font-bold mb-8 text-purple-500">About Me</h2>
              <p className="mb-4 text-xl">
                I'm Stuti Srijan, a passionate software engineer and game developer currently in my 3rd year of Integrated M.Tech CSE at Jaypee Institute of Information Technology. I love building innovative solutions using modern web technologies and exploring generative AI.
              </p>
              <p className="mt-6">
                I'm always looking to learn and collaborate on exciting projects! Feel free to check out my work and get in touch with me.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center items-center relative">
              <div className="rotating-skills-container">
                <div className="rotating-skills">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-icon"
                      style={{
                        transform: `rotate(${(360 / skills.length) * index}deg) translate(120px) rotate(-${(360 / skills.length) * index}deg)`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-500">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="skill-box bg-gray-200 h-24 w-24 flex justify-center items-center">
                <p className="text-gray-500">Skill 1</p>
              </div>
              <div className="skill-box bg-gray-200 h-24 w-24 flex justify-center items-center">
                <p className="text-gray-500">Skill 2</p>
              </div>
              <div className="skill-box bg-gray-200 h-24 w-24 flex justify-center items-center">
                <p className="text-gray-500">Skill 3</p>
              </div>
              <div className="skill-box bg-gray-200 h-24 w-24 flex justify-center items-center">
                <p className="text-gray-500">Skill 4</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-500">Projects</h2>
            <p>Information about your projects.</p>
          </section>

          {/* Certificates Section */}
          <section id="certificates" className="py-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-500">Certificates</h2>
            <p>Details about your certificates.</p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-500">Contact</h2>
            <p>You can reach me at <a className="text-purple-600 underline" href="mailto:stutisrijanin@gmail.com">stutisrijanin@gmail.com</a></p>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
