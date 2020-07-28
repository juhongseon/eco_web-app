import { FETCH_DETAIL_EMOTICON } from "../actions/types";

const initialState = {
    emoticon: {}
}

export default function(state=initialState,action) {
    switch(action.type) {
        case FETCH_DETAIL_EMOTICON:
            return {
                ...state,
                emoticon: action.payload
            }
        default: return state
    }
}