import React from "react";
import "./StylesFooter/index.scss";
import imgWpp from "../../assets/whatsapp-icon.png";
import imgLinkedin from "../../assets/linkedin-icon.png";
import imgGitHub from "../../assets/github-icon.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <h1>Contato</h1>
        <div className="imgs">
          <img src={imgWpp} alt="" />
          <img src={imgLinkedin} alt="" />
          <img src={imgGitHub} alt="" />
        </div>
      </div>
      <p>Todos os direitos Reservados - José da Silva</p>
    </footer>
  );
};
