import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";

export default combineReducers ({
    // all the reducers
    errors: errorsReducer,
})