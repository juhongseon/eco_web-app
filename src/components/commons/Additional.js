import React from 'react'
import '../../css/Additional.css'
import Filter from './Filter'
import { useSelector, useDispatch } from 'react-redux'
import { hideAdditional } from '../../actions/additionalActions'

export default function Additional() {
    const dispatch = useDispatch()
    const additional = useSelector(state=>state.additional)
    const style = {
        display: additional.visible ? 'block' : 'none'
    }

    return (
        <div id="additional" style={style}>
            <div onClick={()=>{dispatch(hideAdditional())}} id="additional-background"></div>
            <div id="additional-popup" className="text-center">
                <Filter/>
            </div>
        </div>
    )
}