import { SHOW_ADDITIONAL, HIDE_ADDITIONAL } from "./types"

export const showAdditional = ()=>dispatch=>{
    dispatch({
        type: SHOW_ADDITIONAL
    })
}

export const hideAdditional = ()=>dispatch=>{
    dispatch({
        type: HIDE_ADDITIONAL
    })
}