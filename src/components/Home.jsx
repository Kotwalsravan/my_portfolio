import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <div className='bg-blue-500 text-white py-16'>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-8">Aspiring Web Developer</p>
          <Link
            to="/projects"
            className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            View My Projects
          </Link>
        </div>

     </div>

      
      <div className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-lime-500">About Me</h2>
          <p className="text-gray-700 text-lg mb-8">
            <h1 className='text-2xl font-semibold text-bold mb-3 text-cyan-800 '>I'm Kotwal Sravan Kumar</h1>
            I am a passionate <span className='text-2xl text-blue-600'>web developer</span> with a focus on creating beautiful and functional websites.
           <br/> I am skilled in HTML,CSS,JavaScript and React
          </p>
          <Link
            to="/about"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">My Projects</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Here are a few of my recent projects. Click on any project to see more details.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/projects" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-red-500">Simon Game</h3>
              <p className="text-gray-700 text-lg">The goal of this project is to provide a fun and challenging web-based version of the Simon game that tests players' memory skills. It aims to demonstrate proficiency in front-end web development using foundational technologies like<span className='text-red-500'> HTML,CSS,JavaScript </span></p>
            </Link>
            <Link to="/projects" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-lime-500">College Clone</h3>
              <p className="text-gray-700 text-lg">The College Website Clone project is a dynamic web application created using <span className='text-lime-500'> React and Tailwindcss </span>to replicate and enhance the functionality of a college or university's official website. This project showcases expertise in front-end development, utilizing modern frameworks and libraries to deliver a responsive and visually appealing user interface.</p>
            </Link>
            <Link to="/projects" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-cyan-500">Random Quote Machine</h3>
              <p className="text-gray-700 text-lg">The Random Quote Machine Project is a task from FreeCodeCamp which done by using <span className='text-cyan-500'>React and Css</span> ,It produces Random Quotes based on user Action it provide a user-friendly interface to interact with the application</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
