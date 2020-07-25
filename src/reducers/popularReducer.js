import { SET_POP_FILTER } from "../actions/types";

const initialState = {
    filter: 'tag'
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SET_POP_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default: return state
    }
}