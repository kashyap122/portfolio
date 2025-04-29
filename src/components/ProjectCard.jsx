import React from 'react'

const ProjectCard = ({ image, title, techStack, description, liveLink, codeLink }) => {
  return (
    <div className="bg-white border-2 border-[#5a0e0e] rounded-xl overflow-hidden shadow-md flex flex-col w-72 hover:scale-105 transition-transform duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      <div className="flex flex-col p-4 space-y-3 flex-grow">

        <h3 className="text-xl font-bold text-[#5a0e0e]">{title}</h3>

        <div className="flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-[#5a0e0e] text-white text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm">
          {description}
        </p>

        <div className="flex space-x-2 pt-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border-2 border-[#5a0e0e] text-[#5a0e0e] font-semibold text-sm py-1 rounded-md hover:bg-[#5a0e0e] hover:text-white transition-all"
          >
            Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border-2 border-[#5a0e0e] text-[#5a0e0e] font-semibold text-sm py-1 rounded-md hover:bg-[#5a0e0e] hover:text-white transition-all"
          >
            Code
          </a>
        </div>

      </div>

    </div>
  )
}

export default ProjectCard
