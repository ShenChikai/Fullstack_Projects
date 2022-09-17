import axios from "axios";

export const addProjectTask = (project_task) => async dispatch => {
    await axios.post("http://localhost:8080/api/board", project_task);
}