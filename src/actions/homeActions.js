import axios from 'axios'
import { FETCH_NEW_RCMD } from "./types"
import { SERVER_URL } from "../const/const"

export const fetchNewRcmd = ()=>dispatch=>{
    axios.get(SERVER_URL+'/rcmd_tags',{}).then((res)=>{
        dispatch({
            type: FETCH_NEW_RCMD,
            payload: res.data
        })
    })
}