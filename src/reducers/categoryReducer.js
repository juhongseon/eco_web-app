import { TOGGLE_CATE_SELECTED, SET_CATE_SIDE_TAB, SET_CATE_SIDE_SEARCH } from "../actions/types";

const initialState = {
    sideTab: 'tag',
    sideList: [],
    selected: [],
    sideSearch: ''
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SET_CATE_SIDE_TAB:
            return {
                ...state,
                sideTab: action.payload.tabname,
                sideList: action.payload.list
            }
        case TOGGLE_CATE_SELECTED:
            if(state.selected.includes(action.payload))
                return {
                    ...state,
                    selected: state.selected.filter(item=>item!==action.payload)
                }
            else
                return {
                    ...state,
                    selected: state.selected.concat(action.payload)
                }
        case SET_CATE_SIDE_SEARCH:
            return {
                ...state,
                sideSearch: action.payload
            }
        default: return state
    }
}