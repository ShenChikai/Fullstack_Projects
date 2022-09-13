// import react
import React, { Component } from 'react';
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import routing
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import AddProjectTask from './components/ProjectTask/AddProjectTask';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProjectBoard />} />
          <Route exact path="/addProjectTask" element={<AddProjectTask />} />
        </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
