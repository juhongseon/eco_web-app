import { SET_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE } from "./types"

export const setFavorite = (favorite)=>dispatch=>{
    dispatch({
        type: SET_FAVORITE,
        payload: favorite
    })
}

export const addFavorite = (imgsrc)=>dispatch=>{
    dispatch({
        type: ADD_FAVORITE,
        payload: imgsrc
    })
}

export const removeFavorite = (imgsrc)=>dispatch=>{
    dispatch({
        type: REMOVE_FAVORITE,
        payload: imgsrc
    })
}