import React from 'react'
import integrity from "../assets/integrity.jpg"
import ProjectCard from './ProjectCard'

const Work = () => {
  return (
    <div className="min-h-screen bg-[#f8f0ee] flex flex-col items-center py-12 px-6">
      
      <h2 className="gameofthrones text-4xl font-bold text-[#5a0e0e] mb-12 text-center">WORK</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProjectCard
          image={integrity}
          title="Integrity - The New Dating"
          techStack={["ReactJS", "NodeJS", "Express"]}
          description="A new Dating Website with point based profile value system"
          liveLink="https://your-live-site.com"
          codeLink="https://github.com/your-repo"
        />
        <ProjectCard
          image={integrity}
          title="Kanban Board"
          techStack={["React", "Drag and Drop"]}
          description="A Trello-like Kanban board for task management with dynamic updates."
          liveLink="https://your-live-site.com"
          codeLink="https://github.com/your-repo"
        />
        <ProjectCard
          image={integrity}
          title="3D Portfolio"
          techStack={["Three.js", "React", "CSS"]}
          description="An interactive 3D personal portfolio to showcase projects and skills."
          liveLink="https://your-live-site.com"
          codeLink="https://github.com/your-repo"
        />
        <ProjectCard
          image={integrity}
          title="Library Management System"
          techStack={["Java", "MySQL"]}
          description="A full-stack desktop application to manage library books and users."
          liveLink="https://your-live-site.com"
          codeLink="https://github.com/your-repo"
        />
      </div>
      
    </div>
  )
}

export default Work
