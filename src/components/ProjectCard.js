import React from 'react';
import { ReactComponent as Github } from '../images/github.svg';

const ProjectCard = ({ title, desc, github, tools }) => {
  return (
    <a
      href={github}
      target="_blank"
      rel="noreferrer"
      className="hover:text-fuchsia-700 hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <div className="bg-[#202020] p-4 w-auto h-auto mb-5 rounded-lg m-4">
        <span className="p-3 w-full flex justify-end">
          <Github fill="currentColor" />
        </span>
        <div>
          <h1 className="text-center text-lg">{title}</h1>
          <p className="my-2 text-center font-mono">{desc}</p>
          <div className="mt-3 flex flex-wrap">
            {tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-sm px-4 py-2 bg-black m-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
