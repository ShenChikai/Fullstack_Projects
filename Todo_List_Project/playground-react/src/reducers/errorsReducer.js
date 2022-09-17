import { GET_ERRORS } from "../actions/type";

const initialState = {error: "initial no err"};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
            
        default:
            return state;
    }
}

