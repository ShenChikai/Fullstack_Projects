import './App.css';
// import react
import React, { Component } from 'react';
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';


function App() {
  // bring in the components here
  return (
    <div className='App'>
      <Navbar />
      <ProjectBoard />
    </div>

  );
}

export default App;
