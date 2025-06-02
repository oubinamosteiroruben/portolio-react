import React from "react";
import './skills.css';
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext.js";
import DinamicList from "../../components/DinamicList/DinamicList.js";
import { getHardSkills, getSoftSkills } from "../../services/getSkills.js";

export default function Skills() {

    const { scrollToSection } = useContext(GeneralContext);

    const hardSkills = getHardSkills();
    const softSkills = getSoftSkills();

  return (
    <div className="skills-page">
      <h1>Habilidades</h1>
      <div className="skills-row">
        <DinamicList title="Hard Skills" items={hardSkills}/>
        <DinamicList title="Soft Skills" items={softSkills}/>
      </div>
      <button onClick={() => scrollToSection('section4')} className='transition-button'>
            <i className='pi pi-code'  style={{ fontSize: '2em' }}></i>
            <i className='pi pi-angle-down'  style={{ fontSize: '2em' }}></i>
        </button>
    </div>
  );
}
