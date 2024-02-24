import React from 'react';
import { ReactComponent as Contact } from '../images/contact.svg';
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Work } from '../images/my-work.svg';
import { ReactComponent as Resume } from '../images/resume.svg';
import resume from '../images/resume-latest.pdf';

const Navigation = () => {
  return (
    <nav
      id="nav"
      className="fixed top-0 z-40 w-full page-nav text-xs md:text-xl flex flex-row justify-center md:justify-end"
    >
      <ul className="flex md:flex-row mx-4 py-5 md:mr-10">
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 hover:drop-shadow-md">
          <a href="#about">
            <Home
              className="md:hidden mx-auto scale-75"
              fill="currentColor"
            />
            <p className="font-mono">Home</p>
          </a>
        </li>
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 hover:drop-shadow-md">
          <a href="#my-work">
            <Work
              className="md:hidden mx-auto scale-75"
              fill="currentColor"
            />
            <p className="font-mono">Portfolio</p>
          </a>
        </li>
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 hover:drop-shadow-md">
          <a href="#contact">
            <Contact
              className="md:hidden mx-auto scale-75"
              fill="currentColor"
            />
            <p className="font-mono">Say hi!</p>
          </a>
        </li>
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 md:hover:drop-shadow-md ml-1 border-l-2 md:border-l-4 border-white">
          <a
            href={resume}
            target="_ mx-autoblank"
            rel="noreferrer"
          >
            <Resume
              className="md:hidden scale-75"
              fill="currentColor"
            />
            <p className="font-mono">Resume</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
