import React from "react";
import './studies.css';
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext.js";

export default function Studies() {

    const { scrollToSection } = useContext(GeneralContext);

  return (
    <div className="studies-page">
      <h1>Educación</h1>
      <p>
        Información sobre mi Educación.
      </p>
      <button onClick={() => scrollToSection('section1')} className='transition-button'>
            <i className='pi pi-code'  style={{ fontSize: '2em' }}></i>
            <i className='pi pi-angle-up'  style={{ fontSize: '2em' }}></i>
        </button>
    </div>
  );
}