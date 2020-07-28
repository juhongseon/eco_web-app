import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCateSideTab } from '../../actions/categoryActions'
import CateSideBtn from './CateSideBtn'

export default function CateSide() {
    const dispatch = useDispatch()
    const category = useSelector(state=>state.category)
    const sideTab = category.sideTab

    useEffect(()=>{
        dispatch(setCateSideTab('tag'))
    },[])

    const html = category.sideList.map(m=><CateSideBtn name={m.name}/>)

    return (
        <div id="cate-side" className="col-xs-2">
            <div id="cate-side-tab" className="row text-center">
                <button onClick={()=>{dispatch(setCateSideTab('tag'))}} className={sideTab==='tag' ? 'btn' : 'btn btn-default'}>태그</button>
                <button className={sideTab==='author' ? 'btn' : 'btn btn-default'}>작가</button>
            </div>
            <div id="cate-list" className="row">
                {html}
            </div>
        </div>
    )
}