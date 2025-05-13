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

function App() {
  

  return (
    <div className="App">
      <GeneralProvider>
        <div id="section1">
          <Home />
        </div>
        <div id="section2">
          <AboutMe />
        </div>
        <div id="section3">
          <Skills />
        </div>
        <div id="section4">
          <Experience />
        </div>       
        <div id="section5">
          <Studies />
        </div>   
      </GeneralProvider>
    </div>
  );
}

export default App;
