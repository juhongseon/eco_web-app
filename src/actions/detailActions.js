import axios from 'axios'
import { SERVER_URL } from '../const/const'
import { FETCH_DETAIL_EMOTICON } from './types'

export const fetchDetailEmoticon = (title)=>dispatch=>{
    axios.get(SERVER_URL+'/detail_emoticon',{
        params: {
            title: title
        }
    }).then((res)=>{
        dispatch({
            type: FETCH_DETAIL_EMOTICON,
            payload: res.data
        })
    })
}