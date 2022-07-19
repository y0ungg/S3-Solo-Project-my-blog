import { ADD_COMMENT } from "../actions";
import { initialState } from "./initialState";

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}
        default:
            return state;
    }
}
export default commentReducer;