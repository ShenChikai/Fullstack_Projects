import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from 'react-redux';
import { deleteProjectTask } from '../../actions/projectTaskActions';

class ProjectTaskItem extends Component {
    onDeleteClick(pt_id) {
        this.props.deleteProjectTask(pt_id);
    }


  render() {
    const { project_task } = this.props;
    return (
        <div className ="card mb-1 bg-light">

            <div className ="card-header text-primary">
                ID: { project_task.id }
            </div>
            <div className ="card-body bg-light">
                <h5 className ="card-title">
                    { project_task.summary }
                </h5>
                <p className ="card-text text-truncate ">
                    { project_task.acceptanceCriteria }
                </p>
                <Link to={`UpdateProjectTask/${project_task.id}`} className ="btn btn-primary">
                    View / Update
                </Link>

                <button className ="btn btn-danger ml-4" 
                    onClick={this.onDeleteClick.bind(this, project_task.id)}>
                    Delete
                </button>
            </div>
            
        </div>
    )
  }
}

// attach the function to this component
ProjectTaskItem.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired,
}

// don't need this 
//   becuased we can get the pt_id from props which was passed to the item from board component

// const mapStateToProps = state => ({
//     pt_id: state.pt_id,
// })

export default connect(null, {deleteProjectTask}) (ProjectTaskItem)