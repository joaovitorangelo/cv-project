import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", url: "https://www.linkedin.com/in/joão-vitor-angelo-da-silva-718173264", target: "_blank", icon: <FaLinkedinIn /> },
  { name: "github", url: "https://github.com/joaovitorangelo", target: "_blank", icon: <FaGithub /> },
  { name: "instagram", url: "https://www.instagram.com/joaovitorangelo_/", target: "_blank", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name} target={network.target}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
