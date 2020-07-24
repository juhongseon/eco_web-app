import { SHOW_SUGGEST, HIDE_SUGGEST } from "./types"

export const showSuggest = ()=>dispatch=>{
    dispatch({
        type: SHOW_SUGGEST
    })
}

export const hideSuggest = ()=>dispatch=>{
    dispatch({
        type: HIDE_SUGGEST
    })
}