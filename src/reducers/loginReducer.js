import { SHOW_LOGIN, HIDE_LOGIN } from "../actions/types";

const initialState = {
    visible: true
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SHOW_LOGIN:
            return {
                ...state,
                visible: true
            }
        case HIDE_LOGIN:
            return {
                ...state,
                visible: false
            }
        default: return state
    }
}