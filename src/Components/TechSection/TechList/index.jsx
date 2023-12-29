import React from "react";

export const TechList = ({ techCard, setTechCard }) => {
  return (
    <>
      {techCard.map((tec, index) => (
        <li key={index}>
          <img src={tec.img} alt="" />
          <h1>{tec.name}</h1>
        </li>
      ))}
    </>
  );
};
