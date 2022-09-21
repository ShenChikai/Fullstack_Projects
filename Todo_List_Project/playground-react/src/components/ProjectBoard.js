import React, { Component } from 'react'
import {Link} from "react-router-dom"
import ProjectTaskItem from './ProjectTask/ProjectTaskItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from '../actions/projectTaskActions';

class ProjectBoard extends Component {
    // trigger this lifecycle hook every time component load
    componentDidMount() {
        this.props.getBacklog();
    }

  render() {
    const {project_tasks} = this.props.project_tasks;
    let BoardContent;
    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    // function that assign the tasks
    const BoardAlgorithm = (project_tasks) => {
        if (project_tasks.length < 1) {
            // if no task
            return (
                <div className="alert alert-info text-center" role='alert'>
                    No Project Tasks available.
                </div>
            )
        } else {
            // generate item components list
            const tasks = project_tasks.map((project_task) => {
                return <ProjectTaskItem key={project_task.id} project_task={project_task} />
            })

            // categorize each task to its list
            for (let i = 0; i < tasks.length; i++) {
                
                if (tasks[i].props.project_task.status === "TO_DO") {
                    todoItems.push(tasks[i]);
                }
                else if (tasks[i].props.project_task.status === "IN_PROGRESS") {
                    inProgressItems.push(tasks[i]);
                }
                else if (tasks[i].props.project_task.status === "DONE") {
                    doneItems.push(tasks[i]);
                }
            }
            // return the board as a react fragment
            return (
                <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card text-center mb-2">
                                <div class="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>

                            {todoItems}
                            
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center mb-2">
                                <div class="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>

                            {inProgressItems}

                        </div>
                        <div class="col-md-4">
                            <div class="card text-center mb-2">
                                <div class="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            
                            {doneItems}

                        </div>
                    </div>
                </div>
                </React.Fragment>
            )
        }
    };

    BoardContent = BoardAlgorithm(project_tasks);

    return (
    <div class="container">
        <Link to="/addProjectTask" class="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {BoardContent}
    </div>
    )
  }
}

// what we need for this component to work?
ProjectBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    project_tasks: state.project_task,
})

export default connect(mapStateToProps, {getBacklog}) (ProjectBoard);