import "../styles/components/projects.sass";
import beemooviesImage from "../img/beemoovies.png";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
  
const Projects = () => {

  const projectItems = [
    {
      id: "beemoovies",
      name: "BeeMoovies",
      image: beemooviesImage,
      description:
        "O ''BeeMoovies'' é um Website para cinéfilos e amantes de filmes. Ele permite que os usuários vejam avaliações, orçamento, bilheteria, duração e a descrição dos seus filmes favoritos.",
    },
  ];

  return (
    <section className="projects-container">
      <div className="projects-grid">
        {projectItems.map((project) => (
          <div key={project.id} className="projects-card">
            <a href="https://movies-lib-mocha.vercel.app/" target="blank">
              <img src={project.image} alt={project.name} />
            </a>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
