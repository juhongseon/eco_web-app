import { SET_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types"

const initialState = {
    favorite: [],
    changed: 0
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SET_FAVORITE:
            return {
                ...state,
                favorite: action.payload,
                changed: state.changed+1
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.concat(action.payload),
                changed: state.changed+1
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter((item)=>item!==action.payload),
                changed: state.changed+1
            }
        default: return state
    }
}