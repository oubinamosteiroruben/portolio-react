import React from "react";
import './style.css';

export default function Contact() {

    return (
        <div className="contact">

            <div className="contact-icon">
                <i className="pi pi-envelope" style={{ fontSize: "2em" }}></i>
            </div>

            <div className="contact-body">
                <h3>Contáctame!</h3>
                <div className="links-row">
                    <a href="https://linkedin.com/in/oubinamosteiroruben" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-linkedin" style={{ fontSize: "2em" }}></i>
                    </a>
                    <a href="https://github.com/oubinamosteiroruben" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-github" style={{ fontSize: "2em" }}></i>
                    </a>
                    <a href="mailto:oubinamosteiroruben@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-envelope" style={{ fontSize: "2em" }}></i>
                    </a>
                </div>

                <p>
                    Si tienes alguna pregunta o quieres saber más sobre mi trabajo, <br/> no dudes en contactarme
                </p>
                <p>
                    Siempre abierto a nuevas oportunidades y colaboraciones 
                    <br/> 
                    <i class="fa-regular fa-face-smile-wink"></i>
                </p>
            </div>

        </div>
    );
}