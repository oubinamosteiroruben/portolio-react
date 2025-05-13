import React from "react";
import './skills.css';
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext.js";

export default function Skills() {

    const { scrollToSection } = useContext(GeneralContext);

  return (
    <div className="skills-page">
      <h1>Habilidades</h1>
      <p>
        Información sobre mis Habilidades.
      </p>
      <button onClick={() => scrollToSection('section4')} className='transition-button'>
            <i className='pi pi-code'  style={{ fontSize: '2em' }}></i>
            <i className='pi pi-angle-down'  style={{ fontSize: '2em' }}></i>
        </button>
    </div>
  );
}