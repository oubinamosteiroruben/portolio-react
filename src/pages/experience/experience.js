import React from "react";
import './experience.css';
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext.js";

export default function Experience() {

    const { scrollToSection } = useContext(GeneralContext);

  return (
    <div className="experience-page">
      <h1>Experiencia</h1>
      <p>
        Aquí puedes encontrar información sobre mi experiencia laboral y
        proyectos.
      </p>
      <button onClick={() => scrollToSection('section5')} className="transition-button">
        <i className="pi pi-code" style={{ fontSize: "2em" }}></i>
        <i className="pi pi-angle-down" style={{ fontSize: "2em" }}></i>
      </button>
    </div>
  );
}