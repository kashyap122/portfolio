import React from 'react'
import integrity from "../assets/integrity.jpg"
import taskManager from "../assets/taskManager.png"
import userAuth from "../assets/userAuth.png"
import ProjectCard from './ProjectCard'

const Work = () => {
  return (
    <div id='work' className="min-h-screen bg-[#1d1d1d] flex flex-col items-center py-12 px-6">
      
      <h2 className="ppf text-4xl font-bold text-white mb-12 text-center">WORK</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProjectCard
          image={integrity}
          title="Integrity - The New Dating"
          techStack={["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"]}
          description="A new Dating Website with point based profile value system, It is a private Repo so no code or live available right now"
          liveLink="#"
          codeLink="#"
        />
        <ProjectCard
          image={taskManager}
          title="Task Manager"
          techStack={["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"]}
          description="Task manager website with role based access control."
          liveLink="#"
          codeLink="https://github.com/kashyap122/task-manager.git"
        />
        <ProjectCard
          image={userAuth}
          title="User Authentication"
          techStack={["Google OAuth 2.0", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"]}
          description="Reuseable user authentication with integration of Google OAuth 2.0 for easy google login/signup"
          liveLink="#"
          codeLink="https://github.com/kashyap122/user-authentication.git"
        />
      </div>
      
    </div>
  )
}

export default Work
