import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/avatar.jpg";

import "../styles/components/sidebar.sass";

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
    </aside>
  );
};

export default Sidebar;
