import { setCateSideTab } from "../actions/categoryActions";
import { TOGGLE_CATE_SELECTED } from "../actions/types";

const initialState = {
    sideTab: 'tag',
    sideList: [],
    selected: []
}

export default function(state=initialState,action) {
    switch(action.type) {
        case setCateSideTab:
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
        default: return state
    }
}