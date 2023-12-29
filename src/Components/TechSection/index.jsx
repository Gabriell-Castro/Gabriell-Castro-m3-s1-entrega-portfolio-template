import React, { useState } from "react";
import { TechList } from "./TechList/index.jsx";
import { technologies } from "../../data/technologies.js";
import "./StyleTechSection/index.scss";
import "./ResponsiveTechSection/index.scss";

export const TechSection = () => {
  const [techCard, setTechCard] = useState(technologies);
  return (
    <section className="sectionTech">
      <h1>Tecnologias</h1>
      <ul>
        <TechList techCard={techCard} setTechCard={setTechCard} />
      </ul>
    </section>
  );
};
