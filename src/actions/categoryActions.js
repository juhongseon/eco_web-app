import axios from 'axios'
import { SERVER_URL } from '../const/const'
import { TOGGLE_CATE_SELECTED, SET_CATE_SIDE_SEARCH, SET_CATE_SIDE_TAB } from './types'

export const setCateSideTab = (tabname)=>dispatch=>{
    axios.get(SERVER_URL+'/'+tabname+'_list')
        .then((res)=>{
            dispatch({
                type: SET_CATE_SIDE_TAB,
                payload: {
                    tabname: tabname,
                    list: res.data
                }
            })
        })
}

export const toggleCateSelected = (name)=>dispatch=>{
    dispatch({
        type: TOGGLE_CATE_SELECTED,
        payload: name
    })
}

export const setCateSideSearch = (keyword)=>dispatch=>{
    dispatch({
        type: SET_CATE_SIDE_SEARCH,
        payload: keyword
    })
}