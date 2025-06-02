import React from "react";
import './aboutMe.css';
import { GeneralContext } from "../../contexts/generalContext.js";
import { useContext } from "react";

export default function AboutMe() {
    const { scrollToSection } = React.useContext(GeneralContext);
    return (
        <div className="about-me-page">
            <h1>Sobre Mí</h1>
            <p>
                Hola, soy Rubén, un ingeniero informático apasionado por la innovación y la tecnología.
            </p>
            <p>
                Actualmente formo parte de un equipo como desarrollador web en una empresa líder en análisis de datos,
                donde contribuyo con soluciones creativas y eficientes.
            </p>
            <p>
                Me enfoco principalmente en el desarrollo frontend utilizando tecnologías como React y Vue, y estoy
                ampliando mis conocimientos en el área del backend para ofrecer soluciones integrales y robustas.
            </p>
            <button onClick={() => scrollToSection('section3')} className='transition-button'>
                <i className='pi pi-code' style={{ fontSize: '2em' }}></i>
                <i className='pi pi-angle-down' style={{ fontSize: '2em' }}></i>
            </button>
        </div>
    );
}