import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addKeyword } from '../../actions/homeActions'
import { hideSuggest } from '../../actions/suggestActions'

export default function SuggestItem(props) {
    const dispatch = useDispatch()
    const [backgroundColor,setBackgroundColor] = useState('white')
    const style = {
        border: 'none',
        backgroundColor: backgroundColor
    }
    const keyword = props.keyword

    return (
        <input style={style} type="button" value={keyword.length>15 ? keyword.substring(0,12)+'...' : keyword}
            onMouseOver={(e)=>{setBackgroundColor('rgb(239,239,239)')}}
            onMouseOut={(e)=>{setBackgroundColor('white')}}
            onClick={()=>{dispatch(addKeyword(keyword));dispatch(hideSuggest())}}
        />
    )
}