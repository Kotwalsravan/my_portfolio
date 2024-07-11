import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import image2 from '../assets/image2.jpeg'
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
   <div className="container flex flex-col md:flex-row mx-auto py-20 flex bg-gray-700 text-white ">
      <div className='ml-4 md:ml-10 w-100% md:w-1/2 '>
          <div className='mb-1 md:mb-3'>
            <h1 className='text-xl md:text-2xl text-semibold capitalize text-cyan-400'>welcome to my feed</h1>
            <h1 className='text-xl md:text-2xl text-bold '>Hello I'm<span className='text-2xl md:text-4xl text-red-600'> Kotwal Sravan Kumar</span>  </h1>
          </div>
          <div className='mb-3'> 
            <p className='text-lg md:text-xl text-semibold text-center  md:text-justify'> 
           I'm a Recent Graduate from JNTUH,Kukatpally.I completed my MCA in 2024,specialized in Front-End Developer with a passion for crafting responsive and interactive web applications. As a fresher in the field, I bring a solid foundation in HTML, CSS, and JavaScript, along with specialized skills in modern frameworks and libraries like React.js and TailwindCSS.

I have a keen eye for detail and a strong understanding of design principles, which allows me to create user-friendly and aesthetically pleasing interfaces. My experience with SQL also enables me to work with databases, ensuring that data is efficiently managed and integrated into web appliactions.
            
            </p>
          </div>
        <div className='flex  flex-col md:flex-row justify-center gap-14 mt-8'>
           <div className='flex justify-center'>
            <div className="justify-center space-x-4">
            <h1 className=' text-xl text-semibold mb-4 text-gray-400 text-center'>Available On</h1>

            <a href="https://www.linkedin.com/in/kotwal-sravan-kumar/"     target='_blank'  className="text-blue-500 hover:text-blue-700" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Kotwalsravan"      target='_blank' className="text-gray-800 hover:text-gray-600" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="" className="text-blue-400 hover:text-blue-600" aria-label="Telegram">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="" className="text-blue-800 hover:text-blue-900" aria-label="Naukri">
            <FontAwesomeIcon icon={faUserTie} size="2x" />
            </a>

         </div>
           </div>
          
         <div className="flex justify-center ">
          <div className=' justify-center space-x-4'>
            <h1 className=' text-xl text-semibold mb-4 text-gray-400 text-center'>Working on</h1>
            <FontAwesomeIcon icon={faReact} size="2x" className="text-blue-500" aria-label="React" />
          <FontAwesomeIcon icon={faNodeJs} size="2x" className="text-green-500" aria-label="Node.js" />

          <FontAwesomeIcon icon={faDatabase} size="2x" className="text-green-600" aria-label="MongoDB" />
          </div>

        </div>

      </div>



      <div >
   
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 flex justify-center relative">
  <img 
    src={image2} 
    alt="Kotwal Sravan Kumar" 
    className="rounded-full w-24 h-24 sm:w-34 sm:h-34 md:w-48 md:h-48 lg:w-66 lg:h-64 object-cover absolute top-4 sm:top-6 md:top-7 shadow-cyan-400 shadow-lg" 
  />
</div>

  </div>
  );
};

export default About;
