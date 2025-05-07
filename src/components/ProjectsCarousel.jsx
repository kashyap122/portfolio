// src/components/ProjectsCarousel.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const ProjectsCarousel = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const len = projects.length;

  const prev = () => setCurrent(i => (i - 1 + len) % len);
  const next = () => setCurrent(i => (i + 1) % len);

  if (!projects || len === 0) return null;

  return (
    <div className="relative flex items-center justify-center">
      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800 transition"
      >
        <FaChevronLeft size={24} className="text-white dark:text-[#f8f0ee]" />
      </button>

      {/* The current card */}
      <ProjectCard {...projects[current]} />

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800 transition"
      >
        <FaChevronRight size={24} className="text-white dark:text-[#f8f0ee]" />
      </button>
    </div>
  );
};

export default ProjectsCarousel;
