import React, { useState } from "react";
import { ProjectList } from "./ProjectList/index.jsx";
import { projects } from "../../data/projects.js";
import "./StylesProjectsSection/index.scss";
export const ProjectsSection = () => {
  const [myprojects, setProjects] = useState(projects);
  return (
    <section className="SectionProjects">
      <h1>Projetos</h1>
      <ul>
        <ProjectList myprojects={myprojects} setProjects={setProjects} />
      </ul>
    </section>
  );
};
