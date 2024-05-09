import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import AboutContainer from "./AboutContainer";

import Avatar from "../img/fotoperfil.jpg";
import Curriculo from "../img/JOÃO VITOR ANGELO DA SILVA - CV.pdf";
import "../styles/components/sidebar.sass";
import Contact from "./Contact";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Vitor Angelo" />
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href={Curriculo} download="Curriculo de João Vitor" className="btn">
        Download currículo
      </a>
      <AboutContainer />
      <Contact />
    </aside>
  );
};

export default Sidebar;
