// import { useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutContainer = () => {

//   useLayoutEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.to(".about-container", {
//     opacity: 0,
//     delay: 1, // Alterado para 1 para animar de 0 para 1
//     scrollTrigger: {
//       trigger: ".about-container", // Use o mesmo seletor como trigger
//       start: "top 250px", // Ajuste conforme necessário
//       end: "bottom 100px", // Ajuste conforme necessário
//       scrub: true,
//     },
//   });

//   return () => {
//     gsap.killTweensOf(".about-container")
//   }
// }, []);

  return (
    <section className="about-container">
      <h2>Sobre mim</h2>
      <p>
      Olá, seja muito bem-vindo ao meu currículo virtual! Você encontrará algumas informações sobre mim incluindo minhas redes sociais, formas de contato e as tecnologias que estudo e utilizo diariamente.
      </p>
      <p>
      Sou estudante do 2º semestre de bacharelado em Engenharia de Software na Universidade Unicesumar.
      </p>
    </section>
  );
};

export default AboutContainer;
