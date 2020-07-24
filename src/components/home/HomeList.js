import React, { useState, useEffect } from "react"
import Tile from "../commons/Tile"
import { useSelector, useDispatch } from "react-redux"
import { fetchNextPage } from "../../actions/homeActions"

export default function HomeList() {
    const dispatch = useDispatch()
    const home = useSelector(state=>state.home)
    const filter1 = home.filter1
    const filter2 = home.filter2
    const currpage = home.currpage
    
    const [gap,setGap] = useState(100)

    useEffect(()=>{

    },[])

    setInterval(() => {
        setGap(document.body.scrollHeight-window.scrollY)
    }, 100);

    useEffect(()=>{
        if(gap<800) {
            dispatch(fetchNextPage(filter1,filter2,currpage))
        }
    },[gap])

    const html = home.list.map(m=><Tile
        author={m.author}
        title={m.title}
        files={m.files}
    />)

    return(
        <div id="home-list" className="container-fluid">
            <div className="row" style={{"padding":"4px"}}>
                {html}
            </div>
        </div>
    )
}