import { createStore, applyMiddleware, compose} from "redux";
import thunk from "thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

// https://redux-toolkit.js.org/api/configureStore
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store;

