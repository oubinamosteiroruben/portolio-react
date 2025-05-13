import React, { useState, useContext } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { GeneralContext } from '../../contexts/generalContext.js';
import './home.css';
export default function Home() {

    const { scrollToSection } = useContext(GeneralContext);

    return (
        <div className='home-page'>
        <h1>Bienvenido a mi Portfolio</h1>
        <button onClick={() => scrollToSection('section2')} className='transition-button'>
            <i className='pi pi-code'  style={{ fontSize: '2em' }}></i>
            <i className='pi pi-angle-down'  style={{ fontSize: '2em' }}></i>
        </button>
        </div>
    );

}


