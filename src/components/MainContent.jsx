import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";
import Projects from "./Projects";

const MainContent = () => {
  return (
    <main id="main-content">
      <TechnologiesContainer />
      <ProjectsContainer />
      <Projects />
    </main>
  );
};

export default MainContent;
