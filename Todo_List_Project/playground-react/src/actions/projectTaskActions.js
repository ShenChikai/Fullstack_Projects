import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS, GET_PROJECT_TASK, DELETE_PROJECT_TASK } from "./type";

export const addProjectTask = (project_task) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/board", project_task);
        // clear error obj if everything goes well
        dispatch({
            type:GET_ERRORS,
            payload: {},
        })
        return true;
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data,
        });
        console.log(error.response.data);
        return false;
    }
}

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data,
    });
}

export const deleteProjectTask = (pt_id) => async dispatch => {
    // confirm window
    if (
        window.confirm(`You are deleting project task ${pt_id}!`)
    ) {
        await axios.delete(`http://localhost:8080/api/board/${pt_id}`);
        dispatch({
            type: DELETE_PROJECT_TASK,
            payload: pt_id,
        });
    };
    
}

export const getProjectTask = (pt_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/board/${pt_id}`);
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data,
        });
    } catch (error) {
        history.push("/");
    }
}