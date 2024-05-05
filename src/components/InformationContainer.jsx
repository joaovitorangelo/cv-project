import "../styles/components/informationcontainer.sass";

import { useState } from "react";

import Contact from "./Contact";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  const [contactName, setContactName] = useState(localStorage.getItem("contactName") || "");

  <Contact defaultName={contactName} />

  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <a href={`https://api.whatsapp.com/send?phone=5551994393030&text=Olá${contactName ? `, ${contactName}` : ''}, tudo bem?`} target="_blank">(51) 9 9439-3030</a>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <a href="mailto:joaovitorangelo05@gmail.com" target="_blank">joaovitorangelo05@gmail.com</a>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Florianópolis / SC</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
