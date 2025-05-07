import React from 'react';

const ProjectCard = ({ image, title, techStack, description, liveLink, codeLink }) => {
  return (
    <div className="bg-[#1d1d1d] border rounded-xl overflow-hidden shadow-lg flex flex-col hover:scale-105 hover:shadow-xl transition-transform duration-300 w-full max-w-sm mx-auto">
      
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="flex flex-col p-4 space-y-3 flex-grow text-white">

        <h3 className="text-2xl font-bold">{title}</h3>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex space-x-2 pt-2 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-white text-white font-semibold text-sm py-2 rounded hover:bg-white hover:text-black transition"
          >
            Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-white text-white font-semibold text-sm py-2 rounded hover:bg-white hover:text-black transition"
          >
            Code
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
