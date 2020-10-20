import React from 'react'
import { toggleCateSelected } from '../../actions/categoryActions'
import { useDispatch, useSelector } from 'react-redux'

export default function CateSideBtn(props) {
    const dispatch = useDispatch()
    const category = useSelector(state=>state.category)

    return (
        <button
            onClick={()=>{dispatch(toggleCateSelected(props.name))}}
            className={category.selected.includes(props.name) ? "btn" : "btn btn-default"}
            style={{"margin":"5px"}}>
            {category.sideTab=='tag' ? '#'+props.name : props.name}
        </button>
    )
}