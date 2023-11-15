import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectsContainer = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "a.projectsBtn",
      { opacity: 0, y: 50 }, // valor inicial
      {
        opacity: 1, // valor final
        y: 0,
        delay: 1,
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top 800px",
          end: "bottom 500px",
          scrub: true,
        },
      }
    );

    return () => {
      gsap.killTweensOf("a.projectsBtn");
    };
  }, []);

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Se desejar explorar alguns dos meus projetos, o botão abaixo o
        redirecionará para a minha última aplicação. Na qual depositei meus
        conhecimentos em HTML5, CSS3 e React.js. Sempre com o objetivo de buscar
        a melhor interatividade com os usuários, combinando-a com pura
        criatividade.
      </p>
      <a
        href="https://movies-lib-mocha.vercel.app/"
        target="_blank"
        className="projectsBtn"
      >
        Ver Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;
