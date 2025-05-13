import React from "react";
import './aboutMe.css';
import { GeneralContext } from "../../contexts/generalContext.js";
import { useContext } from "react";

export default function AboutMe() {
    const { scrollToSection } = React.useContext(GeneralContext);
  return (
    <div className="about-me-page">
      <h1>Sobre Mi</h1>
      <p>
        Información sobre mí, mis intereses y mi trayectoria profesional.
      </p>
      <button onClick={() => scrollToSection('section3')} className='transition-button'>
            <i className='pi pi-code'  style={{ fontSize: '2em' }}></i>
            <i className='pi pi-angle-down'  style={{ fontSize: '2em' }}></i>
        </button>
    </div>
  );
}