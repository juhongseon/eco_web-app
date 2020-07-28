import axios from 'axios'
import { SERVER_URL } from '../const/const'
import { TOGGLE_CATE_SELECTED } from './types'

export const setCateSideTab = (tabname)=>dispatch=>{
    axios.get(SERVER_URL+'/'+tabname+'_list')
        .then((res)=>{
            dispatch({
                type: setCateSideTab,
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