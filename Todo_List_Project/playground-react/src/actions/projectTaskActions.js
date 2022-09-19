import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS } from "./type";

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
        })
        return false;
    }
}

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data,
    })
}