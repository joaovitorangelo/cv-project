import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import AboutContainer from "./AboutContainer";

import Avatar from "../img/fotoperfil.jpg";

import "../styles/components/sidebar.sass";
import Contact from "./Contact";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Vitor Angelo" />
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="../cvjoaovitor.pdf" download="cvjoaovitor.pdf" className="btn">
        Download currículo
      </a>
      <AboutContainer />
      <Contact />
    </aside>
  );
};

export default Sidebar;
