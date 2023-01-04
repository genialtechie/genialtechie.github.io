import React from 'react';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Link } from '../images/link.svg';

const FeaturedProject = ({
  image,
  title,
  desc,
  tools,
  github,
  preview,
  right,
}) => {
  return (
    <div
      className={`relative group transition duration-500 ease-in-out hover:scale-105 md:hover:scale-100 w-full flex mt-24 mb-32 ${
        right ? 'flex-row' : 'flex-row md:flex-row-reverse'
      }`}
    >
      <div className="h-96 md:w-1/2">
        <a
          target="_blank"
          rel="noreferrer"
          href={preview}
        >
          <img
            src={image}
            alt="Project preview"
            className="object-fill h-full w-full md:opacity-40 opacity-80 transition duration-500 group-hover:opacity-100"
          />
        </a>
      </div>
      <div
        className={`${
          right ? 'right-0' : 'left-0'
        } absolute top-0 w-4/5 lg:w-3/5 h-full p5 text-md lg:text-lg flex flex-col transition duration-500 ease-in-out group-hover:opacity-20`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={preview}
          className="flex flex-col"
        >
          <div
            className={`${
              right ? 'self-end text-right' : 'self-start'
            } p-2 w-fit `}
          >
            <h3 className="font-mono text-sm py-2">Featured Project</h3>
            <h1 className="mb-3 md:mb-7">{title}</h1>
          </div>
          <div className={`p-3 lg:p-5 bg-[#202020] opacity-80 shadow-lg`}>
            <p className="mb-4 font-mono">{desc}</p>
            <div className="hidden sm:flex sm:flex-row sm:flex-wrap">
              {tools.map((skill) => (
                <span
                  key={skill}
                  className="font-mono px-4 py-2 bg-black mx-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </a>
        <div
          className={`${
            right ? 'right-0' : 'left-0'
          } absolute bottom-0 flex flex-row items-center`}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={github}
          >
            <Github
              className="mx-2"
              fill="currentColor"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={preview}
          >
            <Link
              className="mx-2 scale-50"
              fill="currentColor"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
