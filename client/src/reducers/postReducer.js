import { ADD_POST, EDIT_POST, DELETE_POST } from "../actions";
import { initialState } from "./initialState";

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {...state, post: [...state.post, action.payload]}
        case EDIT_POST:
            let notEdited = state.post.filter((el) => el.id !== action.payload.id)
            return {...state, post: [...notEdited, action.payload]}
        case DELETE_POST:
            let filtered = state.post.filter((el, id)=> id === action.payload.id)
            return {...state, post : filtered};
        default:
            return state;
    }
}

export default postReducer;