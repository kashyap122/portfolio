import Marquee from "react-fast-marquee";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import tailwind from "../assets/tailwind.png";
import expressjs from "../assets/expressjs.png";
import git from "../assets/git.png";
import php from "../assets/php.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";


const skills = [
  { name: "React JS", image: reactjs },
  { name: "Node JS", image: nodejs },
  { name: "MongoDB", image: mongodb },
  { name: "Express JS", image: expressjs },
  { name: "Tailwind", image: tailwind },
  { name: "Javascript", image: javascript },
  { name: "Git", image: git },
  { name: "php", image: php },
  { name: "Bootstrap", image: bootstrap },
];

const SkillsMarquee = () => {
  return (
    <div className="w-full py-4 overflow-hidden">
      <div className="ppf text-4xl font-bold text-white mb-4 text-center">Tech Stack</div>
      <div className="text-xl text-white mb-8 text-center">Technologies I use to build modern web applications</div>
      <Marquee speed={50} gradient={false} pauseOnHover className="flex gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mx-6 min-w-[120px]">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2"
            />
            <p className="text-[#f8f0ee] font-bold text-sm sm:text-base text-center">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
