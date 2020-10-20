import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCateSideTab, setCateSideSearch } from '../../actions/categoryActions'
import CateSideBtn from './CateSideBtn'
import { sepKor } from '../../const/const'

export default function CateSide() {
    const dispatch = useDispatch()
    const category = useSelector(state=>state.category)
    const sideTab = category.sideTab
    const sideList = category.sideList
    const keyword = category.sideSearch

    const matchedList = sideList.filter(item=>sepKor(item.name).includes(sepKor(keyword)))

    useEffect(()=>{
        dispatch(setCateSideTab('tag'))
    },[])

    const html = matchedList.map(m=><CateSideBtn name={m.name}/>)

    return (
        <div id="cate-side" className="col-xs-2">
            <div id="cate-side-tab" className="row text-center">
                <button onClick={()=>{dispatch(setCateSideTab('tag'))}} className={sideTab==='tag' ? 'btn' : 'btn btn-default'}>태그</button>
                <button onClick={()=>{dispatch(setCateSideTab('author'))}} className={sideTab==='author' ? 'btn' : 'btn btn-default'}>작가</button>
            </div>
            <div id="cate-side-search" className="row" style={{"marginTop":"5px"}}>
                <input 
                    className="col-xs-offset-1 col-xs-10" type="text" placeholder="검색"
                    onChange={(e)=>{dispatch(setCateSideSearch(e.target.value))}} value={keyword}
                />
            </div>
            <div id="cate-list" className="row">
                {html}
            </div>
        </div>
    )
}