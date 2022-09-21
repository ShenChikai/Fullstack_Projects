import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";

export default combineReducers ({
    // all the reducers
    errors: errorsReducer,
    project_task: projectTaskReducer,
})