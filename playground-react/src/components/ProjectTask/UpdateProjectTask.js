import React, { Component } from 'react';
import { Link, useParams, Navigate  } from "react-router-dom"
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getProjectTask, addProjectTask } from '../../actions/projectTaskActions';

// Wrapper the class component UpdateProjectTask with useParams()
//   as it is not accessable in class
// in react-router-dom v6: useNavigate, useParams, useLocation
const withParams = (UpdateProjectTask) => (props) => {
    const params = useParams();

    return <UpdateProjectTask {...props} params={params} />;
}

class UpdateProjectTask extends Component {
    // constructor
    constructor() {
        super();
        this.state = {
            id: "",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            errors: {},
            sumbitted: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // create the target id varirable from params(route) when this component mounted
    async componentDidMount() {
        const { pt_id } = this.props.params;
        await this.props.getProjectTask(pt_id); // wait for the props to load first

        // initialize state with what we got
        const { id, summary, acceptanceCriteria, status } = this.props.project_task;

        this.setState({
            id,
            summary,
            acceptanceCriteria,
            status
        });
    }

    // set state on change 
    onChange (e) {
        this.setState({[e.target.name] : e.target.value});
    }

    // load errors from props to state if changed
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.errors!==this.props.errors){
            this.setState({errors: this.props.errors});
        }
    }

    // submit event
    async onSubmit(e) {
        // prevent page refresh
        e.preventDefault();
        // create update task
        const updatedTask = {
            id: this.state.id,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
        };
        console.log('submitting')
        // see add project
        let checker = await this.props.addProjectTask(updatedTask);
        this.setState({sumbitted: checker});
    }

  render() {
    let sumbitted = this.state.sumbitted;   // defined the submitted checker here in render
    const { errors } = this.state;
    return (
        <div className="updateProjectTask">

            { 
                // navigate back to home when sumbitted 
                sumbitted && (<Navigate to="/" replace={true} /> )
            }

            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to={"/"} className="btn btn-light">
                            Back to Board
                        </Link>
                        <h4 className="display-4 text-center">Update Project Task</h4>
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

UpdateProjectTask.propTypes = {
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getProjectTask: PropTypes.func.isRequired,
    addProjectTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    project_task: state.project_task.project_task,
    errors: state.errors,
});

export default connect(mapStateToProps, {getProjectTask, addProjectTask}) (withParams(UpdateProjectTask));