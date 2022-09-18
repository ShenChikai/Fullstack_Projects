import axios from "axios";
import { GET_ERRORS } from "./type";

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