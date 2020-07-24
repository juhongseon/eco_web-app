import { HIDE_MODAL, SHOW_MODAL, SET_IMGSRC } from "./types";

export const showModal = (title,author,files)=>dispatch=>{
    dispatch({
        type: SHOW_MODAL,
        payload: {
            title: title,
            author: author,
            files: files
        }
    })
}

export const hideModal = ()=>dispatch=>{
    dispatch({
        type: HIDE_MODAL
    })
}

export const setImgsrc = (imgsrc)=>dispatch=>{
    dispatch({
        type: SET_IMGSRC,
        payload: imgsrc
    })
}