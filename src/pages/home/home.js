import React, { useContext } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { GeneralContext } from '../../contexts/generalContext.js';
import './home.css';

export default function Home() {
    const { scrollToSection } = useContext(GeneralContext);

    return (
        <div className='home-page'>
            <h1>Bienvenido a mi Portfolio</h1>
            <p>
                Descubre mis proyectos, habilidades y experiencias a través de una ventana a mi mundo profesional.
            </p>
            <button onClick={() => scrollToSection('section2')} className='transition-button'>
                <i className='pi pi-code' style={{ fontSize: '2em' }}></i>
                <i className='pi pi-angle-down' style={{ fontSize: '2em' }}></i>
            </button>
        </div>
    );
}


