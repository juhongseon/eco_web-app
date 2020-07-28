import { FETCH_NEW_RCMD } from "../actions/types";

const initialState = {
    sample_data: [],
    tags: [],
    authors: []
}

export default function(state=initialState,action) {
    switch(action.type) {
        case FETCH_NEW_RCMD:
            return {
                ...state,
                sample_data: action.payload.concat(action.payload)
                .concat(action.payload).concat(action.payload)
            }
        default: return state
    }
}