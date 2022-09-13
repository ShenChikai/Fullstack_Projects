import React, { Component } from 'react'
import {Link} from "react-router-dom"

class ProjectBoard extends Component {
  render() {
    return (
        <div class="container">
        <Link to="/addProjectTask" class="btn btn-primary mb-3">
            <i class="fas fa-plus-circle"> Create Project Task</i>
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
                    <div class="card mb-1 bg-light">

                        <div class="card-header text-primary">
                            ID: projectSequence
                        </div>
                        <div class="card-body bg-light">
                            <h5 class="card-title">summary</h5>
                            <p class="card-text text-truncate ">
                                acceptanceCriteria
                            </p>
                            <a href="" class="btn btn-primary">
                                View / Update
                            </a>

                            <button class="btn btn-danger ml-4">
                                Delete
                            </button>
                        </div>
                    </div>

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