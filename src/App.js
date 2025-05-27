import React, { useState } from "react";
import userImage from "./pic.png";
import { motion } from "framer-motion";
import {
  FaUser,
   FaGithub,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaLinkedin,
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

  <div className="md:w-1/2 p-4 flex flex-wrap justify-center gap-6">
    {skills.map((SkillIcon, index) => (
      <div key={index} className="text-5xl">{SkillIcon}</div>
    ))}
  </div>
</section>
<section id="education" class="section">
  <h2>Education</h2>
  <div class="education-item">
    <h3>Integrated M.Tech in Computer Science & Engineering</h3>
    <p><strong>2022 - 2027</strong> | Jaypee Institute of Information Technology, Noida</p>
  </div>
  <div class="education-item">
    <h3>12th Grade (CBSE)</h3>
    <p>89% | DAV Public School</p>
  </div>
  <div class="education-item">
    <h3>10th Grade (CBSE)</h3>
    <p>93.4% | DAV Public School</p>
  </div>
</section>


          <section id="skills" className="py-20 bg-white dark:bg-gray-900">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-purple-500 text-center mb-12"
  >
    My Skills
  </motion.h2>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8 md:px-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Programming Languages */}
    <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-purple-700 dark:text-white mb-4">Programming</h3>
      <div className="flex flex-wrap gap-3">
        {["C", "C++", "C#", "Python", "JavaScript", "SQL"].map((skill) => (
          <span key={skill} className="bg-white dark:bg-gray-800 text-purple-700 dark:text-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Web Development */}
    <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-purple-700 dark:text-white mb-4">Web Development</h3>
      <div className="flex flex-wrap gap-3">
        {["HTML", "CSS", "JavaScript", "Django"].map((skill) => (
          <span key={skill} className="bg-white dark:bg-gray-800 text-purple-700 dark:text-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tools & Frameworks */}
    <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-purple-700 dark:text-white mb-4">Tools & Platforms</h3>
      <div className="flex flex-wrap gap-3">
        {["Unity", "Pygame", "Git", "GitHub", "AutoCAD", "Figma"].map((skill) => (
          <span key={skill} className="bg-white dark:bg-gray-800 text-purple-700 dark:text-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
</section>
          {/* Projects Section */}
<section
  id="projects"
  className="py-16 px-6 max-w-5xl mx-auto text-center"
>
  <h2 className="text-4xl font-bold mb-12 text-purple-500">Projects</h2>
  <div className="grid gap-12 md:grid-cols-2">
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-600 transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-4">Voice-Controlled Mario Game</h3>
      <p className="mb-6 text-gray-300">
        A voice-controlled Mario-type platformer game in Python with speech recognition, designed to assist physically challenged users in gameplay.
      </p>
      <a
        href="https://github.com/yourusername/voice-controlled-mario-game"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold"
      >
        <FaGithub /> View on GitHub
      </a>
    </div>

    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-600 transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-4">Memory Matching Game</h3>
      <p className="mb-6 text-gray-300">
        A memory game with number and image tiles built using Pygame, featuring multi-level gameplay and cognitive exercises.
      </p>
      <a
        href="https://github.com/yourusername/memory-matching-game"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold"
      >
        <FaGithub /> View on GitHub
      </a>
    </div>
  </div>
</section>


        

{/* Certificates Section */}
<section id="certificates" className="py-16 px-6 max-w-4xl mx-auto bg-purple-50 dark:bg-gray-800 rounded-xl shadow-lg">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-8 text-purple-600 text-center"
  >
    Certificates & Honors
  </motion.h2>

  <motion.ul
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2 }}
    className="space-y-6 text-lg text-gray-900 dark:text-gray-200"
  >
    <li className="bg-white dark:bg-purple-700 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-default">
      <strong className="text-purple-700 dark:text-purple-300">Letter of Recommendation</strong> for <em>Graphics Design</em> from Dr. Anuja Arora, recognizing my role in the official JIIT Social Media Team.
    </li>
    <li className="bg-white dark:bg-purple-700 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-default">
      Certificate from <strong className="text-purple-700 dark:text-purple-300">Microsoft Learn</strong> on foundational Web Development.
    </li>
    <li className="bg-white dark:bg-purple-700 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-default">
      Official <strong className="text-purple-700 dark:text-purple-300">NSS Certificate</strong> for active participation and contributions.
    </li>
    <li className="bg-white dark:bg-purple-700 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-default">
      Certificate in <strong className="text-purple-700 dark:text-purple-300">C Programming</strong> for completing foundational coursework.
    </li>
  </motion.ul>
</section>

        

<section id="contact" className="py-16 px-6 max-w-3xl mx-auto bg-purple-50 dark:bg-gray-800 rounded-xl shadow-lg text-center">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-8 text-purple-600"
  >
    Get in Touch
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="mb-8 text-lg text-gray-900 dark:text-gray-200"
  >
    Feel free to reach out via email or connect with me on GitHub and LinkedIn!
  </motion.p>

  <div className="flex justify-center gap-12 text-purple-600 dark:text-purple-400 text-3xl">
    <a
      href="mailto:stutisrijanin@gmail.com"
      aria-label="Send email"
      className="hover:text-purple-800 dark:hover:text-purple-200 transition"
    >
      <FaEnvelope />
    </a>
    <a
      href="https://github.com/stutisrijan"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub profile"
      className="hover:text-purple-800 dark:hover:text-purple-200 transition"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/stutisrijan/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn profile"
      className="hover:text-purple-800 dark:hover:text-purple-200 transition"
    >
      <FaLinkedin />
    </a>
  </div>
</section>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
