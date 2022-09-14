import React, { Component } from 'react'

export default class ProjectTaskItem extends Component {
  render() {
    return (
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
    )
  }
}
