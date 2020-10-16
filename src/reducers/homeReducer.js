import { FETCH_NEW_RCMD } from "../actions/types";

const initialState = {
    rcmdTags: []
}

export default function(state=initialState,action) {
    switch(action.type) {
        case FETCH_NEW_RCMD:
            return {
                ...state,
                rcmdTags: action.payload
            }
        default: return state
    }
}