import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiSass,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Avançado" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Intermediário" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Básico" },
  { id: "sass", name: "Sass", icon: <DiSass />, description: "Intermediário" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Básico" },
  { id: "react", name: "React", icon: <DiReact />, description: "Básico" },
];

const TechnologiesContainer = () => {
  useLayoutEffect(() => {
    technologies.forEach((tech) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(`#${tech.id}`, {
        opacity: 1,
        y: 0,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".technology-card",
          markers: true,
          start: "top 450px",
          end: "bottom 100px",
          scrub: true,
        },
      });
    });

    return () => {
      technologies.forEach((tech) => {
        gsap.killTweensOf(`#${tech.id}`);
      });
    };
  }, []); // Executar apenas uma vez, equivalente ao componentDidMount

  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
