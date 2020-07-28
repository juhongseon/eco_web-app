import React from 'react'
import { toggleCateSelected } from '../../actions/categoryActions'
import { useDispatch, useSelector } from 'react-redux'

export default function CateSideBtn(props) {
    const dispatch = useDispatch()
    const selected = useSelector(state=>state.category.selected)

    return (
        <button
            onClick={()=>{dispatch(toggleCateSelected(props.name))}}
            className={selected.includes(props.name) ? "btn" : "btn btn-default"}
            style={{"margin":"5px"}}>
            #{props.name}
        </button>
    )
}