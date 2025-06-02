import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.js';
import Experience from './pages/experience/experience.js';
import { GeneralProvider } from './contexts/generalContext.js';
import AboutMe from './pages/aboutMe/aboutMe.js';
import Skills from './pages/skills/skills.js';
import Studies from './pages/studies/studies.js';
import { ProgressSpinner } from 'primereact/progressspinner';
import ArrowToTop from './components/ArrowToTop/ArrowToTop.js';
import Contact from './components/Contact/Contact.js';

function App() {
  

  return (
    <div className="App">
      <GeneralProvider>
        <Contact />
        <div className="section" id="section1">
          <Home />
        </div>
        <div className="section" id="section2">
          <AboutMe />
        </div>
        <div className="section" id="section3">
          <Skills />
        </div>
        <div className="section" id="section4">
          <Experience />
        </div>       
        <div className="section" id="section5">
          <Studies />
        </div>   

        <ArrowToTop />
      </GeneralProvider>
    </div>
  );
}

export default App;
