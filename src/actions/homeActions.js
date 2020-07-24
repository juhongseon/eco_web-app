import axios from 'axios'
import { SET_HOME_FILTER1, SET_HOME_FILTER2, FETCH_NEXT_PAGE, SET_KEYWORD, ADD_KEYWORD } from "./types"
import { SERVER_URL } from "../const/const"

export const setHomeFilter1 = (type)=>dispatch=>{
    dispatch({
        type: SET_HOME_FILTER1,
        payload: type
    })
}

export const setHomeFilter2 = (order)=>dispatch=>{
    dispatch({
        type: SET_HOME_FILTER2,
        payload: order
    })
}

export const setKeyword = (keyword)=>dispatch=>{
    dispatch({
        type: SET_KEYWORD,
        payload: keyword
    })
}

export const addKeyword = (keyword)=>dispatch=>{
    dispatch({
        type: ADD_KEYWORD,
        payload: keyword
    })
}

export const fetchNextPage = (filter1,filter2,currpage)=>dispatch=>{
    axios.get(SERVER_URL+'/home',{
        params: {
            filter1: filter1,
            filter2: filter2,
            page: currpage+1
        }
    }).then((res)=>{
        dispatch({
            type: FETCH_NEXT_PAGE,
            payload: res.data
        })
    })
}