import { useState, useEffect } from "react";

import "../styles/components/contact.sass";

import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState(localStorage.getItem("contactName") || "");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorVisibility, setErrorVisibility] = useState(false)

  useEffect(() => {
    // Usando o useEffect para monitorar mudanças em errorVisibility
    if (errorVisibility) {
      // Se errorVisibility for true, define um temporizador para ocultar a mensagem após 3000 milissegundos (3 segundos)
      const timeoutId = setTimeout(() => {
        setErrorVisibility(false);
      }, 2000);

      // Retorna uma função de limpeza que será executada quando o componente for desmontado ou errorVisibility mudar
      return () => clearTimeout(timeoutId);
    }
  }, [errorVisibility]);

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setErrorVisibility(true)
      return;
    }

    setErrorVisibility(false)

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_vq0q9qg",
        "template_44ql1mu",
        templateParams,
        "vt8dbzF46Jv5YpXZN"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <div className="main">
      <div className="container">
        <form className="form" onSubmit={sendEmail}>
          <h2>Entre em contato comigo!</h2>

          <div className="form-group">
            <label>Seu nome:</label>
            <input
              id="nameInput"
              className="input"
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="form-group">
            <label>Seu E-mail:</label>
            <input
              id="emailInput"
              className="input"
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Sua mensagem:</label>
            <textarea
              id="messageInput"
              className="textarea"
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              maxLength={200}
              minLength={10}
            />
          </div>

          <input className="btn" type="submit" value="Enviar" />
        </form>
      </div>

      <div className="main-requisition">
        <div className={`container-requisition ${errorVisibility ? 'visible' : 'hidden'}`}>
          <span id="requisition" className="requisition">
            Preencha todos os campos! 
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
