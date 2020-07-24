import { SHOW_MODAL, HIDE_MODAL, SET_IMGSRC } from "../actions/types"

const initialState = {
    visible: false,
    imgsrc: '',
    changed: 0,
    title: '',
    author: '',
    files: []
}

export default function(state=initialState,action) {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                title: action.payload.title,
                author: action.payload.author,
                files: action.payload.files,
                visible: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                visible: false
            }
        case SET_IMGSRC:
            return {
                ...state,
                imgsrc: action.payload,
                changed: state.changed+1
            }
        default: return state
    }
}