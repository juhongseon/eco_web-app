import { SHOW_ADDITIONAL, HIDE_ADDITIONAL } from "../actions/types"

const intialState = {
    visible: false
}

export default function(state=intialState,action) {
    switch(action.type) {
        case SHOW_ADDITIONAL:
            return {
                ...state,
                visible: true
            }
        case HIDE_ADDITIONAL:
            return {
                ...state,
                visible: false
            }
        default: return state
    }
}