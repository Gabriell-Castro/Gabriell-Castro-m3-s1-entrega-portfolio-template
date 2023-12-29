import React from "react";
import "./StylesHeader/index.scss";
import "./zesponsiveHeader/index.scss";
export const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Portifólio</h1>
        <nav>
          <ul className="listNavHeader">
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#stack">Stack</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </nav>
        <button>Contato</button>
      </header>
    </>
  );
};
