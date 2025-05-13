import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            console.log("Scrolling to section:", id);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <GeneralContext.Provider value={{ scrollToSection }}>
        {children}
        </GeneralContext.Provider>
    );
};

