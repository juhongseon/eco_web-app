import React from "react"
import "../../css/My.css"
import { useSelector } from "react-redux"
import Emo from "../commons/Emo"

export default function My() {
    const my = useSelector(state=>state.my)
    const favArr = my.favorite

    const html = favArr.map(m=><Emo imgsrc={m}/>)

    return (
        <div id="my-container">
            {html}
        </div>
    )
}