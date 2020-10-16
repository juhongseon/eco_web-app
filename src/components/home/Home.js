import React, { useEffect } from "react"
import "../../css/Home.css"
import TilesforAuthor from "../commons/TilesforAuthor"
import TilesforTag from "../commons/TilesforTag"
import { useDispatch, useSelector } from "react-redux"
import { fetchNewRcmd } from "../../actions/homeActions"

export default function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchNewRcmd())
    },[])

    const home = useSelector(state=>state.home)
    const tags = home.rcmdTags

    const html_tag = tags.map((m,idx)=><TilesforTag name={m.name}/>)
    //const html_author = sample.slice(0,5).map((m,idx)=><TilesforAuthor name={sample[idx].author} idx={idx} data={sample}/>)

    return (
        <div id="home-container" className="container">
            <div className="row">
                <button onClick={()=>{dispatch(fetchNewRcmd())}} className="btn btn-default">추천 다시 받기</button>
            </div>
            <div className="row">
                {html_tag}
            </div>
            {/* <div className="row">
                {html_author}
            </div> */}
        </div>
    )
}