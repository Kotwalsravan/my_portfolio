// src/Projects.js
import React from 'react';
import randomquote from '../assets/randomquote.png';
import simongame1 from '../assets/simongame1.png';
import collegeclone from '../assets/collegeclone.jpg';

const projects = [
  {
    title: "Random Quote Machine",
    description: "The Random Quote Machine is a dynamic web application built using React that allows users to generate and share random quotes. This project demonstrates the use of React components, state management, and API integration. The application fetches quotes from a public API and displays them to the user, offering an interactive and engaging experience.",
    image: randomquote,
    repo: "https://github.com/Kotwalsravan/Random-Quote-Machine"
  },
  {
    title: "Simon Game",
    description: "The Simon Game is a classic memory game implemented using JavaScript, HTML, and CSS. This project recreates the popular electronic game where players must repeat increasingly complex sequences of lights and sounds. It showcases the use of JavaScript for game logic, event handling, and DOM manipulation.",
    image: simongame1,
    repo: "https://github.com/Kotwalsravan/simon-game"
  },
  {
    title: "College Clone",
    description: "The College Clone is a dynamic web application implemented using React and TailwindCSS. This project recreates the website of JNTU's student management page.",
    image: collegeclone,
    repo: "https://github.com/Kotwalsravan/Student_Management"
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-300 shadow-lg rounded-lg overflow-hidden">
            <img className="rounded-lg  w-full h-1/3 object-cover" src={project.image} alt={project.title} />
            <div className="p-4">
              <h2 className="text-2xl text-gray-700 font-bold mb-2">{project.title}</h2>
              <p className="text-gray-500 text-lg mb-4">{project.description}</p>
              <a href={project.repo} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
