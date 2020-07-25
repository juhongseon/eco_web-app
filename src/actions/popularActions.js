import { SET_POP_FILTER } from "./types"

export const setPopFilter = (filter)=>dispatch=>{
    dispatch({
        type: SET_POP_FILTER,
        payload: filter
    })
}