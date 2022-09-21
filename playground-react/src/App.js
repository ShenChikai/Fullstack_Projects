// import react
import React, { Component } from 'react';
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import routing
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import redux
import { Provider } from 'react-redux';
import store from './store';
// import component
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import UpdateProjectTask from './components/ProjectTask/UpdateProjectTask';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProjectBoard />} />
          <Route exact path="/addProjectTask" element={<AddProjectTask />} />
          <Route exact path="/updateProjectTask/:pt_id" element={<UpdateProjectTask />} />
        </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
