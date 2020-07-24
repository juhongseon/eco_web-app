import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setHomeFilter2 } from "../../actions/homeActions"
import { toKor } from "../../const/const"

export default function HomeFilter() {
    const dispatch = useDispatch()
    const home = useSelector(state=>state.home)
    const filter1 = home.filter1
    const filter2 = home.filter2
    const keyword = home.keyword
    const display = keyword==='' ? '추천' : toKor(filter1)+' : '+keyword

    return(
        <div id="home-filter" className="container-fluid">
            {/* <div id="home-optgrp1" className="col-xs-7">
                <button onClick={(e)=>{dispatch(setHomeFilter1('author'))}} type="button" className={filter1==='author' ? "btn" : "btn btn-default"}>작가</button>
                <button onClick={()=>{dispatch(setHomeFilter1('title'))}} type="button" className={filter1==='title' ? "btn" : "btn btn-default"}>타이틀</button>
                <button onClick={()=>{dispatch(setHomeFilter1('hashtag'))}} type="button" className={filter1==='hashtag' ? "btn" : "btn btn-default"}>태그</button>
            </div> */}
            <div id="home-search-display" className="col-xs-7">{display}</div>
            <div id="home-optgrp2" className="col-xs-5">
            <button onClick={()=>{dispatch(setHomeFilter2('favorite'))}} type="button" className={filter2==='favorite' ? "btn" : "btn btn-default"}>인기순</button>
            <button onClick={()=>{dispatch(setHomeFilter2('recent'))}} type="button" className={filter2==='recent' ? "btn" : "btn btn-default"}>최신순</button>
            </div>
        </div>
    )
}