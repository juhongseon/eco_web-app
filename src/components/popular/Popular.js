import React from 'react'
import '../../css/Popular.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPopFilter } from '../../actions/popularActions'
import PopList from './PopList'

export default function Popular() {
    const dispatch = useDispatch()
    const popular = useSelector(state=>state.popular)
    const filter = popular.filter

    return (
        <div id="popular-container" className="container">
            <div className="row">
                <button onClick={()=>{dispatch(setPopFilter('tag'))}} type="button" className={filter==='tag' ? "btn" : "btn btn-default"}>태그</button>
                <button onClick={()=>{dispatch(setPopFilter('author'))}} type="button" className={filter==='author' ? "btn" : "btn btn-default"}>작가</button>
                <button onClick={()=>{dispatch(setPopFilter('title'))}} type="button" className={filter==='title' ? "btn" : "btn btn-default"}>타이틀</button>
            </div>
            <PopList/>
        </div>
    )
}