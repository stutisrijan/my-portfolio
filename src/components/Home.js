import React, { useState } from "react";
import userImage from "../../public/pic.png";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaDownload,
} from "react-icons/fa";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex flex-col md:flex-row transition-colors duration-300`}
    >
      <div className="md:w-1/2 flex flex-col items-center justify-center p-8 space-y-4">
      <img
        src={userImage}
        alt="Stuti Srijan"
        className="rounded-full w-40 h-40 object-cover border-4 border-green-500" />
        <a
          href="mailto:stutisrijanin@gmail.com"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center"
        >
          Contact Me
        </a>
        <button onClick={toggleDark} className="text-xl mt-4">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center p-8">
        <h2 className="text-3xl font-bold mb-4">Hello There,</h2>
        <h3 className="text-2xl font-semibold mb-4">
          I'm <span className="text-green-500 font-bold">Stuti Srijan</span>,
        </h3>
        <p className="mb-6">
          I'm currently in my 3rd year of an Integrated M.Tech CSE degree at
          Jaypee Institute of Information Technology. I love building cool stuff
          with web technologies, exploring generative AI, and designing games
          that spark minds!
        </p>
        <a
          href="/Stuti_Srijan_CV.pdf"
          download
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-flex items-center space-x-2"
        >
          <FaDownload />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
