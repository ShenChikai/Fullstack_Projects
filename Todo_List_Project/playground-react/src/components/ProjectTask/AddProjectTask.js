import React, { Component } from 'react'
import { Link } from "react-router-dom"
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addProjectTask } from '../../actions/projectTaskActions';
import { Navigate } from "react-router-dom";

class AddProjectTask extends Component {
    // constructor
    constructor() {
        super()
        // set state to save the values
        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: "",
            sumbitted: false,
            errors: {},
        };
        // pass event handler to components using "bind"
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // load errors from props to state if changed
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.errors!==this.props.errors){
            this.setState({errors: this.props.errors});
        }
    }

    // onChange event function
    onChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    // onSubmit event function
    async onSubmit(e) {
        // prevent page refresh
        e.preventDefault();
        // create the newProjectTask Project
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        }
        // save in db
        let checker = await this.props.addProjectTask(newProjectTask);
        // navigate back to home 
        // (Update: I don't think this is an optimal solution to navigate using Navigate component, 
        //      but this is the simplist solution I have for now)
        //this.props.navigation.navigate('/')
        this.setState({sumbitted: checker});
    }

  render() {
    let sumbitted = this.state.sumbitted;   // defined the submitted checker here in render
    const { errors } = this.state;
    return (
        <div className="addProjectTask">
            { 
                // navigate back to home when sumbitted 
                sumbitted && (<Navigate to="/" replace={true} /> )
            }

            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/" className="btn btn-light">
                            Back to Board
                        </Link>
                        <h4 className="display-4 text-center">Add Project Task</h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.summary
                                    })}
                                    name="summary" 
                                    placeholder="Project Task summary" 
                                    value = {this.state.summary}
                                    onChange = {this.onChange}
                                />
                                {errors.summary && (
                                    <div className='invalid-feedback'> {errors.summary} </div>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea 
                                    className="form-control form-control-lg" 
                                    placeholder="Acceptance Criteria" 
                                    name="acceptanceCriteria"
                                    value = {this.state.acceptanceCriteria}
                                    onChange = {this.onChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <select 
                                    className="form-control form-control-lg" 
                                    name="status"
                                    value = {this.state.status}
                                    onChange = {this.onChange}
                                >
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

// what we need for this component to work?
AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

// map things in state to props
const mapStateToProps = state => ({
    errors: state.errors,
})

export default connect(mapStateToProps, {addProjectTask}) (AddProjectTask);