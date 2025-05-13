import React, { useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import './home.css';

export default function Home() {

  return (
    <div className='home-page'>
      <h1>Hello World</h1>
      <ProgressSpinner 
        style={{ width: '50px', height: '50px' }} 
        strokeWidth="8" 
        animationDuration=".5s" />
    </div>
  );

}


