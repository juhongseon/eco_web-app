import { SHOW_SUGGEST, HIDE_SUGGEST } from "../actions/types"

const initialState = {
    visible: false
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SHOW_SUGGEST:
            return {
                ...state,
                visible: true
            }
        case HIDE_SUGGEST:
            return {
                ...state,
                visible: false
            }
        default: return state
    }
}