import React from "react";
import imgGitHub from "../../../assets/git-icon.png";
export const ProjectList = ({ myprojects, setProjects }) => {
  return (
    <>
      {myprojects.map((project) => (
        <li key={project.id}>
          <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <button>Saiba mais</button>
          </div>
          <img src={imgGitHub} alt="" />
        </li>
      ))}
    </>
  );
};
