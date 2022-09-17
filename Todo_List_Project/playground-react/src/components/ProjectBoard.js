import React, { Component } from 'react'
import {Link} from "react-router-dom"
import ProjectTaskItem from './ProjectTask/ProjectTaskItem';

class ProjectBoard extends Component {
  render() {
    return (
        <div class="container">
        <Link to="/addProjectTask" class="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {/* <!-- Backlog STARTS HERE --> */}
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card text-center mb-2">
                        <div class="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>

                    {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}

                    <ProjectTaskItem />

                    {/* <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                    
                </div>
                <div class="col-md-4">
                    <div class="card text-center mb-2">
                        <div class="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {/* <!-- SAMPLE PROJECT TASK STARTS HERE -->

                    <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                </div>
                <div class="col-md-4">
                    <div class="card text-center mb-2">
                        <div class="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>
                    {/* <!-- SAMPLE PROJECT TASK STARTS HERE -->

                    <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                </div>
            </div>
        </div>

        {/* <!-- Backlog ENDS HERE --> */}
    </div>

    // <!-- PROJECT BOARD ENDS HERE -->
    )
  }
}

export default ProjectBoard;