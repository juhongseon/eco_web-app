import React, { useEffect, useState } from 'react'
import Tile from './Tile'
import { NavLink } from 'react-router-dom'
import { getRankColor, SERVER_URL } from '../../const/const'
import Axios from 'axios'

export default function TilesforTag(props) {
    const name = props.name
    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await Axios(SERVER_URL+'/search_by_tag?name='+name)
            setData(result.data)
        }
        fetchData()
    },[name])

    return (
        <div className="row tiles-for-tag">
            <div className="col-xs-3">
                <span style={{"position":"absolute","left":"0px","top":"-10px","backgroundColor":getRankColor(props.rank),"borderRadius":"4px"}}>
                    {props.rank && <h4>&nbsp;&nbsp;{props.rank}&nbsp;&nbsp;</h4>}
                </span>
                <h3 style={{"margin":"80px 10px"}}><NavLink to={'/Tag/'+'tag'} style={{"color":"black"}}>#{name}</NavLink></h3>
            </div>
            <div className="col-xs-8">
                {data.slice(0,4).map(m=><Tile title={m.title} author={m.author} files={m.files}/>)}
            </div>
            <div className="col-xs-1 tiles-more">
                &gt;
            </div>
        </div>
    )
}